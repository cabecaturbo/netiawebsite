import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function About() {
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
              We Know What It's Like to Miss a Sale
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              We built Netia because we've been there. Missing calls, losing customers, watching money walk out the door. Now every small business can have the customer service of a Fortune 500 company.
            </p>
          </div>

          {/* Mission Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold text-fg mb-6">Our Mission</h2>
                <p className="text-lg text-muted mb-6">
                  We built Netia because we've experienced firsthand how difficult it can be to provide excellent customer service while managing all the other aspects of growing a company.
                </p>
                <p className="text-muted">
                  That's why we built Netia - to give every business access to the kind of customer service that used to be reserved for large corporations with dedicated support teams.
                </p>
              </div>
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fg mb-2">Powered by GPT-4</h3>
                  <p className="text-sm text-muted">Advanced AI that understands context and delivers human-like responses</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-4">Reliability</h3>
                <p className="text-muted">
                  Your customers can count on Netia to be available 24/7, providing consistent, accurate responses every time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-4">Security</h3>
                <p className="text-muted">
                  Your data is protected with enterprise-grade security. Each business gets their own secure workspace.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-4">Growth</h3>
                <p className="text-muted">
                  We grow with you. Start with our free plan and scale as your business and customer needs evolve.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Built by Entrepreneurs</h2>
            <div className="bg-surface border border-border rounded-lg p-8">
              <div className="text-center">
                <p className="text-lg text-muted mb-6">
                  We've been in your shoes. The frustration of missing calls, the stress of trying to be everywhere at once, the fear of losing customers to competitors who answer their phones.
                </p>
                <p className="text-muted">
                  That's why we built Netia - so you never have to choose between growing your business and serving your customers. Now you can do both.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2.3s</div>
                <div className="text-sm text-muted">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-muted">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-sm text-muted">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-sm text-muted">Businesses Served</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="font-display text-2xl font-semibold text-fg mb-4">
              Ready to stop missing calls and start booking more customers?
            </h2>
            <p className="text-muted mb-8">
              Join 500+ businesses who never miss another opportunity. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
              >
                Get Started Free
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors btn-enhanced"
              >
                See Demo
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
