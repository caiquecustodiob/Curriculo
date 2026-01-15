
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Flying Elements Visual FX */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent rounded-full animate-float opacity-30" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-secondary rounded-full animate-float opacity-50" style={{ animationDuration: '12s' }}></div>
        
        {/* Animated Lines Background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-6 py-2 mb-10 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl reveal">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Engenharia de Frontend & UI/UX</span>
          </div>
          
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[120px] leading-[0.85] mb-12 tracking-tighter">
            <span className="reveal inline-block" style={{ transitionDelay: '0.1s' }}>DOMINANDO</span><br/>
            <span className="text-gradient reveal inline-block" style={{ transitionDelay: '0.2s' }}>A WEB MODERNA</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mb-14 leading-relaxed font-light reveal" style={{ transitionDelay: '0.3s' }}>
            Não construímos apenas sites. Criamos ecossistemas digitais imersivos que desafiam os limites da performance e estética.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 reveal" style={{ transitionDelay: '0.4s' }}>
            <button 
                onClick={() => window.open('https://wa.me/558588540125?text=Olá Caique! Quero levar meu projeto para o próximo nível.', '_blank')}
                className="group relative bg-white text-dark px-14 py-6 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10 flex items-center"
            >
              Iniciar Projeto
              <div className="ml-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white group-hover:translate-x-2 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
            
            <a href="#services" className="px-14 py-6 rounded-full font-bold text-lg transition-all border border-slate-800 hover:border-slate-500 hover:bg-white/5 flex items-center justify-center text-slate-300">
              Ver Potencial
            </a>
          </div>
        </div>
      </div>
      
      {/* Glowing Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
    </section>
  );
};

export default Hero;
