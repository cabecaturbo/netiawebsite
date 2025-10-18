export const Features = () => {
  const features = [
    {
      title: "Schedules services.",
      description: "Let customers book appointments or schedule services directly through chat.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <defs>
            <style>{`
              .stone { fill: none; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
              .stone-filled { fill: #1677ff; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
            `}</style>
          </defs>
          {/* Base stones */}
          <path className="stone" d="M20 70 Q30 65 40 70 Q50 75 60 70 Q70 65 80 70 Q85 75 80 80 Q70 85 60 80 Q50 75 40 80 Q30 85 20 80 Z" />
          <path className="stone" d="M25 60 Q35 55 45 60 Q55 65 65 60 Q70 65 65 70 Q55 75 45 70 Q35 65 25 70 Z" />
          {/* Middle stone */}
          <path className="stone" d="M35 50 Q45 45 55 50 Q60 55 55 60 Q45 65 35 60 Z" />
          {/* Top stone with hand placing it */}
          <path className="stone-filled" d="M40 40 Q45 35 50 40 Q52 45 50 50 Q45 55 40 50 Z" />
          {/* Hand outline */}
          <path className="stone" d="M30 35 Q25 30 30 25 Q35 20 40 25 Q45 30 50 35 Q55 40 60 35" strokeWidth="2" />
          <path className="stone" d="M25 30 Q20 25 25 20 Q30 15 35 20" strokeWidth="2" />
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
          {/* Lightning bolt base */}
          <path className="bolt" d="M30 75 Q35 70 40 75 Q45 80 50 75 Q55 70 60 75 Q65 80 70 75" />
          {/* Lightning bolt middle */}
          <path className="bolt" d="M40 60 Q45 55 50 60 Q55 65 60 60" />
          {/* Lightning bolt top with energy burst */}
          <path className="bolt-filled" d="M45 45 Q50 40 55 45 Q60 50 55 55 Q50 60 45 55 Z" />
          {/* Energy lines */}
          <path className="bolt" d="M35 40 Q40 35 45 40" strokeWidth="2" />
          <path className="bolt" d="M60 40 Q65 35 70 40" strokeWidth="2" />
          <path className="bolt" d="M35 60 Q40 55 45 60" strokeWidth="2" />
          <path className="bolt" d="M60 60 Q65 55 70 60" strokeWidth="2" />
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
              .gear { fill: none; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
              .gear-filled { fill: #1677ff; stroke: #0a0a0a; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
              .center { fill: #1677ff; stroke: #0a0a0a; stroke-width: 2; }
            `}</style>
          </defs>
          {/* Outer gear ring */}
          <circle className="gear" cx="50" cy="50" r="25" />
          {/* Gear teeth */}
          <path className="gear" d="M50 25 L55 20 L65 20 L70 25 L70 35 L65 40 L55 40 L50 35" strokeWidth="2" />
          <path className="gear" d="M75 50 L80 45 L80 35 L75 30 L65 30 L60 35 L60 45 L65 50" strokeWidth="2" />
          <path className="gear" d="M50 75 L45 80 L35 80 L30 75 L30 65 L35 60 L45 60 L50 65" strokeWidth="2" />
          <path className="gear" d="M25 50 L20 45 L20 35 L25 30 L35 30 L40 35 L40 45 L35 50" strokeWidth="2" />
          {/* Inner gear */}
          <circle className="gear" cx="50" cy="50" r="15" />
          {/* Center hub */}
          <circle className="center" cx="50" cy="50" r="8" />
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



