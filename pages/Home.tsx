import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Heart, Clock, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { TESTIMONIALS, SERVICES } from '../constants';


const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/veterinarianDog.jpg"
            alt="Veterinarian smiling with a happy dog" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-lightTeal/90 backdrop-blur-sm text-brand-darkTeal text-sm font-bold tracking-widest uppercase border border-brand-teal/20">
              <ShieldCheck className="w-5 h-5" /> AAHA Accredited Excellence
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
              Compassionate Care for <br/>
              <span className="text-brand-orange">Your Best Friend</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-md">
              Expert preventive medicine, advanced diagnostics, and family-centered service for dogs & cats in Winter Haven & Lakeland.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button onClick={() => navigate('/contact')} size="lg" className="text-lg px-10 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Request Appointment
              </Button>
              <Button onClick={() => window.location.href='tel:8632931428'} variant="outline" size="lg" className="text-lg px-10 py-4 h-auto bg-white/10 text-white border-white hover:bg-white hover:text-brand-teal backdrop-blur-sm transition-all duration-300">
                Call (863)-293-1428
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Paw Haven - Spacious Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Why Choose Paw Haven?</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              We treat pets as family. Our standards are higher because your pet deserves the best. 
              From our AAHA accreditation to our fear-free approach, experience the difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                icon: ShieldCheck, 
                title: "AAHA Accredited", 
                desc: "Meeting rigorous standards for safety, medicine, and service excellence." 
              },
              { 
                icon: Clock, 
                title: "Faster Answers", 
                desc: "On-site laboratory and digital imaging for immediate, accurate results." 
              },
              { 
                icon: Heart, 
                title: "Fear-Free Focus", 
                desc: "Calming techniques and comfort protocols to reduce stress for every patient." 
              },
              { 
                icon: MapPin, 
                title: "Two Locations", 
                desc: "Conveniently serving Winter Haven and Lakeland families." 
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-lightTeal text-brand-teal rounded-full mb-8 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services - Visual & Large */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">Comprehensive Care</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Everything Your Pet Needs</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                From routine wellness to advanced surgery, we provide everything your pet needs under one roof.
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate('/services')} size="lg" className="px-8">View All Services</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer" onClick={() => navigate('/services')}>
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-teal/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors font-serif">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed line-clamp-2">{service.shortDescription}</p>
                  <div className="flex items-center text-brand-teal font-bold text-base tracking-wide uppercase">
                    Learn more <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview - Large Cards */}
      <section className="py-32 bg-white relative overflow-hidden">
         {/* Decorative background element */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream/50 -skew-x-12 transform translate-x-1/2 -z-0"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-20">Real Client Stories</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col relative">
                <div className="absolute -top-5 left-10 text-6xl text-brand-orange/20 font-serif">"</div>
                <div className="flex text-brand-orange mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic mb-8 flex-grow">{t.text}</p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                  <p className="text-sm text-brand-teal font-semibold uppercase tracking-wide">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button variant="secondary" size="lg" onClick={() => navigate('/testimonials')} className="px-12 py-4 text-lg">Read More Reviews</Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Teaser */}
      <section className="py-24 bg-brand-teal text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Ready to join the family?</h2>
            <div className="flex flex-wrap justify-center gap-6 text-base md:text-lg">
                <span className="flex items-center gap-3 bg-brand-darkTeal px-6 py-3 rounded-full shadow-lg"><CheckCircle className="w-5 h-5"/> AAHA Accredited</span>
                <span className="flex items-center gap-3 bg-brand-darkTeal px-6 py-3 rounded-full shadow-lg"><CheckCircle className="w-5 h-5"/> Accepting New Patients</span>
                <span className="flex items-center gap-3 bg-brand-darkTeal px-6 py-3 rounded-full shadow-lg"><CheckCircle className="w-5 h-5"/> Urgent Care Available</span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;