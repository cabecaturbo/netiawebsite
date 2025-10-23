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
                <span className="block animate-slide-in-left animate-stagger-1">Never Miss Another</span>
                <span className="block text-primary-500 animate-slide-in-left animate-stagger-2">
                  Customer Call Again
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
              <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed animate-fade-in-up animate-stagger-4">
                Stop losing $2,000+ in missed appointments every month. Our AI answers every call, books appointments, and follows up with leads - even at 2 AM. 
                <span className="text-fg font-medium">Start free today.</span>
              </p>
              
            </div>
            
            {/* Social Proof - Moved down with more spacing */}
            <div className="flex items-center space-x-4 animate-fade-in-up animate-stagger-5 pt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-green-100 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-muted ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-muted">Trusted by 500+ businesses</p>
              </div>
            </div>
            
            {/* Urgency Banner - Moved down with more spacing */}
            <div className="inline-flex items-center px-4 py-3 bg-green-50 border border-green-200 rounded-full text-sm text-green-700 animate-fade-in-up animate-stagger-5">
              <span>Free trial</span>
              <span className="mx-2">•</span>
              <span>No setup fees</span>
              <span className="mx-2">•</span>
              <span>Cancel anytime</span>
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
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover-lift transition-all duration-500 relative overflow-hidden h-[32rem]">
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
                <div className="space-y-3 relative z-10 h-[28rem] overflow-hidden">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2 max-w-xs hover:bg-gray-200 transition-colors duration-300">
                      <p className="text-sm text-gray-800">What services do you offer?</p>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mr-2"></div>
                    <div className="bg-blue-600 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs hover:bg-blue-700 transition-colors duration-300">
                      <p className="text-sm text-white">We offer cleanings, fillings, crowns, and cosmetic procedures. What type of service are you looking for?</p>
                    </div>
                  </div>
                  
                  {/* Customer Response */}
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2 max-w-xs hover:bg-gray-200 transition-colors duration-300">
                      <p className="text-sm text-gray-800">I need a cleaning and checkup. How much does that cost?</p>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mr-2"></div>
                    <div className="bg-blue-600 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs hover:bg-blue-700 transition-colors duration-300">
                      <p className="text-sm text-white">A cleaning and checkup is $180 total. This includes exam, cleaning, and X-rays if needed. We accept most insurance plans, so you&apos;d typically just pay your copay.</p>
                    </div>
                  </div>
                  
                  {/* Customer Response */}
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2 max-w-xs hover:bg-gray-200 transition-colors duration-300">
                      <p className="text-sm text-gray-800">Okay, how can I schedule?</p>
                    </div>
                  </div>
                  
                  
                  {/* AI Response with Calendar Link */}
                  <div className="flex justify-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mr-2"></div>
                    <div className="bg-blue-600 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs hover:bg-blue-700 transition-colors duration-300">
                      <p className="text-sm text-white">Here is our calendar:</p>
                      <div className="mt-2 bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30 transition-colors duration-300 cursor-pointer group">
                        <p className="text-xs text-white group-hover:scale-105 transition-transform duration-300">📅 Book Your Appointment</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Customer Response - Confirmation */}
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2 max-w-xs hover:bg-gray-200 transition-colors duration-300">
                      <p className="text-sm text-gray-800">Awesome, thanks! I&apos;ll book through that link</p>
                    </div>
                  </div>
                  
                  {/* AI Response - Final */}
                  <div className="flex justify-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mr-2"></div>
                    <div className="bg-blue-600 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs hover:bg-blue-700 transition-colors duration-300">
                      <p className="text-sm text-white">You&apos;re welcome! We&apos;ll send you a confirmation email once you book. Looking forward to seeing you soon! 😊</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and CTA Buttons - Horizontally Aligned */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-16">
          {/* CTA Buttons Section - Left Side */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-0">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-all duration-300 hover-lift btn-enhanced group shadow-lg"
            >
              <span className="relative z-10">Start Free Trial</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-fg border-2 border-border rounded-full hover:bg-surface transition-all duration-300 hover-lift btn-enhanced group"
            >
              <span className="relative z-10">Watch Demo</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Stats Section - Right Side, Same width as hero image */}
          <div className="w-full max-w-md lg:max-w-lg">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary-500">24/7</div>
                <div className="text-sm text-muted">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary-500">2.3s</div>
                <div className="text-sm text-muted">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary-500">99.9%</div>
                <div className="text-sm text-muted">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



