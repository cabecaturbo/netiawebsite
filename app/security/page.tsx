import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Security() {
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
              Security
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Your data security is our top priority. Learn about the comprehensive security measures we implement to protect your business and customer information.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            
            {/* Security Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="font-display text-3xl font-semibold text-fg mb-6">Security First</h2>
                <p className="text-lg text-muted mb-6">
                  We take data security seriously and implement industry-standard practices to protect your business and customer information.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted">HTTPS/TLS Encryption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted">Rate Limiting & Abuse Prevention</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted">Secure API Authentication</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fg mb-2">Input Validation</h3>
                  <p className="text-sm text-muted">All webhook requests are validated to prevent malicious payloads and ensure data integrity.</p>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Data Encryption</h3>
                <p className="text-muted">
                  All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Access Controls</h3>
                <p className="text-muted">
                  Secure authentication through environment variables and API keys protect your chatbot configuration.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Error Handling</h3>
                <p className="text-muted">
                  Comprehensive error handling with logging and fallback mechanisms to maintain service reliability.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Data Isolation</h3>
                <p className="text-muted">
                  Each business gets their own secure workspace with complete data isolation.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Backup & Recovery</h3>
                <p className="text-muted">
                  Automated daily backups with point-in-time recovery and 99.9% uptime guarantee.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Environment Isolation</h3>
                <p className="text-muted">
                  Safe development practices with DRY_RUN mode and environment-based configurations.
                </p>
              </div>
            </div>

            {/* Data Protection Details */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Data Protection Details</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-surface border border-border rounded-lg p-8">
                <h3 className="font-display text-xl font-semibold text-fg mb-4">Security Practices</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>HTTPS/TLS:</strong> All web traffic encrypted in transit using secure protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Rate Limiting:</strong> Protection against abuse and DDoS attacks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Error Logging:</strong> Comprehensive logging for security monitoring and incident response</span>
                  </li>
                </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-8">
                <h3 className="font-display text-xl font-semibold text-fg mb-4">Access Security</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>API Keys:</strong> All external API calls authenticated with secure keys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Environment Variables:</strong> Sensitive configuration stored securely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Request Validation:</strong> All incoming requests validated before processing</span>
                  </li>
                </ul>
                </div>
              </div>
            </div>

            {/* Infrastructure Security */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Infrastructure Security</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fg mb-2">Cloud Hosting</h3>
                  <p className="text-sm text-muted">Deployed on secure cloud infrastructure</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fg mb-2">Regular Updates</h3>
                  <p className="text-sm text-muted">Dependencies and packages kept up to date</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fg mb-2">Data Privacy</h3>
                  <p className="text-sm text-muted">Commitment to protecting user data</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Questions about security?
              </h2>
              <p className="text-muted mb-8">
                We&apos;re committed to security best practices and continuous improvement. Contact us with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@netia.ai"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                >
                  Contact Support
                </a>
                <a
                  href="/privacy"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors btn-enhanced"
                >
                  Privacy Policy
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









