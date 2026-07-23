import React, { useState } from 'react';
import { Download, Rocket, Code, Globe, RefreshCw, Link2 } from 'lucide-react';

interface HeaderProps {
  activeTab: 'site' | 'inspector' | 'guide';
  setActiveTab: (tab: 'site' | 'inspector' | 'guide') => void;
  onExportZip: () => void;
  isExporting: boolean;
  targetUrl: string;
  setTargetUrl: (url: string) => void;
}

export function Header({
  activeTab,
  setActiveTab,
  onExportZip,
  isExporting,
  targetUrl,
  setTargetUrl
}: HeaderProps) {
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [tempUrl, setTempUrl] = useState(targetUrl);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempUrl.trim()) {
      let formatted = tempUrl.trim();
      if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
        formatted = `https://${formatted}`;
      }
      setTargetUrl(formatted);
      setIsEditingUrl(false);
    }
  };

  return (
    <header class="flex-none border-b border-white/10 bg-gradient-to-b from-[#141414] to-[#0a0a0a] px-4 sm:px-8 py-4 sm:py-5 sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 bg-[#ff3e00] text-black text-[10px] font-black uppercase tracking-wider">
              SISTEMA MIGRÁVEL PARA VERCEL
            </span>
            <span class="text-xs font-mono text-green-400 font-bold">100% PRONTO</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-none">
            EXTRATOR<span class="text-[#ff3e00]">.</span>DE CÓDIGO
          </h1>

          {/* Target URL indicator or editor */}
          {!isEditingUrl ? (
            <div class="flex items-center gap-2 text-xs text-white/60 font-mono mt-1">
              <span>Target:</span>
              <span class="text-white font-bold underline decoration-[#ff3e00] truncate max-w-xs sm:max-w-md">
                {targetUrl}
              </span>
              <button
                onClick={() => {
                  setTempUrl(targetUrl);
                  setIsEditingUrl(true);
                }}
                class="px-2 py-0.5 bg-white/10 hover:bg-[#ff3e00] hover:text-white text-[10px] font-mono transition-colors text-white/80 flex items-center gap-1"
                title="Alterar o link do site a ser migrado"
              >
                <Link2 class="w-3 h-3" /> Alterar Link
              </button>
            </div>
          ) : (
            <form onSubmit={handleUrlSubmit} class="flex items-center gap-2 mt-1">
              <input
                type="text"
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
                placeholder="https://meusite.app/"
                class="bg-black border border-[#ff3e00] px-2 py-1 text-xs text-white font-mono w-64 focus:outline-none"
              />
              <button
                type="submit"
                class="bg-[#ff3e00] text-white px-2.5 py-1 text-xs font-bold font-mono uppercase hover:bg-white hover:text-black transition-colors"
              >
                Salvar
              </button>
              <button
                type="button"
                onClick={() => setIsEditingUrl(false)}
                class="text-xs text-white/40 hover:text-white font-mono"
              >
                Cancelar
              </button>
            </form>
          )}
        </div>

        <div class="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Nav Tabs */}
          <div class="flex bg-white/5 p-1 border border-white/10 rounded-none w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('site')}
              class={`px-3 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'site'
                  ? 'bg-[#ff3e00] text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Globe class="w-3.5 h-3.5" /> Preview do Sistema
            </button>

            <button
              onClick={() => setActiveTab('inspector')}
              class={`px-3 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'inspector'
                  ? 'bg-[#ff3e00] text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Code class="w-3.5 h-3.5" /> Arquivos para GitHub
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              class={`px-3 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === 'guide'
                  ? 'bg-[#ff3e00] text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Rocket class="w-3.5 h-3.5" /> Guia Vercel / Netlify
            </button>
          </div>

          {/* Action button */}
          <button
            onClick={onExportZip}
            disabled={isExporting}
            class="bg-white text-black px-4 py-2 font-black uppercase tracking-wider text-xs hover:bg-[#ff3e00] hover:text-white transition-all flex items-center gap-2 border border-white/20 active:scale-95 disabled:opacity-50"
          >
            <Download class="w-4 h-4 text-[#ff3e00] group-hover:text-white" />
            {isExporting ? 'Gerando ZIP...' : 'Baixar ZIP Completo'}
          </button>
        </div>
      </div>
    </header>
  );
}

