// import { FloatingBalls } from './FloatingBalls'

import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-50/20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 md:animate-fade-in-up">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-fg leading-tight">
                <span className="block md:animate-slide-in-left md:animate-stagger-1">Never Miss Another</span>
                <span className="block text-primary-500 md:animate-slide-in-left md:animate-stagger-2">
                  Appointment Again
                </span>
              </h1>
              <div className="h-2"></div>
              <p className="text-xl md:text-2xl lg:text-2xl text-muted max-w-2xl leading-relaxed md:animate-fade-in-up md:animate-stagger-3">
                Your potential customers are browsing your services on your website—ready to book. Our AI chatbot answers their questions 24/7 and schedules consultations instantly. 
                <span className="text-fg font-semibold"> Start free today.</span>
              </p>
            </div>
            
            {/* Spacer */}
            <div className="h-2 md:h-6"></div>
            
            {/* Urgency Banner */}
            <div className="inline-flex items-center px-4 py-3 bg-green-50 border border-green-200 rounded-full text-sm text-green-700 md:animate-fade-in-up md:animate-stagger-4">
              <span>Free trial</span>
              <span className="mx-2">•</span>
              <span>No setup fees</span>
              <span className="mx-2">•</span>
              <span>Cancel anytime</span>
            </div>
            
            {/* Spacer */}
            <div className="h-2 md:h-8"></div>
            
            {/* Powered by OpenAI */}
            <div className="flex items-center space-x-0.5 md:animate-fade-in-up md:animate-stagger-5">
              <span className="text-base text-gray-600">Powered by</span>
              <div className="relative h-10 w-[120px]">
                <Image
                  src="/openai-logo.png"
                  alt="OpenAI"
                  fill
                  sizes="(max-width: 640px) 120px, 120px"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
            
            {/* Social Proof Badges */}
            <div className="flex items-center gap-6 animate-fade-in-up animate-stagger-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-muted">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm text-muted">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-sm text-muted">Secure</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md lg:max-w-lg relative pt-4 font-display md:font-sans" role="img" aria-label="AI chatbot conversation demo">
              {/* Floating elements hugging the chat image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500/20 rounded-full md:animate-float" aria-hidden="true"></div>
              <div className="absolute top-1/2 -right-12 w-4 h-4 bg-blue-500/20 rounded-full md:animate-float-slow" aria-hidden="true"></div>
              <div className="absolute -top-8 -right-4 w-5 h-5 bg-purple-500/20 rounded-full md:animate-float" style={{animationDelay: '2s'}} aria-hidden="true"></div>
              
              {/* Additional floating balls in margins */}
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg md:hover-lift transition-all duration-500 relative overflow-hidden h-[36rem]" role="dialog" aria-label="Conversation with Netia AI">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/10 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center md:animate-pulse-subtle">
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
                <div className="space-y-4 relative z-10 h-[32rem] overflow-hidden">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2 max-w-xs hover:bg-gray-200 transition-colors duration-300">
                      <p className="text-sm text-gray-800">What services do you offer?</p>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start items-start gap-2">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
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
                  <div className="flex justify-start items-start gap-2">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
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
                  <div className="flex justify-start items-start gap-2">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-blue-600 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs hover:bg-blue-700 transition-colors duration-300">
                      <p className="text-sm text-white">Here is our calendar:</p>
                      <div className="mt-2 bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30 transition-colors duration-300 cursor-pointer group">
                        <p className="text-xs text-white group-hover:scale-105 transition-transform duration-300 font-medium">📅 Book Your Appointment</p>
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
                  <div className="flex justify-start items-start gap-2">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mt-16">
          {/* CTA Buttons Section - Left Side */}
          <div className="self-center md:self-start w-full md:w-auto flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-6 md:mb-0">
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



