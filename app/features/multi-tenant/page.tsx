import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function MultiTenantFeature() {
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
              Multi-tenant Architecture
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Complete data isolation and security for each business. Your data stays private and secure in your own dedicated workspace.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Data Isolation</h3>
                <p className="text-muted">
                  Each business gets their own secure workspace with complete data separation and privacy.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Secure Access</h3>
                <p className="text-muted">
                  Role-based access controls ensure only authorized users can access your business data and settings.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Custom Branding</h3>
                <p className="text-muted">
                  Each tenant can customize their AI assistant with their own branding, colors, and domain.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Analytics & Reporting</h3>
                <p className="text-muted">
                  Tenant-specific analytics and reporting that only shows data for your business and customers.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">API Access</h3>
                <p className="text-muted">
                  Dedicated API endpoints for each tenant with secure authentication and rate limiting.
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
                  Tenant-specific backup and recovery options to ensure your data is always protected and accessible.
                </p>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Multi-tenant Architecture</h2>
              
              <div className="bg-surface border border-border rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Tenant 1 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-fg mb-2">Dental Practice</h3>
                    <div className="space-y-2 text-sm text-muted">
                      <div className="bg-blue-50 border border-blue-200 rounded p-2">
                        <div className="font-medium text-blue-900">Business Profile</div>
                        <div className="text-blue-700">Hours, services, pricing</div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-2">
                        <div className="font-medium text-blue-900">Customer Data</div>
                        <div className="text-blue-700">Conversations, appointments</div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-2">
                        <div className="font-medium text-blue-900">Custom Branding</div>
                        <div className="text-blue-700">Logo, colors, domain</div>
                      </div>
                    </div>
                  </div>

                  {/* Tenant 2 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-fg mb-2">E-commerce Store</h3>
                    <div className="space-y-2 text-sm text-muted">
                      <div className="bg-green-50 border border-green-200 rounded p-2">
                        <div className="font-medium text-green-900">Business Profile</div>
                        <div className="text-green-700">Products, shipping, returns</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded p-2">
                        <div className="font-medium text-green-900">Customer Data</div>
                        <div className="text-green-700">Orders, support tickets</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded p-2">
                        <div className="font-medium text-green-900">Custom Branding</div>
                        <div className="text-green-700">Store theme, colors</div>
                      </div>
                    </div>
                  </div>

                  {/* Tenant 3 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-fg mb-2">Service Business</h3>
                    <div className="space-y-2 text-sm text-muted">
                      <div className="bg-purple-50 border border-purple-200 rounded p-2">
                        <div className="font-medium text-purple-900">Business Profile</div>
                        <div className="text-purple-700">Services, locations, staff</div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded p-2">
                        <div className="font-medium text-purple-900">Customer Data</div>
                        <div className="text-purple-700">Bookings, inquiries</div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded p-2">
                        <div className="font-medium text-purple-900">Custom Branding</div>
                        <div className="text-purple-700">Company branding</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="inline-flex items-center gap-2 text-sm text-muted">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Each tenant operates in complete isolation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Benefits */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Security & Privacy Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">🔒 Complete Data Isolation</h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Your customer data never mixes with other businesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Separate databases and storage for each tenant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No cross-tenant data access or leakage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">🛡️ Enhanced Security</h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Tenant-specific access controls and permissions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Encrypted data transmission and storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular security audits and compliance checks</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">⚙️ Custom Configuration</h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Independent settings and configurations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Custom branding and domain options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Tenant-specific API keys and integrations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">📊 Isolated Analytics</h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Analytics data never crosses tenant boundaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Custom reporting and insights for your business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Data export and backup specific to your tenant</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Experience secure multi-tenant architecture
              </h2>
              <p className="text-muted mb-8">
                Get your own secure workspace with complete data isolation and custom branding options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup/starter"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                >
                  Start Free
                </a>
                <a
                  href="/security"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors btn-enhanced"
                >
                  Learn About Security
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









