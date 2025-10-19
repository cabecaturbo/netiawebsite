import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Setup() {
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
              Setup Guide
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Get your Netia AI assistant up and running in minutes. Follow this step-by-step guide to configure your business profile and start answering customer questions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            
            {/* Progress Steps */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <span className="ml-3 font-semibold text-fg">Create Account</span>
                </div>
                <div className="flex-1 h-0.5 bg-border mx-4"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <span className="ml-3 font-semibold text-fg">Business Profile</span>
                </div>
                <div className="flex-1 h-0.5 bg-border mx-4"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <span className="ml-3 font-semibold text-fg">Integration</span>
                </div>
                <div className="flex-1 h-0.5 bg-border mx-4"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                  <span className="ml-3 font-semibold text-fg">Go Live</span>
                </div>
              </div>
            </div>

            {/* Step 1: Create Account */}
            <div className="mb-16">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary-500 rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-4">Step 1: Create Your Account</h2>
                  <p className="text-muted mb-6">
                    Sign up for Netia and verify your email address to get started.
                  </p>
                  
                  <div className="bg-surface border border-border rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-fg mb-3">What you&apos;ll need:</h3>
                    <ul className="space-y-2 text-muted">
                      <li>• Business email address</li>
                      <li>• Company name</li>
                      <li>• Phone number for verification</li>
                    </ul>
                  </div>

                  <a
                    href="/signup/starter"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                  >
                    Create Account
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2: Business Profile */}
            <div className="mb-16">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary-500 rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-4">Step 2: Configure Your Business Profile</h2>
                  <p className="text-muted mb-6">
                    Tell Netia about your business so it can provide accurate responses to your customers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-surface border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-fg mb-3">Basic Information</h3>
                      <ul className="space-y-2 text-sm text-muted">
                        <li>• Business name and description</li>
                        <li>• Contact information</li>
                        <li>• Business hours</li>
                        <li>• Location and address</li>
                      </ul>
                    </div>
                    
                    <div className="bg-surface border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-fg mb-3">Services & Pricing</h3>
                      <ul className="space-y-2 text-sm text-muted">
                        <li>• Services you offer</li>
                        <li>• Pricing information</li>
                        <li>• Special offers or promotions</li>
                        <li>• Booking requirements</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                    <h3 className="font-semibold text-fg mb-2">💡 Pro Tip</h3>
                    <p className="text-sm text-muted">
                      The more detailed your business profile, the better Netia can answer customer questions. Include common questions and their answers for best results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Integration */}
            <div className="mb-16">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary-500 rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-4">Step 3: Integrate with Your Website</h2>
                  <p className="text-muted mb-6">
                    Add Netia to your website using our simple integration code.
                  </p>
                  
                  <div className="bg-gray-900 rounded-lg p-6 mb-6">
                    <pre className="text-gray-100 text-sm overflow-x-auto">
                      <code>{`<!-- Add this code before the closing </body> tag -->
<script>
  (function() {
    var netia = window.netia = window.netia || [];
    netia.push(['init', {
      businessId: 'YOUR_BUSINESS_ID',
      position: 'bottom-right',
      theme: 'light'
    }]);
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.netia.ai/widget.js';
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  })();
</script>`}</code>
                    </pre>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-surface border border-border rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-fg">WordPress</div>
                    </div>
                    
                    <div className="bg-surface border border-border rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-fg">Shopify</div>
                    </div>
                    
                    <div className="bg-surface border border-border rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-fg">Squarespace</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Go Live */}
            <div className="mb-16">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary-500 rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-4">Step 4: Test and Go Live</h2>
                  <p className="text-muted mb-6">
                    Test your integration and launch your AI assistant to start helping customers.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">1</div>
                      <div>
                        <h4 className="font-semibold text-fg mb-1">Test the Integration</h4>
                        <p className="text-sm text-muted">Visit your website and try asking questions to make sure Netia responds correctly.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">2</div>
                      <div>
                        <h4 className="font-semibold text-fg mb-1">Monitor Performance</h4>
                        <p className="text-sm text-muted">Check your dashboard to see conversation analytics and customer satisfaction.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">3</div>
                      <div>
                        <h4 className="font-semibold text-fg mb-1">Optimize Responses</h4>
                        <p className="text-sm text-muted">Update your business profile based on common questions to improve AI responses.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary-50 border border-primary-200 rounded-lg p-8">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted mb-8">
                Follow this guide and have your AI assistant running in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup/starter"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                >
                  Start Setup
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
