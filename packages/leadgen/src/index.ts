import dotenv from 'dotenv';
import { createObjectCsvWriter } from 'csv-writer';
import pLimit from 'p-limit';
import { Business, BusinessSchema, EnvSchema, LeadCSV } from '@netia/shared';
import { GooglePlacesService } from './services/google-places';
import { WebsiteScraper } from './services/website-scraper';
import { calculateBusinessScore } from '@netia/shared';

dotenv.config();

const env = EnvSchema.parse(process.env);

interface LeadgenConfig {
  cities: string[];
  queryTerms: string[];
  maxResults: number;
  concurrency: number;
}

const config: LeadgenConfig = {
  cities: ['Los Angeles', 'New York', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
  queryTerms: ['med spa', 'botox', 'aesthetics clinic', 'cosmetic clinic', 'laser clinic'],
  maxResults: 100,
  concurrency: 5,
};

class LeadgenService {
  private placesService: GooglePlacesService;
  private scraper: WebsiteScraper;
  private limit: ReturnType<typeof pLimit>;

  constructor() {
    this.placesService = new GooglePlacesService(env.GOOGLE_PLACES_API_KEY);
    this.scraper = new WebsiteScraper();
    this.limit = pLimit(config.concurrency);
  }

  async run(): Promise<void> {
    console.log('🚀 Starting lead generation...');
    console.log(`📍 Cities: ${config.cities.join(', ')}`);
    console.log(`🔍 Query terms: ${config.queryTerms.join(', ')}`);

    const allBusinesses: Business[] = [];

    // Process each city and query term combination
    for (const city of config.cities) {
      for (const query of config.queryTerms) {
        console.log(`\n🔍 Searching for "${query}" in ${city}...`);
        
        try {
          const businesses = await this.limit(() => 
            this.placesService.searchPlaces(query, city, 20)
          );
          
          console.log(`✅ Found ${businesses.length} businesses for "${query}" in ${city}`);
          allBusinesses.push(...businesses);
        } catch (error) {
          console.error(`❌ Error searching "${query}" in ${city}:`, error);
        }
      }
    }

    // Remove duplicates based on place_id
    const uniqueBusinesses = this.deduplicateBusinesses(allBusinesses);
    console.log(`\n📊 Total unique businesses found: ${uniqueBusinesses.length}`);

    // Enrich and score businesses
    console.log('\n🔍 Enriching business data...');
    const enrichedBusinesses = await this.enrichBusinesses(uniqueBusinesses);

    // Score businesses
    console.log('\n📈 Scoring businesses...');
    const scoredBusinesses = enrichedBusinesses.map(business => ({
      ...business,
      score: calculateBusinessScore(business),
    }));

    // Sort by score (highest first)
    scoredBusinesses.sort((a, b) => b.score - a.score);

    // Write to CSV
    await this.writeCSV(scoredBusinesses);

    console.log('\n✅ Lead generation complete!');
    console.log(`📄 Results written to: leads-${new Date().toISOString().split('T')[0]}.csv`);
  }

  private deduplicateBusinesses(businesses: Business[]): Business[] {
    const seen = new Set<string>();
    return businesses.filter(business => {
      if (business.placeId && seen.has(business.placeId)) {
        return false;
      }
      if (business.placeId) {
        seen.add(business.placeId);
      }
      return true;
    });
  }

  private async enrichBusinesses(businesses: Business[]): Promise<Business[]> {
    const enriched = await Promise.all(
      businesses.map(business => 
        this.limit(() => this.enrichBusiness(business))
      )
    );
    return enriched;
  }

  private async enrichBusiness(business: Business): Promise<Business> {
    try {
      // Enrich with website data if available
      if (business.website) {
        const websiteData = await this.scraper.scrapeWebsite(business.website);
        
        return {
          ...business,
          email: websiteData.email || business.email,
          hasLiveChat: websiteData.hasLiveChat,
          runsAds: websiteData.runsAds,
          services: websiteData.services.length > 0 ? websiteData.services : business.services,
          notes: [...business.notes, ...websiteData.notes],
        };
      }

      return business;
    } catch (error) {
      console.warn(`⚠️  Failed to enrich ${business.name}:`, error);
      return business;
    }
  }

  private async writeCSV(businesses: Business[]): Promise<void> {
    const csvWriter = createObjectCsvWriter({
      path: `leads-${new Date().toISOString().split('T')[0]}.csv`,
      header: [
        { id: 'name', title: 'name' },
        { id: 'company_domain', title: 'company_domain' },
        { id: 'email', title: 'email' },
        { id: 'phone', title: 'phone' },
        { id: 'city', title: 'city' },
        { id: 'state', title: 'state' },
        { id: 'gmb_rating', title: 'gmb_rating' },
        { id: 'gmb_reviews', title: 'gmb_reviews' },
        { id: 'has_live_chat', title: 'has_live_chat' },
        { id: 'runs_ads', title: 'runs_ads' },
        { id: 'services', title: 'services' },
        { id: 'score', title: 'score' },
      ],
    });

    const csvData: LeadCSV[] = businesses.map(business => ({
      name: business.name,
      company_domain: business.website ? this.extractDomain(business.website) : '',
      email: business.email || '',
      phone: business.phone || '',
      city: business.city,
      state: business.state,
      gmb_rating: business.gmbRating,
      gmb_reviews: business.gmbReviews,
      has_live_chat: business.hasLiveChat,
      runs_ads: business.runsAds,
      services: JSON.stringify(business.services),
      score: business.score,
    }));

    await csvWriter.writeRecords(csvData);
  }

  private extractDomain(website: string): string {
    try {
      const url = new URL(website.startsWith('http') ? website : `https://${website}`);
      return url.hostname.replace('www.', '');
    } catch {
      return website.replace(/^https?:\/\//, '').replace(/^www\./, '');
    }
  }
}

// Main execution
async function main() {
  try {
    const leadgenService = new LeadgenService();
    await leadgenService.run();
  } catch (error) {
    console.error('❌ Lead generation failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
