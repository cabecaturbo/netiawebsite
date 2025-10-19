import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { AnimatedChat } from "@/components/AnimatedChat"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Demo() {
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
              See it in action
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              See how our AI receptionist answers customer questions about hours, pricing, and services, then handles appointment booking when customers want to schedule.
            </p>
          </div>

          {/* Demo Interface */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Chat Interface */}
              <AnimatedChat />

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
                    When customers want to book, Netia provides a direct link to your scheduling calendar where they can see availability and complete their booking.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Calendar link sharing</span>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
                >
                  View Pricing
                </a>
                <a
                  href="#trial"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors"
                >
                  Start Free
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
