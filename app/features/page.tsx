import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CheckIcon, SparklesIcon, ClockIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, CogIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Features - Netia AI Customer Service',
  description: 'Discover Netia\'s powerful AI features: GPT-4 integration, 24/7 availability, instant responses, and seamless business integration.',
  keywords: ['AI features', 'customer service automation', 'GPT integration', 'business AI', 'Netia features'],
}

const features = [
  {
    name: 'Answer Visitor Questions Instantly',
    description: 'Someone lands on your website and has questions. Our chatbot answers them right away - even at 2 AM. No more "we\'ll get back to you."',
    icon: ChatBubbleLeftRightIcon,
    highlights: ['Works 24/7', 'Answers fast', 'Saves you time']
  },
  {
    name: 'Capture Every Client',
    description: 'When someone visits your site, we don\'t let them leave without their contact info. We ask the right questions and get their email or phone.',
    icon: SparklesIcon,
    highlights: ['Never lose a client', 'Collect contact info', 'Follow up automatically']
  },
  {
    name: 'Book Appointments Automatically',
    description: 'Your visitor wants to schedule? We handle it. We share your calendar link and help them pick a time that works.',
    icon: ClockIcon,
    highlights: ['Books appointments', 'Sends calendar links', 'Confirms bookings']
  },
  {
    name: 'Know Your Business',
    description: 'Tell us your hours, prices, and services once. We remember everything and give customers the right answers every time.',
    icon: ShieldCheckIcon,
    highlights: ['Remembers your info', 'Gets answers right', 'No training needed']
  },
  {
    name: 'Your Data is Private',
    description: 'Your customer conversations stay private. We don\'t share your data with anyone. Each business gets their own secure space.',
    icon: ShieldCheckIcon,
    highlights: ['Data stays private', 'Secure storage', 'Your information protected']
  },
  {
    name: 'Works on Your Website',
    description: 'Add a simple code snippet to your website. That\'s it. Your chatbot starts working in minutes.',
    icon: CogIcon,
    highlights: ['Easy setup', 'One code snippet', 'Ready in minutes']
  }
]


export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <Header />
      
      {/* Core Features */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display font-semibold text-4xl md:text-5xl text-fg mb-4">
              How Netia Helps Your Business
            </h1>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              When someone visits your website, we help you turn them into a paying customer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-500 border border-gray-100 relative overflow-hidden group ${
                  feature.isComingSoon ? 'border-primary-200 bg-gradient-to-br from-primary-50/30 to-white' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {feature.isComingSoon && (
                  <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl text-fg mb-3">
                    {feature.name}
                  </h3>
                  
                  <p className="text-muted mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted">
                        <CheckIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  {feature.isComingSoon && (
                    <div className="mt-6">
                      <a
                        href="/waitlist"
                        className="w-full bg-primary-500 text-white text-center py-3 px-4 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover-lift btn-enhanced inline-block"
                      >
                        Join the Waitlist
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display font-semibold text-3xl md:text-4xl mb-6">
              Ready to Turn More Visitors Into Customers?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop losing potential clients on your website. Start capturing them today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover-lift btn-enhanced"
              >
                View Demo
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover-lift btn-enhanced"
              >
                Start Free
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
