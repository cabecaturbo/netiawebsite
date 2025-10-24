export default function CTA() {
  return (
    <section className="gradient-bg text-white">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Never Miss Another Lead?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            Join 500+ med-spa clinics using Netia AI to capture leads, book consultations, 
            and grow their practice 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/yourname/medspa-demo'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              📅 Book 10-Min Demo
            </a>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              💬 Chat with Sales
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-300">24/7</div>
              <div className="text-gray-200">Availability</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-300">2 min</div>
              <div className="text-gray-200">Setup Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-300">40%</div>
              <div className="text-gray-200">More Bookings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
