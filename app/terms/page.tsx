import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              These terms govern your use of Netia's AI customer service platform.
            </p>
            <p className="text-sm text-muted mt-4">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            
            {/* Acceptance */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Acceptance of Terms</h2>
              <div className="bg-surface border border-border rounded-lg p-6">
                <p className="text-muted">
                  By accessing or using Netia's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
                </p>
              </div>
            </section>

            {/* Service Description */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Service Description</h2>
              <div className="space-y-4">
                <p className="text-muted">
                  Netia provides AI-powered customer service solutions that help businesses automate customer support through intelligent chatbots and virtual assistants.
                </p>
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Our Services Include:</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• AI-powered customer service chatbots</li>
                    <li>• Business profile management</li>
                    <li>• Website integration tools</li>
                    <li>• Analytics and reporting</li>
                    <li>• API access for developers</li>
                    <li>• Custom branding options</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">User Responsibilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Account Security</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• Keep your login credentials secure</li>
                    <li>• Notify us of any security breaches</li>
                    <li>• Use strong, unique passwords</li>
                    <li>• Enable two-factor authentication</li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Content Guidelines</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• Provide accurate business information</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Comply with applicable laws</li>
                    <li>• Maintain professional content</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Prohibited Uses */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Prohibited Uses</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-fg mb-3">You may not use Netia to:</h3>
                <ul className="space-y-2 text-muted">
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Transmit harmful or malicious content</li>
                  <li>• Attempt to gain unauthorized access to our systems</li>
                  <li>• Use the service for illegal activities</li>
                  <li>• Interfere with other users' access to the service</li>
                  <li>• Reverse engineer or attempt to extract source code</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Payment Terms</h2>
              
              <div className="space-y-6">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Billing</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Subscription fees are billed in advance</li>
                    <li>• Payment is due on the billing date</li>
                    <li>• Failed payments may result in service suspension</li>
                    <li>• All fees are non-refundable unless otherwise stated</li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Cancellation</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• You may cancel your subscription at any time</li>
                    <li>• Cancellation takes effect at the end of your billing period</li>
                    <li>• No refunds for partial months</li>
                    <li>• Data will be retained for 30 days after cancellation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Intellectual Property</h2>
              
              <div className="space-y-6">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Netia's Rights</h3>
                  <p className="text-muted">
                    Netia retains all rights, title, and interest in our platform, including all intellectual property rights. You may not copy, modify, or distribute our software without permission.
                  </p>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">Your Content</h3>
                  <p className="text-muted">
                    You retain ownership of your business data and content. By using our service, you grant us a license to use your content to provide our services to you.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Limitation of Liability</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-muted">
                  Netia provides services "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid for our services in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Changes to Terms</h2>
              
              <div className="bg-surface border border-border rounded-lg p-6">
                <p className="text-muted">
                  We may update these terms from time to time. We will notify you of significant changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">Questions About Terms?</h2>
              
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 text-center">
                <h3 className="font-semibold text-fg mb-4">We're here to help</h3>
                <p className="text-muted mb-6">
                  If you have any questions about these terms or need clarification on any section, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:legal@netia.ai"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                  >
                    Contact Legal Team
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
