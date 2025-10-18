export const Features = () => {
  const features = [
    {
      title: "Schedules services.",
      description: "Let customers book appointments or schedule services directly through chat.",
      icon: "📅"
    },
    {
      title: "Answers instantly.",
      description: "Responds to pricing, hours, and service questions in seconds — no wait times.",
      icon: "⚡"
    },
    {
      title: "Custom to your business.",
      description: "Trained on your hours, services, and tone so it sounds like part of your team.",
      icon: "🎯"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-6">
              {/* Icon Card */}
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-surface border border-border rounded-lg flex items-center justify-center">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-fg">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



