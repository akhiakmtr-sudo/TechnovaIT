import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Products />
        <About />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
