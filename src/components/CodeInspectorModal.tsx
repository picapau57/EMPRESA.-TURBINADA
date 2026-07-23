import React, { useState } from 'react';
import { getReconstructedFiles } from '../data/extractedCode';
import { FileCode, Download, Copy, Check, FolderGit2 } from 'lucide-react';

interface CodeInspectorProps {
  onExportZip: () => void;
  isExporting: boolean;
  targetUrl: string;
}

export function CodeInspectorModal({ onExportZip, isExporting, targetUrl }: CodeInspectorProps) {
  const [selectedFile, setSelectedFile] = useState<string>('src/App.tsx');
  const [copied, setCopied] = useState<boolean>(false);

  const reconstructedFiles = getReconstructedFiles(targetUrl);
  const activeFileObj = reconstructedFiles.find((f) => f.path === selectedFile) || reconstructedFiles[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFileObj.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div class="max-w-7xl mx-auto p-4 sm:p-8">
      {/* Top Bar */}
      <div class="bg-gradient-to-r from-[#111] to-[#0a0a0a] border border-white/10 p-4 sm:p-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 bg-[#ff3e00] text-black text-[10px] font-mono font-bold uppercase">
              CÓDIGO RECONSTRUÍDO
            </span>
            <span class="text-xs text-white/50 font-mono">Target: {targetUrl}</span>
          </div>
          <h2 class="text-2xl font-black uppercase tracking-tight">
            Estrutura de Fontes Extraída & Pronta para Vercel
          </h2>
        </div>

        <button
          onClick={onExportZip}
          disabled={isExporting}
          class="bg-[#ff3e00] text-white px-6 py-3 font-black uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
        >
          <Download class="w-4 h-4" />
          {isExporting ? 'Gerando Pacote...' : 'Baixar ZIP Completo'}
        </button>
      </div>

      {/* Main IDE-like Inspector */}
      <div class="grid grid-cols-1 lg:grid-cols-4 border border-white/10 bg-[#050505] min-h-[550px]">
        {/* Sidebar File Tree */}
        <div class="border-r border-white/10 p-4 bg-[#0a0a0a]">
          <div class="text-[10px] uppercase font-mono font-bold tracking-widest text-white/40 mb-3 px-2">
            ARQUIVOS DO PROJETO (VITE + REACT)
          </div>

          <div class="space-y-1 font-mono text-xs">
            {reconstructedFiles.map((file) => {
              const isSelected = selectedFile === file.path;
              return (
                <button
                  key={file.path}
                  onClick={() => setSelectedFile(file.path)}
                  class={`w-full text-left px-3 py-2 flex items-center justify-between border-l-2 transition-all ${
                    isSelected
                      ? 'border-[#ff3e00] bg-white/10 text-white font-bold'
                      : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div class="flex items-center gap-2 truncate">
                    <FileCode class={`w-3.5 h-3.5 ${isSelected ? 'text-[#ff3e00]' : 'text-white/40'}`} />
                    <span class="truncate">{file.path}</span>
                  </div>
                  <span class="text-[9px] uppercase px-1.5 py-0.5 bg-black text-white/40 border border-white/10 font-bold">
                    {file.language}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Vercel config badge */}
          <div class="mt-8 p-3 bg-white/5 border border-white/10 text-[11px] font-mono space-y-2">
            <div class="text-[#ff3e00] font-bold flex items-center gap-1">
              <FolderGit2 class="w-3.5 h-3.5" /> Compatibilidade
            </div>
            <p class="text-white/60 leading-normal">
              Contém <code class="text-white">vercel.json</code> com redirecionamentos SPA prontos.
            </p>
          </div>
        </div>

        {/* Code Content View */}
        <div class="lg:col-span-3 flex flex-col justify-between">
          <div>
            {/* Code Header */}
            <div class="bg-[#111] px-4 py-3 border-b border-white/10 flex justify-between items-center font-mono text-xs">
              <div class="flex items-center gap-2">
                <span class="text-[#ff3e00] font-bold">&gt;_</span>
                <span class="text-white font-bold">{activeFileObj.path}</span>
                <span class="text-white/40 text-[10px]">({activeFileObj.status})</span>
              </div>

              <button
                onClick={handleCopy}
                class="px-3 py-1 bg-white/10 hover:bg-[#ff3e00] hover:text-white text-white/80 transition-colors text-[11px] font-mono flex items-center gap-1.5"
              >
                {copied ? <Check class="w-3 h-3 text-green-400" /> : <Copy class="w-3 h-3" />}
                {copied ? 'Copiado!' : 'Copiar Código'}
              </button>
            </div>

            {/* Code Area */}
            <div class="p-4 sm:p-6 overflow-x-auto max-h-[500px]">
              <pre class="font-mono text-xs sm:text-sm text-white/80 leading-relaxed">
                <code>{activeFileObj.content}</code>
              </pre>
            </div>
          </div>

          {/* Footer stats bar */}
          <div class="bg-[#0a0a0a] border-t border-white/10 px-4 py-3 flex justify-between items-center text-xs font-mono text-white/40">
            <span>Encoding: UTF-8</span>
            <span>Target: Node.js 18+ / Vercel Build Server</span>
          </div>
        </div>
      </div>
    </div>
  );
}

