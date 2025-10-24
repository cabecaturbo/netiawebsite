"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Pricing() {
  const handleGetStarted = () => {
    // Redirect to starter signup for AI ChatBot
    window.location.href = '/signup/starter'
  }

  const handleWaitlistSignup = () => {
    // Redirect to waitlist for voice products
    window.location.href = '/waitlist'
  } 
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
              Stop Losing Money on Missed Calls
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Every missed call costs you money. Our AI never sleeps, never takes breaks, and never misses an opportunity to book your next customer.
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
                  Turn website visitors into customers instantly
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
              <button
                onClick={handleGetStarted}
                className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Start 7 day free trial
              </button>
            </div>

            {/* AI Voice Receptionist Card */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-700 border-2 border-blue-600 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="text-blue-200 font-semibold text-sm uppercase tracking-wide mb-2">Voice</div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  AI Receptionist
                </h3>
                <div className="text-4xl font-bold text-white mt-4">
                  $199<span className="text-lg font-normal text-blue-200">/month</span>
                </div>
                <p className="text-sm text-blue-200 mt-2">
                  Answer every phone call like a pro
                </p>
                <div className="mt-2">
                  <span className="inline-block bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                </div>
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
              <button
                onClick={handleWaitlistSignup}
                className="block w-full px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-blue-50 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Sign up for waitlist
              </button>
            </div>

            {/* AI Voice Lead Follow-Up Card */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-700 border-2 border-blue-600 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="text-blue-200 font-semibold text-sm uppercase tracking-wide mb-2">Voice</div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  AI Lead Follow-Up
                </h3>
                <div className="text-4xl font-bold text-white mt-4">
                  $199<span className="text-lg font-normal text-blue-200">/month</span>
                </div>
                <p className="text-sm text-blue-200 mt-2">
                  Turn &apos;maybe&apos; into &apos;yes&apos; with smart follow-ups
                </p>
                <div className="mt-2">
                  <span className="inline-block bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                </div>
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
              <button
                onClick={handleWaitlistSignup}
                className="block w-full px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-blue-50 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Sign up for waitlist
              </button>
            </div>
          </div>

          {/* Selection Flow */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div id="ai-selection-box" className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative z-10">
                <h3 className="font-display text-3xl font-bold text-fg mb-2 text-center">
                  Choose Your AI Solutions
                </h3>
                <p className="text-muted text-center mb-8 text-lg">Select the AI tools that will transform your business</p>
                <div className="space-y-4">
                  <label className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-md group has-[:checked]:bg-blue-200 has-[:checked]:border-blue-300 has-[:checked]:text-blue-800">
                    <input type="checkbox" className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400 focus:ring-2" />
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-fg text-lg group-hover:text-blue-700 transition-colors">AI ChatBot - $79/month</div>
                      <div className="text-muted">AI assistant for your website</div>
                    </div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </label>
                  
                  <label className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-md group has-[:checked]:bg-blue-200 has-[:checked]:border-blue-300 has-[:checked]:text-blue-800">
                    <input type="checkbox" className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400 focus:ring-2" />
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-fg text-lg group-hover:text-blue-700 transition-colors">AI Receptionist - $199/month</div>
                      <div className="text-muted">AI receptionist for your phone calls</div>
                      <div className="text-xs text-yellow-600 font-semibold mt-1">Coming Soon</div>
                    </div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </label>
                  
                  <label className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-md group has-[:checked]:bg-blue-200 has-[:checked]:border-blue-300 has-[:checked]:text-blue-800">
                    <input type="checkbox" className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400 focus:ring-2" />
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-fg text-lg group-hover:text-blue-700 transition-colors">AI Lead Follow-Up - $199/month</div>
                      <div className="text-muted">AI follow-up for your leads</div>
                      <div className="text-xs text-yellow-600 font-semibold mt-1">Coming Soon</div>
                    </div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </label>
                </div>
              
                <div className="mt-8 text-center">
                  <button
                    onClick={handleGetStarted}
                    className="inline-block px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-200 active:bg-blue-200 transition-colors hover-lift btn-enhanced"
                  >
                    Start 7 day free trial
                  </button>
                  <p className="text-sm text-muted mt-3">
                    Processed by Stripe • Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}



