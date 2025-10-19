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
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Start free and upgrade as you grow. All plans include AI responses powered by OpenAI.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            
            {/* Starter Card */}
            <div className="bg-surface border border-border rounded-lg p-8 shadow-sm flex flex-col h-full hover-lift transition-all duration-500 group animate-fade-in-up">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  Starter
                </h3>
                <div className="text-4xl font-bold text-fg mt-4">
                  $0<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Perfect for small businesses getting started with AI customer service
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  50 conversations/month
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic AI responses
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email support
                </li>
              </ul>
              <a
                href="/signup/starter"
                className="block w-full px-6 py-3 bg-surface border border-border rounded-lg text-fg font-medium hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 mt-auto text-center"
              >
                Get Started
              </a>
            </div>

            {/* Pro Card */}
            <div className="bg-surface border border-border rounded-lg p-8 shadow-sm flex flex-col h-full">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  Pro
                </h3>
                <div className="text-4xl font-bold text-fg mt-4">
                  $49<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Perfect for growing businesses ready to scale their customer service
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All Starter features
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  500 conversations/month
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1 website integration
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1 scheduling link
                </li>
              </ul>
              <a
                href="/signup/pro"
                className="block w-full px-6 py-3 bg-surface border border-border rounded-lg text-fg font-medium hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 mt-auto text-center"
              >
                Get Started
              </a>
            </div>

            {/* Business Card */}
            <div className="bg-surface border border-border rounded-lg p-8 shadow-sm flex flex-col h-full">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  Business
                </h3>
                <div className="text-4xl font-bold text-fg mt-4">
                  $89<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Perfect for established businesses with high-volume customer interactions
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All Pro features
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited conversations
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited scheduling links
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom AI training
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom branding available
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-muted mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <a
                href="/signup/business"
                className="block w-full px-6 py-3 bg-surface border border-border rounded-lg text-fg font-medium hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 mt-auto text-center"
              >
                Get Started
              </a>
            </div>

            {/* Custom Card */}
            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-lg p-8 shadow-sm flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  Custom
                </h3>
                <div className="text-4xl font-bold text-primary-600 mt-4">
                  $299<span className="text-lg font-normal text-muted"> one-time</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Complete white-label solution with custom branding and domain
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom domain & branding
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Logo & color customization
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Remove all third-party branding
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Setup & configuration included
                </li>
              </ul>
              <a
                href="/signup/custom"
                className="block w-full px-6 py-3 bg-surface border border-border rounded-lg text-fg font-medium hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 mt-auto text-center"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* AI Voice Receptionist Coming Soon */}
          <div className="mt-16 max-w-md mx-auto">
            <div className="bg-surface border border-border rounded-lg p-8 shadow-sm flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  AI Voice Receptionist
                </h3>
                <div className="text-sm text-primary-600 font-medium mb-4">
                  Coming Soon
                </div>
                <p className="text-muted text-sm">
                  Revolutionary AI voice receptionist that answers calls, schedules appointments, 
                  and handles customer inquiries with natural conversation.
                </p>
              </div>
              <a
                href="/waitlist"
                className="block w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}



