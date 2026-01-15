
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#differentials' },
    { name: 'Planos', href: '#plans' },
    { name: 'Contato', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 glass-card' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary group-hover:rotate-12 transition-transform rounded-xl flex items-center justify-center font-display font-black text-xl text-white shadow-lg shadow-primary/20">C</div>
          <span className="font-display font-black text-xl tracking-tighter hidden sm:block">C&C Soluções</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/558588540125?text=Olá Caique! Gostaria de um orçamento para o meu projeto." 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dark px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5"
          >
            Orçamento Grátis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-card border-t border-white/5 p-8 flex flex-col space-y-6 animate-in fade-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-300 hover:text-primary transition-colors text-2xl font-black tracking-tighter"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/558588540125?text=Olá Caique! Vi o site e quero iniciar um projeto." 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-4 rounded-2xl text-center font-black uppercase tracking-widest shadow-lg"
            onClick={handleLinkClick}
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
