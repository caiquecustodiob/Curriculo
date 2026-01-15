
import React from 'react';

const Services: React.FC = () => {
  const handleWhatsApp = (service: string) => {
    const msg = encodeURIComponent(`Olá Caique! Vi o serviço de ${service} no site e gostaria de saber mais.`);
    window.open(`https://wa.me/558588540125?text=${msg}`, '_blank');
  };

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h4 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Potencial Tecnológico</h4>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">A fronteira da <span className="text-gradient">inovação digital.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto md:h-[600px]">
          {/* Card Grande: Sites Institucionais */}
          <div onClick={() => handleWhatsApp('Sites Profissionais')} className="md:col-span-3 md:row-span-2 glass-card p-10 rounded-[2.5rem] group relative overflow-hidden cursor-pointer">
            <div className="absolute top-0 right-0 p-8 text-7xl opacity-10 group-hover:scale-120 transition-transform">🌐</div>
            <div className="relative z-10 flex flex-col h-full justify-end">
              <h3 className="text-3xl font-bold mb-4 text-white">Sites Institucionais</h3>
              <p className="text-slate-400 mb-6 text-lg">Presença digital robusta com tecnologias modernas (React/Next.js). Performance que o Google ama.</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Speed Optimized</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">SEO Ready</span>
              </div>
            </div>
          </div>

          {/* Card Médio: Landing Pages */}
          <div onClick={() => handleWhatsApp('Landing Pages')} className="md:col-span-3 glass-card p-8 rounded-[2.5rem] group relative overflow-hidden cursor-pointer">
             <div className="absolute top-0 right-0 p-6 text-5xl opacity-10 group-hover:rotate-12 transition-transform">🎯</div>
             <h3 className="text-2xl font-bold mb-2 text-white">Landing Pages</h3>
             <p className="text-slate-400">Máxima conversão. Transformamos cliques em lucro com design estratégico.</p>
          </div>

          {/* Card Pequeno: Portfólios */}
          <div onClick={() => handleWhatsApp('Portfólios Online')} className="md:col-span-1.5 glass-card p-6 rounded-[2.5rem] group relative overflow-hidden cursor-pointer">
            <div className="text-3xl mb-4 group-hover:animate-bounce">✨</div>
            <h3 className="font-bold text-white">Portfólios</h3>
            <p className="text-sm text-slate-500">Sua vitrine online.</p>
          </div>

          {/* Card Pequeno: Soluções Custom */}
          <div onClick={() => handleWhatsApp('Soluções Customizadas')} className="md:col-span-1.5 glass-card p-6 rounded-[2.5rem] group relative overflow-hidden cursor-pointer">
            <div className="text-3xl mb-4 group-hover:animate-spin">⚙️</div>
            <h3 className="font-bold text-white">Sistemas</h3>
            <p className="text-sm text-slate-500">Apps sob medida.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
