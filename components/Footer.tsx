import React from 'react';
import { CircuitBoard, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-950 text-white pt-16 pb-8 border-t border-sky-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              <CircuitBoard className="w-8 h-8 text-sky-500" />
              <span>Technova<span className="text-sky-500">.IT</span></span>
            </div>
            <p className="text-sky-200/80 leading-relaxed mb-6">
              Empowering businesses with next-gen technology solutions. We build the digital future.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-sky-900 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors text-sky-300 hover:text-white">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sky-300/80 hover:text-sky-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Cloud Solutions', 'Cybersecurity', 'Web Development', 'AI Integration', 'Consulting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sky-300/80 hover:text-sky-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-sky-300/80 mb-4">Subscribe to our latest tech insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-lg bg-sky-900 border border-sky-800 text-white focus:border-sky-500 focus:outline-none placeholder-sky-500"
              />
              <button className="bg-sky-600 px-4 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                Go
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-sky-900 pt-8 text-center text-sky-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Technova IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};