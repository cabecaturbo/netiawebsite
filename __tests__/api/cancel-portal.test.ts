import { POST } from '../../app/api/cancel/create-portal/route'
import { NextRequest } from 'next/server'

// Mock Stripe module
jest.mock('stripe', () => {
  const mockPortalSession = {
    url: 'https://billing.stripe.com/session_123',
  }

  const mockStripeInstance = {
    billingPortal: {
      sessions: {
        create: jest.fn().mockResolvedValue(mockPortalSession),
      },
    },
  }

  return jest.fn().mockImplementation(() => mockStripeInstance)
})

describe('Cancel Create Portal API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.STRIPE_SECRET_KEY = 'sk_test_123'
    process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:3000'
  })

  it('should validate customer_id is provided', async () => {
    const request = new NextRequest('http://localhost/api/cancel/create-portal', {
      method: 'POST',
      body: JSON.stringify({}),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Missing customer_id')
  })

  it('should create Stripe Customer Portal session', async () => {
    // Need to get the mocked instance
    const Stripe = require('stripe')
    const stripeInstance = new Stripe()
    
    const request = new NextRequest('http://localhost/api/cancel/create-portal', {
      method: 'POST',
      body: JSON.stringify({
        customer_id: 'cus_test_123',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.url).toBe('https://billing.stripe.com/session_123')
    expect(stripeInstance.billingPortal.sessions.create).toHaveBeenCalledWith({
      customer: 'cus_test_123',
      return_url: 'http://localhost:3000/cancel/complete',
    })
  })

  it('should handle missing Stripe configuration', async () => {
    delete process.env.STRIPE_SECRET_KEY

    const request = new NextRequest('http://localhost/api/cancel/create-portal', {
      method: 'POST',
      body: JSON.stringify({
        customer_id: 'cus_test_123',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.error).toBe('Stripe not configured')
  })
})

