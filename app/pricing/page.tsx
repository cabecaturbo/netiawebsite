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
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Chat</div>
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  AI ChatBot
                </h3>
                <div className="text-4xl font-bold text-blue-600 mt-4">
                  $79<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Your AI assistant that never sleeps
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>24/7 Customer Service</strong> - Never miss a customer question again</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Instant Answers</strong> - Customers get help right away</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Smart Scheduling</strong> - Books appointments without the hassle</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Lead Capture</strong> - Gets customer info while you work</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Easy Setup</strong> - Works with your website in minutes</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Smart Learning</strong> - Gets better at helping your customers</span>
                </li>
              </ul>
              <a
                href="/signup"
                className="block w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Get Started
              </a>
            </div>

            {/* AI Voice Receptionist Card */}
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">Voice</div>
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  AI Voice Receptionist
                </h3>
                <div className="text-4xl font-bold text-green-600 mt-4">
                  $199<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Professional phone coverage without the overhead
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Never Miss a Call</strong> - Answers every call, even when you&apos;re busy</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Natural Conversations</strong> - Sounds like a real person on the phone</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Smart Booking</strong> - Books appointments right to your calendar</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Multiple Calls</strong> - Handles many calls at the same time</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Smart Transfer</strong> - Sends important calls to you</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>24/7 Coverage</strong> - Works nights and weekends too</span>
                </li>
              </ul>
              <a
                href="/signup"
                className="block w-full px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Get Started
              </a>
            </div>

            {/* AI Voice Lead Follow-Up Card */}
            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">Voice</div>
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  AI Voice Lead Follow-Up
                </h3>
                <div className="text-4xl font-bold text-purple-600 mt-4">
                  $199<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Turn more leads into customers on autopilot
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Instant Follow-Up</strong> - Reaches out to new leads in minutes</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Personal Messages</strong> - Custom messages that get responses</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Smart Nurturing</strong> - Keeps leads warm until they&apos;re ready</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>No Cold Leads</strong> - Never lets a lead go cold again</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Smart Timing</strong> - Knows when to follow up for best results</span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>More Sales Time</strong> - Frees you up to close deals</span>
                </li>
              </ul>
              <a
                href="/signup"
                className="block w-full px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors mt-auto text-center hover-lift btn-enhanced"
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



