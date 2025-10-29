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

    // Return tokens and account_id if available (frontend will store them)
    return NextResponse.json({
      success: true,
      data: {
        token: data.data.token,
        renew_token: data.data.renew_token,
        // Pass through account_id if backend returns it (check various possible field names)
        account_id: data.data.account_id || data.data.accountId || data.data.user_id || data.data.id,
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

