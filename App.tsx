
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-dark selection:bg-primary/40 selection:text-white relative">
      {/* Background VFX */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="orb w-[500px] h-[500px] bg-primary top-[-10%] left-[-5%]" style={{ animationDelay: '0s' }}></div>
        <div className="orb w-[400px] h-[400px] bg-accent bottom-[-10%] right-[-5%]" style={{ animationDelay: '2s' }}></div>
        <div className="orb w-[300px] h-[300px] bg-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navbar scrolled={scrolled} />
      
      <main className="relative">
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Differentials /></div>
        <div className="reveal"><Plans /></div>
        <div className="reveal"><Contact /></div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
