import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const apiUrl = process.env.NETIA_API_URL || 'https://app.netia.ai'
    const resp = await fetch(`${apiUrl}/api/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      cache: 'no-store',
    })

    const data = await resp.json()
    if (!resp.ok) {
      return NextResponse.json(data, { status: resp.status })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Account me error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


