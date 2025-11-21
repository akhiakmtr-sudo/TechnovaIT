import React from 'react';
import { Target, Eye } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#e0f2fe 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Purpose</h2>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Defining our path forward and the values that drive every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Mission */}
          <div className="bg-sky-800/30 backdrop-blur-sm p-10 rounded-3xl border border-sky-700 hover:border-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-sky-900/50 rounded-2xl flex items-center justify-center text-sky-400 mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-sky-100 leading-relaxed text-lg">
              To empower organizations worldwide by providing robust, innovative, and scalable IT solutions that streamline operations and foster sustainable growth. We aim to be the catalyst for digital excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-sky-800/30 backdrop-blur-sm p-10 rounded-3xl border border-sky-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="w-16 h-16 bg-sky-900/50 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-sky-100 leading-relaxed text-lg">
              To envisage a world where technology integrates seamlessly with humanity, creating a smarter, safer, and more connected ecosystem for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};