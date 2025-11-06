import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Help() {
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
              Help Center
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Find answers to common questions and get the support you need to make the most of Netia.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 border border-border rounded-lg text-fg placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Getting Started */}
            <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg mb-3">Getting Started</h3>
              <p className="text-muted mb-4">Learn how to set up your Netia account and configure your first AI assistant.</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Account setup and verification</li>
                <li>• Business profile configuration</li>
                <li>• First AI conversation setup</li>
                <li>• Integration with your website</li>
              </ul>
            </div>

            {/* Integration */}
            <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg mb-3">Integration</h3>
              <p className="text-muted mb-4">Connect Netia with your existing systems and platforms.</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Website integration</li>
                <li>• Social media platforms</li>
                <li>• CRM systems</li>
                <li>• API documentation</li>
              </ul>
            </div>

            {/* Troubleshooting */}
            <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg mb-3">Troubleshooting</h3>
              <p className="text-muted mb-4">Common issues and how to resolve them quickly.</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• AI not responding</li>
                <li>• Integration issues</li>
                <li>• Performance problems</li>
                <li>• Account access issues</li>
              </ul>
            </div>

            {/* Billing */}
            <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg mb-3">Billing & Plans</h3>
              <p className="text-muted mb-4">Manage your subscription and billing information.</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Plan changes</li>
                <li>• Payment methods</li>
                <li>• Invoice downloads</li>
                <li>• Cancellation process</li>
              </ul>
            </div>

            {/* API */}
            <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg mb-3">API & Development</h3>
              <p className="text-muted mb-4">Technical resources for developers and advanced users.</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• API endpoints</li>
                <li>• Authentication</li>
                <li>• Webhooks</li>
                <li>• SDKs and libraries</li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg mb-3">Security & Privacy</h3>
              <p className="text-muted mb-4">Learn about our security measures and data protection.</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Data encryption</li>
                <li>• Privacy policy</li>
                <li>• Security best practices</li>
                <li>• Compliance standards</li>
              </ul>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-16">
            <h2 className="font-display text-2xl font-semibold text-fg mb-4">
              Still need help?
            </h2>
            <p className="text-muted mb-8">
              Our support team is here to help you succeed with Netia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@netia.ai"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
              >
                Contact Support
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors btn-enhanced"
              >
                See it in action
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}









