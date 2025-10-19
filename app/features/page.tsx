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
    name: 'GPT AI Engine',
    description: 'Powered by OpenAI\'s most advanced language models for natural, intelligent conversations.',
    icon: SparklesIcon,
    highlights: ['Natural language understanding', 'Context-aware responses', 'Multi-language support']
  },
  {
    name: '24/7 Availability',
    description: 'Never miss a customer inquiry with round-the-clock AI assistance.',
    icon: ClockIcon,
    highlights: ['Instant responses', 'No downtime', 'Global timezone support']
  },
  {
    name: '2.3s Average Response',
    description: 'Lightning-fast responses that keep customers engaged and satisfied.',
    icon: ChatBubbleLeftRightIcon,
    highlights: ['Sub-second processing', 'Real-time conversations', 'Optimized performance']
  },
  {
    name: 'Business Integration',
    description: 'Seamlessly connect with your existing systems and workflows.',
    icon: CogIcon,
    highlights: ['API integration', 'Webhook support', 'Custom configurations']
  },
  {
    name: 'Data Security',
    description: 'Enterprise-grade security with end-to-end encryption and compliance.',
    icon: ShieldCheckIcon,
    highlights: ['GDPR compliant', 'SOC 2 certified', 'Data encryption']
  },
  {
    name: 'AI Voice Receptionist',
    description: 'Coming soon: Natural voice conversations that answer calls and handle customer inquiries with human-like responses.',
    icon: ChatBubbleLeftRightIcon,
    highlights: ['Natural voice conversations', 'Call handling', 'Human-like responses'],
    isComingSoon: true
  }
]

const technicalSpecs = [
  {
    category: 'AI Technology',
    specs: [
      { name: 'Language Model', value: 'GPT-4 Turbo' },
      { name: 'Context Window', value: '128K tokens' },
      { name: 'Response Time', value: '< 2.3 seconds' },
      { name: 'Accuracy Rate', value: '98.5%' }
    ]
  },
  {
    category: 'Integration',
    specs: [
      { name: 'API Endpoints', value: 'REST & GraphQL' },
      { name: 'Webhook Support', value: 'Real-time events' },
      { name: 'SDK Languages', value: 'JavaScript, Python, PHP' },
      { name: 'Authentication', value: 'OAuth 2.0 & API Keys' }
    ]
  },
  {
    category: 'Infrastructure',
    specs: [
      { name: 'Uptime SLA', value: '99.9%' },
      { name: 'Global CDN', value: 'Edge locations' },
      { name: 'Data Centers', value: 'Multi-region' },
      { name: 'Backup Strategy', value: 'Real-time replication' }
    ]
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
            <h1 className="font-display font-semibold text-4xl md:text-6xl text-fg mb-6">
              Core AI Capabilities
            </h1>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Built with cutting-edge technology to deliver exceptional customer experiences
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

      {/* Technical Specifications */}
      <section className="py-10 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-fg mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Enterprise-grade technology stack built for scale and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSpecs.map((category, index) => (
              <div
                key={category.category}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover-lift transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display font-semibold text-xl text-fg mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm text-muted font-medium">{spec.name}</span>
                      <span className="text-sm font-semibold text-fg">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-fg mb-4">
              Easy Integration
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Get started in minutes with our simple integration process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 text-white font-mono text-sm overflow-x-auto">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <span className="text-gray-400">Integration Example</span>
              </div>
              <pre className="text-green-400">
{`// Install Netia SDK
npm install @netia/ai-sdk

// Initialize with your API key
import { NetiaAI } from '@netia/ai-sdk';

const netia = new NetiaAI({
  apiKey: 'your-api-key',
  businessProfile: {
    name: 'Your Business',
    hours: '9am-6pm EST',
    services: ['Consultation', 'Support']
  }
});

// Handle customer messages
app.post('/webhook', async (req, res) => {
  const response = await netia.processMessage({
    message: req.body.message,
    customerId: req.body.customerId
  });
  
  res.json({ reply: response.message });
});`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display font-semibold text-3xl md:text-4xl mb-6">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already using Netia to provide exceptional AI-powered customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover-lift btn-enhanced"
              >
                Try Demo
              </a>
              <a
                href="/signup/starter"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover-lift btn-enhanced"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
