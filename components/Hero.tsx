// import { FloatingBalls } from './FloatingBalls'

import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-50/20" />

      {/* Floating decorative balls */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[6%] left-[8%] w-3 h-3 rounded-full bg-primary-500/20 animate-float" />
        <div className="absolute top-[18%] right-[10%] w-2.5 h-2.5 rounded-full bg-blue-500/20 animate-float-slow" />
        <div className="absolute top-[32%] left-[4%] w-2 h-2 rounded-full bg-purple-500/20 animate-float-reverse" />
        <div className="absolute top-[45%] right-[6%] w-3.5 h-3.5 rounded-full bg-primary-500/20 animate-float" />
        <div className="absolute bottom-[14%] left-[12%] w-2.5 h-2.5 rounded-full bg-blue-500/20 animate-float-slow" />
        <div className="absolute bottom-[8%] right-[14%] w-3 h-3 rounded-full bg-purple-500/20 animate-float" />
        <div className="absolute top-[10%] left-1/2 w-2 h-2 rounded-full bg-primary-500/20 animate-float-reverse" />
        <div className="absolute top-[56%] left-[22%] w-2.5 h-2.5 rounded-full bg-blue-500/20 animate-float" />
        <div className="absolute top-[70%] right-[22%] w-2 h-2 rounded-full bg-purple-500/20 animate-float-slow" />
        <div className="absolute top-[28%] right-1/2 w-2.5 h-2.5 rounded-full bg-primary-500/20 animate-float" />
        <div className="absolute bottom-[28%] left-[30%] w-2 h-2 rounded-full bg-blue-500/20 animate-float-reverse" />
        <div className="absolute bottom-[22%] right-[32%] w-3 h-3 rounded-full bg-primary-500/20 animate-float" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-fg leading-tight">
              Never Miss Another <span className="text-primary-500">Appointment</span>
            </h1>
            <div className="mt-1 flex items-center gap-0">
              <span className="text-base text-gray-700">Powered by</span>
              <div className="relative h-7 w-[110px] md:h-8 md:w-[124px] -ml-[20px]">
                <Image src="/openai-logo.png" alt="OpenAI" fill sizes="(max-width: 768px) 110px, 124px" className="object-contain" />
              </div>
            </div>
            <p className="mt-4 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Your potential customers are browsing your services on your website—ready to book. Netia answers questions 24/7 and schedules consultations instantly.
            </p>
            <div className="mt-6 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2.5 text-sm text-green-700">
              <span>Free trial</span>
              <span className="mx-2">•</span>
              <span>No setup fees</span>
              <span className="mx-2">•</span>
              <span>Cancel anytime</span>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
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
            
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
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
            
            </div>

          {/* Right column visual (dental chat) */}
          <div className="hidden md:block">
            <div className="relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/10 via-transparent to-transparent pointer-events-none" />
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Netia AI</div>
                    <div className="text-xs text-green-600 flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                      Online
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-300 rounded-full" />
                  <span className="w-2 h-2 bg-gray-300 rounded-full" />
                  <span className="w-2 h-2 bg-gray-300 rounded-full" />
                </div>
              </div>

              <div className="pt-4 space-y-4 h-[23rem] overflow-hidden">
                {/* Customer */}
                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-800">Hi! Do you offer teeth cleaning and whitening?</p>
                  </div>
                </div>
                {/* AI */}
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="bg-blue-600 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                    <p className="text-sm text-white">Yes, we offer routine cleanings and whitening. Our new patient special (cleaning + exam + X‑rays) is $180. Would you like to see our availability?</p>
                  </div>
                </div>
                {/* Customer */}
                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-800">Yeah, that would be great. What insurances do you take?</p>
                  </div>
                </div>
                {/* AI insurances + calendar */}
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="bg-blue-600 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                    <p className="text-sm text-white">We accept Delta Dental, MetLife, Cigna, Aetna, Guardian, and most PPO plans. Here’s our calendar:</p>
                    <div className="mt-2 bg-white/20 rounded-lg px-3 py-2">
                      <p className="text-xs text-white font-medium">📅 Book Your Appointment</p>
                    </div>
                  </div>
                </div>
                {/* Customer final short reply */}
                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-800">Great, thank you.</p>
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



