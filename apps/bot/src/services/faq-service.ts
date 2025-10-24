import fs from 'fs-extra';
import path from 'path';
import yaml from 'yaml';

export interface ClinicConfig {
  name: string;
  city: string;
  services: string[];
  priceNotes: string;
  bookingUrl: string;
}

export interface ClinicAnswers {
  pricing: string;
  availability: string;
  booking: string;
  services: string;
}

export interface SafetyConfig {
  medical: string;
}

export interface ClinicData {
  clinic: ClinicConfig;
  answers: ClinicAnswers;
  safety: SafetyConfig;
}

export class FAQService {
  private clinicData: ClinicData | null = null;
  private faqPath: string;

  constructor() {
    this.faqPath = path.join(process.cwd(), 'ops', 'samples', 'faq.medspa.yaml');
    this.loadClinicData();
  }

  private async loadClinicData(): Promise<void> {
    try {
      if (await fs.pathExists(this.faqPath)) {
        const yamlContent = await fs.readFile(this.faqPath, 'utf-8');
        this.clinicData = yaml.parse(yamlContent);
        console.log(`📚 Loaded clinic config for ${this.clinicData?.clinic.name}`);
      } else {
        console.warn(`⚠️  Clinic config file not found: ${this.faqPath}`);
        this.clinicData = this.getDefaultClinicData();
      }
    } catch (error) {
      console.error('❌ Error loading clinic config:', error);
      this.clinicData = this.getDefaultClinicData();
    }
  }

  async getRelevantFAQ(message: string): Promise<string> {
    if (!this.clinicData) return '';
    
    const lowerMessage = message.toLowerCase();
    
    // Check for pricing questions
    if (/(price|cost|how much|\$)/.test(lowerMessage)) {
      return this.clinicData.answers.pricing;
    }
    
    // Check for availability questions
    if (/(open|hours|today|availability)/.test(lowerMessage)) {
      return this.clinicData.answers.availability;
    }
    
    // Check for booking questions
    if (/(book|schedule|appointment|consult)/.test(lowerMessage)) {
      return this.clinicData.answers.booking;
    }
    
    // Check for services questions
    if (/(botox|filler|laser|hydrafacial|microneedling)/.test(lowerMessage)) {
      return this.clinicData.answers.services;
    }
    
    return '';
  }

  async getAllFAQs(): Promise<ClinicData | null> {
    return this.clinicData;
  }

  getClinicConfig(): ClinicConfig | null {
    return this.clinicData?.clinic || null;
  }

  getBookingUrl(): string {
    return this.clinicData?.clinic.bookingUrl || 'https://calendly.com/yourname/medspa-demo';
  }

  private getDefaultClinicData(): ClinicData {
    return {
      clinic: {
        name: "Example Aesthetics",
        city: "Seattle",
        services: ["Botox", "Lip Filler", "Laser Hair Removal"],
        priceNotes: "Exact pricing shared after consult; Botox starts at $11/unit.",
        bookingUrl: "https://calendly.com/yourname/medspa-demo"
      },
      answers: {
        pricing: "We share exact pricing after a quick consult. Botox typically starts at $11/unit; filler packages vary by area. Want me to book you a free consult?",
        availability: "We usually have openings within 3–5 days, with occasional same-day slots. Would you like to see times?",
        booking: "Great—I can book a consult. Do you prefer mornings or afternoons? I'll place the time on our calendar and send a confirmation.",
        services: "We offer Botox, fillers, and laser treatments. If you tell me your goal (e.g., smoother forehead, lip volume), I can suggest next steps."
      },
      safety: {
        medical: "I can't provide medical advice, but I can share general info and help you book with our clinician."
      }
    };
  }
}
