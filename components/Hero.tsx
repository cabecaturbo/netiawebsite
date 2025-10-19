// import { FloatingBalls } from './FloatingBalls'

export const Hero = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-50/20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2 animate-fade-in-up">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-fg leading-tight">
                <span className="block animate-slide-in-left animate-stagger-1">AI That</span>
                <span className="block text-primary-500 animate-slide-in-left animate-stagger-2 relative">
                  Works
                  <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse-subtle"></span>
                </span>
              </h1>
              <div className="flex items-center space-x-0.5 animate-fade-in animate-stagger-3">
                <span className="text-sm text-gray-600">Powered by</span>
                <img 
                  src="/openai-logo.png" 
                  alt="OpenAI" 
                  className="h-8 hover-glow transition-all duration-300"
                />
              </div>
              <p className="text-lg md:text-xl text-muted max-w-lg leading-relaxed animate-fade-in-up animate-stagger-4">
                AI receptionist that answers customer questions 24/7 and handles appointment booking. Uses your business profile to give accurate responses about hours, pricing, and services.
              </p>
            </div>
            
            <div className="flex justify-start animate-fade-in-up animate-stagger-5">
              <a
                href="/demo"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-all duration-300 hover-lift btn-enhanced group"
              >
                <span className="relative z-10">See it in action</span>
                <svg className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Spacing to maintain layout */}
            <div className="pt-16">
            </div>

            {/* Metrics Section */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50 animate-fade-in animate-stagger-6">
              <div className="text-left">
                <div className="text-2xl font-display font-bold text-fg">24/7</div>
                <div className="text-sm text-muted">Availability</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-display font-bold text-fg">2.3s</div>
                <div className="text-sm text-muted">Avg Response</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-display font-bold text-fg">GPT</div>
                <div className="text-sm text-muted">AI Engine</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md lg:max-w-lg relative pt-4">
              {/* Floating elements hugging the chat image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500/20 rounded-full animate-float"></div>
              <div className="absolute top-1/2 -right-12 w-4 h-4 bg-blue-500/20 rounded-full animate-float-slow"></div>
              <div className="absolute -top-8 -right-4 w-5 h-5 bg-purple-500/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
              
              {/* Additional floating balls in margins */}
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-lg hover-lift transition-all duration-500 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/10 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center animate-pulse-subtle">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Netia AI</div>
                      <div className="text-xs text-green-600 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="space-y-4 relative z-10">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-3 max-w-xs hover:bg-gray-200 transition-colors duration-300">
                      <p className="text-sm text-gray-800">What are your business hours?</p>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mr-2"></div>
                    <div className="bg-blue-600 rounded-2xl rounded-bl-md px-4 py-3 max-w-xs hover:bg-blue-700 transition-colors duration-300">
                      <p className="text-sm text-white">We&apos;re open Monday-Friday 9am-6pm and Saturday 10am-4pm. Would you like me to help you schedule an appointment?</p>
                    </div>
                  </div>
                  
                  {/* Customer Response */}
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-3 max-w-xs hover:bg-gray-200 transition-colors duration-300">
                      <p className="text-sm text-gray-800">Yes, I&apos;d like to book a consultation</p>
                    </div>
                  </div>
                  
                  {/* AI with Link */}
                  <div className="flex justify-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mr-2"></div>
                    <div className="bg-blue-600 rounded-2xl rounded-bl-md px-4 py-3 max-w-xs hover:bg-blue-700 transition-colors duration-300">
                      <p className="text-sm text-white">Perfect! Here&apos;s our scheduling link:</p>
                      <div className="mt-2 bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30 transition-colors duration-300 cursor-pointer group">
                        <p className="text-xs text-white group-hover:scale-105 transition-transform duration-300">📅 Book Appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



