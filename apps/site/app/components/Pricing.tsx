export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small clinics',
      features: [
        'Up to 500 conversations/month',
        'Basic FAQ training',
        'Email notifications',
        'Standard support',
        'Calendly integration'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for growing clinics',
      features: [
        'Unlimited conversations',
        'Advanced AI training',
        'Custom branding',
        'Priority support',
        'Analytics dashboard',
        'Multi-language support',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large clinic networks',
      features: [
        'Everything in Professional',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'Custom training',
        'Advanced analytics'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your clinic. All plans include our core AI receptionist features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-200 hover:shadow-lg ${
                plan.popular 
                  ? 'border-purple-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === 'Enterprise' 
                  ? 'mailto:sales@netia.ai' 
                  : process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/yourname/medspa-demo'
                }
                className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Setup Fee: $299 (One-time)
            </h3>
            <p className="text-gray-600 mb-6">
              Includes custom training, integration, and setup. No long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/yourname/medspa-demo'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                📅 Book Setup Call
              </a>
              <button className="btn-secondary">
                💬 Chat with Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

