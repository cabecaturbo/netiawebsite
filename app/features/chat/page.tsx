import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function ChatFeature() {
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
              AI Chat
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Intelligent conversations that feel natural and provide instant, accurate responses to your customers&apos; questions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Natural Conversations</h3>
                <p className="text-muted">
                  Powered by GPT-4, our AI understands context and responds naturally to any customer question.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">2.3s Response Time</h3>
                <p className="text-muted">
                  Lightning-fast responses that keep your customers engaged and satisfied with instant answers.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Always Available</h3>
                <p className="text-muted">
                  24/7 availability means your customers get help whenever they need it, day or night.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Analytics & Insights</h3>
                <p className="text-muted">
                  Track conversation metrics, customer satisfaction, and identify common questions to improve your service.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Customizable Responses</h3>
                <p className="text-muted">
                  Train the AI with your specific business information, policies, and preferred communication style.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Smart Escalation</h3>
                <p className="text-muted">
                  Automatically escalates complex issues to human agents when the AI determines it&apos;s necessary.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">How AI Chat Works</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-semibold text-fg mb-3">Customer Asks Question</h3>
                  <p className="text-muted">Customer types their question in your website chat widget or social media platform.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-semibold text-fg mb-3">AI Processes Request</h3>
                  <p className="text-muted">Our AI analyzes the question using your business profile and provides an accurate response.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-semibold text-fg mb-3">Instant Response</h3>
                  <p className="text-muted">Customer receives a helpful, personalized answer in under 3 seconds.</p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Common Use Cases</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Business Hours & Location</h3>
                  <p className="text-muted mb-4">&quot;What are your hours?&quot; &quot;Where are you located?&quot; &quot;Are you open on weekends?&quot;</p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-muted italic">&quot;We&apos;re open Monday-Friday 9AM-5PM and Saturday 10AM-2PM. We&apos;re located at 123 Main Street, Downtown.&quot;</p>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Services & Pricing</h3>
                  <p className="text-muted mb-4">&quot;What services do you offer?&quot; &quot;How much does a cleaning cost?&quot; &quot;Do you take insurance?&quot;</p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-muted italic">&quot;We offer general dentistry, cleanings, and cosmetic procedures. A cleaning costs $150. Yes, we accept most major insurance plans.&quot;</p>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Appointment Booking</h3>
                  <p className="text-muted mb-4">&quot;Can I book an appointment?&quot; &quot;Do you have availability tomorrow?&quot; &quot;How do I cancel?&quot;</p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-muted italic">&quot;I can help you book an appointment! Let me check our availability and get you scheduled.&quot;</p>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">General Information</h3>
                  <p className="text-muted mb-4">&quot;What should I bring to my appointment?&quot; &quot;Do you have parking?&quot; &quot;What&apos;s your cancellation policy?&quot;</p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-muted italic">&quot;Please bring your ID and insurance card. We have free parking in the rear. We require 24 hours notice for cancellations.&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Ready to see AI Chat in action?
              </h2>
              <p className="text-muted mb-8">
                Experience how our AI can handle your customer questions with natural, helpful responses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                >
                  Try Live Demo
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors btn-enhanced"
                >
                  View Pricing
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
