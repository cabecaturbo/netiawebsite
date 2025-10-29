import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const sessionId = searchParams.get('session_id')

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing session_id' },
        { status: 400 }
      )
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      )
    }

    // Retrieve the Checkout Session
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      )
    }

    // Check if checkout was successful
    // For subscriptions with trials, payment_status might be 'no_payment_required'
    // Status 'complete' indicates successful checkout
    if (session.status === 'complete') {
      // Extract customer and subscription IDs (can be string or object)
      const customerId = typeof session.customer === 'string' 
        ? session.customer 
        : session.customer?.id || null
      
      const subscriptionId = typeof session.subscription === 'string'
        ? session.subscription
        : session.subscription?.id || null

      return NextResponse.json({
        success: true,
        session: {
          id: session.id,
          status: session.status,
          payment_status: session.payment_status,
          customer_email: session.customer_email,
          customer_id: customerId,
          subscription_id: subscriptionId,
          metadata: session.metadata,
        },
      })
    }

    return NextResponse.json({
      success: false,
      session: {
        id: session.id,
        status: session.status,
        payment_status: session.payment_status,
      },
    })
  } catch (error) {
    console.error('Session verification error:', error)
    return NextResponse.json(
      { error: 'Failed to verify session' },
      { status: 500 }
    )
  }
}

