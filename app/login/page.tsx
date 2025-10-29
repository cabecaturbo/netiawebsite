'use client'

import { useEffect } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Login() {
  useEffect(() => {
    // Redirect to app.netia.ai login page
    window.location.href = 'https://app.netia.ai/login'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <h1 className="font-display text-2xl font-semibold text-fg mb-2">
              Redirecting to login...
            </h1>
            <p className="text-muted">
              Taking you to your Netia dashboard.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
