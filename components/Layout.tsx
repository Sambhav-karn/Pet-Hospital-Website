import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Button from './Button';
import GeminiChat from './GeminiChat';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Top Bar */}
      <div className="bg-brand-teal text-white py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="font-semibold tracking-wide">AAHA ACCREDITED VETERINARIAN IN WINTER HAVEN & LAKELAND</span>
          <div className="flex items-center gap-4">
             <a href="tel:863-293-1428" className="hover:text-brand-lightTeal flex items-center gap-1">
               <Phone className="w-3 h-3" /> Winter Haven: (863)-293-1428
             </a>
             <span className="hidden md:inline">|</span>
             <a href="tel:863-334-0158" className="hover:text-brand-lightTeal flex items-center gap-1">
               <Phone className="w-3 h-3" /> Lakeland: (863)-334-0158
             </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
               <div className="bg-brand-teal p-2 rounded-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                 </svg>
               </div>
               <div>
                 <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-900 leading-none">PAW HAVEN</h1>
                 <p className="text-[10px] tracking-widest text-brand-darkTeal uppercase font-semibold">Animal Hospital</p>
               </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-brand-orange ${
                      isActive ? 'text-brand-orange' : 'text-gray-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button onClick={handleBookNow} size="sm">Request Appointment</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium ${
                      isActive ? 'text-brand-orange' : 'text-gray-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button onClick={handleBookNow} fullWidth>Request Appointment</Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-serif font-bold">PAW HAVEN</h3>
            <p className="text-sm leading-relaxed">
              AAHA-accredited veterinary care treating your pets like family. Proudly serving Winter Haven and Lakeland.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/PawHaven/" target="_blank" className="hover:text-brand-orange"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/pawhavenvet/" target="_blank" className="hover:text-brand-orange"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/services" className="hover:text-brand-orange">Services</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-orange">Our Team</NavLink></li>
              <li><NavLink to="/testimonials" className="hover:text-brand-orange">Reviews</NavLink></li>
              <li><a href="#" className="hover:text-brand-orange">Online Pharmacy</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-medium mb-4">Locations</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-brand-orange" />
                <span>
                  <strong>Winter Haven:</strong><br />
                  3691 Lake Alfred Rd<br />
                  Winter Haven, FL 33881
                </span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-brand-orange" />
                <span>
                  <strong>Lakeland:</strong><br />
                  5217 US-98 S<br />
                  Lakeland, FL 33812
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-medium mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Monday - Friday</span> <span>8am - 5pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>Closed</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
               <p className="text-xs text-gray-500">For emergencies after hours, please contact local emergency clinics.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Paw Haven Animal Hospital. All rights reserved.
        </div>
      </footer>
      
      {/* Floating Chat */}
      <GeminiChat />
    </div>
  );
};

export default Layout;
