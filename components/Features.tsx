export const Features = () => {
  const features = [
    {
      title: "Schedules services.",
      description: "Let customers book appointments or schedule services directly through chat.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <defs>
            <style>{`
              .calendar { fill: none; stroke: #0a0a0a; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
              .calendar-filled { fill: #0a0a0a; }
            `}</style>
          </defs>
          {/* Simple calendar */}
          <rect className="calendar" x="25" y="30" width="50" height="45" rx="4" />
          {/* Calendar header */}
          <rect className="calendar-filled" x="25" y="30" width="50" height="15" />
          {/* Calendar grid - simple dots */}
          <circle className="calendar-filled" cx="35" cy="55" r="3" />
          <circle className="calendar-filled" cx="45" cy="55" r="3" />
          <circle className="calendar-filled" cx="55" cy="55" r="3" />
          <circle className="calendar-filled" cx="65" cy="55" r="3" />
          <circle className="calendar-filled" cx="35" cy="65" r="3" />
          <circle className="calendar-filled" cx="45" cy="65" r="3" />
          <circle className="calendar-filled" cx="55" cy="65" r="3" />
          <circle className="calendar-filled" cx="65" cy="65" r="3" />
        </svg>
      )
    },
    {
      title: "Answers instantly.",
      description: "Responds to pricing, hours, and service questions in seconds — no wait times.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <defs>
            <style>{`
              .bubble { fill: none; stroke: #0a0a0a; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
              .bubble-tail { fill: #0a0a0a; }
            `}</style>
          </defs>
          {/* Speech bubble */}
          <rect className="bubble" x="20" y="25" width="60" height="40" rx="8" />
          {/* Speech bubble tail */}
          <polygon className="bubble-tail" points="35,65 45,65 40,75" />
          {/* Text lines */}
          <line className="bubble" x1="30" y1="40" x2="70" y2="40" strokeWidth="2" />
          <line className="bubble" x1="30" y1="50" x2="60" y2="50" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Custom to your business.",
      description: "Trained on your hours, services, and tone so it sounds like part of your team.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <defs>
            <style>{`
              .brush { fill: #0a0a0a; }
            `}</style>
          </defs>
          {/* Simple paint brush */}
          <rect className="brush" x="45" y="25" width="10" height="50" />
          <rect className="brush" x="40" y="75" width="20" height="15" />
        </svg>
      )
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



