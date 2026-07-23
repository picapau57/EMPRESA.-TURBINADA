import React from 'react';
import { Sparkles, ArrowRight, Zap, Bot, Database, Cpu, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenLead: () => void;
  onOpenDiagnostic: () => void;
}

export function Hero({ onOpenLead, onOpenDiagnostic }: HeroProps) {
  return (
    <section class="border-b border-white/10 pt-10 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ff3e00]/10 border border-[#ff3e00]/30 text-[#ff3e00] text-xs font-mono font-bold tracking-wider uppercase mb-6">
            <Sparkles class="w-4 h-4 animate-pulse" /> SISTEMA CORPORATIVO DE IA
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            EMPRESA<span class="text-[#ff3e00]">.</span><br />
            TURBINADA POR IA
          </h1>

          <p class="text-base sm:text-lg text-white/70 mb-8 max-w-2xl leading-relaxed font-sans">
            Aumente a produtividade operacional da sua empresa em até <strong class="text-white">10x</strong>. Automatize o atendimento ao cliente, otimize processos de vendas e integre sistemas com Inteligência Artificial avançada.
          </p>

          <div class="flex flex-wrap gap-4">
            <button
              onClick={onOpenLead}
              class="bg-[#ff3e00] text-white px-8 py-4 font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-2xl active:scale-95"
            >
              Solicitar Diagnóstico Grátis <ArrowRight class="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDiagnostic}
              class="border border-white/20 bg-white/5 text-white px-6 py-4 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Cpu class="w-4 h-4 text-[#ff3e00]" /> Ver Protocolo de Migração
            </button>
          </div>
        </div>

        {/* System Status Dashboard Card */}
        <div class="w-full lg:w-96 border border-white/10 bg-[#0f0f0f] p-6 font-mono text-xs space-y-4 shadow-2xl relative">
          <div class="absolute top-0 right-0 w-2 h-2 bg-[#ff3e00]"></div>
          <div class="flex justify-between items-center border-b border-white/10 pb-3">
            <span class="text-[#ff3e00] font-bold uppercase tracking-widest">// PAINEL EM TEMPO REAL</span>
            <span class="inline-flex items-center gap-1.5 text-green-400 font-bold text-[10px]">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-ping"></span> ONLINE
            </span>
          </div>

          <div class="space-y-3 text-white/80">
            <div class="flex justify-between border-b border-white/5 pb-2">
              <span class="text-white/50">Atendimento 24/7:</span>
              <span class="text-white font-bold">Bot Generativo</span>
            </div>
            <div class="flex justify-between border-b border-white/5 pb-2">
              <span class="text-white/50">Tempo de Resposta:</span>
              <span class="text-[#ff3e00] font-bold">&lt; 1.2s</span>
            </div>
            <div class="flex justify-between border-b border-white/5 pb-2">
              <span class="text-white/50">Economia Estimada:</span>
              <span class="text-green-400 font-bold">R$ 14.500/mês</span>
            </div>
            <div class="flex justify-between">
              <span class="text-white/50">Hospedagem Alvo:</span>
              <span class="text-white font-bold">Vercel / Edge</span>
            </div>
          </div>

          <div class="pt-2">
            <div class="text-[10px] uppercase text-white/40 mb-1">Capacidade de Processamento</div>
            <div class="h-1.5 bg-white/10 w-full">
              <div class="h-full bg-[#ff3e00] w-[88%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
