import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, PhoneCall, Bot, BarChart2 } from 'lucide-react';

interface HeaderProps {
  onOpenLead: () => void;
}

export function Header({ onOpenLead }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex-none border-b border-white/10 bg-[#0a0a0a]/90 px-4 sm:px-8 py-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#ff3e00] text-black font-black flex items-center justify-center text-sm tracking-tighter">
            IA
          </div>
          <div>
            <div className="text-base sm:text-lg font-black uppercase tracking-tighter leading-none text-white group-hover:text-[#ff3e00] transition-colors">
              EMPRESA<span className="text-[#ff3e00]">.</span>TURBINADA
            </div>
            <div className="text-[9px] font-mono text-white/50 tracking-widest uppercase">
              Inteligência Corporativa
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-white/70">
          <button
            onClick={() => scrollToSection('solucoes')}
            className="hover:text-[#ff3e00] transition-colors uppercase font-bold tracking-wider"
          >
            Soluções
          </button>

          <button
            onClick={() => scrollToSection('planos')}
            className="hover:text-[#ff3e00] transition-colors uppercase font-bold tracking-wider text-[#ff3e00]"
          >
            Planos & Preços
          </button>

          <button
            onClick={() => scrollToSection('simulador-roi')}
            className="hover:text-[#ff3e00] transition-colors uppercase font-bold tracking-wider"
          >
            Simulador ROI
          </button>

          <button
            onClick={() => scrollToSection('demo')}
            className="hover:text-[#ff3e00] transition-colors uppercase font-bold tracking-wider"
          >
            Agente IA
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenLead}
            className="bg-[#ff3e00] text-white px-5 py-2.5 font-black uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-[#ff3e00]/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Solicitar Diagnóstico
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#ff3e00] transition-colors"
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4 font-mono text-sm bg-[#0d0d0d] p-4">
          <button
            onClick={() => scrollToSection('solucoes')}
            className="text-left text-white/80 hover:text-[#ff3e00] py-1 uppercase font-bold"
          >
            // Soluções de IA
          </button>

          <button
            onClick={() => scrollToSection('planos')}
            className="text-left text-[#ff3e00] hover:text-white py-1 uppercase font-bold"
          >
            // Planos & Assinatura (Mercado Pago)
          </button>

          <button
            onClick={() => scrollToSection('simulador-roi')}
            className="text-left text-white/80 hover:text-[#ff3e00] py-1 uppercase font-bold"
          >
            // Simulador de Economia
          </button>

          <button
            onClick={() => scrollToSection('demo')}
            className="text-left text-white/80 hover:text-[#ff3e00] py-1 uppercase font-bold"
          >
            // Agente de IA em Ação
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenLead();
            }}
            className="mt-2 w-full bg-[#ff3e00] text-white py-3 text-center font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2"
          >
            Solicitar Diagnóstico Grátis <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}


