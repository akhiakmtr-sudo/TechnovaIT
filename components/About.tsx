import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-sky-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/400/500?random=20" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-lg mt-8 border border-sky-100"
              />
              <img 
                src="https://picsum.photos/400/500?random=21" 
                alt="Office environment" 
                className="rounded-2xl shadow-lg -mb-8 border border-sky-100"
              />
            </div>
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-sky-200 rounded-full -z-10 opacity-40 blur-3xl"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About <span className="text-accent">Technova</span>
            </h2>
            <p className="text-secondary text-lg mb-6 leading-relaxed">
              Founded in 2010, Technova IT Solutions has grown from a small startup to a global technology partner. We specialize in bridging the gap between complex technology and business goals.
            </p>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              Our team of over 200 dedicated engineers, designers, and strategists works tirelessly to deliver products that not only meet current market standards but set new benchmarks for quality and innovation.
            </p>

            <div className="space-y-4">
              {[
                "Global Presence in 12 Countries",
                "Award-Winning Support Team",
                "Agile Development Methodology",
                "Sustainability-Focused Innovation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};