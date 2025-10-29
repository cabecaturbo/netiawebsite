import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, accountId } = body

    if (!email || !accountId) {
      return NextResponse.json(
        { error: 'Missing required fields: email and accountId' },
        { status: 400 }
      )
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      )
    }

    // Use Stripe Price ID if available, otherwise use price_data
    const stripePriceId = process.env.STRIPE_PRICE_ID
    
    let lineItems
    if (stripePriceId) {
      // Use existing Stripe Price ID (recommended)
      lineItems = [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ]
    } else {
      // Fallback to inline price_data
      // Get monthly price from env or default to $99 (9900 cents)
      const monthlyPrice = parseInt(process.env.STRIPE_MONTHLY_PRICE_CENTS || '9900', 10)
      lineItems = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Netia AI Subscription',
              description: 'AI-powered customer service with 7-day free trial',
            },
            unit_amount: monthlyPrice,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ]
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: lineItems,
      subscription_data: {
        trial_period_days: 7,
        metadata: {
          netia_account_id: accountId,
        },
      },
      metadata: {
        netia_account_id: accountId,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/signup/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/signup/cancel`,
    })

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    })
  } catch (error) {
    console.error('Checkout session creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

