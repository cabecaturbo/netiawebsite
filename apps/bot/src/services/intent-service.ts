export type Intent = 'pricing'|'availability'|'booking'|'services'|'other';

export class IntentService {
  detectIntent(q: string): Intent {
    const t = q.toLowerCase();
    if (/(price|cost|how much|\$)/.test(t)) return 'pricing';
    if (/(open|hours|today|availability)/.test(t)) return 'availability';
    if (/(book|schedule|appointment|consult)/.test(t)) return 'booking';
    if (/(botox|filler|laser|hydrafacial|microneedling)/.test(t)) return 'services';
    return 'other';
  }

  async determineIntent(message: string): Promise<string> {
    return this.detectIntent(message);
  }

  getIntentConfidence(message: string, intent: string): number {
    const lowerMessage = message.toLowerCase();
    const keywords = this.intentKeywords[intent as keyof typeof this.intentKeywords] || [];
    
    const matches = keywords.filter(keyword => lowerMessage.includes(keyword)).length;
    const confidence = Math.min(matches / keywords.length, 1);
    
    return confidence;
  }

  getAllIntents(): string[] {
    return Object.keys(this.intentKeywords);
  }

  getKeywordsForIntent(intent: string): string[] {
    return this.intentKeywords[intent as keyof typeof this.intentKeywords] || [];
  }
}
