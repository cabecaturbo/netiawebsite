export const Features = () => {
  const features = [
    {
      title: "Schedules services.",
      description: "Let customers book appointments or schedule services directly through chat.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <defs>
            <style>{`
              .calendar { fill: none; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
              .calendar-filled { fill: #1677ff; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
            `}</style>
          </defs>
          {/* Calendar base */}
          <rect className="calendar" x="20" y="30" width="60" height="50" rx="8" />
          {/* Calendar header */}
          <rect className="calendar-filled" x="20" y="30" width="60" height="20" rx="8" />
          {/* Calendar rings */}
          <circle className="calendar" cx="30" cy="40" r="3" />
          <circle className="calendar" cx="70" cy="40" r="3" />
          {/* Calendar grid */}
          <line className="calendar" x1="35" y1="55" x2="35" y2="70" strokeWidth="2" />
          <line className="calendar" x1="50" y1="55" x2="50" y2="70" strokeWidth="2" />
          <line className="calendar" x1="65" y1="55" x2="65" y2="70" strokeWidth="2" />
          <line className="calendar" x1="30" y1="60" x2="70" y2="60" strokeWidth="2" />
          {/* Calendar numbers */}
          <circle className="calendar" cx="42" cy="65" r="2" />
          <circle className="calendar" cx="58" cy="65" r="2" />
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
              .bolt { fill: none; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
              .bolt-filled { fill: #1677ff; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
            `}</style>
          </defs>
          {/* Lightning bolt main body */}
          <path className="bolt" d="M35 25 L45 45 L40 45 L50 75 L40 55 L45 55 L35 25" />
          {/* Lightning bolt filled center */}
          <path className="bolt-filled" d="M37 30 L43 45 L41 45 L47 70 L41 55 L43 55 L37 30" />
          {/* Energy sparks */}
          <path className="bolt" d="M25 35 Q30 30 35 35" strokeWidth="2" />
          <path className="bolt" d="M60 35 Q65 30 70 35" strokeWidth="2" />
          <path className="bolt" d="M30 60 Q35 55 40 60" strokeWidth="2" />
          <path className="bolt" d="M55 60 Q60 55 65 60" strokeWidth="2" />
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
              .art { fill: none; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
              .art-filled { fill: #1677ff; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
              .brush { fill: none; stroke: #0a0a0a; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
            `}</style>
          </defs>
          {/* Canvas frame */}
          <rect className="art" x="20" y="25" width="60" height="45" rx="4" />
          {/* Paint strokes */}
          <path className="art" d="M30 35 Q35 30 40 35 Q45 40 50 35 Q55 30 60 35" strokeWidth="2" />
          <path className="art" d="M25 45 Q35 40 45 45 Q55 50 65 45" strokeWidth="2" />
          <path className="art" d="M30 55 Q40 50 50 55 Q60 60 70 55" strokeWidth="2" />
          {/* Paint blob */}
          <circle className="art-filled" cx="45" cy="50" r="8" />
          {/* Paint brush */}
          <path className="brush" d="M70 20 L75 15 L80 20 L75 25 Z" />
          <line className="brush" x1="75" y1="25" x2="75" y2="35" />
          {/* Brush handle */}
          <line className="brush" x1="75" y1="35" x2="75" y2="45" strokeWidth="3" />
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



