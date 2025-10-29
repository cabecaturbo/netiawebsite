'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from 'next/link'

export default function CancelComplete() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            
            <div className="mb-6">
              <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="font-display text-2xl font-semibold text-fg mb-2">
              Subscription Updated
            </h1>
            <p className="text-muted mb-6">
              Your subscription changes have been saved. You can close this window.
            </p>

            <div className="space-y-3">
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Return to Home
              </Link>
              <div>
                <a
                  href="https://app.netia.ai/dashboard"
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Go to Dashboard →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

