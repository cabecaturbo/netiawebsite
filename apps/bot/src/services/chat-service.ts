import OpenAI from 'openai';
import { ChatMessage, ChatResponse } from '@netia/shared';
import { FAQService } from './faq-service';

export class ChatService {
  private openai: OpenAI | null = null;
  private anthropicApiKey?: string;
  private faqService: FAQService;

  constructor(openaiApiKey?: string, anthropicApiKey?: string, faqService: FAQService) {
    if (openaiApiKey) {
      this.openai = new OpenAI({ apiKey: openaiApiKey });
    }
    this.anthropicApiKey = anthropicApiKey;
    this.faqService = faqService;
  }

  async generateResponse(input: {
    message: string;
    sessionId: string;
    context?: {
      faqContext?: string;
      intent?: string;
      [key: string]: any;
    };
  }): Promise<ChatResponse> {
    const { message, sessionId, context } = input;

    // Safety guardrails
    if (this.containsMedicalAdvice(message)) {
      return {
        response: "I can't provide medical advice. Please consult with a qualified healthcare provider for any medical concerns. Would you like to book a consultation with our medical professionals?",
        intent: 'general',
        calendlyLink: this.calendlyUrl,
        sessionId,
      };
    }

    // Get clinic-specific response
    const clinicResponse = await this.faqService.getRelevantFAQ(message);
    let response: string;
    let intent = context?.intent || 'other';

    if (clinicResponse) {
      // Use clinic-specific response
      response = clinicResponse;
    } else if (this.openai) {
      // Fallback to OpenAI with clinic context
      response = await this.generateOpenAIResponse(message, context);
    } else {
      // Final fallback
      response = await this.generateFallbackResponse(message, context);
    }

    // Add booking link for relevant intents
    let calendlyLink: string | undefined;
    if (intent === 'booking' || intent === 'pricing' || intent === 'availability' || intent === 'services') {
      calendlyLink = this.faqService.getBookingUrl();
    }

    return {
      response,
      intent: intent as 'pricing' | 'availability' | 'booking' | 'services' | 'other',
      calendlyLink,
      sessionId,
    };
  }

  private async generateOpenAIResponse(message: string, context?: any): Promise<string> {
    if (!this.openai) {
      return this.generateFallbackResponse(message, context);
    }

    try {
      const systemPrompt = this.buildSystemPrompt(context);
      
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      return completion.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response.';
    } catch (error) {
      console.error('❌ OpenAI API error:', error);
      return this.generateFallbackResponse(message, context);
    }
  }

  private buildSystemPrompt(context?: any): string {
    const basePrompt = `You are an AI receptionist for a med-spa clinic specializing in Botox, dermal fillers, laser treatments, and aesthetic services. 

Your role:
- Answer questions about services, pricing, and availability
- Help book consultations and appointments
- Provide general information about treatments
- Direct complex medical questions to qualified professionals

Important guidelines:
- Never provide medical advice or diagnose conditions
- Always suggest booking a consultation for medical concerns
- Be friendly, professional, and helpful
- Focus on booking consultations and appointments
- Use the provided FAQ context when available

${context?.faqContext ? `FAQ Context:\n${context.faqContext}` : ''}

If the user asks about booking, pricing, or availability, always include a link to book a consultation.`;

    return basePrompt;
  }

  private async generateFallbackResponse(message: string, context?: any): Promise<string> {
    const lowerMessage = message.toLowerCase();

    // Intent-based responses
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return `Thank you for your interest in our services! Pricing varies depending on the treatment and your specific needs. I'd be happy to help you book a consultation where our medical professionals can provide a personalized quote. Would you like to schedule a consultation?`;
    }

    if (lowerMessage.includes('book') || lowerMessage.includes('appointment') || lowerMessage.includes('schedule')) {
      return `I'd be happy to help you book a consultation! Our medical professionals will assess your needs and create a personalized treatment plan. Please use the booking link to schedule your appointment.`;
    }

    if (lowerMessage.includes('available') || lowerMessage.includes('when') || lowerMessage.includes('time')) {
      return `We have various appointment times available throughout the week. Please use the booking link to see our current availability and schedule your consultation.`;
    }

    if (lowerMessage.includes('botox') || lowerMessage.includes('filler') || lowerMessage.includes('laser') || lowerMessage.includes('hydrafacial') || lowerMessage.includes('microneedling')) {
      return `We offer a comprehensive range of aesthetic treatments including Botox, dermal fillers, laser treatments, HydraFacial, microneedling, and more. Each treatment is customized to your specific needs. I'd recommend booking a consultation to discuss which treatments would be best for you.`;
    }

    if (lowerMessage.includes('consultation') || lowerMessage.includes('consult')) {
      return `Great! A consultation is the perfect way to start your aesthetic journey. Our medical professionals will assess your needs, answer all your questions, and create a personalized treatment plan. Please use the booking link to schedule your consultation.`;
    }

    // Default response
    return `Thank you for reaching out! I'm here to help answer your questions about our med-spa services. We specialize in Botox, dermal fillers, laser treatments, and other aesthetic procedures. 

How can I assist you today? I can help with:
- Information about our services
- Booking consultations
- Pricing inquiries
- General questions about treatments

Would you like to book a consultation to discuss your aesthetic goals?`;
  }

  private containsMedicalAdvice(message: string): boolean {
    const medicalAdviceKeywords = [
      'diagnose',
      'diagnosis',
      'medical condition',
      'disease',
      'illness',
      'symptom',
      'treatment for',
      'cure',
      'medicine',
      'prescription',
      'side effects',
      'contraindication',
      'allergic reaction',
    ];

    const lowerMessage = message.toLowerCase();
    return medicalAdviceKeywords.some(keyword => lowerMessage.includes(keyword));
  }
}
