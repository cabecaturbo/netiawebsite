import { FeatureCard } from './FeatureCard'
import Image from 'next/image'

export const Features = () => {
  const features = [
    {
      title: "Turn Every Visitor Into a Booked Appointment",
      description: "Potential patients get instant answers to their treatment and service questions. No more 'we'll call you back'—they book consultations right then and there.",
      icon: <img src="/bolt.png" alt="Fast response" className="w-8 h-8" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(3086%) hue-rotate(210deg) brightness(99%) contrast(101%)'}} />
    },
    {
      title: "Capture Patient Information Automatically",
      description: "Collect contact details, preferences, and questions from every visitor. We never share patient data—your information stays private and secure.",
      icon: <img src="/lightbulb-on.png" alt="Security" className="w-8 h-8" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(3086%) hue-rotate(210deg) brightness(99%) contrast(101%)'}} />
    },
    {
      title: "Knows Your Practice Inside Out",
      description: "Tell us your hours, services, and consultation prices once. Our AI remembers everything and gives patients accurate answers about appointments, treatments, and availability.",
      icon: <img src="/journal.png" alt="Business knowledge" className="w-8 h-8" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(3086%) hue-rotate(210deg) brightness(99%) contrast(101%)'}} />
    },
    {
      title: "Powered by OpenAI",
      description: "Built with cutting-edge AI technology that understands context and delivers smart, helpful responses to your patients.",
      icon: (
        <div className="relative w-24 h-8">
          <Image src="/openai-logo.png" alt="OpenAI" fill className="object-contain" />
        </div>
      )
    }
  ]

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50/30" aria-labelledby="features-heading">
      <div className="container-g">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title === "Powered by OpenAI" ? "Powered by OpenAI" : feature.title}
              desc={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}



