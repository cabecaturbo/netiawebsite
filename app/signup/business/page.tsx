'use client'

import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function BusinessSignup() {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    industry: '',
    websiteUrl: '',
    businessHours: '',
    teamSize: '',
    customRequirements: '',
    onboardingTime: '',
    hearAbout: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // TODO: Integrate with Stripe for payment
    // For now, redirect to dashboard
    window.location.href = '/dashboard'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
                Get Business Plan
              </h1>
              <p className="text-muted">
                Unlimited conversations, custom AI training, and priority support.
              </p>
            </div>

            {/* Plan Summary */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-fg">Business Plan</h3>
                  <p className="text-sm text-muted">Unlimited conversations</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">$89</div>
                  <div className="text-sm text-muted">per month</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-fg mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your business name"
                />
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
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-fg mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="professional-services">Professional Services</option>
                  <option value="retail">Retail</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="fitness">Fitness & Wellness</option>
                  <option value="beauty">Beauty & Personal Care</option>
                  <option value="education">Education</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="websiteUrl" className="block text-sm font-medium text-fg mb-2">
                  Website URL *
                </label>
                <input
                  type="url"
                  id="websiteUrl"
                  name="websiteUrl"
                  required
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label htmlFor="businessHours" className="block text-sm font-medium text-fg mb-2">
                  Business Hours *
                </label>
                <input
                  type="text"
                  id="businessHours"
                  name="businessHours"
                  required
                  value={formData.businessHours}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., Mon-Fri 9am-6pm, Sat 10am-4pm"
                />
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-fg mb-2">
                  Team Size *
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  required
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 employees</option>
                  <option value="6-20">6-20 employees</option>
                  <option value="21-50">21-50 employees</option>
                  <option value="50+">50+ employees</option>
                </select>
              </div>

              <div>
                <label htmlFor="customRequirements" className="block text-sm font-medium text-fg mb-2">
                  Custom Requirements
                </label>
                <textarea
                  id="customRequirements"
                  name="customRequirements"
                  rows={3}
                  value={formData.customRequirements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Describe any specific customization needs..."
                />
              </div>

              <div>
                <label htmlFor="onboardingTime" className="block text-sm font-medium text-fg mb-2">
                  Preferred Onboarding Call Time
                </label>
                <select
                  id="onboardingTime"
                  name="onboardingTime"
                  value={formData.onboardingTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-5pm)</option>
                  <option value="evening">Evening (5pm-8pm)</option>
                  <option value="flexible">I&apos;m flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="hearAbout" className="block text-sm font-medium text-fg mb-2">
                  How did you hear about Netia?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Continue to Payment ($89/month)'}
              </button>
            </form>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-fg mb-2">What happens next?</h4>
              <ul className="text-sm text-muted space-y-1">
                <li>• Secure payment processing via Stripe</li>
                <li>• Immediate access to your dashboard</li>
                <li>• Priority onboarding call scheduled</li>
                <li>• Custom AI training begins</li>
              </ul>
            </div>

            <p className="text-xs text-muted text-center mt-6">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
