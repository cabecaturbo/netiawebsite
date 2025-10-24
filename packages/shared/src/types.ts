import { z } from 'zod';

// Business data model
export const BusinessSchema = z.object({
  id: z.string(),
  name: z.string(),
  website: z.string().url().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  city: z.string(),
  state: z.string(),
  gmbRating: z.number().min(0).max(5).optional(),
  gmbReviews: z.number().min(0).optional(),
  hasLiveChat: z.boolean().default(false),
  runsAds: z.boolean().default(false),
  services: z.array(z.string()).default([]),
  notes: z.array(z.string()).default([]),
  score: z.number().min(0).max(5).default(0),
  hours: z.string().optional(),
  address: z.string().optional(),
  placeId: z.string().optional(),
});

export type Business = z.infer<typeof BusinessSchema>;

// Email row for outreach
export const EmailRowSchema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  company: z.string(),
  city: z.string(),
  personalLine: z.string(),
  variant: z.string(),
});

export type EmailRow = z.infer<typeof EmailRowSchema>;

// Lead CSV schema
export const LeadCSVSchema = z.object({
  name: z.string(),
  company_domain: z.string(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  city: z.string(),
  state: z.string(),
  gmb_rating: z.number().optional(),
  gmb_reviews: z.number().optional(),
  has_live_chat: z.boolean(),
  runs_ads: z.boolean(),
  services: z.string(), // JSON string
  score: z.number(),
});

export type LeadCSV = z.infer<typeof LeadCSVSchema>;

// Instantly campaign CSV schema
export const InstantlyCampaignSchema = z.object({
  email: z.string().email(),
  first_name: z.string().optional(),
  company: z.string(),
  city: z.string(),
  personal_line: z.string(),
  variant: z.string(),
});

export type InstantlyCampaign = z.infer<typeof InstantlyCampaignSchema>;

// Chat message schema
export const ChatMessageSchema = z.object({
  message: z.string(),
  sessionId: z.string(),
  context: z.record(z.any()).optional(),
});

export type ChatMessage = z.infer<typeof ChatMessageSchema>;

// Intent type
export type Intent = 'pricing'|'availability'|'booking'|'services'|'other';

// Chat response schema
export const ChatResponseSchema = z.object({
  response: z.string(),
  intent: z.enum(['pricing', 'availability', 'booking', 'services', 'other']).optional(),
  calendlyLink: z.string().url().optional(),
  sessionId: z.string(),
});

export type ChatResponse = z.infer<typeof ChatResponseSchema>;

// Environment validation
export const EnvSchema = z.object({
  GOOGLE_PLACES_API_KEY: z.string().optional(),
  SERPAPI_KEY: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  CALENDLY_URL: z.string().url(),
  NEXT_PUBLIC_BOT_ENDPOINT: z.string().url(),
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_ANON_KEY: z.string().optional(),
});

export type Env = z.infer<typeof EnvSchema>;

// Scoring weights
export const ScoringWeightsSchema = z.object({
  urgency: z.number().default(0.3),
  ticketProxy: z.number().default(0.25),
  marketingSpend: z.number().default(0.2),
  noChatPenalty: z.number().default(0.15),
  hasChatBonus: z.number().default(0.1),
});

export type ScoringWeights = z.infer<typeof ScoringWeightsSchema>;
