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
              .calendar-ring { fill: #0a0a0a; }
            `}</style>
          </defs>
          {/* Calendar body with rounded corners */}
          <rect className="calendar" x="25" y="35" width="50" height="45" rx="6" />
          {/* Top hanger rings */}
          <path className="calendar-ring" d="M35 35 Q35 25 40 25 Q40 35 35 35" />
          <path className="calendar-ring" d="M65 35 Q65 25 60 25 Q60 35 65 35" />
          {/* Calendar grid - 2 rows of 3 squares */}
          <rect className="calendar-filled" x="32" y="42" width="8" height="8" />
          <rect className="calendar-filled" x="46" y="42" width="8" height="8" />
          <rect className="calendar-filled" x="60" y="42" width="8" height="8" />
          <rect className="calendar-filled" x="32" y="56" width="8" height="8" />
          <rect className="calendar-filled" x="46" y="56" width="8" height="8" />
          <rect className="calendar-filled" x="60" y="56" width="8" height="8" />
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
              .bolt { fill: #0a0a0a; }
            `}</style>
          </defs>
          {/* Lightning bolt with proper proportions and sharp angles */}
          <path className="bolt" d="M30 15 L50 45 L40 45 L65 80 L35 60 L45 60 L30 15" />
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
              .frame { fill: none; stroke: #0a0a0a; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
              .frame-thin { fill: none; stroke: #0a0a0a; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
              .triangle { fill: #0a0a0a; }
            `}</style>
          </defs>
          {/* Outer frame */}
          <rect className="frame" x="20" y="25" width="60" height="50" rx="4" />
          {/* Triangle hanger */}
          <polygon className="triangle" points="50,20 45,30 55,30" />
          {/* Inner frame */}
          <rect className="frame-thin" x="30" y="35" width="40" height="30" />
          {/* Perspective lines - vertical line from center top */}
          <line className="frame-thin" x1="50" y1="35" x2="50" y2="55" />
          {/* Diagonal lines to bottom corners */}
          <line className="frame-thin" x1="50" y1="55" x2="30" y2="65" />
          <line className="frame-thin" x1="50" y1="55" x2="70" y2="65" />
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



