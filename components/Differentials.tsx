
import React from 'react';

const DifferentialItem = ({ icon, title, text }: { icon: string, title: string, text: string }) => (
  <div className="flex items-start space-x-6 p-8 rounded-[2rem] bg-surface/40 border border-white/5 hover:border-primary/20 hover:bg-white/5 transition-all group">
    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-2xl text-2xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 font-light leading-relaxed">{text}</p>
    </div>
  </div>
);

const Differentials: React.FC = () => {
  return (
    <section id="differentials" className="py-32 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h4 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4">🎯 Estratégia</h4>
            <h2 className="font-display font-black text-4xl md:text-7xl mb-8 tracking-tighter">Por que somos a sua <br/><span className="text-gradient">melhor escolha?</span></h2>
            <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
              Não entregamos apenas código. Entregamos uma ferramenta de vendas e autoridade projetada para dominar o seu nicho.
            </p>
            <div className="space-y-6">
              <DifferentialItem 
                icon="💎" 
                title="Elite com Preço Justo" 
                text="Design e tecnologia de alto padrão com valores acessíveis para quem está escalando." 
              />
              <DifferentialItem 
                icon="🛠️" 
                title="Suporte Técnico Real" 
                text="Até 3 meses de acompanhamento para garantir que tudo funcione como planejado." 
              />
              <DifferentialItem 
                icon="🤝" 
                title="Parceria Direta" 
                text="Você fala diretamente com quem desenvolve. Sem intermediários, sem ruído." 
              />
            </div>
          </div>
          
          <div className="glass-card p-10 md:p-16 rounded-[3rem] relative reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="absolute top-10 right-10 text-8xl opacity-5">🧠</div>
            <h3 className="text-3xl font-display font-black text-white mb-10 tracking-tighter uppercase">Vantagens Exclusivas</h3>
            <ul className="space-y-6">
              {[
                'Conversão Estratégica focada em Resultados',
                'Arquitetura Escalável para crescer seu negócio',
                'Performance máxima comprovada via Google',
                'Design 100% Autoral e Exclusivo',
                'Pós-venda Consultivo e Presente'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-4 text-slate-300 group">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-dark transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-16 p-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] border border-white/10 text-center backdrop-blur-md">
              <span className="text-white font-black uppercase tracking-widest text-xs">Transforme sua ideia em presença digital de impacto.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
