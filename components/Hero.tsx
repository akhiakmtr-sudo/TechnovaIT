import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sky-100 border border-sky-200 text-accent text-sm font-semibold tracking-wide uppercase">
              The Future of IT
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Accelerate Your <br className="hidden lg:block" />
              <span className="text-accent">Digital Transformation</span>
            </h1>
            <p className="text-lg text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Technova provides cutting-edge software solutions, cloud infrastructure, and AI-driven strategies to propel your business into the next era of technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg shadow-lg shadow-sky-500/30 hover:bg-sky-600 transition-all transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-800 border border-sky-200 font-semibold rounded-lg hover:bg-sky-50 hover:border-sky-300 transition-all"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-200 to-blue-200 rounded-2xl blur-2xl opacity-70 -z-10"></div>
              <img 
                src="https://picsum.photos/800/600?random=10" 
                alt="Technology Innovation" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-sky-100"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 md:p-6 rounded-xl shadow-xl border border-sky-50 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                  98%
                </div>
                <div>
                  <p className="text-sm text-sky-500 font-medium">Client Satisfaction</p>
                  <p className="text-primary font-bold">Global Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};