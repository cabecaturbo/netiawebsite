export const Performance = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-fg mb-4">
              Unrivalled Performance
            </h2>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-fg mb-8">
              Fin outperforms every competitor. Every time.
            </h3>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-display font-bold text-primary-600">1%</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-fg mb-2">
                  Fig 2.A
                </h4>
                <p className="text-muted">
                  Fin&apos;s average resolution rate increases 1% every month
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-display font-bold text-primary-600">#1</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-fg mb-2">
                  Fig 2.B
                </h4>
                <p className="text-muted">
                  Fin wins every head-to-head test ON RESOLUTION RATE
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-display font-bold text-primary-600">65%</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-fg mb-2">
                  Fig 2.C
                </h4>
                <p className="text-muted">
                  Resolution rate based on independent testing conducted by Fin customers
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-surface border border-border rounded-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-display font-bold text-lg">AL</span>
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-fg leading-relaxed mb-4">
                    &ldquo;Fin is in a completely different league. It&apos;s now involved in 99% of conversations 
                    and successfully resolves up to 65% end-to-end&mdash;even the more complex ones.&rdquo;
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div>
                      <cite className="font-display font-semibold text-fg not-italic">
                        Angelo Livanos
                      </cite>
                      <p className="text-muted text-sm">
                        Vice President of Global Support at Lightspeed
                      </p>
                    </div>
                    <div className="text-sm text-muted">
                      Fintech Customer
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



