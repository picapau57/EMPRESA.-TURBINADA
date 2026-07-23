import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="flex-none border-t border-white/10 bg-[#050505] text-white/60 font-mono text-xs">
      {/* Top Footer status banner */}
      <div className="bg-[#ff3e00] text-white px-4 sm:px-8 py-3 flex flex-col sm:flex-row justify-between items-center gap-2 font-black uppercase text-[11px] tracking-wider">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-black">
            <span className="w-2 h-2 rounded-full bg-black animate-ping"></span> SISTEMAS OPERACIONAIS ATIVOS
          </span>
          <span className="hidden sm:inline text-black/80">| AMBIENTE DE ALTA DISPONIBILIDADE</span>
        </div>
        <div className="flex items-center gap-2 text-black">
          <ShieldCheck className="w-4 h-4" /> SEGURANÇA & SEGREDOS CRIPTOGRAFADOS
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-black uppercase text-white tracking-tight mb-3">
            EMPRESA<span className="text-[#ff3e00]">.</span>TURBINADA
          </h4>
          <p className="text-xs text-white/50 leading-relaxed mb-4 font-sans">
            Soluções completas de Inteligência Artificial e automação corporativa. Transformamos processos manuais em fluxos inteligentes, escaláveis e altamente eficientes.
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase text-white tracking-widest mb-3">
            // SOLUÇÕES CORPORATIVAS
          </h5>
          <ul className="space-y-2 text-white/70 text-xs font-mono">
            <li>• Agentes Virtuais de Vendas & WhatsApp</li>
            <li>• Extrator Inteligente de Documentos (OCR)</li>
            <li>• CRM Inteligente & Scoring de Leads</li>
            <li>• Integrações de Sistemas (ERP, APIs)</li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase text-white tracking-widest mb-3">
            // GARANTIA & PERFORMANCE
          </h5>
          <div className="bg-white/5 p-4 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-green-400 font-bold">
              <CheckCircle2 className="w-4 h-4" /> SLA de 99.9% de Uptime
            </div>
            <p className="text-[11px] text-white/50 font-sans">
              Infraestrutura moderna e segura, com suporte contínuo e acompanhamento de resultados em tempo real.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 px-4 text-center text-[11px] text-white/40 font-mono">
        © 2026 Empresa Turbinada por IA. Todos os direitos reservados.
      </div>
    </footer>
  );
}

