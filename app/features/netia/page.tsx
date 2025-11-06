import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function NetiaIntegrationFeature() {
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
              Netia Integration
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Seamlessly connect Netia with your existing business tools and platforms for a unified customer experience.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            
            {/* Integration Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Website Integration</h3>
                <p className="text-muted">
                  Add Netia to your website with a simple code snippet. Works with any website platform.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Social Media</h3>
                <p className="text-muted">
                  Connect with Facebook Messenger, Instagram DMs, and other social platforms for unified messaging.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">CRM Systems</h3>
                <p className="text-muted">
                  Sync customer data with Salesforce, HubSpot, and other CRM platforms for complete customer profiles.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Scheduling Systems</h3>
                <p className="text-muted">
                  Connect with Calendly, Acuity, and other scheduling tools for seamless appointment booking.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">API Integration</h3>
                <p className="text-muted">
                  Build custom integrations using our REST API and webhooks for advanced automation.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Zapier Integration</h3>
                <p className="text-muted">
                  Connect with 5000+ apps through Zapier for automated workflows and data synchronization.
                </p>
              </div>
            </div>

            {/* Popular Integrations */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Popular Integrations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-surface border border-border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fg mb-2">Twitter</h3>
                  <p className="text-sm text-muted">Direct message integration</p>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fg mb-2">Facebook</h3>
                  <p className="text-sm text-muted">Messenger integration</p>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.203 0 1.03.394 2.138.889 2.738.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fg mb-2">Instagram</h3>
                  <p className="text-sm text-muted">Direct message integration</p>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fg mb-2">Calendly</h3>
                  <p className="text-sm text-muted">Appointment scheduling</p>
                </div>
              </div>
            </div>

            {/* Setup Process */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Easy Integration Setup</h2>
              
              <div className="bg-surface border border-border rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-fg mb-4">Quick Setup Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">1</div>
                        <div>
                          <h4 className="font-semibold text-fg mb-1">Choose Integration</h4>
                          <p className="text-sm text-muted">Select from our list of supported platforms or use our API for custom integrations.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">2</div>
                        <div>
                          <h4 className="font-semibold text-fg mb-1">Configure Settings</h4>
                          <p className="text-sm text-muted">Set up authentication, permissions, and customize how data flows between systems.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">3</div>
                        <div>
                          <h4 className="font-semibold text-fg mb-1">Test & Launch</h4>
                          <p className="text-sm text-muted">Test the integration in a safe environment, then go live with your customers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                    <h4 className="font-semibold text-fg mb-3">Integration Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Unified customer conversations across all platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Automatic data synchronization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Reduced manual data entry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Improved customer experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Ready to integrate Netia?
              </h2>
              <p className="text-muted mb-8">
                Connect Netia with your existing tools and create a seamless customer experience across all channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/integrate"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                >
                  View Integration Guide
                </a>
                <a
                  href="/api-docs"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors btn-enhanced"
                >
                  API Documentation
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









