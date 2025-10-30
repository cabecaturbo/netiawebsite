export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Tell us about your business",
      description: "Add your hours, services, and prices. Takes 5 minutes.",
      action: "Get started"
    },
    {
      number: "02", 
      title: "Add the widget to your website",
      description: "Copy and paste one code snippet into your website. We'll guide you through it.",
      action: "View setup"
    },
    {
      number: "03",
      title: "Start booking customers", 
      description: "Your AI starts working immediately. No training required.",
      action: "See it in action"
    },
    {
      number: "04",
      title: "Watch your business grow",
      description: "More appointments, fewer missed leads, happier customers.",
      action: "View dashboard"
    }
  ]

  return (
    <section className="section-spacing bg-white" aria-labelledby="process-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="process-heading" className="font-display text-3xl md:text-4xl font-semibold text-fg mb-4">
            From Setup to Success in 15 Minutes
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Tell us about your business, add our widget to your website, and start booking customers immediately. 
            Simple setup, powerful results—just add your information and watch the appointments roll in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {steps.map((step, index) => (
            <article key={index} className="flex h-full group">
              <div className="flex flex-col items-center flex-shrink-0 mr-4">
                {/* Step Number */}
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center font-display font-bold text-lg group-hover:bg-primary-100 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  {step.number}
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-fg leading-tight mb-2">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted leading-relaxed flex-grow mb-4">
                  {step.description}
                </p>
                
                {/* Action Link - aligned at bottom */}
                <a 
                  href="#learn-more"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors group/link"
                  aria-label={`${step.action} for ${step.title}`}
                >
                  {step.action}
                  <svg 
                    className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}



