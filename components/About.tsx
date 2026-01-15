
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-10 bg-gradient-to-tr from-primary to-accent opacity-10 group-hover:opacity-20 blur-[100px] transition-all duration-700"></div>
            <div className="relative rounded-[3rem] overflow-hidden glass-card p-3 transform transition-transform duration-700 hover:rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                alt="Code Innovation" 
                className="w-full h-[600px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute bottom-10 left-10 glass-card p-6 rounded-3xl animate-float">
                <span className="text-4xl block mb-2">🚀</span>
                <p className="text-white font-black">Caique Custódio</p>
                <p className="text-primary text-xs uppercase tracking-widest">Full-Stack Innovator</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-primary font-bold tracking-[0.3em] uppercase text-xs">🚀 O Arquiteto</h4>
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-tight">Expertise que <br/><span className="text-gradient">gera impacto.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              Especialista em criar interfaces de alta performance que equilibram estética minimalista com funcionalidade brutal. Na C&C, não apenas escrevemos código; desenhamos o futuro da sua presença digital.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                <h3 className="text-4xl font-black text-white mb-2">3+ Meses</h3>
                <p className="text-slate-500 text-sm uppercase tracking-widest">Suporte Grátis Incluso</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-secondary/20 transition-all">
                <h3 className="text-4xl font-black text-white mb-2">100%</h3>
                <p className="text-slate-500 text-sm uppercase tracking-widest">Customizado via Código</p>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://wa.me/558588540125?text=Olá Caique! Vi sua apresentação e gostaria de um atendimento exclusivo.', '_blank')}
              className="mt-10 inline-flex items-center space-x-3 text-white font-bold group"
            >
              <span className="border-b-2 border-primary pb-1 group-hover:border-white transition-all">Saber mais sobre meu processo</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
