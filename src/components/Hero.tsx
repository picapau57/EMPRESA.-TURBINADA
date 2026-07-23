import React from 'react';
import { Sparkles, ArrowRight, Bot, BarChart3, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenLead: () => void;
}

export function Hero({ onOpenLead }: HeroProps) {
  const scrollToROI = () => {
    const el = document.getElementById('simulador-roi');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="border-b border-white/10 pt-10 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff3e00]/10 border border-[#ff3e00]/30 text-[#ff3e00] text-xs font-mono font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4 animate-pulse" /> SISTEMA CORPORATIVO DE IA
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            EMPRESA<span className="text-[#ff3e00]">.</span><br />
            TURBINADA POR IA
          </h1>

          <p className="text-base sm:text-lg text-white/70 mb-8 max-w-2xl leading-relaxed font-sans">
            Aumente a produtividade operacional da sua empresa em até <strong className="text-white">10x</strong>. Automatize o atendimento ao cliente, otimize processos de vendas e integre sistemas com Inteligência Artificial avançada.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenLead}
              className="bg-[#ff3e00] text-white px-8 py-4 font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-2xl shadow-[#ff3e00]/30 active:scale-95"
            >
              Solicitar Diagnóstico Grátis <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToROI}
              className="border border-white/20 bg-white/5 text-white px-6 py-4 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4 text-[#ff3e00]" /> Simular Economia com IA
            </button>
          </div>
        </div>

        {/* System Status Dashboard Card */}
        <div className="w-full lg:w-96 border border-white/10 bg-[#0f0f0f] p-6 font-mono text-xs space-y-4 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#ff3e00]"></div>
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <span className="text-[#ff3e00] font-bold uppercase tracking-widest">// PAINEL EM TEMPO REAL</span>
            <span className="inline-flex items-center gap-1.5 text-green-400 font-bold text-[10px]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span> ONLINE
            </span>
          </div>

          <div className="space-y-3 text-white/80">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/50">Atendimento 24/7:</span>
              <span className="text-white font-bold">Bot Generativo</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/50">Tempo de Resposta:</span>
              <span className="text-[#ff3e00] font-bold">&lt; 1.2s</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/50">Economia Estimada:</span>
              <span className="text-green-400 font-bold">R$ 14.500/mês</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Disponibilidade:</span>
              <span className="text-white font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green-400" /> 99.9% SLA
              </span>
            </div>
          </div>

          <div className="pt-2">
            <div className="text-[10px] uppercase text-white/40 mb-1">Capacidade de Processamento</div>
            <div className="h-1.5 bg-white/10 w-full">
              <div className="h-full bg-[#ff3e00] w-[88%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

