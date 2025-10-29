'use client'

import { useRouter } from 'next/navigation'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from 'next/link'

export default function SignupCancel() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            
            <div className="mb-6">
              <svg className="w-16 h-16 text-orange-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h1 className="font-display text-2xl font-semibold text-fg mb-2">
              Payment Cancelled
            </h1>
            <p className="text-muted mb-6">
              Your account was created, but the payment process was cancelled. 
              To start your 7-day free trial, you&apos;ll need to complete the payment setup.
            </p>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-fg mb-2">What happens next?</h3>
              <ul className="text-sm text-muted text-left space-y-1">
                <li>• Your account has been created</li>
                <li>• You can log in with your email and password</li>
                <li>• Complete payment setup to start your trial</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/login')}
                className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Log In
              </button>
              <Link
                href="/pricing"
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-surface transition-colors inline-block"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

