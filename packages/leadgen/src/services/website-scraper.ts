import axios from 'axios';
import * as cheerio from 'cheerio';

export interface WebsiteData {
  email?: string;
  hasLiveChat: boolean;
  runsAds: boolean;
  services: string[];
  notes: string[];
}

export class WebsiteScraper {
  private timeout = 10000; // 10 seconds
  private userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';

  async scrapeWebsite(url: string): Promise<WebsiteData> {
    try {
      const response = await axios.get(url, {
        timeout: this.timeout,
        headers: {
          'User-Agent': this.userAgent,
        },
        maxRedirects: 5,
      });

      const $ = cheerio.load(response.data);
      
      return {
        email: this.extractEmail($),
        hasLiveChat: this.detectLiveChat($),
        runsAds: this.detectAds($, response.data),
        services: this.extractServices($),
        notes: this.extractNotes($),
      };
    } catch (error) {
      console.warn(`⚠️  Failed to scrape ${url}:`, error);
      return {
        hasLiveChat: false,
        runsAds: false,
        services: [],
        notes: [`Scraping failed: ${error}`],
      };
    }
  }

  private extractEmail($: cheerio.CheerioAPI): string | undefined {
    // Look for email in various formats
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const text = $.text();
    const emails = text.match(emailRegex);
    
    if (emails && emails.length > 0) {
      // Filter out common non-business emails
      const businessEmails = emails.filter(email => 
        !email.includes('noreply') && 
        !email.includes('no-reply') &&
        !email.includes('example.com') &&
        !email.includes('test.com')
      );
      
      return businessEmails[0];
    }

    return undefined;
  }

  private detectLiveChat($: cheerio.CheerioAPI): boolean {
    // Check for common live chat indicators
    const chatIndicators = [
      'livechat',
      'live chat',
      'chat widget',
      'intercom',
      'zendesk chat',
      'tawk.to',
      'crisp',
      'drift',
      'olark',
      'chatbot',
      'chat bot',
      'online chat',
      'instant chat',
    ];

    const html = $.html().toLowerCase();
    
    // Check for chat-related classes, IDs, or text
    for (const indicator of chatIndicators) {
      if (html.includes(indicator)) {
        return true;
      }
    }

    // Check for common chat widget selectors
    const chatSelectors = [
      '[class*="chat"]',
      '[id*="chat"]',
      '[class*="livechat"]',
      '[id*="livechat"]',
      '[class*="intercom"]',
      '[id*="intercom"]',
    ];

    for (const selector of chatSelectors) {
      if ($(selector).length > 0) {
        return true;
      }
    }

    return false;
  }

  private detectAds($: cheerio.CheerioAPI, html: string): boolean {
    // Check for Google Ads indicators
    const adIndicators = [
      'googleads',
      'google-ads',
      'googlesyndication',
      'doubleclick',
      'adsense',
      'gclid',
      'utm_source=google',
      'utm_medium=cpc',
      'facebook.com/tr',
      'facebook pixel',
      'fbq(',
    ];

    const htmlLower = html.toLowerCase();
    
    for (const indicator of adIndicators) {
      if (htmlLower.includes(indicator)) {
        return true;
      }
    }

    // Check for UTM parameters in meta tags or scripts
    if (htmlLower.includes('utm_') || htmlLower.includes('gclid=')) {
      return true;
    }

    return false;
  }

  private extractServices($: cheerio.CheerioAPI): string[] {
    const services: string[] = [];
    const text = $.text().toLowerCase();

    // Botox and injectables
    if (text.includes('botox') || text.includes('botulinum')) {
      services.push('Botox');
    }
    if (text.includes('dermal filler') || text.includes('juvederm') || text.includes('restylane')) {
      services.push('Dermal Fillers');
    }

    // Laser treatments
    if (text.includes('laser hair removal') || text.includes('laser hair')) {
      services.push('Laser Hair Removal');
    }
    if (text.includes('laser treatment') || text.includes('laser therapy')) {
      services.push('Laser Treatments');
    }
    if (text.includes('ipl') || text.includes('intense pulsed light')) {
      services.push('IPL Treatments');
    }

    // Skin treatments
    if (text.includes('microneedling') || text.includes('microneedle')) {
      services.push('Microneedling');
    }
    if (text.includes('chemical peel') || text.includes('peel')) {
      services.push('Chemical Peels');
    }
    if (text.includes('hydrafacial') || text.includes('hydra facial')) {
      services.push('HydraFacial');
    }

    // Body treatments
    if (text.includes('coolsculpting') || text.includes('coolsculpt')) {
      services.push('CoolSculpting');
    }
    if (text.includes('body contouring') || text.includes('contouring')) {
      services.push('Body Contouring');
    }

    // Facials and skincare
    if (text.includes('facial') && !text.includes('hydrafacial')) {
      services.push('Facials');
    }
    if (text.includes('skincare') || text.includes('skin care')) {
      services.push('Skincare');
    }

    return services;
  }

  private extractNotes($: cheerio.CheerioAPI): string[] {
    const notes: string[] = [];
    
    // Check for special offers or promotions
    const text = $.text().toLowerCase();
    if (text.includes('special') || text.includes('promotion') || text.includes('discount')) {
      notes.push('Has special offers');
    }
    
    if (text.includes('new patient') || text.includes('new client')) {
      notes.push('Accepts new patients');
    }
    
    if (text.includes('consultation') || text.includes('consult')) {
      notes.push('Offers consultations');
    }

    return notes;
  }
}
