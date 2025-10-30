import { FloatingBalls } from './FloatingBalls'

export const Features = () => {
  const features = [
    {
      title: "Turn Every Visitor Into a Booked Appointment",
      description: "Potential patients get instant answers to their treatment and service questions. No more 'we'll call you back'—they book consultations right then and there.",
      icon: <img src="/bolt.png" alt="Fast response" className="w-20 h-20 brightness-0 opacity-80" />
    },
    {
      title: "Capture Patient Information Automatically",
      description: "Collect contact details, preferences, and questions from every visitor. We never share patient data—your information stays private and secure.",
      icon: <img src="/lightbulb-on.png" alt="Security" className="w-20 h-20 brightness-0 opacity-80" />
    },
    {
      title: "Knows Your Practice Inside Out",
      description: "Tell us your hours, services, and consultation prices once. Our AI remembers everything and gives patients accurate answers about appointments, treatments, and availability.",
      icon: <img src="/journal.png" alt="Business knowledge" className="w-20 h-20 brightness-0 opacity-80" />
    },
    {
      title: "Powered by OpenAI",
      description: "Built with cutting-edge AI technology that understands context and delivers smart, helpful responses to your patients.",
      icon: <img src="/brightness.png" alt="AI Technology" className="w-20 h-20 brightness-0 opacity-80" />
    }
  ]

  return (
    <section className="section-spacing bg-gray-50 relative overflow-hidden" aria-labelledby="features-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50/20 to-transparent" aria-hidden="true"></div>
      
      {/* Floating elements */}
      <FloatingBalls />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className="text-center group animate-fade-in-up hover-lift transition-all duration-500 p-6 flex flex-col h-full"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-32 h-32 bg-white border-2 border-gray-300 rounded-2xl flex items-center justify-center group-hover:border-primary-400 transition-all duration-300 relative overflow-hidden shadow-sm group-hover:shadow-lg" role="img" aria-label={feature.title}>
                  <div className="flex items-center justify-center w-full h-full text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="mb-4 min-h-[5rem] flex items-center justify-center">
                  {feature.title === "Powered by OpenAI" ? (
                    <div className="flex flex-col items-center">
                      <h3 className="font-display text-2xl font-semibold text-fg group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                        Powered by
                      </h3>
                      <img 
                        src="/openai-logo.png" 
                        alt="OpenAI" 
                        className="h-8 mt-1 transition-all duration-300"
                        style={{ boxShadow: '0 0 20px rgba(22, 119, 255, 0.3)' }}
                      />
                    </div>
                  ) : (
                    <h3 className="font-display text-2xl font-semibold text-fg group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>
                  )}
                </div>
                <p className="text-muted leading-normal max-w-sm mx-auto group-hover:text-gray-700 transition-colors duration-300 text-sm">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="w-0 group-hover:w-16 h-0.5 bg-primary-500 mx-auto transition-all duration-500 mt-5" aria-hidden="true"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}



