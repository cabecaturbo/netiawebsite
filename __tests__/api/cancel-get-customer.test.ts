import { POST } from '../../app/api/cancel/get-customer/route'
import { NextRequest } from 'next/server'

// Mock Stripe module
jest.mock('stripe', () => {
  const mockStripeInstance = {
    customers: {
      list: jest.fn(),
    },
  }

  return jest.fn().mockImplementation(() => mockStripeInstance)
})

describe('Cancel Get Customer API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.STRIPE_SECRET_KEY = 'sk_test_123'
  })

  it('should validate email is provided', async () => {
    const request = new NextRequest('http://localhost/api/cancel/get-customer', {
      method: 'POST',
      body: JSON.stringify({}),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Missing email')
  })

  it('should return customer_id when customer exists', async () => {
    // Need to get the mocked instance
    const Stripe = require('stripe')
    const stripeInstance = new Stripe()
    
    stripeInstance.customers.list.mockResolvedValueOnce({
      data: [
        {
          id: 'cus_test_123',
          email: 'test@example.com',
        } as any,
      ],
      has_more: false,
    } as any)

    const request = new NextRequest('http://localhost/api/cancel/get-customer', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.customer_id).toBe('cus_test_123')
    expect(stripeInstance.customers.list).toHaveBeenCalledWith({
      email: 'test@example.com',
      limit: 1,
    })
  })

  it('should return error when customer not found', async () => {
    // Need to get the mocked instance
    const Stripe = require('stripe')
    const stripeInstance = new Stripe()
    
    stripeInstance.customers.list.mockResolvedValueOnce({
      data: [],
      has_more: false,
    } as any)

    const request = new NextRequest('http://localhost/api/cancel/get-customer', {
      method: 'POST',
      body: JSON.stringify({
        email: 'notfound@example.com',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(404)
    expect(data.error).toBe('No account found with this email address')
  })

  it('should handle missing Stripe configuration', async () => {
    delete process.env.STRIPE_SECRET_KEY

    const request = new NextRequest('http://localhost/api/cancel/get-customer', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
      }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.error).toBe('Stripe not configured')
  })
})

