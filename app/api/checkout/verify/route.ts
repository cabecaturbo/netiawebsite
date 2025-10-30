import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

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

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    // Retrieve the Checkout Session with expansions so we can reliably access IDs
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription', 'customer']
    })

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
        : (session.customer as Stripe.Customer | null)?.id || session.customer_email || null
      
      let subscriptionId: string | null = null
      if (typeof session.subscription === 'string') {
        subscriptionId = session.subscription
      } else if (session.subscription && (session.subscription as Stripe.Subscription).id) {
        subscriptionId = (session.subscription as Stripe.Subscription).id
      } else {
        // As a fallback, try to locate the subscription by customer
        if (customerId && typeof customerId === 'string') {
          const subs = await stripe.subscriptions.list({ customer: customerId, limit: 1 })
          subscriptionId = subs.data?.[0]?.id || null
        }
      }

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

