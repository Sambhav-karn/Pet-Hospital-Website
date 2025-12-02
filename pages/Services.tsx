import React from 'react';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-brand-teal text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Cat background" />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Veterinary Services</h1>
          <p className="text-brand-lightTeal max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
            Comprehensive medical, surgical, and dental care tailored to your pet's needs.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-6 md:px-12 py-32 space-y-32">
        {SERVICES.map((service, index) => (
          <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Content Side */}
            <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="inline-block bg-brand-cream text-brand-darkOrange px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">
                AAHA Standard Care
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">{service.title}</h2>
              <p className="text-gray-600 text-xl leading-relaxed font-light">{service.fullDescription}</p>
              
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Key Benefits</h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                      <div className="bg-brand-teal text-white rounded-full p-1 mt-0.5 shrink-0">
                         <Check className="w-3 h-3" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {service.pricing && (
                <div className="flex items-center gap-3 text-base font-medium text-gray-500 bg-white p-4 rounded-lg border border-gray-100 inline-block">
                  <span className="text-brand-darkTeal">Price Guideline: {service.pricing}</span>
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-600 uppercase tracking-wide">*Estimates vary</span>
                </div>
              )}

              {/* FAQs for this service */}
              <div className="space-y-6 pt-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border-l-4 border-brand-teal pl-6 py-1">
                    <p className="font-bold text-gray-800 text-lg mb-2">{faq.question}</p>
                    <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button size="lg" onClick={() => navigate('/contact')} className="px-8 text-lg">Book {service.title} <ArrowRight className="w-5 h-5 ml-2" /></Button>
              </div>
            </div>

            {/* Image Side */}
            <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                 <img 
                    src={service.image}
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                 />
              </div>
              {/* Decorative blobs */}
              <div className={`absolute -bottom-10 -right-10 w-48 h-48 bg-brand-orange rounded-full opacity-10 -z-0 ${index % 2 === 1 ? 'left-auto right-auto -left-10' : ''}`}></div>
              <div className={`absolute -top-10 -left-10 w-32 h-32 bg-brand-teal rounded-full opacity-10 -z-0 ${index % 2 === 1 ? 'left-auto -right-10' : ''}`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Wellness Plans CTA */}
      <section className="bg-gray-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="Cat background" />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Affordable Wellness Plans</h2>
          <p className="text-gray-300 mb-10 text-xl font-light">
            Make preventative care affordable and stress-free by bundling routine services into easy monthly payments. Plans include annual exams, core vaccines, and routine lab work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Button variant="primary" size="lg" onClick={() => navigate('/contact')} className="px-10 py-4 text-lg">Inquire About Plans</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;