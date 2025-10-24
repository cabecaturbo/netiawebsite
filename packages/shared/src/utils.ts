import { Business, ScoringWeights } from './types';

/**
 * Calculate business score based on various factors
 * Refined algorithm with better weighting and logic
 */
export function calculateBusinessScore(
  business: Business,
  weights?: ScoringWeights // Optional for backward compatibility
): number {
  const svc = business.services.join(' ').toLowerCase();
  const highTicket = /(botox|filler|laser|co2|morpheus|microneedling)/.test(svc) ? 1 : 0;
  const reviews = Math.min((business.gmbReviews ?? 0)/200, 1);
  const rating = ((business.gmbRating ?? 0) - 3)/2; // 3–5 -> 0–1
  const ads = business.runsAds ? 1 : 0;
  const noChat = business.hasLiveChat ? 0 : 1;
  
  // weights: urgency(ads) .25, social proof .25, high-ticket .2, no chat .2, rating .1
  const s = 0.25*ads + 0.25*reviews + 0.2*highTicket + 0.2*noChat + 0.1*rating;
  return Math.round(s*5*10)/10; // 0–5.0
}

function calculateUrgencyScore(business: Business): number {
  let score = 0;
  
  // Check if closed on Sundays (high urgency)
  if (business.hours?.includes('Sunday: Closed') || business.hours?.includes('Sunday: CLOSED')) {
    score += 2;
  }
  
  // Check for 24/7 or extended hours
  if (business.hours?.includes('24') || business.hours?.includes('24/7')) {
    score += 1;
  }
  
  // Check for evening hours
  if (business.hours?.includes('PM') && business.hours?.includes('8') || business.hours?.includes('9')) {
    score += 1;
  }
  
  return Math.min(5, score);
}

function calculateTicketProxyScore(business: Business): number {
  let score = 0;
  const services = business.services.join(' ').toLowerCase();
  
  // High-value services
  if (services.includes('botox')) score += 2;
  if (services.includes('filler')) score += 2;
  if (services.includes('laser')) score += 1;
  if (services.includes('coolsculpting')) score += 1;
  if (services.includes('microneedling')) score += 1;
  
  return Math.min(5, score);
}

function calculateMarketingScore(business: Business): number {
  let score = 0;
  
  // Has ads
  if (business.runsAds) {
    score += 2;
  }
  
  // High review count
  if (business.gmbReviews && business.gmbReviews > 50) {
    score += 1;
  }
  if (business.gmbReviews && business.gmbReviews > 100) {
    score += 1;
  }
  
  // High rating
  if (business.gmbRating && business.gmbRating >= 4.5) {
    score += 1;
  }
  
  return Math.min(5, score);
}

/**
 * Generate personal line for outreach
 */
export function generatePersonalLine(business: Business): string {
  const lines = [
    `Loved your ${business.services[0] || 'aesthetic'} services—bookings open this week?`,
    `Your ${business.city} clinic looks amazing—any availability for new clients?`,
    `Impressed by your ${business.services[0] || 'med spa'} offerings—taking new patients?`,
    `Your aesthetic clinic in ${business.city} caught my eye—consultations available?`,
    `Beautiful ${business.services[0] || 'med spa'} services—any openings for new clients?`,
  ];
  
  return lines[Math.floor(Math.random() * lines.length)];
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Extract domain from website URL
 */
export function extractDomain(website: string): string {
  try {
    const url = new URL(website.startsWith('http') ? website : `https://${website}`);
    return url.hostname.replace('www.', '');
  } catch {
    return website.replace(/^https?:\/\//, '').replace(/^www\./, '');
  }
}

/**
 * Generate variant names
 */
export function generateVariants(baseName: string, count: number = 3): string[] {
  const variants = [];
  for (let i = 1; i <= count; i++) {
    variants.push(`${baseName}_v${i}`);
  }
  return variants;
}
