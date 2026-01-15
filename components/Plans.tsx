
import React from 'react';

const PlanCard = ({ title, features, highlight = false }: { title: string, features: string[], highlight?: boolean }) => {
  const handleSelectPlan = () => {
    const messages: { [key: string]: string } = {
      'Starter': 'Olá Caique! Vi o Plano Starter no site e gostaria de iniciar minha Landing Page de alta performance.',
      'Professional': 'Olá Caique! Tenho interesse no Plano Professional para criar um site institucional completo para minha marca.',
      'Premium': 'Olá Caique! Quero o Plano Premium. Preciso de uma solução personalizada e suporte VIP para meu projeto robusto.'
    };
    
    const message = encodeURIComponent(messages[title] || 'Olá! Gostaria de fazer um orçamento.');
    window.open(`https://wa.me/558588540125?text=${message}`, '_blank');
  };

  return (
    <div className={`group p-8 rounded-[2.5rem] transition-all duration-500 relative flex flex-col h-full ${
      highlight 
      ? 'bg-gradient-to-br from-blue-600 to-indigo-700 scale-105 shadow-2xl shadow-primary/30 z-10 border-t border-white/20' 
      : 'glass-card hover:bg-white/5 border-white/5'
    }`}>
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-dark text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-xl">
          Melhor Escolha
        </div>
      )}
      
      <h3 className={`text-2xl font-display font-black mb-6 ${highlight ? 'text-white' : 'text-primary'} uppercase tracking-tighter`}>
        {title}
      </h3>
      
      <ul className="space-y-5 mb-10 flex-grow">
        {features.map((f, i) => (
          <li key={i} className={`flex items-start space-x-3 text-sm leading-relaxed ${highlight ? 'text-blue-50/90' : 'text-slate-400'}`}>
            <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${highlight ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">{f}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={handleSelectPlan}
        className={`w-full py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-xs transition-all transform active:scale-95 flex items-center justify-center space-x-2 ${
          highlight 
          ? 'bg-white text-primary hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]' 
          : 'bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/20'
        }`}
      >
        <span>Solicitar Orçamento</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h4 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Investimento Estratégico</h4>
          <h2 className="font-display font-black text-4xl md:text-7xl mb-6 tracking-tighter">Pacotes Sob <span className="text-gradient">Medida.</span></h2>
          <p className="text-slate-400 text-lg font-light">
            Escalabilidade e performance para cada fase do seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          <PlanCard 
            title="Starter" 
            features={[
              'Landing Page de alta performance',
              'Design Responsivo (Mobile First)',
              'Link direto para WhatsApp',
              'SEO Google básico incluso',
              'Entrega acelerada'
            ]} 
          />
          <PlanCard 
            title="Professional" 
            highlight={true}
            features={[
              'Site Institucional (até 5 páginas)',
              'Galeria de Projetos Dinâmica',
              'Suporte técnico GRATUITO (3 meses)',
              'Otimização Core Web Vitals',
              'Painel de Gestão Simples'
            ]} 
          />
          <PlanCard 
            title="Premium" 
            features={[
              'Projetos e Sistemas Sob Demanda',
              'Dashboards Personalizados',
              'Suporte VIP estendido (6 meses)',
              'SEO Avançado + Integrações',
              'Consultoria Técnica Mensal'
            ]} 
          />
        </div>
      </div>
    </section>
  );
};

export default Plans;
