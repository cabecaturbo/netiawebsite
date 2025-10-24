export default function Proof() {
  const stats = [
    { number: '500+', label: 'Med-Spa Clinics' },
    { number: '40%', label: 'More Bookings' },
    { number: '24/7', label: 'Availability' },
    { number: '2 min', label: 'Setup Time' }
  ];

  const testimonials = [
    {
      quote: "Netia AI has transformed our practice. We never miss a lead anymore, and our booking rate increased by 40% in just 3 months.",
      author: "Dr. Sarah Johnson",
      title: "Owner, Elite Aesthetics",
      avatar: "👩‍⚕️"
    },
    {
      quote: "The AI handles all our common questions perfectly. Our staff can focus on treatments while the bot handles inquiries.",
      author: "Michael Chen",
      title: "Director, Perfect Skin Clinic",
      avatar: "👨‍⚕️"
    },
    {
      quote: "Best investment we've made. The ROI was immediate - we're booking 3x more consultations than before.",
      author: "Dr. Emily Rodriguez",
      title: "Founder, Radiant Med Spa",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Med-Spa Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See what clinic owners are saying about Netia AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex text-yellow-400 mt-4">
                {'★'.repeat(5)}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by leading aesthetic clinics nationwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Elite Aesthetics</div>
            <div className="text-2xl font-bold text-gray-400">Perfect Skin Clinic</div>
            <div className="text-2xl font-bold text-gray-400">Radiant Med Spa</div>
            <div className="text-2xl font-bold text-gray-400">Beauty & Beyond</div>
            <div className="text-2xl font-bold text-gray-400">Aesthetic Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
