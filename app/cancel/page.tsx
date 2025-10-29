'use client'

import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function CancelSubscription() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Get customer ID from backend using email
      // This should query your backend to get stripe_customer_id
      const response = await fetch('/api/cancel/get-customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Unable to find your account')
        setIsLoading(false)
        return
      }

      // Create Stripe Customer Portal session
      const portalResponse = await fetch('/api/cancel/create-portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer_id: data.customer_id }),
      })

      const portalData = await portalResponse.json()

      if (!portalResponse.ok) {
        setError(portalData.error || 'Failed to create portal session')
        setIsLoading(false)
        return
      }

      // Redirect to Stripe Customer Portal
      if (portalData.url) {
        window.location.href = portalData.url
      }
    } catch (error) {
      console.error('Cancel error:', error)
      setError('Network error. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl font-semibold text-fg mb-2">
                Cancel Subscription
              </h1>
              <p className="text-muted">
                Enter your email to access your subscription management portal
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-fg mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Loading...' : 'Access Subscription Portal'}
              </button>
            </form>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-fg mb-2">What you can do:</h4>
              <ul className="text-sm text-muted space-y-1">
                <li>• Cancel your subscription</li>
                <li>• Update payment method</li>
                <li>• View billing history</li>
                <li>• Update subscription plan</li>
              </ul>
            </div>

            <p className="text-xs text-muted text-center mt-6">
              Need help? Contact us at support@netia.ai
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

