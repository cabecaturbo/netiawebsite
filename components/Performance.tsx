export const Performance = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-fg mb-4">
              Built for reliability
            </h2>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-fg mb-8">
              AI that works when you need it most
            </h3>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-display font-bold text-primary-600">24/7</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-fg mb-2">
                  Always available
                </h4>
                <p className="text-muted">
                  AI responds to customer questions around the clock, even outside business hours
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-display font-bold text-primary-600">SECURE</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-fg mb-2">
                  Bank-level security
                </h4>
                <p className="text-muted">
                  Your business data is protected with the same security standards used by banks and hospitals
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-display font-bold text-primary-600">OpenAI</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-fg mb-2">
                  Powered by GPT-4
                </h4>
                <p className="text-muted">
                  Uses OpenAI&apos;s latest models for intelligent, context-aware responses
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-surface border border-border rounded-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-display font-bold text-lg">SC</span>
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-fg leading-relaxed mb-4">
                    &ldquo;The AI answers customer questions about our hours and pricing instantly, and handles appointment booking when they want to schedule. 
                    It&apos;s like having a receptionist that never sleeps and always knows the right answer.&rdquo;
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div>
                      <cite className="font-display font-semibold text-fg not-italic">
                        Sarah Chen
                      </cite>
                      <p className="text-muted text-sm">
                        Owner, Chen&apos;s Dental Practice
                      </p>
                    </div>
                    <div className="text-sm text-muted">
                      Netia Customer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



