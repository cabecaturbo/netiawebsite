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
      title: "Connect your phone/website",
      description: "One click and you're live. No tech skills needed.",
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
      description: "More appointments, fewer missed calls, happier customers.",
      action: "View dashboard"
    }
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fg mb-4">
            From Setup to Success in 15 Minutes
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Tell us about your business, connect your phone/website, and start booking customers immediately. 
            No tech skills needed—just add your information and watch the appointments roll in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Step Number */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center font-display font-semibold text-lg">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold text-fg">
                  {step.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-muted leading-relaxed flex-grow mb-4">
                {step.description}
              </p>
              
              {/* Action Link */}
              <a 
                href="#learn-more"
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors mt-auto"
              >
                {step.action}
                <svg 
                  className="ml-1 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
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
          ))}
        </div>
      </div>
    </section>
  )
}



