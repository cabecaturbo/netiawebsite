import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Demo() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-fg mb-4">
              Try the AI Demo
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              See how our AI receptionist answers customer questions about hours, pricing, and services, then handles appointment booking when customers want to schedule.
            </p>
          </div>

          {/* Demo Interface */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Chat Interface */}
              <div className="bg-surface border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-fg mb-4">
                  Live Chat Demo
                </h3>
                
                {/* Chat Messages */}
                <div className="space-y-4 mb-6 h-64 overflow-y-auto">
                  <div className="flex justify-start">
                    <div className="bg-white border border-border rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-fg">Hi! What are your business hours?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-primary-500 text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">We&apos;re open Monday-Friday 9am-6pm and Saturday 10am-4pm. Is there a specific time you&apos;d like to visit?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white border border-border rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-fg">How much does a consultation cost?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-primary-500 text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Our consultation fee is $150 for an hour session. Would you like to schedule one? I can book you for next Tuesday at 2pm or Wednesday at 10am.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white border border-border rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-fg">Tuesday at 2pm works!</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-primary-500 text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Perfect! I&apos;ve scheduled your consultation for Tuesday at 2pm. You&apos;ll receive a confirmation email shortly. Is there anything else I can help you with?</p>
                    </div>
                  </div>
                </div>
                
                {/* Demo Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Try asking about pricing, hours, or services..."
                    className="flex-1 px-4 py-2 border border-border rounded-lg text-sm"
                    disabled
                  />
                  <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors" disabled>
                    Send
                  </button>
                </div>
                <p className="text-xs text-muted mt-2">Demo mode - chat is simulated</p>
              </div>

              {/* Features Showcase */}
              <div className="space-y-6">
                <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
                  <h4 className="font-display text-lg font-semibold text-fg mb-3">
                    Instant Responses
                  </h4>
                  <p className="text-muted text-sm mb-4">
                    Netia answers customer questions in seconds, not hours. No more waiting for business hours or checking voicemails.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 availability</span>
                  </div>
                </div>

                <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
                  <h4 className="font-display text-lg font-semibold text-fg mb-3">
                    Smart Scheduling
                  </h4>
                  <p className="text-muted text-sm mb-4">
                    Customers can book appointments directly through chat. Netia checks your calendar and confirms bookings automatically.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Calendar integration</span>
                  </div>
                </div>

                <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
                  <h4 className="font-display text-lg font-semibold text-fg mb-3">
                    Business Customization
                  </h4>
                  <p className="text-muted text-sm mb-4">
                    Trained on your specific services, pricing, and business hours. Sounds like your team, not a generic bot.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Custom trained</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted mb-8">
                Join thousands of businesses already using Netia to improve their customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-pill rounded-full hover:bg-gray-800 transition-colors"
                >
                  View Pricing
                </a>
                <a
                  href="#trial"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
