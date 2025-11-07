'use client'

import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function StarterSignup() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors([])
    setFieldErrors({})

    // Client-side validation
    if (formData.password !== formData.passwordConfirmation) {
      setFieldErrors({ passwordConfirmation: 'Passwords do not match' })
      setIsSubmitting(false)
      return
    }

    try {
      // Step 1: Register user
      const registerResponse = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData.companyName,
          email: formData.email,
          password: formData.password,
          passwordConfirmation: formData.passwordConfirmation,
        }),
      })

      const registerData = await registerResponse.json()

      if (!registerResponse.ok) {
        // Handle backend validation errors
        if (registerData.error?.errors) {
          const newFieldErrors: Record<string, string> = {}
          Object.keys(registerData.error.errors).forEach(key => {
            const errorMessages = registerData.error.errors[key]
            if (Array.isArray(errorMessages) && errorMessages.length > 0) {
              newFieldErrors[key] = errorMessages[0]
            }
          })
          setFieldErrors(newFieldErrors)
        } else {
          setErrors([registerData.error?.message || 'Registration failed'])
        }
        setIsSubmitting(false)
        return
      }

      // Store tokens and account info temporarily (will be stored permanently after Stripe checkout)
      const tokens = registerData.data
      const accountId = registerData.data?.account_id || registerData.data?.accountId || registerData.data?.user_id || null
      
      sessionStorage.setItem('temp_tokens', JSON.stringify(tokens))
      sessionStorage.setItem('temp_account_email', formData.email)
      if (accountId) {
        sessionStorage.setItem('temp_account_id', accountId.toString())
      }

      // Ensure we have a valid Netia account ID before proceeding to Stripe
      if (!accountId) {
        setErrors(['Unable to determine account ID after registration. Please try again.'])
        setIsSubmitting(false)
        return
      }

      // Step 2: Create Stripe Checkout Session
      const checkoutResponse = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          accountId,
        }),
      })

      const checkoutData = await checkoutResponse.json()

      if (!checkoutResponse.ok) {
        // Log full error details for debugging
        console.error('Checkout error:', checkoutData)
        
        // Build error message with details
        let errorMessage = checkoutData.error || 'Failed to create checkout session'
        if (checkoutData.code) {
          errorMessage += ` (Code: ${checkoutData.code})`
        }
        if (checkoutData.param) {
          errorMessage += ` (Param: ${checkoutData.param})`
        }
        if (checkoutData.message) {
          errorMessage += ` - ${checkoutData.message}`
        }
        
        setErrors([errorMessage])
        setIsSubmitting(false)
        return
      }

      // Step 3: Redirect to Stripe Checkout
      if (checkoutData.url) {
        window.location.href = checkoutData.url
      } else {
        setErrors(['Failed to redirect to payment'])
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Signup error:', error)
      setErrors(['Network error. Please try again.'])
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    // Clear field errors when user types
    if (fieldErrors[e.target.name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[e.target.name]
        return newErrors
      })
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
                Start Your Free Trial
              </h1>
              <p className="text-muted">
                Get started with your 7-day free trial.
              </p>
            </div>

            {/* Plan Summary */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-fg">Netia AI 24/7 Chatbot</h3>
                  <p className="text-sm text-muted">7-day free trial</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">Free</div>
                  <div className="text-sm text-muted">for 7 days</div>
                </div>
              </div>
            </div>

            {/* Error Messages */}
            {errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                {errors.map((error, i) => (
                  <p key={i} className="text-red-600 text-sm">{error}</p>
                ))}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-fg mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    fieldErrors.company_name ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Your business name"
                />
                {fieldErrors.company_name && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.company_name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-fg mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    fieldErrors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="your@email.com"
                />
                {fieldErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-fg mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    fieldErrors.password ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Minimum 8 characters"
                />
                {fieldErrors.password && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="passwordConfirmation" className="block text-sm font-medium text-fg mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  required
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    fieldErrors.password_confirmation || fieldErrors.passwordConfirmation ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Re-enter your password"
                />
                {(fieldErrors.password_confirmation || fieldErrors.passwordConfirmation) && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldErrors.password_confirmation || fieldErrors.passwordConfirmation}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Creating Your Account...' : 'Start Free Trial'}
              </button>
            </form>

            <p className="text-xs text-muted text-center mt-6">
              By signing up, you agree to our Terms of Service and Privacy Policy.
              You&apos;ll be redirected to Stripe to add your payment method for after your trial ends.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

