import axios from 'axios';
import { Business, BusinessSchema } from '@netia/shared';

export class GooglePlacesService {
  private apiKey: string;
  private baseUrl = 'https://maps.googleapis.com/maps/api/place';

  constructor(apiKey?: string) {
    this.apiKey = apiKey || '';
  }

  async searchPlaces(query: string, location: string, maxResults: number = 20): Promise<Business[]> {
    if (!this.apiKey) {
      console.warn('⚠️  Google Places API key not provided, returning mock data');
      return this.getMockData(query, location, maxResults);
    }

    try {
      // Text search for places
      const searchResponse = await axios.get(`${this.baseUrl}/textsearch/json`, {
        params: {
          query: `${query} ${location}`,
          key: this.apiKey,
          type: 'beauty_salon',
        },
      });

      if (searchResponse.data.status !== 'OK') {
        throw new Error(`Google Places API error: ${searchResponse.data.status}`);
      }

      const places = searchResponse.data.results.slice(0, maxResults);
      const businesses: Business[] = [];

      for (const place of places) {
        try {
          const business = await this.enrichPlaceDetails(place);
          businesses.push(business);
        } catch (error) {
          console.warn(`⚠️  Failed to enrich place ${place.place_id}:`, error);
        }
      }

      return businesses;
    } catch (error) {
      console.error('❌ Google Places API error:', error);
      return this.getMockData(query, location, maxResults);
    }
  }

  private async enrichPlaceDetails(place: any): Promise<Business> {
    try {
      // Get detailed information
      const detailsResponse = await axios.get(`${this.baseUrl}/details/json`, {
        params: {
          place_id: place.place_id,
          key: this.apiKey,
          fields: 'name,formatted_address,formatted_phone_number,website,rating,user_ratings_total,opening_hours,types',
        },
      });

      const details = detailsResponse.data.result;
      
      // Extract city and state from address
      const addressParts = details.formatted_address?.split(',') || [];
      const city = addressParts[addressParts.length - 3]?.trim() || '';
      const state = addressParts[addressParts.length - 2]?.trim() || '';

      // Determine services from types and name
      const services = this.extractServices(details.name, details.types || []);

      const business: Business = {
        id: place.place_id,
        name: details.name || place.name,
        website: details.website,
        phone: details.formatted_phone_number,
        city,
        state,
        gmbRating: details.rating,
        gmbReviews: details.user_ratings_total,
        hasLiveChat: false, // Will be determined by website scraping
        runsAds: false, // Will be determined by website scraping
        services,
        notes: [],
        score: 0,
        hours: details.opening_hours?.weekday_text?.join('; ') || '',
        address: details.formatted_address,
        placeId: place.place_id,
      };

      return BusinessSchema.parse(business);
    } catch (error) {
      console.warn(`⚠️  Failed to get details for ${place.place_id}:`, error);
      throw error;
    }
  }

  private extractServices(name: string, types: string[]): string[] {
    const services: string[] = [];
    const nameLower = name.toLowerCase();
    const typesLower = types.map(t => t.toLowerCase());

    // Botox and injectables
    if (nameLower.includes('botox') || nameLower.includes('injectable')) {
      services.push('Botox');
    }
    if (nameLower.includes('filler') || nameLower.includes('dermal')) {
      services.push('Dermal Fillers');
    }

    // Laser treatments
    if (nameLower.includes('laser') || nameLower.includes('ipl')) {
      services.push('Laser Treatments');
    }
    if (nameLower.includes('hair removal') || nameLower.includes('laser hair')) {
      services.push('Laser Hair Removal');
    }

    // Skin treatments
    if (nameLower.includes('microneedling') || nameLower.includes('microneedle')) {
      services.push('Microneedling');
    }
    if (nameLower.includes('chemical peel') || nameLower.includes('peel')) {
      services.push('Chemical Peels');
    }
    if (nameLower.includes('facial') || nameLower.includes('hydrafacial')) {
      services.push('Facials');
    }

    // Body treatments
    if (nameLower.includes('coolsculpting') || nameLower.includes('coolsculpt')) {
      services.push('CoolSculpting');
    }
    if (nameLower.includes('body contouring') || nameLower.includes('contouring')) {
      services.push('Body Contouring');
    }

    // If no specific services found, add generic ones
    if (services.length === 0) {
      services.push('Aesthetic Services', 'Med Spa Services');
    }

    return services;
  }

  private getMockData(query: string, location: string, maxResults: number): Business[] {
    console.log(`📝 Using mock data for "${query}" in ${location}`);
    
    const mockBusinesses: Business[] = [
      {
        id: 'mock-1',
        name: `${query} Clinic - ${location}`,
        website: `https://example-${query.toLowerCase().replace(/\s+/g, '-')}.com`,
        phone: '(555) 123-4567',
        city: location,
        state: 'CA',
        gmbRating: 4.5,
        gmbReviews: 127,
        hasLiveChat: false,
        runsAds: true,
        services: ['Botox', 'Dermal Fillers', 'Laser Treatments'],
        notes: ['Mock data - no API key provided'],
        score: 0,
        hours: 'Monday-Friday: 9AM-6PM; Saturday: 9AM-4PM; Sunday: Closed',
        address: `123 Main St, ${location}, CA 90210`,
        placeId: 'mock-place-1',
      },
      {
        id: 'mock-2',
        name: `Elite ${query} Center`,
        website: `https://elite-${query.toLowerCase().replace(/\s+/g, '-')}.com`,
        phone: '(555) 987-6543',
        city: location,
        state: 'CA',
        gmbRating: 4.8,
        gmbReviews: 89,
        hasLiveChat: true,
        runsAds: false,
        services: ['Botox', 'CoolSculpting', 'Microneedling'],
        notes: ['Mock data - no API key provided'],
        score: 0,
        hours: 'Monday-Friday: 8AM-7PM; Saturday: 9AM-5PM; Sunday: 10AM-4PM',
        address: `456 Oak Ave, ${location}, CA 90210`,
        placeId: 'mock-place-2',
      },
    ];

    return mockBusinesses.slice(0, maxResults);
  }
}

