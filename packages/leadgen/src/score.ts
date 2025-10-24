import { Business, ScoringWeights } from '@netia/shared';

/**
 * Pure function to calculate business score based on various factors
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
  
  // Check if closed on Sundays (high urgency - missed revenue)
  if (business.hours?.includes('Sunday: Closed') || business.hours?.includes('Sunday: CLOSED')) {
    score += 2;
  }
  
  // Check for 24/7 or extended hours (high availability)
  if (business.hours?.includes('24') || business.hours?.includes('24/7')) {
    score += 1;
  }
  
  // Check for evening hours (after 6 PM)
  if (business.hours?.includes('PM') && 
      (business.hours?.includes('8') || business.hours?.includes('9'))) {
    score += 1;
  }
  
  // Check for weekend hours
  if (business.hours?.includes('Saturday') || business.hours?.includes('Sunday')) {
    score += 0.5;
  }
  
  return Math.min(5, score);
}

function calculateTicketProxyScore(business: Business): number {
  let score = 0;
  const services = business.services.join(' ').toLowerCase();
  
  // High-value services (Botox, fillers)
  if (services.includes('botox')) score += 2;
  if (services.includes('filler')) score += 2;
  if (services.includes('dermal filler')) score += 2;
  
  // Medium-value services (laser treatments)
  if (services.includes('laser')) score += 1;
  if (services.includes('coolsculpting')) score += 1;
  if (services.includes('microneedling')) score += 1;
  
  // Additional services (indicates comprehensive practice)
  if (services.includes('facial')) score += 0.5;
  if (services.includes('peel')) score += 0.5;
  if (services.includes('contouring')) score += 0.5;
  
  return Math.min(5, score);
}

function calculateMarketingScore(business: Business): number {
  let score = 0;
  
  // Has ads (indicates marketing budget)
  if (business.runsAds) {
    score += 2;
  }
  
  // High review count (indicates marketing investment)
  if (business.gmbReviews && business.gmbReviews > 50) {
    score += 1;
  }
  if (business.gmbReviews && business.gmbReviews > 100) {
    score += 1;
  }
  if (business.gmbReviews && business.gmbReviews > 200) {
    score += 1;
  }
  
  // High rating (indicates quality and likely marketing)
  if (business.gmbRating && business.gmbRating >= 4.5) {
    score += 1;
  }
  if (business.gmbRating && business.gmbRating >= 4.8) {
    score += 1;
  }
  
  return Math.min(5, score);
}

/**
 * Get scoring explanation for debugging
 */
export function getScoringExplanation(business: Business, weights?: ScoringWeights): {
  totalScore: number;
  breakdown: {
    urgency: { score: number; weight: number; weighted: number };
    ticketProxy: { score: number; weight: number; weighted: number };
    marketingSpend: { score: number; weight: number; weighted: number };
    chatBonus: { score: number; weight: number; weighted: number };
  };
} {
  const w = weights || {
    urgency: 0.3,
    ticketProxy: 0.25,
    marketingSpend: 0.2,
    noChatPenalty: 0.15,
    hasChatBonus: 0.1,
  };

  const urgencyScore = calculateUrgencyScore(business);
  const ticketScore = calculateTicketProxyScore(business);
  const marketingScore = calculateMarketingScore(business);
  const chatScore = business.hasLiveChat ? 1 : -1;

  return {
    totalScore: calculateBusinessScore(business, w),
    breakdown: {
      urgency: {
        score: urgencyScore,
        weight: w.urgency,
        weighted: urgencyScore * w.urgency,
      },
      ticketProxy: {
        score: ticketScore,
        weight: w.ticketProxy,
        weighted: ticketScore * w.ticketProxy,
      },
      marketingSpend: {
        score: marketingScore,
        weight: w.marketingSpend,
        weighted: marketingScore * w.marketingSpend,
      },
      chatBonus: {
        score: chatScore,
        weight: business.hasLiveChat ? w.hasChatBonus : w.noChatPenalty,
        weighted: chatScore * (business.hasLiveChat ? w.hasChatBonus : w.noChatPenalty),
      },
    },
  };
}
