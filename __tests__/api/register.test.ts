import { POST } from '../../app/api/register/route'
import { NextRequest } from 'next/server'

// Mock fetch
global.fetch = jest.fn()

describe('Registration API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.NETIA_API_URL = 'https://app.netia.ai'
  })

  it('should validate required fields', async () => {
    const request = new NextRequest('http://localhost/api/register', {
      method: 'POST',
      body: JSON.stringify({
        companyName: '',
        email: 'test@example.com',
        password: 'password123',
        passwordConfirmation: 'password123',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Missing required fields')
  })

  it('should validate password matching', async () => {
    const request = new NextRequest('http://localhost/api/register', {
      method: 'POST',
      body: JSON.stringify({
        companyName: 'Test Company',
        email: 'test@example.com',
        password: 'password123',
        passwordConfirmation: 'different123',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Passwords do not match')
  })

  it('should validate password length', async () => {
    const request = new NextRequest('http://localhost/api/register', {
      method: 'POST',
      body: JSON.stringify({
        companyName: 'Test Company',
        email: 'test@example.com',
        password: 'short',
        passwordConfirmation: 'short',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Password must be at least 8 characters')
  })

  it('should validate email format', async () => {
    const request = new NextRequest('http://localhost/api/register', {
      method: 'POST',
      body: JSON.stringify({
        companyName: 'Test Company',
        email: 'invalid-email',
        password: 'password123',
        passwordConfirmation: 'password123',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Invalid email format')
  })

  it('should successfully register user', async () => {
    const mockResponse = {
      data: {
        token: 'test-token',
        renew_token: 'test-renew-token',
        account_id: '123',
      },
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    })

    const request = new NextRequest('http://localhost/api/register', {
      method: 'POST',
      body: JSON.stringify({
        companyName: 'Test Company',
        email: 'test@example.com',
        password: 'password123',
        passwordConfirmation: 'password123',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.data.token).toBe('test-token')
    expect(data.data.renew_token).toBe('test-renew-token')
    expect(global.fetch).toHaveBeenCalledWith(
      'https://app.netia.ai/api/registration',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    )
  })

  it('should forward backend validation errors', async () => {
    const mockErrorResponse = {
      error: {
        status: 500,
        message: 'Email already exists',
        errors: {
          email: ['has already been taken'],
        },
      },
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => mockErrorResponse,
    })

    const request = new NextRequest('http://localhost/api/register', {
      method: 'POST',
      body: JSON.stringify({
        companyName: 'Test Company',
        email: 'existing@example.com',
        password: 'password123',
        passwordConfirmation: 'password123',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.error.message).toBe('Email already exists')
  })
})

