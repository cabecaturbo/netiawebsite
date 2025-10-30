export const Performance = () => {
  return (
    <section className="section-spacing bg-gray-50" aria-labelledby="performance-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 md:mb-16">
            <h2 id="performance-heading" className="font-display text-3xl md:text-4xl font-semibold text-fg mb-4">
              Built for reliability
            </h2>
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-muted mb-8">
              AI that works when you need it most
            </p>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <article className="text-center space-y-5 group">
              <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-100 transition-all duration-300 shadow-sm group-hover:shadow-md" role="img" aria-label="24/7 Availability">
                <span className="text-2xl font-display font-bold text-primary-600">24/7</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">
                  Always available
                </h3>
                <p className="text-muted leading-relaxed">
                  AI responds to customer questions around the clock, even outside business hours
                </p>
              </div>
            </article>

            <article className="text-center space-y-5 group">
              <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-100 transition-all duration-300 shadow-sm group-hover:shadow-md" role="img" aria-label="Secure Data Protection">
                <span className="text-xl font-display font-bold text-primary-600">SECURE</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">
                  Bank-level security
                </h3>
                <p className="text-muted leading-relaxed">
                  Your business data is protected with the same security standards used by banks and hospitals
                </p>
              </div>
            </article>

            <article className="text-center space-y-5 group">
              <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-100 transition-all duration-300 shadow-sm group-hover:shadow-md" role="img" aria-label="OpenAI Technology">
                <span className="text-xl font-display font-bold text-primary-600">OpenAI</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-fg mb-3">
                  Powered by GPT-4
                </h3>
                <p className="text-muted leading-relaxed">
                  Uses OpenAI&apos;s latest models for intelligent, context-aware responses
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}



