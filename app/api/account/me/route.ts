import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const apiUrl = process.env.NETIA_API_URL || 'https://app.netia.ai'
    // Some deployments expose `accounts/me` instead of `me`. Try both.
    const endpoints = [`${apiUrl}/api/accounts/me`, `${apiUrl}/api/me`]
    let lastError: any = null
    for (const url of endpoints) {
      try {
        const resp = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader,
          },
          cache: 'no-store',
        })
        const data = await resp.json()
        if (resp.ok) {
          return NextResponse.json({ success: true, data })
        }
        lastError = { status: resp.status, data }
      } catch (e) {
        lastError = e
      }
    }

    return NextResponse.json({ error: 'Failed to fetch account', details: lastError }, { status: 500 })
  } catch (error) {
    console.error('Account me error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


