import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Pricing() { 
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements */}
      <FloatingBalls />
      
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 relative">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-fg mb-4">
              Choose the right solution for your business
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Powerful AI tools designed for service-based businesses. No setup fees, no contracts, cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* ChatBot Card - Featured */}
            <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  AI ChatBot
                </h3>
                <div className="text-4xl font-bold text-primary-600 mt-4">
                  $79<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Your flagship AI assistant that never sleeps
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Never miss a customer inquiry - 24/7 automated responses
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Instantly answer common questions while you focus on your business
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Qualify leads and collect information automatically
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Schedule appointments without the back-and-forth
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Integrates seamlessly with your website
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Train it on your business - it learns your services and pricing
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional responses that sound like you
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Analytics to understand your customers better
                </li>
              </ul>
              <a
                href="/signup"
                className="block w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Get Started
              </a>
            </div>

            {/* AI Voice Receptionist Card */}
            <div className="bg-surface border border-border rounded-lg p-8 shadow-sm flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  AI Voice Receptionist
                </h3>
                <div className="text-4xl font-bold text-fg mt-4">
                  $199<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Professional phone coverage without the overhead
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Answer every call, even when you're with customers
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Natural conversations that sound human
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Book appointments directly to your calendar
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Handle multiple calls simultaneously
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Transfer important calls to you
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Capture customer information and requests
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Works after hours and on weekends
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No more missed opportunities
                </li>
              </ul>
              <a
                href="/signup"
                className="block w-full px-6 py-3 bg-surface border border-border rounded-lg text-fg font-medium hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 mt-auto text-center"
              >
                Get Started
              </a>
            </div>

            {/* AI Lead Follow-Up Card */}
            <div className="bg-surface border border-border rounded-lg p-8 shadow-sm flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  AI Lead Follow-Up
                </h3>
                <div className="text-4xl font-bold text-fg mt-4">
                  $199<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Turn more leads into customers on autopilot
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automatically reach out to new leads within minutes
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personalized follow-up messages that convert
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Nurture leads until they're ready to buy
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Never let a lead go cold again
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Schedule follow-ups based on customer behavior
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Track which messages get responses
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free up your time for closing deals
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Consistent follow-up that builds trust
                </li>
              </ul>
              <a
                href="/signup"
                className="block w-full px-6 py-3 bg-surface border border-border rounded-lg text-fg font-medium hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 mt-auto text-center"
              >
                Get Started
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}



