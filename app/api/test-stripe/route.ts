import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function GET(request: NextRequest) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY
    
    if (!stripeKey) {
      return NextResponse.json({
        error: 'STRIPE_SECRET_KEY not configured',
        hasKey: false,
        keyLength: 0
      }, { status: 500 })
    }

    // Test Stripe initialization
    const stripe = new Stripe(stripeKey)
    
    return NextResponse.json({
      success: true,
      hasKey: true,
      keyLength: stripeKey.length,
      keyPrefix: stripeKey.substring(0, 7) + '...',
      message: 'Stripe is properly configured'
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Stripe initialization failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
