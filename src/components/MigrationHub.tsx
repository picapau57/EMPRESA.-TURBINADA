import React, { useState } from 'react';
import { InspectionStep } from '../types';
import { CheckCircle2, ArrowRight, Code, Cpu, Link2, RefreshCw } from 'lucide-react';

interface MigrationHubProps {
  onGoToInspector: () => void;
  onGoToGuide: () => void;
  targetUrl: string;
  setTargetUrl: (url: string) => void;
}

export function MigrationHub({
  onGoToInspector,
  onGoToGuide,
  targetUrl,
  setTargetUrl
}: MigrationHubProps) {
  const [inputUrl, setInputUrl] = useState(targetUrl);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    let formatted = inputUrl.trim();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }

    setIsUpdating(true);
    setTimeout(() => {
      setTargetUrl(formatted);
      setIsUpdating(false);
    }, 400);
  };

  const steps: InspectionStep[] = [
    {
      id: 'dom',
      label: 'Análise de Estrutura DOM & Layout',
      progress: 100,
      status: 'complete',
      details: `Mapeado com sucesso a partir de ${targetUrl}`
    },
    {
      id: 'css',
      label: 'Mapeamento CSS & Classes Tailwind',
      progress: 100,
      status: 'complete',
      details: 'Classes utilitárias extraídas para estilização pura'
    },
    {
      id: 'logic',
      label: 'Reconstrução de Componentes React + TypeScript',
      progress: 100,
      status: 'complete',
      details: 'Arquivos .tsx prontos para compilação local (npm run build)'
    },
    {
      id: 'hosting',
      label: 'Configuração Automática para Vercel e Netlify',
      progress: 100,
      status: 'complete',
      details: 'Arquivo vercel.json e vite.config.ts prontos para deploy'
    }
  ];

  return (
    <div class="border-y border-white/10 bg-[#070707] py-12 px-4 sm:px-8 max-w-7xl mx-auto my-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Target System Status & Editable Link */}
        <div class="space-y-6">
          <div>
            <div class="text-[10px] uppercase font-mono font-bold tracking-widest text-[#ff3e00] mb-2 flex items-center gap-1.5">
              <Cpu class="w-3.5 h-3.5" /> PAINEL DE MIGRAÇÃO EM TEMPO REAL
            </div>
            <h3 class="text-2xl font-black uppercase tracking-tight">
              Análise de Migração
            </h3>
          </div>

          {/* Interactive URL Form */}
          <div class="bg-white/5 border border-white/10 p-4 font-mono text-xs space-y-3">
            <form onSubmit={handleUpdate} class="space-y-2">
              <label class="text-white/50 text-[10px] uppercase block font-bold">
                Mudar Link do Site Alvo:
              </label>
              <div class="flex gap-2">
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://meusite.lovable.app"
                  class="flex-1 bg-black border border-white/20 p-2 text-xs text-white focus:outline-none focus:border-[#ff3e00]"
                />
                <button
                  type="submit"
                  disabled={isUpdating}
                  class="bg-[#ff3e00] text-white px-3 py-2 text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-1 disabled:opacity-50"
                >
                  <RefreshCw class={`w-3.5 h-3.5 ${isUpdating ? 'animate-spin' : ''}`} />
                  {isUpdating ? 'Atualizando...' : 'Atualizar'}
                </button>
              </div>
            </form>

            <div class="pt-2 border-t border-white/10 space-y-2">
              <div class="flex justify-between text-[11px]">
                <span class="text-white/50">Framework Resultante:</span>
                <span class="text-white font-bold">Vite + React 18</span>
              </div>
              <div class="flex justify-between text-[11px]">
                <span class="text-white/50">Estilização:</span>
                <span class="text-white font-bold">Tailwind CSS v4</span>
              </div>
              <div class="flex justify-between text-[11px]">
                <span class="text-white/50">Status de Exportação:</span>
                <span class="text-green-400 font-bold">100% PRONTO</span>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <button
              onClick={onGoToInspector}
              class="w-full bg-white text-black py-3.5 px-4 font-black uppercase text-xs tracking-wider hover:bg-[#ff3e00] hover:text-white transition-all flex items-center justify-between"
            >
              <span>Ver Código-Fonte (GitHub)</span>
              <Code class="w-4 h-4" />
            </button>

            <button
              onClick={onGoToGuide}
              class="w-full border border-white/20 text-white/80 py-3.5 px-4 font-bold uppercase text-xs tracking-wider hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>Passo a Passo Vercel</span>
              <ArrowRight class="w-4 h-4 text-[#ff3e00]" />
            </button>
          </div>
        </div>

        {/* Middle: Reconstruction Progress */}
        <div class="lg:col-span-2 space-y-6">
          <div class="flex justify-between items-center">
            <h4 class="text-xs font-mono uppercase font-bold text-white/60 tracking-wider">
              CHECAGEM DE REQUISITOS PARA DEPLOY AUTOMÁTICO
            </h4>
            <span class="text-xs font-mono text-green-400 font-bold">VALIDADO</span>
          </div>

          <div class="space-y-4">
            {steps.map((step) => (
              <div key={step.id} class="bg-white/5 border border-white/10 p-4 font-mono text-xs">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-bold uppercase text-white flex items-center gap-2">
                    <CheckCircle2 class="w-4 h-4 text-[#ff3e00]" /> {step.label}
                  </span>
                  <span class="text-[#ff3e00] font-bold">{step.progress}%</span>
                </div>

                <div class="h-1.5 bg-white/10 w-full mb-2">
                  <div
                    class="h-full bg-[#ff3e00] transition-all duration-500"
                    style={{ width: `${step.progress}%` }}
                  ></div>
                </div>

                <p class="text-[11px] text-white/50">{step.details}</p>
              </div>
            ))}
          </div>

          {/* Quick Stats Grid */}
          <div class="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono text-center">
            <div class="bg-black/50 p-3 border border-white/10">
              <span class="text-2xl sm:text-3xl font-black block text-white">14</span>
              <span class="text-[10px] uppercase text-white/40 font-bold">Componentes React</span>
            </div>
            <div class="bg-black/50 p-3 border border-white/10">
              <span class="text-2xl sm:text-3xl font-black block text-white">100%</span>
              <span class="text-[10px] uppercase text-white/40 font-bold">Sem Lock-in</span>
            </div>
            <div class="bg-black/50 p-3 border border-white/10">
              <span class="text-2xl sm:text-3xl font-black block text-[#ff3e00]">Vercel</span>
              <span class="text-[10px] uppercase text-white/40 font-bold">Servidor Alvo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

