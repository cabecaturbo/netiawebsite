import { POST } from '../../app/api/checkout/create/route'
import { NextRequest } from 'next/server'

// Mock Stripe module
jest.mock('stripe', () => {
  const mockCheckoutSession = {
    id: 'cs_test_123',
    url: 'https://checkout.stripe.com/cs_test_123',
  }

  const mockStripeInstance = {
    checkout: {
      sessions: {
        create: jest.fn().mockResolvedValue(mockCheckoutSession),
      },
    },
  }

  return jest.fn().mockImplementation(() => mockStripeInstance)
})

describe('Checkout Create API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.STRIPE_SECRET_KEY = 'sk_test_123'
    process.env.STRIPE_PRICE_ID = 'price_test_123'
    process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:3000'
  })

  it('should validate required fields', async () => {
    const request = new NextRequest('http://localhost/api/checkout/create', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        // Missing accountId
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toContain('Missing required fields')
  })

  it('should create Stripe checkout session', async () => {
    // Need to get the mocked instance
    const Stripe = require('stripe')
    const stripeInstance = new Stripe()
    
    const request = new NextRequest('http://localhost/api/checkout/create', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        accountId: '123',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.sessionId).toBe('cs_test_123')
    expect(data.url).toBe('https://checkout.stripe.com/cs_test_123')
    expect(stripeInstance.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        customer_email: 'test@example.com',
        mode: 'subscription',
        subscription_data: expect.objectContaining({
          trial_period_days: 7,
          metadata: {
            netia_account_id: '123',
          },
        }),
      })
    )
  })

  it('should handle missing Stripe configuration', async () => {
    delete process.env.STRIPE_SECRET_KEY

    const request = new NextRequest('http://localhost/api/checkout/create', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        accountId: '123',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.error).toBe('Stripe not configured')
  })
})

