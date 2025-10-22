import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function ProfilesFeature() {
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
              Business Profiles
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Create detailed business profiles that help your AI assistant provide accurate, personalized responses to every customer question.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Business Hours</h3>
                <p className="text-muted">
                  Set your operating hours, holidays, and special schedules so customers always know when you&apos;re available.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Location & Contact</h3>
                <p className="text-muted">
                  Store your address, phone numbers, email, and social media links for easy customer access.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Services & Pricing</h3>
                <p className="text-muted">
                  List all your services with detailed descriptions and current pricing to help customers make informed decisions.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Policies & Procedures</h3>
                <p className="text-muted">
                  Document your cancellation policies, payment methods, insurance acceptance, and other important procedures.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">Custom Branding</h3>
                <p className="text-muted">
                  Add your logo, brand colors, and custom domain to make the AI assistant feel like part of your brand.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 hover-lift transition-all duration-500">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.35 0 4.27 1.69 4.27 3.78 0 1.08-.8 2.05-2.05 2.05H9.5c-1.15 0-2.05-.97-2.05-2.05 0-1.09.9-1.98 2.05-1.98z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c-1.15 0-2.05.9-2.05 2.05 0 1.15.9 2.05 2.05 2.05s2.05-.9 2.05-2.05c0-1.15-.9-2.05-2.05-2.05z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">FAQ Management</h3>
                <p className="text-muted">
                  Create and manage frequently asked questions with detailed answers to improve response accuracy.
                </p>
              </div>
            </div>

            {/* Profile Builder */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Easy Profile Setup</h2>
              
              <div className="bg-surface border border-border rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-fg mb-4">Step-by-Step Builder</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">1</div>
                        <div>
                          <h4 className="font-semibold text-fg mb-1">Basic Information</h4>
                          <p className="text-sm text-muted">Enter your business name, description, and contact details.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">2</div>
                        <div>
                          <h4 className="font-semibold text-fg mb-1">Services & Pricing</h4>
                          <p className="text-sm text-muted">Add your services, pricing, and any special offers or packages.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">3</div>
                        <div>
                          <h4 className="font-semibold text-fg mb-1">Policies & Hours</h4>
                          <p className="text-sm text-muted">Set your business hours, policies, and important procedures.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">4</div>
                        <div>
                          <h4 className="font-semibold text-fg mb-1">Custom Branding</h4>
                          <p className="text-sm text-muted">Upload your logo, set brand colors, and customize the experience.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                    <h4 className="font-semibold text-fg mb-3">Profile Preview</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted">Business Name:</span>
                        <span className="text-fg">Acme Dental Practice</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Hours:</span>
                        <span className="text-fg">Mon-Fri 9AM-5PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Services:</span>
                        <span className="text-fg">3 configured</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Policies:</span>
                        <span className="text-fg">2 configured</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Branding:</span>
                        <span className="text-fg">Custom logo set</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-semibold text-fg text-center mb-12">Why Business Profiles Matter</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">🎯 Accurate Responses</h3>
                  <p className="text-muted mb-4">
                    The more detailed your profile, the better your AI can answer customer questions with specific, accurate information.
                  </p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-muted italic">&quot;We&apos;re open Monday-Friday 9AM-5PM and Saturday 10AM-2PM. We&apos;re located at 123 Main Street, Downtown.&quot;</p>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">⚡ Faster Setup</h3>
                  <p className="text-muted mb-4">
                    Our guided setup process helps you create a comprehensive profile in minutes, not hours.
                  </p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-muted italic">&quot;A cleaning costs $150 and takes about 45 minutes. We recommend scheduling every 6 months.&quot;</p>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">🔄 Easy Updates</h3>
                  <p className="text-muted mb-4">
                    Change your hours, update pricing, or modify policies anytime. Changes take effect immediately.
                  </p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-muted italic">&quot;We accept most major insurance plans. Please bring your insurance card to your appointment.&quot;</p>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-fg mb-3">🎨 Brand Consistency</h3>
                  <p className="text-muted mb-4">
                    Custom branding ensures your AI assistant matches your brand voice and visual identity.
                  </p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-muted italic">&quot;Thank you for choosing Acme Dental! We&apos;re committed to providing excellent dental care.&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Ready to create your business profile?
              </h2>
              <p className="text-muted mb-8">
                Set up your detailed business profile and start providing accurate, personalized customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup/starter"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                >
                  Start Free
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
        </div>
      </main>
      <Footer />
    </div>
  )
}
