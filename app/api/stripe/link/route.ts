import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const token = authHeader.replace('Bearer ', '')
    const body = await request.json()
    const { account_id, stripe_customer_id, stripe_subscription_id } = body

    if (!stripe_customer_id || !stripe_subscription_id) {
      return NextResponse.json(
        { error: 'Missing stripe_customer_id or stripe_subscription_id' },
        { status: 400 }
      )
    }

    if (!account_id) {
      return NextResponse.json(
        { error: 'Missing account_id' },
        { status: 400 }
      )
    }

    // Proxy to Netia backend to store Stripe IDs
    const apiUrl = process.env.NETIA_API_URL || 'https://app.netia.ai'
    const response = await fetch(`${apiUrl}/api/stripe/link`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        account_id,
        stripe_customer_id,
        stripe_subscription_id,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status })
    }

    return NextResponse.json({
      success: true,
      message: 'Stripe IDs linked successfully',
    })
  } catch (error) {
    console.error('Stripe link error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

