export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Train",
      description: "Train Fin to resolve even the most complex queries with your Procedures, knowledge and policies.",
      action: "Learn more"
    },
    {
      number: "02", 
      title: "Test",
      description: "Run fully simulated customer conversations from start to finish to see exactly how Fin will behave before going live",
      action: "Learn more"
    },
    {
      number: "03",
      title: "Deploy", 
      description: "Set Fin live across every channel—voice, email, chat, and social—for consistent support wherever customers reach out.",
      action: "Learn more"
    },
    {
      number: "04",
      title: "Analyze",
      description: "Use AI-powered Insights to analyze and improve Fin's performance and deliver better customer experiences.",
      action: "Learn more"
    }
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fg mb-4">
            Fin resolves the most complex queries on every channel
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Fin handles even the most complex queries through a continuous improvement loop called the Fin Flywheel. 
            Train Fin on your Procedures, knowledge, and policies, test performance before launch, deploy across every channel, 
            then analyze and improve with AI-powered Insights—so every query is resolved accurately and consistently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              {/* Step Number */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center font-display font-semibold text-lg">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold text-fg">
                  {step.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-muted leading-relaxed">
                {step.description}
              </p>
              
              {/* Action Link */}
              <a 
                href="#learn-more"
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
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



