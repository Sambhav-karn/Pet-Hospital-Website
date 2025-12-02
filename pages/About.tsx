import React from 'react';
import { TEAM } from '../constants';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const About: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-32 md:py-40">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8">Our Story & Mission</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Meet the AAHA-accredited team at Paw Haven. We take the time to make you and your pet part of our family.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=2000" 
              alt="Veterinarian holding a puppy" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[600px]" 
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-orange text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="font-serif font-bold text-2xl">Since 2005</p>
              <p className="text-sm opacity-90">Serving Winter Haven with love and excellence.</p>
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">A Promise of Compassion</h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              Paw Haven Animal Hospital began with a simple promise: to offer modern, compassionate veterinary care that treats every pet as a four-legged family member. Over the years we grew to serve Winter Haven and Lakeland with two full-service hospitals, driven by an experienced veterinary team and an unwavering commitment to excellence.
            </p>
            <div className="bg-brand-cream p-10 rounded-2xl border-l-8 border-brand-orange">
              <h3 className="font-bold text-brand-darkOrange mb-4 text-xl uppercase tracking-wider">Our Mission</h3>
              <p className="text-gray-800 italic text-xl leading-relaxed font-serif">
                "Deliver the highest standard of veterinary care with compassion, expertise and clear communication — helping pets live longer, healthier, happier lives."
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-6 pt-4">
              {["Integrity & Excellence", "Empathy & Family", "Proactive Wellness", "Innovation"].map((val, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 font-medium text-lg">
                  <span className="w-3 h-3 bg-brand-teal rounded-full shrink-0"></span> {val}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Meet The Team</h2>
            <p className="text-xl text-gray-600 font-light">The experts dedicated to your pet's health.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 text-center group">
                <div className="h-80 overflow-hidden bg-gray-200 relative">
                  <img 
                    src={member.image}
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-brand-teal/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">{member.name}</h3>
                  <p className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4">{member.role}</p>
                  <p className="text-gray-500 text-base leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Button size="lg" className="px-10 py-4 text-lg" onClick={() => navigate('/contact')}>Schedule an Introduction</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;