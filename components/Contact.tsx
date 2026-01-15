
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.nome || !formData.email) return;

    const text = `*Novo Contato via Site*\n\n*Nome:* ${formData.nome}\n*Email:* ${formData.email}\n*Serviço:* ${formData.assunto || 'Não especificado'}\n*Mensagem:* ${formData.mensagem}`;
    const message = encodeURIComponent(text);
    window.open(`https://wa.me/558588540125?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[4rem] p-8 md:p-20 grid lg:grid-cols-2 gap-20 overflow-hidden relative border-white/5 shadow-2xl">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h4 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Briefing Rápido</h4>
            <h2 className="font-display font-black text-4xl md:text-7xl mb-8 tracking-tighter">O Próximo Passo do Seu <span className="text-gradient">Sucesso.</span></h2>
            
            <p className="text-slate-400 text-lg mb-12 leading-relaxed font-light">
              Pronto para construir algo incrível? Preencha os campos ao lado ou chame diretamente no canal oficial.
            </p>

            <div className="space-y-6">
              <a href="mailto:caiquecustodiob@gmail.com" className="group flex items-center space-x-6 p-5 rounded-[2rem] hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Email</p>
                  <span className="text-lg font-bold text-white group-hover:text-primary transition-colors">caiquecustodiob@gmail.com</span>
                </div>
              </a>
              
              <a href="https://wa.me/558588540125?text=Olá Caique! Quero falar sobre um novo projeto." target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-6 p-5 rounded-[2rem] hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                <div className="w-14 h-14 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.312l-.904 3.313 3.4-.892c.989.54 2.049.852 3.248.852 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.785-5.769-5.785zm4.389 8.084c-.133.222-.669.444-.913.488-.244.044-.488.067-1.394-.311-.906-.378-2.126-1.31-2.924-2.108-.798-.798-1.574-1.841-1.93-2.307-.356-.466-.4-.689-.222-.911.178-.222.356-.4.533-.6.177-.2.244-.333.355-.555.111-.222.044-.422-.022-.555-.067-.133-.533-1.288-.733-1.777-.193-.473-.393-.406-.54-.413-.143-.007-.311-.007-.488-.007-.177 0-.466.067-.71.333-.244.267-.932.911-.932 2.221 0 1.31 1.021 2.576 1.154 2.754.133.178 1.884 2.885 4.564 4.04 2.679 1.156 2.679.771 3.167.726.488-.044 1.576-.644 1.798-1.266.222-.622.222-1.155.155-1.266-.066-.111-.244-.2-.533-.333z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">WhatsApp</p>
                  <span className="text-lg font-bold text-white group-hover:text-secondary transition-colors">(85) 8854-0125</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-surface/60 p-8 md:p-12 rounded-[3rem] border border-white/5 relative">
            <h3 className="text-2xl font-display font-black mb-10 uppercase tracking-tighter">Fale com o Especialista</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Seu Nome</label>
                  <input required type="text" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all w-full" placeholder="Ex: João Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">E-mail</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all w-full" placeholder="contato@empresa.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">O que você precisa?</label>
                <select className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all w-full appearance-none" value={formData.assunto} onChange={(e) => setFormData({...formData, assunto: e.target.value})}>
                  <option value="">Selecione uma opção</option>
                  <option value="Landing Page High-Performance">Landing Page High-Performance</option>
                  <option value="Site Institucional Moderno">Site Institucional Moderno</option>
                  <option value="Portfólio de Elite">Portfólio de Elite</option>
                  <option value="Sistema/App Sob Medida">Sistema/App Sob Medida</option>
                  <option value="Consultoria Frontend">Consultoria Frontend</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Sua Ideia</label>
                <textarea required rows={4} value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all w-full resize-none" placeholder="Conte-nos os detalhes do seu projeto..."></textarea>
              </div>
              
              <button className="w-full bg-primary hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-2xl shadow-primary/20 transition-all transform active:scale-95 flex items-center justify-center space-x-3 group">
                <span className="uppercase text-xs tracking-[0.2em]">Disparar via WhatsApp</span>
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
