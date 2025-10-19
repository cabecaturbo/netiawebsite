import { FloatingBalls } from './FloatingBalls'

export const Features = () => {
  const features = [
    {
      title: "Answers & schedules.",
      description: "AI responds to customer questions 24/7 and handles appointment booking when customers want to schedule.",
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
      title: "Your data stays private.",
      description: "Each user gets their own secure workspace. Your customer information is completely separate and protected.",
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
      title: "Business profiles.",
      description: "Store hours, policies, contact info, and service pricing for accurate AI responses.",
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
    },
    {
      title: "AI Voice Assistant.",
      description: "Coming soon: Natural voice conversations that answer calls and handle customer inquiries with human-like responses.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <defs>
            <style>{`
              .mic { fill: none; stroke: #0a0a0a; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
              .mic-fill { fill: #0a0a0a; }
            `}</style>
          </defs>
          {/* Microphone body */}
          <rect className="mic" x="40" y="30" width="20" height="35" rx="10" />
          {/* Microphone stand */}
          <rect className="mic" x="45" y="65" width="10" height="15" />
          {/* Microphone base */}
          <rect className="mic-fill" x="35" y="80" width="30" height="8" rx="4" />
          {/* Sound waves */}
          <path className="mic" d="M25 45 Q20 50 25 55" strokeWidth="2" />
          <path className="mic" d="M75 45 Q80 50 75 55" strokeWidth="2" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50/20 to-transparent"></div>
      
      {/* Floating elements */}
      <FloatingBalls />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center space-y-6 group animate-fade-in-up hover-lift transition-all duration-500 p-6"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Icon Card */}
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-surface border border-border rounded-lg flex items-center justify-center group-hover:bg-primary-50 group-hover:border-primary-200 transition-all duration-300 relative overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {feature.icon}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-fg group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-sm mx-auto group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="w-0 group-hover:w-12 h-0.5 bg-primary-500 mx-auto transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



