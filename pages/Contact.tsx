import React, { useState } from 'react';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Winter Haven',
    petName: '',
    service: 'Wellness Exam',
    message: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, consent: e.target.checked }));
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Request Received!</h2>
          <p className="text-gray-600 mb-6">Thank you, {formData.name}. We will contact you at {formData.phone} within one business day to confirm your appointment for {formData.petName}.</p>
          <Button onClick={() => setSubmitted(false)}>Submit Another Request</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact & Appointments</h1>
          <p className="text-gray-600">New patients welcome! Schedule your visit at Winter Haven or Lakeland.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16">
        
        {/* Form Section */}
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-brand-teal focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-brand-teal focus:outline-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-brand-teal focus:outline-none" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pet Name</label>
                    <input name="petName" value={formData.petName} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-brand-teal focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location *</label>
                    <select name="location" value={formData.location} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-brand-teal focus:outline-none">
                        <option value="Winter Haven">Winter Haven</option>
                        <option value="Lakeland">Lakeland</option>
                    </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-brand-teal focus:outline-none">
                  <option value="Wellness Exam">Wellness Exam</option>
                  <option value="Vaccines">Vaccines</option>
                  <option value="Sick Visit">Sick Visit / Urgent</option>
                  <option value="Dental">Dental Consultation</option>
                  <option value="Surgery">Surgery Consultation</option>
                  <option value="Laser Therapy">Laser Therapy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message / Symptoms</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-brand-teal focus:outline-none"></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input required type="checkbox" checked={formData.consent} onChange={handleCheckbox} className="mt-1 rounded text-brand-teal focus:ring-brand-teal" />
                <span className="text-xs text-gray-500">I agree to be contacted by Paw Haven Animal Hospital regarding this request.</span>
              </div>

              <Button type="submit" fullWidth size="lg">Submit Request</Button>
            </form>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-12">
            
            {/* Winter Haven */}
            <div>
                <h3 className="text-xl font-bold text-brand-darkTeal mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5"/> Winter Haven Clinic
                </h3>
                <p className="text-gray-600 mb-2">3691 Lake Alfred Rd, Winter Haven, FL 33881</p>
                <p className="text-gray-900 font-medium mb-4 flex items-center gap-2"><Phone className="w-4 h-4"/> (863)-293-1428</p>
                {/* Simulated Map */}
                <div className="bg-gray-200 w-full h-48 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0273688012003!2d-81.73569272464941!3d28.06172850977257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd6d2876eeba83%3A0x57c9f9e3ee76a79e!2sPaw%20Haven%20Animal%20Hospital%20Winter%20Haven!5e1!3m2!1sen!2sin!4v1764658915279!5m2!1sen!2sin" height="100%" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* Lakeland */}
            <div>
                <h3 className="text-xl font-bold text-brand-darkTeal mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5"/> Lakeland Clinic
                </h3>
                <p className="text-gray-600 mb-2">5217 US-98 S, Lakeland, FL 33812</p>
                <p className="text-gray-900 font-medium mb-4 flex items-center gap-2"><Phone className="w-4 h-4"/> (863)-334-0158</p>
                {/* Simulated Map */}
                <div className="bg-gray-200 w-full h-48 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56160.560229592935!2d-81.95922145136716!3d27.969415100000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3fc6d2b9803b%3A0xa2b569ac5f4941e5!2sPaw%20Haven%20Animal%20Hospital%20Lakeland!5e1!3m2!1sen!2sin!4v1764659193154!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* Hours */}
            <div className="bg-brand-lightTeal p-6 rounded-xl">
                <h3 className="text-lg font-bold text-brand-darkTeal mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5"/> Hours of Operation
                </h3>
                <div className="space-y-2 text-sm text-gray-800">
                    <div className="flex justify-between border-b border-brand-teal/20 pb-1"><span>Monday - Friday</span> <span>8:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between text-gray-500"><span>Saturday - Sunday</span> <span>Closed</span></div>
                </div>
            </div>

            <div className="text-sm text-gray-500">
                <p><span className="font-bold">Email:</span> info@pawhavenvet.com</p>
                <p className="mt-2">We aim to respond to all online requests within one business day.</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;