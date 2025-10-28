'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "Most clinics are up and running within 24-48 hours. We handle the technical setup, train the AI on your services, and provide you with the embed code. You just copy and paste it into your website."
    },
    {
      question: "Does it work with my existing booking system?",
      answer: "Yes! Netia AI integrates with all major booking platforms including Calendly, Acuity, Square, and custom systems. We can also send leads directly to your CRM or email."
    },
    {
      question: "What if the AI can't answer a question?",
      answer: "The AI is trained to handle 90%+ of common questions. For complex medical questions or situations it can't handle, it will politely direct the visitor to book a consultation or call your clinic directly."
    },
    {
      question: "Is my patient data secure?",
      answer: "Absolutely. We're HIPAA compliant and use enterprise-grade security. All conversations are encrypted, and we never store sensitive patient information. Your data stays private and secure."
    },
    {
      question: "Can I customize the AI's responses?",
      answer: "Yes! You can customize the AI's personality, responses, and knowledge base. We'll train it on your specific services, pricing, and clinic policies during setup."
    },
    {
      question: "What's included in the setup fee?",
      answer: "The $299 setup fee includes custom AI training on your services, integration with your booking system, website embedding, staff training, and 30 days of support. No ongoing setup costs."
    },
    {
      question: "Do I need any technical knowledge?",
      answer: "Not at all! We handle all the technical aspects. You just need to provide your website access and booking system details. Our team does the rest."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the results, we'll refund your setup fee and cancel your subscription with no questions asked."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Netia AI for your med-spa clinic
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-2xl text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you succeed. Book a free consultation to discuss your specific needs.
            </p>
            <a 
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/yourname/medspa-demo'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              📅 Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

