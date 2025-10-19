import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CheckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Join the Waitlist - Netia AI Voice Receptionist',
  description: 'Get early access to Netia\'s revolutionary AI voice receptionist. Be the first to experience natural voice conversations with your customers.',
  keywords: ['AI voice receptionist', 'waitlist', 'early access', 'voice AI', 'Netia waitlist'],
}

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            
            <h1 className="font-display font-semibold text-4xl md:text-5xl text-fg mb-6">
              Join the Waitlist
            </h1>
            <p className="text-xl text-muted mb-8">
              Be the first to experience our revolutionary AI voice receptionist that can answer calls, 
              schedule appointments, and handle customer inquiries with natural conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-fg mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-fg mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-fg mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Enter your company name"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-fg mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  >
                    <option value="">Select your industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="dental">Dental</option>
                    <option value="legal">Legal</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="retail">Retail</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="fitness">Fitness</option>
                    <option value="beauty">Beauty & Wellness</option>
                    <option value="automotive">Automotive</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-fg mb-2">
                    Tell us about your use case
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-none"
                    placeholder="How do you plan to use our AI voice receptionist?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 hover-lift btn-enhanced"
                >
                  Join the Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-fg mb-4">
                What You&apos;ll Get
              </h2>
              <p className="text-lg text-muted">
                Early access to the most advanced AI voice receptionist technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-fg mb-2">Early Access</h3>
                  <p className="text-muted">Be among the first to experience our AI voice receptionist when it launches.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-fg mb-2">Exclusive Pricing</h3>
                  <p className="text-muted">Special launch pricing and exclusive offers for waitlist members.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-fg mb-2">Priority Support</h3>
                  <p className="text-muted">Dedicated support and onboarding assistance for early adopters.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-fg mb-2">Feature Input</h3>
                  <p className="text-muted">Help shape the product with direct feedback to our development team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display font-semibold text-3xl md:text-4xl mb-6">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already on our waitlist for the future of AI voice technology.
            </p>
            <a
              href="#waitlist-form"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover-lift btn-enhanced"
            >
              Join the Waitlist Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
