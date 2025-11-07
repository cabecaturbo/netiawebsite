import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

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

    // Validate accountId (must not be an email, can be string or number)
    // Convert to string if it's a number
    const accountIdStr = typeof accountId === 'number' ? accountId.toString() : accountId
    const isEmailLike = typeof accountIdStr === 'string' && accountIdStr.includes('@')
    if (isEmailLike || !accountIdStr || typeof accountIdStr !== 'string') {
      return NextResponse.json(
        { error: 'Invalid accountId: expected Netia account ID (not an email)' },
        { status: 400 }
      )
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      )
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    // Use Stripe Price ID if available, otherwise use price_data
    const stripePriceId = process.env.STRIPE_PRICE_ID
    
    // Validate Price ID format if provided (should start with 'price_')
    if (stripePriceId && !stripePriceId.startsWith('price_')) {
      console.error('Invalid STRIPE_PRICE_ID format:', stripePriceId)
      return NextResponse.json(
        { 
          error: 'Invalid Stripe Price ID format. Price ID should start with "price_"',
          param: 'STRIPE_PRICE_ID',
        },
        { status: 400 }
      )
    }
    
    let lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]
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
      const monthlyPriceStr = process.env.STRIPE_MONTHLY_PRICE_CENTS
      if (!monthlyPriceStr) {
        console.error('Missing pricing configuration: STRIPE_PRICE_ID or STRIPE_MONTHLY_PRICE_CENTS must be set')
        return NextResponse.json(
          { error: 'Pricing configuration missing' },
          { status: 500 }
        )
      }
      const monthlyPrice = parseInt(monthlyPriceStr, 10)
      if (isNaN(monthlyPrice) || monthlyPrice <= 0) {
        console.error('Invalid STRIPE_MONTHLY_PRICE_CENTS:', monthlyPriceStr)
        return NextResponse.json(
          { error: 'Invalid pricing configuration' },
          { status: 500 }
        )
      }
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
              interval: 'month' as const,
            },
          },
          quantity: 1,
        },
      ]
    }

    // Validate metadata values (Stripe has a 500 character limit per key)
    const metadata = {
      netia_account_id: accountIdStr,
      netia_account_email: email,
    }
    
    // Check metadata length limits
    for (const [key, value] of Object.entries(metadata)) {
      if (value && value.length > 500) {
        console.error(`Metadata value too long for key ${key}:`, value.length)
        return NextResponse.json(
          { error: `Metadata value too long for ${key} (max 500 characters)` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Build URLs
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const successUrl = `${baseUrl}/signup/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${baseUrl}/signup/cancel`

    // Log request parameters (without sensitive data) for debugging
    console.log('Creating Stripe checkout session:', {
      email,
      accountId: accountIdStr,
      hasPriceId: !!stripePriceId,
      baseUrl,
      metadataKeys: Object.keys(metadata),
    })

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: lineItems,
      subscription_data: {
        trial_period_days: 7,
        metadata,
      },
      metadata,
      success_url: successUrl,
      cancel_url: cancelUrl,
    })

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    })
  } catch (error) {
    // Log detailed error information for debugging
    const errorDetails = {
      message: error instanceof Error ? error.message : 'Unknown error',
      type: error instanceof Error ? error.constructor.name : typeof error,
      stack: error instanceof Error ? error.stack : undefined,
      // Include Stripe-specific error details if available
      stripeType: (error as any)?.type || undefined,
      stripeCode: (error as any)?.code || undefined,
      stripeParam: (error as any)?.param || undefined,
      stripeDeclineCode: (error as any)?.decline_code || undefined,
    }
    console.error('Checkout session creation error:', errorDetails)

    // Return more specific error messages based on error type
    if (error instanceof Error) {
      const stripeError = error as any
      
      // Check if it's a Stripe error (Stripe errors have a 'type' property)
      if (stripeError.type) {
        // Handle Stripe-specific errors
        if (stripeError.type === 'StripeInvalidRequestError') {
          // Provide helpful error messages for common issues
          let errorMessage = 'Invalid Stripe request'
          
          if (stripeError.param === 'line_items[0][price]') {
            if (stripeError.code === 'resource_missing') {
              const priceId = process.env.STRIPE_PRICE_ID || 'unknown'
              errorMessage = `Stripe Price ID not found: The Price ID '${priceId}' does not exist in your Stripe account. Please verify: 1) The Price ID is correct, 2) You're using the correct Stripe account (test vs live), 3) The Price ID hasn't been deleted or archived.`
            } else {
              errorMessage = 'Invalid Stripe Price ID. Please check that STRIPE_PRICE_ID is correct and exists in your Stripe dashboard.'
            }
          } else if (stripeError.param) {
            errorMessage = `Invalid Stripe parameter: ${stripeError.param}`
          }
          
          // Include safe error details even in production (code and param are safe to expose)
          return NextResponse.json(
            { 
              error: errorMessage,
              code: stripeError.code || undefined,
              param: stripeError.param || undefined,
              message: process.env.NODE_ENV === 'development' ? stripeError.message : undefined,
            },
            { status: 400 }
          )
        }
        
        if (stripeError.type === 'StripeAuthenticationError') {
          return NextResponse.json(
            { error: 'Stripe authentication failed - check API key configuration' },
            { status: 500 }
          )
        }

        if (stripeError.type === 'StripeAPIError' || stripeError.type === 'StripeConnectionError') {
          return NextResponse.json(
            { 
              error: 'Stripe API connection error',
              details: process.env.NODE_ENV === 'development' ? stripeError.message : undefined
            },
            { status: 500 }
          )
        }

        if (stripeError.type === 'StripeCardError') {
          return NextResponse.json(
            { 
              error: 'Card error',
              details: process.env.NODE_ENV === 'development' ? stripeError.message : undefined
            },
            { status: 400 }
          )
        }

        // Generic Stripe error
        return NextResponse.json(
          { 
            error: 'Stripe error occurred',
            details: process.env.NODE_ENV === 'development' 
              ? `${stripeError.type}: ${stripeError.message}`
              : undefined
          },
          { status: 500 }
        )
      }

      // Generic error with message in development
      return NextResponse.json(
        { 
          error: 'Failed to create checkout session',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      )
    }

    // Fallback for unknown error types
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

