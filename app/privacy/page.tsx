import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted mt-4">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            
            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Information We Collect</h2>
              
              <div className="space-y-6">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Account Information</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Name and email address</li>
                    <li>• Business name and contact information</li>
                    <li>• Payment and billing information</li>
                    <li>• Account preferences and settings</li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Business Profile Data</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Business hours and services</li>
                    <li>• Pricing and product information</li>
                    <li>• Contact details and location</li>
                    <li>• Custom branding and content</li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Customer Conversations</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Chat messages and interactions</li>
                    <li>• Customer questions and AI responses</li>
                    <li>• Conversation analytics and metrics</li>
                    <li>• Feedback and satisfaction ratings</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">How We Use Your Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• Provide AI customer service</li>
                    <li>• Process and respond to inquiries</li>
                    <li>• Maintain and improve our platform</li>
                    <li>• Generate analytics and insights</li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Business Operations</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• Process payments and billing</li>
                    <li>• Provide customer support</li>
                    <li>• Send important service updates</li>
                    <li>• Ensure platform security</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Data Protection & Security</h2>
              
              <div className="space-y-6">
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">🔒 Encryption</h3>
                  <p className="text-muted">
                    All data is encrypted in transit and at rest using industry-standard encryption protocols.
                  </p>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Access Controls</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Multi-factor authentication for all accounts</li>
                    <li>• Role-based access controls</li>
                    <li>• Regular security audits and monitoring</li>
                    <li>• Employee access logging and review</li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Data Isolation</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Each business gets their own secure workspace</li>
                    <li>• Data is never shared between businesses</li>
                    <li>• Regular backups with point-in-time recovery</li>
                    <li>• Secure data centers with physical security</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Your Rights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Access & Portability</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• Download your data at any time</li>
                    <li>• Export conversation history</li>
                    <li>• Access your account information</li>
                    <li>• Request data portability</li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Control & Deletion</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• Update your information anytime</li>
                    <li>• Delete your account and data</li>
                    <li>• Opt out of marketing communications</li>
                    <li>• Request data correction</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third Parties */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Third-Party Services</h2>
              
              <div className="bg-surface border border-border rounded-lg p-6">
                <p className="text-muted mb-4">
                  We use trusted third-party services to provide our platform. These services are carefully vetted for security and privacy compliance:
                </p>
                <ul className="space-y-2 text-muted">
                  <li>• <strong>OpenAI:</strong> Powers our AI responses (data processing agreement in place)</li>
                  <li>• <strong>Stripe:</strong> Secure payment processing (PCI compliant)</li>
                  <li>• <strong>AWS:</strong> Cloud infrastructure and data storage</li>
                  <li>• <strong>Analytics:</strong> Anonymous usage statistics to improve our service</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Questions About Privacy?</h2>
              
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 text-center">
                <h3 className="font-semibold text-fg mb-4">We&apos;re here to help</h3>
                <p className="text-muted mb-6">
                  If you have any questions about this privacy policy or how we handle your data, please don&apos;t hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@netia.ai"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                  >
                    Contact Privacy Team
                  </a>
                  <a
                    href="/help"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors btn-enhanced"
                  >
                    Help Center
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
