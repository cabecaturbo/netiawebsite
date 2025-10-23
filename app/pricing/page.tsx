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
            
            {/* ChatBot Card */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">Chat</div>
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  AI ChatBot
                </h3>
                <div className="text-4xl font-bold text-blue-700 mt-4">
                  $79<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  AI assistant for your website
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Works 24/7</strong></span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Powered by OpenAI</strong></span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Books Appointments</strong></span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Answers Questions</strong></span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Easy Setup</strong></span>
                </li>
              </ul>
              <a
                href="/signup"
                className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Get Started
              </a>
            </div>

            {/* AI Voice Receptionist Card */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-700 border-2 border-blue-600 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="text-blue-200 font-semibold text-sm uppercase tracking-wide mb-2">Voice</div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  AI Voice Receptionist
                </h3>
                <div className="text-4xl font-bold text-white mt-4">
                  $199<span className="text-lg font-normal text-blue-200">/month</span>
                </div>
                <p className="text-sm text-blue-200 mt-2">
                  AI receptionist for your phone calls
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Answers Every Call</strong></span>
                </li>
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Natural Voice</strong></span>
                </li>
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Books Appointments</strong></span>
                </li>
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Smart Transfer</strong></span>
                </li>
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Works 24/7</strong></span>
                </li>
              </ul>
              <a
                href="/signup"
                className="block w-full px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-blue-50 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Get Started
              </a>
            </div>

            {/* AI Voice Lead Follow-Up Card */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-700 border-2 border-blue-600 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="text-blue-200 font-semibold text-sm uppercase tracking-wide mb-2">Voice</div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  AI Voice Lead Follow-Up
                </h3>
                <div className="text-4xl font-bold text-white mt-4">
                  $199<span className="text-lg font-normal text-blue-200">/month</span>
                </div>
                <p className="text-sm text-blue-200 mt-2">
                  AI follow-up for your leads
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Quick Follow-Up</strong></span>
                </li>
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Personal Voice</strong></span>
                </li>
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Keeps Following Up</strong></span>
                </li>
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Smart Timing</strong></span>
                </li>
                <li className="flex items-start text-blue-100">
                  <svg className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Works 24/7</strong></span>
                </li>
              </ul>
              <a
                href="/signup"
                className="block w-full px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-blue-50 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Selection Flow */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-surface border border-border rounded-lg p-8 shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-fg mb-6 text-center">
                Choose Your AI Solutions
              </h3>
              <div className="space-y-4">
                <label className="flex items-center p-4 border border-border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <div className="ml-4 flex-1">
                    <div className="font-medium text-fg">AI ChatBot - $79/month</div>
                    <div className="text-sm text-muted">AI assistant for your website</div>
                  </div>
                </label>
                
                <label className="flex items-center p-4 border border-border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <div className="ml-4 flex-1">
                    <div className="font-medium text-fg">AI Voice Receptionist - $199/month</div>
                    <div className="text-sm text-muted">AI receptionist for your phone calls</div>
                  </div>
                </label>
                
                <label className="flex items-center p-4 border border-border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <div className="ml-4 flex-1">
                    <div className="font-medium text-fg">AI Voice Lead Follow-Up - $199/month</div>
                    <div className="text-sm text-muted">AI follow-up for your leads</div>
                  </div>
                </label>
              </div>
              
              <div className="mt-8 text-center">
                <a
                  href="/signup"
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors hover-lift btn-enhanced"
                >
                  Get Started
                </a>
                <p className="text-sm text-muted mt-3">
                  Credit card required • Processed by Stripe • Cancel anytime
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}



