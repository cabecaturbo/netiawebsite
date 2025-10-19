'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function CustomSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    brandColors: '',
    logoUrl: '',
    customDomain: '',
    monthlyPlan: '', // pro, business
    additionalRequirements: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically send the data to your backend
    console.log('Custom branding signup:', formData)
    
    setIsSubmitting(false)
    alert('Thank you! We\'ll contact you within 24 hours to discuss your custom branding setup.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl font-semibold text-fg mb-2">
              Custom Branding Setup
            </h1>
            <p className="text-lg text-muted">
              Complete white-label solution with your branding, colors, and domain
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-fg">Business Information</h3>
                
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-fg mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-fg mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-fg mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              {/* Branding Requirements */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-fg">Branding Requirements</h3>
                
                <div>
                  <label htmlFor="brandColors" className="block text-sm font-medium text-fg mb-2">
                    Brand Colors (Hex codes)
                  </label>
                  <input
                    type="text"
                    id="brandColors"
                    name="brandColors"
                    value={formData.brandColors}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="#1677ff, #52c41a, #faad14"
                  />
                </div>

                <div>
                  <label htmlFor="logoUrl" className="block text-sm font-medium text-fg mb-2">
                    Logo URL
                  </label>
                  <input
                    type="url"
                    id="logoUrl"
                    name="logoUrl"
                    value={formData.logoUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://yourwebsite.com/logo.png"
                  />
                </div>

                <div>
                  <label htmlFor="customDomain" className="block text-sm font-medium text-fg mb-2">
                    Custom Domain (optional)
                  </label>
                  <input
                    type="text"
                    id="customDomain"
                    name="customDomain"
                    value={formData.customDomain}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="chat.yourwebsite.com"
                  />
                </div>
              </div>

              {/* Monthly Plan Selection */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-fg">Monthly Plan *</h3>
                <p className="text-sm text-muted">Choose a monthly plan to go with your custom branding.</p>
                
                <div>
                  <label htmlFor="monthlyPlan" className="block text-sm font-medium text-fg mb-2">
                    Monthly Plan *
                  </label>
                  <select
                    id="monthlyPlan"
                    name="monthlyPlan"
                    required
                    value={formData.monthlyPlan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a plan</option>
                    <option value="pro">Pro - $49/month</option>
                    <option value="business">Business - $89/month</option>
                  </select>
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <label htmlFor="additionalRequirements" className="block text-sm font-medium text-fg mb-2">
                  Additional Requirements
                </label>
                <textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  rows={4}
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any specific requirements or customizations you need..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Continue to Payment'}
              </button>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-muted mb-2">Secure payment processing powered by</p>
                <div className="flex justify-center items-center space-x-4">
                  <span className="text-sm font-medium text-gray-600">Stripe</span>
                  <div className="flex space-x-2">
                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
                    <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                    <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">A</div>
                    <div className="w-8 h-5 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">D</div>
                  </div>
                </div>
              </div>
            </form>

            <p className="text-xs text-muted text-center mt-6">
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
