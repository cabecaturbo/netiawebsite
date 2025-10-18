import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-fg mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Choose the plan that works for your business. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-border rounded-lg p-8">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  Starter
                </h3>
                <p className="text-muted mb-4">
                  Perfect for small businesses getting started with AI customer service.
                </p>
                <div className="text-3xl font-bold text-fg">
                  $0.99
                  <span className="text-lg font-normal text-muted">/resolution</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  50 resolutions per month minimum
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free 14 day trial
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email and chat support
                </li>
              </ul>
              <a
                href="#trial"
                className="w-full block text-center px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
              >
                Start free trial
              </a>
            </div>

            <div className="bg-white border border-border rounded-lg p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  Professional
                </h3>
                <p className="text-muted mb-4">
                  Advanced features for growing businesses with higher volume needs.
                </p>
                <div className="text-3xl font-bold text-fg">
                  $0.99
                  <span className="text-lg font-normal text-muted">/resolution</span>
                </div>
                <div className="text-sm text-muted mt-2">
                  + $29 per helpdesk seat per month
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited resolutions
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full helpdesk integration
                </li>
                <li className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <a
                href="#trial"
                className="w-full block text-center px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}



