'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function SignupSuccess() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isVerifying, setIsVerifying] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const verifySession = async () => {
      if (!sessionId) {
        setError('Missing session ID')
        setIsVerifying(false)
        return
      }

      try {
        // Verify Stripe session
        const response = await fetch(`/api/checkout/verify?session_id=${sessionId}`)
        const data = await response.json()

        if (!response.ok || !data.success) {
          setError(data.error || 'Failed to verify payment session')
          setIsVerifying(false)
          return
        }

        // Get stored tokens and account info from sessionStorage
        const tempTokens = sessionStorage.getItem('temp_tokens')
        const tempEmail = sessionStorage.getItem('temp_account_email')
        const tempAccountId = sessionStorage.getItem('temp_account_id')

        if (tempTokens && tempEmail) {
          const tokens = JSON.parse(tempTokens)
          
          // Store tokens permanently in localStorage
          localStorage.setItem('netia_customer_token', tokens.token)
          localStorage.setItem('netia_customer_renew_token', tokens.renew_token)
          localStorage.setItem('netia_customer_logged_in', 'true')
          localStorage.setItem('netia_customer_email', tempEmail)

          // Send Stripe IDs to backend if available
          if (data.session?.customer_id && data.session?.subscription_id) {
            try {
              await fetch('/api/stripe/link', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${tokens.token}`,
                },
                body: JSON.stringify({
                  account_id: tempAccountId, // Account ID from registration
                  stripe_customer_id: data.session.customer_id,
                  stripe_subscription_id: data.session.subscription_id,
                }),
              })
              // Don't fail if this call fails - tokens are already stored
            } catch (error) {
              console.error('Failed to link Stripe IDs:', error)
              // Continue anyway - backend can sync later
            }
          }

          // Clear temporary storage
          sessionStorage.removeItem('temp_tokens')
          sessionStorage.removeItem('temp_account_email')
          sessionStorage.removeItem('temp_account_id')

          setIsVerified(true)
          
          // Redirect to app.netia.ai for login (tokens won't work cross-domain)
          setTimeout(() => {
            window.location.href = 'https://app.netia.ai/login'
          }, 2000)
        } else {
          setError('Session data not found. Please try logging in.')
          setIsVerifying(false)
        }
      } catch (error) {
        console.error('Verification error:', error)
        setError('Failed to verify session. Please try logging in.')
        setIsVerifying(false)
      }
    }

    verifySession()
  }, [sessionId, router])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            
            {isVerifying && (
              <>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
                <h1 className="font-display text-2xl font-semibold text-fg mb-2">
                  Verifying your payment...
                </h1>
                <p className="text-muted">
                  Please wait while we confirm your subscription.
                </p>
              </>
            )}

            {isVerified && !error && (
              <>
                <div className="mb-6">
                  <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="font-display text-2xl font-semibold text-fg mb-2">
                  Account Created Successfully!
                </h1>
                <p className="text-muted mb-6">
                  Your 7-day free trial has started. Redirecting to login...
                </p>
              </>
            )}

            {error && (
              <>
                <div className="mb-6">
                  <svg className="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h1 className="font-display text-2xl font-semibold text-fg mb-2">
                  Verification Failed
                </h1>
                <p className="text-muted mb-6">
                  {error}
                </p>
                <button
                  onClick={() => window.location.href = 'https://app.netia.ai/login'}
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Go to Login
                </button>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

