import React from 'react';
import { Cloud, ShieldCheck, Brain, Smartphone, Globe, Server } from 'lucide-react';
import { ServiceItem } from '../types';

const products: ServiceItem[] = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions designed to optimize your operational efficiency.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity Suites",
    description: "Enterprise-grade security protocols to protect your data from evolving digital threats.",
    icon: ShieldCheck,
  },
  {
    title: "AI & Analytics",
    description: "Leverage the power of machine learning to gain actionable insights from your big data.",
    icon: Brain,
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
    icon: Smartphone,
  },
  {
    title: "Web Solutions",
    description: "Responsive, high-performance web applications built with modern frameworks.",
    icon: Globe,
  },
  {
    title: "Dedicated Hosting",
    description: "Reliable server management and hosting services ensuring 99.9% uptime.",
    icon: Server,
  },
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-sky-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Expertise</h2>
          <p className="text-secondary text-lg">
            We deliver a comprehensive suite of IT solutions tailored to drive growth and innovation across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-sky-100 hover:shadow-xl hover:border-accent transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <product.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {product.title}
              </h3>
              <p className="text-sky-800/80 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};