import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="bg-brand-cream py-32 text-center">
        <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8">Patient Stories</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Read what our Winter Haven and Lakeland clients say about their experience at Paw Haven. We are proud to be top-rated.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                className={`w-6 h-6 ${i < t.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                        ))}
                    </div>
                    <p className="text-gray-700 text-lg italic mb-8 min-h-[100px] leading-relaxed">"{t.text}"</p>
                    <div className="border-t pt-6">
                        <p className="font-bold text-gray-900 text-lg font-serif">{t.name}</p>
                        <p className="text-sm text-brand-teal font-bold uppercase tracking-widest mt-1">{t.service}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-32 bg-gray-50 rounded-3xl p-12 md:p-24 text-center max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-teal to-brand-orange"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 relative z-10">Experience the Difference</h2>
            <p className="text-xl text-gray-600 mb-12 relative z-10 font-light">Join the hundreds of happy pet owners who trust Paw Haven with their furry family members.</p>
            <div className="flex justify-center gap-4 relative z-10">
                <Button size="lg" className="px-10 py-4 text-lg" onClick={() => navigate('/contact')}>Request Appointment</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;