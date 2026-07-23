import React from 'react';
import { Terminal, ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer class="flex-none border-t border-white/10 bg-[#050505] text-white/60 font-mono text-xs">
      {/* Top Footer status banner */}
      <div class="bg-[#ff3e00] text-black px-4 sm:px-8 py-3 flex flex-col sm:flex-row justify-between items-center gap-2 font-black uppercase text-[11px] tracking-wider">
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-black animate-ping"></span> SISTEMA CONECTADO
          </span>
          <span>PING: 22ms</span>
          <span class="hidden sm:inline">| TARGET: VERCEL EDGE NETWORK</span>
        </div>
        <div>
          PRONTO PARA MIGRAÇÃO & HOSPEDAGEM
        </div>
      </div>

      {/* Main Footer Content */}
      <div class="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 class="text-xl font-black uppercase text-white tracking-tight mb-3">
            EXTRATOR<span class="text-[#ff3e00]">.</span>DE CÓDIGO
          </h4>
          <p class="text-xs text-white/50 leading-relaxed mb-4">
            Ferramenta especializada na reconstrução de código-fonte de protótipos de IA (Lovable, v0, Bolt) para exportação direta em formato Vite + React + Tailwind compatível com Vercel, Netlify e servidores Linux.
          </p>
        </div>

        <div>
          <h5 class="text-xs font-bold uppercase text-white tracking-widest mb-3">
            // DOCUMENTAÇÃO E RECURSOS
          </h5>
          <ul class="space-y-2 text-white/70 text-xs">
            <li>• <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" class="hover:text-[#ff3e00]">Documentação Oficial Vercel Deploy</a></li>
            <li>• <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" class="hover:text-[#ff3e00]">Vite.js Framework Guide</a></li>
            <li>• <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="hover:text-[#ff3e00]">Tailwind CSS Documentation</a></li>
          </ul>
        </div>

        <div>
          <h5 class="text-xs font-bold uppercase text-white tracking-widest mb-3">
            // STATUS DE SEGURANÇA
          </h5>
          <div class="bg-white/5 p-4 border border-white/10 space-y-2">
            <div class="flex items-center gap-2 text-green-400 font-bold">
              <ShieldCheck class="w-4 h-4" /> Sem Dependências Proprietárias
            </div>
            <p class="text-[11px] text-white/50">
              O código exportado é 100% aberto e independente, livre de qualquer bloqueio de plataforma (no vendor lock-in).
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 py-4 px-4 text-center text-[11px] text-white/30">
        Empresa Turbinada por IA — Código-fonte e Protocolo de Migração Vercel v4.0.2
      </div>
    </footer>
  );
}
