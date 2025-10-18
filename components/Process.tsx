export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Set up profile",
      description: "Add your business hours, contact info, services, and pricing to your profile.",
      action: "Get started"
    },
    {
      number: "02", 
      title: "Connect Tidio",
      description: "Set up webhook integration with your existing Tidio chat widget.",
      action: "View setup"
    },
    {
      number: "03",
      title: "Go live", 
      description: "AI starts responding to customer questions and handling appointment booking immediately using your business data.",
      action: "See it in action"
    },
    {
      number: "04",
      title: "Manage",
      description: "Use the admin dashboard to update settings and monitor conversations.",
      action: "View dashboard"
    }
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fg mb-4">
            Get started in 4 simple steps
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Set up your business profile, connect your Tidio chat widget, and start answering customer questions with AI. 
            No coding required—just add your business information and go live.
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



