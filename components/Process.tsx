export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Train",
      description: "Train Netia to handle your business processes, knowledge base, and customer service policies.",
      action: "Learn more"
    },
    {
      number: "02", 
      title: "Test",
      description: "Run simulated customer conversations to see exactly how Netia will respond before going live",
      action: "Learn more"
    },
    {
      number: "03",
      title: "Deploy", 
      description: "Launch Netia across every channel—voice, email, chat, and social—for consistent customer support.",
      action: "Learn more"
    },
    {
      number: "04",
      title: "Analyze",
      description: "Use AI-powered insights to analyze and improve Netia's performance and deliver better customer experiences.",
      action: "Learn more"
    }
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fg mb-4">
            Netia handles every customer interaction seamlessly
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Netia processes customer inquiries through a smart workflow that learns and improves continuously. 
            Train Netia on your business processes, test performance before going live, deploy across all channels, 
            then analyze and optimize with AI insights—ensuring every customer gets the right answer every time.
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



