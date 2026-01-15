
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-10 md:space-y-0">
          <div className="text-left">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center font-display font-black text-2xl text-white shadow-xl shadow-primary/20">C</div>
              <span className="font-display font-black text-2xl tracking-tighter">C&C Soluções</span>
            </div>
            <p className="text-slate-500 max-w-sm text-lg font-light leading-relaxed">
              Transformando a internet em um lugar mais bonito e funcional, um pixel de cada vez.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navegação</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#home" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Tecnologias</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Social</h4>
              <div className="flex space-x-4">
                 <a href="https://wa.me/558588540125" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.312l-.904 3.313 3.4-.892c.989.54 2.049.852 3.248.852 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.785-5.769-5.785zm4.389 8.084c-.133.222-.669.444-.913.488-.244.044-.488.067-1.394-.311-.906-.378-2.126-1.31-2.924-2.108-.798-.798-1.574-1.841-1.93-2.307-.356-.466-.4-.689-.222-.911.178-.222.356-.4.533-.6.177-.2.244-.333.355-.555.111-.222.044-.422-.022-.555-.067-.133-.533-1.288-.733-1.777-.193-.473-.393-.406-.54-.413-.143-.007-.311-.007-.488-.007-.177 0-.466.067-.71.333-.244.267-.932.911-.932 2.221 0 1.31 1.021 2.576 1.154 2.754.133.178 1.884 2.885 4.564 4.04 2.679 1.156 2.679.771 3.167.726.488-.044 1.576-.644 1.798-1.266.222-.622.222-1.155.155-1.266-.066-.111-.244-.2-.533-.333z"/></svg>
                 </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs uppercase tracking-[0.2em] space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} C&C Soluções Tecnológicas. Crafted with code.</p>
          <p>Hand-coded by <span className="text-white font-bold">Caique Custódio</span></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
