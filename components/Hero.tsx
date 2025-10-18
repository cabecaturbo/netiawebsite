export const Hero = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-fg leading-tight">
                <span className="block">AI That</span>
                <span className="block text-primary-500">Works</span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-lg leading-relaxed">
                Responds to pricing, hours, and service questions in seconds — no wait times. 
                Let customers book appointments and get instant answers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-pill rounded-full hover:bg-gray-800 transition-colors"
              >
                See it in Action
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors"
              >
                View Pricing
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-sm text-muted mb-4">Trusted by businesses worldwide</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="w-24 h-8 bg-muted/20 rounded"></div>
                <div className="w-24 h-8 bg-muted/20 rounded"></div>
                <div className="w-24 h-8 bg-muted/20 rounded"></div>
                <div className="w-24 h-8 bg-muted/20 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="bg-surface border border-border rounded-lg p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted/30 rounded w-3/4"></div>
                    <div className="h-4 bg-muted/30 rounded w-1/2"></div>
                    <div className="h-4 bg-muted/30 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-primary-500/20 rounded w-3/4"></div>
                      <div className="h-3 bg-primary-500/20 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-muted/30 rounded w-2/3"></div>
                      <div className="h-3 bg-muted/30 rounded w-4/5"></div>
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



