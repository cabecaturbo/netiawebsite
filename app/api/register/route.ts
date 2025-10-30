import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, email, password, passwordConfirmation } = body

    // Server-side validation
    if (!companyName || !email || !password || !passwordConfirmation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (password !== passwordConfirmation) {
      return NextResponse.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Proxy to Netia backend
    const apiUrl = process.env.NETIA_API_URL || 'https://app.netia.ai'
    const response = await fetch(`${apiUrl}/api/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          company_name: companyName,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // Forward backend validation errors
      return NextResponse.json(data, { status: response.status })
    }

    // Try to determine account_id from various possible shapes
    let accountId =
      data?.data?.account_id ||
      data?.data?.accountId ||
      data?.data?.user_id ||
      data?.data?.id ||
      data?.data?.account?.id ||
      data?.account?.id ||
      null

    // Fallback: if we have a token but no accountId, query accounts/me
    if (!accountId && data?.data?.token) {
      try {
        const meResp = await fetch(`${apiUrl}/api/accounts/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.data.token}`,
          },
        })
        if (meResp.ok) {
          const me = await meResp.json()
          accountId =
            me?.data?.account_id ||
            me?.data?.accountId ||
            me?.data?.id ||
            me?.account_id ||
            me?.accountId ||
            me?.id ||
            me?.data?.account?.id ||
            me?.account?.id ||
            accountId
        }
      } catch (e) {
        // ignore and proceed without accountId
      }
    }

    // Return tokens and best-effort account_id (frontend will require UUID before Stripe)
    return NextResponse.json({
      success: true,
      data: {
        token: data.data.token,
        renew_token: data.data.renew_token,
        account_id: accountId,
      },
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

