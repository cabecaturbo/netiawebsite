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
        // Try multiple auth header formats and paths
        const tryFetchMe = async (path: string, headers: Record<string, string>) => {
          const resp = await fetch(`${apiUrl}${path}`, { method: 'GET', headers })
          if (resp.ok) {
            const me = await resp.json()
            return (
              me?.data?.account_id ||
              me?.data?.accountId ||
              me?.data?.id ||
              me?.account_id ||
              me?.accountId ||
              me?.id ||
              me?.data?.account?.id ||
              me?.account?.id ||
              null
            )
          }
          return null
        }

        const token = data.data.token as string
        const headerVariants: Record<string, string>[] = [
          { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          { 'Content-Type': 'application/json', Authorization: `Token token=${token}` },
          { 'Content-Type': 'application/json', Authorization: `token ${token}` },
        ]
        const paths = ['/api/accounts/me', '/api/me']

        for (const headers of headerVariants) {
          for (const path of paths) {
            const maybeId = await tryFetchMe(path, headers)
            if (maybeId) {
              accountId = maybeId
              break
            }
          }
          if (accountId) break
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
      // Include minimal debug shape to help diagnose in case account_id is missing
      shape: process.env.NODE_ENV !== 'production' ? {
        registration_keys: Object.keys(data?.data || {}),
      } : undefined,
    })
  } catch (error) {
    // Log detailed error information for debugging
    console.error('Registration error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      type: error instanceof Error ? error.constructor.name : typeof error,
      stack: error instanceof Error ? error.stack : undefined,
    })
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' 
          ? (error instanceof Error ? error.message : 'Unknown error')
          : undefined
      },
      { status: 500 }
    )
  }
}

