export default function Hero() {
  return (
    <section className="gradient-bg text-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Never Miss Another
              <span className="block text-yellow-300">Med-Spa Lead</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              AI receptionist that answers questions, books consultations, and captures leads 24/7. 
              Perfect for Botox, fillers, and aesthetic clinics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/yourname/medspa-demo'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                📅 Book 10-Min Demo
              </a>
              <button className="btn-secondary">
                🎥 Watch Demo
              </button>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Instant Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>No Training Required</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <div className="font-semibold">Med-Spa Assistant</div>
                    <div className="text-sm text-gray-300">Online now</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3 text-sm">
                    Hi! I can help you with questions about Botox, fillers, laser treatments, and booking consultations. How can I assist you?
                  </div>
                  
                  <div className="bg-purple-600 rounded-lg p-3 text-sm ml-8">
                    What's the cost of Botox treatment?
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3 text-sm">
                    Botox pricing varies based on the areas treated. I'd be happy to help you book a consultation where our medical professionals can provide a personalized quote. Would you like to schedule one?
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

