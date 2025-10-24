export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Embed Widget',
      description: 'Add our chat widget to your website in 2 minutes. Works on any platform.',
      icon: '🔧'
    },
    {
      number: '02',
      title: 'Train on Your Services',
      description: 'Upload your FAQ, services, and pricing. Our AI learns your clinic instantly.',
      icon: '🧠'
    },
    {
      number: '03',
      title: 'Capture Leads 24/7',
      description: 'Never miss another inquiry. AI answers questions and books consultations automatically.',
      icon: '📈'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your AI receptionist up and running in minutes, not months
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 500+ med-spa clinics already using Netia AI
            </p>
            <a 
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/yourname/medspa-demo'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
