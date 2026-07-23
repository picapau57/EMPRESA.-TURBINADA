import React from 'react';
import { Rocket, CheckCircle2, Copy, ExternalLink, Terminal, Download, ShieldCheck, ArrowRight, Github } from 'lucide-react';

interface MigrationGuideProps {
  onExportZip: () => void;
}

export function MigrationGuideModal({ onExportZip }: MigrationGuideProps) {
  const [copiedCmd, setCopiedCmd] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#111] via-[#181818] to-[#111] border-2 border-[#ff3e00] p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-10 text-[180px] font-black text-[#ff3e00] pointer-events-none select-none">
          VERCEL
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff3e00]/20 text-[#ff3e00] text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" /> GUIA DEFINITIVO DE MIGRAÇÃO DE IA PARA VERCEL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-tight mb-4">
            Como Hospedar <span className="text-[#ff3e00]">empresaturbinadaporia</span> em Qualquer Servidor
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-mono">
            Sistemas gerados em plataformas como Lovable utilizam <span className="text-[#ff3e00] font-bold">Vite + React + Tailwind CSS</span> na sua base. Veja abaixo os 3 métodos garantidos para colocar seu projeto no ar na Vercel, Netlify ou VPS própria.
          </p>
          <button
            onClick={onExportZip}
            className="bg-[#ff3e00] text-white px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all inline-flex items-center gap-2 shadow-xl"
          >
            <Download className="w-4 h-4" /> Baixar Código Completo Pronto (.zip)
          </button>
        </div>
      </div>

      {/* 3 Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Method 1: Export via ZIP / Reconstructed Code */}
        <div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-[#ff3e00] transition-colors relative group">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono font-bold text-[#ff3e00] bg-[#ff3e00]/10 px-2.5 py-1">
                MÉTODO 01 (RECOMENDADO)
              </span>
              <span className="text-xs text-green-400 font-mono font-bold">100% PRONTO</span>
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">
              Usar Código Reconstruído
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Baixe o pacote de código-fonte completo gerado aqui com todos os componentes React, estilos Tailwind e arquivo <code className="text-[#ff3e00] bg-black px-1 py-0.5">vercel.json</code> pré-configurado.
            </p>
            <ol className="text-xs font-mono text-white/80 space-y-2 border-t border-white/10 pt-4">
              <li className="flex items-start gap-2">
                <span className="text-[#ff3e00] font-bold">1.</span> Clique em "Baixar ZIP".
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff3e00] font-bold">2.</span> Extraia em seu computador.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff3e00] font-bold">3.</span> Suba a pasta no GitHub.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff3e00] font-bold">4.</span> Conecte o repositório na Vercel.
              </li>
            </ol>
          </div>
          <button
            onClick={onExportZip}
            className="w-full mt-6 bg-white/10 text-white py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#ff3e00] transition-colors"
          >
            Baixar Arquivos
          </button>
        </div>

        {/* Method 2: Official Lovable GitHub Export */}
        <div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-[#ff3e00] transition-colors">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono font-bold text-white/50 bg-white/10 px-2.5 py-1">
                MÉTODO 02 (VIA LOVABLE UI)
              </span>
              <span className="text-xs text-white/40 font-mono">SE TIVER ACESSO</span>
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">
              Sincronização com GitHub
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Caso você possua acesso à conta onde o protótipo Lovable foi criado, existe um botão nativo de integração com o GitHub.
            </p>
            <ol className="text-xs font-mono text-white/80 space-y-2 border-t border-white/10 pt-4">
              <li className="flex items-start gap-2">
                <span className="text-[#ff3e00] font-bold">1.</span> Abra o projeto no Lovable dev.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff3e00] font-bold">2.</span> Clique em "GitHub" no canto superior direito.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff3e00] font-bold">3.</span> Autorize a conexão com sua conta GitHub.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff3e00] font-bold">4.</span> Abra a Vercel e escolha "Import GitHub App".
              </li>
            </ol>
          </div>
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-6 bg-white/10 text-white text-center py-3 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-1"
          >
            Acessar Lovable <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Method 3: Vercel CLI Direct Deploy */}
        <div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-[#ff3e00] transition-colors">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono font-bold text-white/50 bg-white/10 px-2.5 py-1">
                MÉTODO 03 (TERMINAL)
              </span>
              <span className="text-xs text-white/40 font-mono">VERCEL CLI</span>
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">
              Publicação Direta via Vercel CLI
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Publique o projeto diretamente pelo seu terminal em menos de 30 segundos usando os comandos abaixo.
            </p>
            <div className="bg-black p-3 border border-white/10 font-mono text-[11px] text-green-400 space-y-2 relative">
              <div className="flex justify-between items-center text-white/40 text-[10px] border-b border-white/10 pb-1">
                <span>TERMINAL</span>
                <button
                  onClick={() => copyToClipboard('npm i -g vercel\nvercel deploy', 'cli')}
                  className="hover:text-white"
                >
                  {copiedCmd === 'cli' ? 'Copiado!' : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <p><span className="text-white/40">$</span> npm i -g vercel</p>
              <p><span className="text-white/40">$</span> cd empresa-turbinada</p>
              <p><span className="text-white/40">$</span> vercel</p>
            </div>
          </div>
          <a
            href="https://vercel.com/docs/cli"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-6 bg-white/10 text-white text-center py-3 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-1"
          >
            Doc Vercel CLI <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Step by Step Detail Section */}
      <div className="border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 space-y-6">
        <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
          <Terminal className="w-6 h-6 text-[#ff3e00]" /> Passo a Passo Ilustrado para Publicar na Vercel
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
          <div className="bg-white/5 p-4 border-t-2 border-[#ff3e00] space-y-2">
            <span className="text-[#ff3e00] font-bold text-lg">01.</span>
            <div className="font-bold text-white uppercase text-sm">Download do ZIP</div>
            <p className="text-white/60 text-[11px]">
              Baixe o arquivo de código-fonte disponibilizado nesta aplicação.
            </p>
          </div>

          <div className="bg-white/5 p-4 border-t-2 border-[#ff3e00] space-y-2">
            <span className="text-[#ff3e00] font-bold text-lg">02.</span>
            <div className="font-bold text-white uppercase text-sm">Criar Repositório</div>
            <p className="text-white/60 text-[11px]">
              Crie um novo repositório no GitHub/GitLab com o código descompactado.
            </p>
          </div>

          <div className="bg-white/5 p-4 border-t-2 border-[#ff3e00] space-y-2">
            <span className="text-[#ff3e00] font-bold text-lg">03.</span>
            <div className="font-bold text-white uppercase text-sm">Importar na Vercel</div>
            <p className="text-white/60 text-[11px]">
              Acesse vercel.com/new, selecione o repositório e selecione Framework: Vite.
            </p>
          </div>

          <div className="bg-white/5 p-4 border-t-2 border-[#ff3e00] space-y-2">
            <span className="text-[#ff3e00] font-bold text-lg">04.</span>
            <div className="font-bold text-white uppercase text-sm">Deploy Instantâneo</div>
            <p className="text-white/60 text-[11px]">
              O seu site estará online no seu domínio personalizado em poucos segundos com certificado SSL.
            </p>
          </div>
        </div>

        {/* Dedicated Troubleshooting for missing "Import" button */}
        <div className="bg-[#141414] border border-[#ff3e00]/40 p-6 space-y-4">
          <div className="flex items-center gap-2 text-[#ff3e00] font-mono font-bold text-sm uppercase">
            <ShieldCheck className="w-5 h-5" /> Não encontrou o botão "Import" no Vercel?
          </div>
          <p className="text-xs text-white/80 leading-relaxed font-mono">
            Se o seu repositório do GitHub recém-criado não apareceu na lista do Vercel com o botão <span className="text-[#ff3e00] font-bold">Import</span>, escolha uma das soluções rápidas abaixo:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-black/60 p-4 border border-white/10 space-y-2">
              <span className="text-green-400 font-bold block">// SOLUÇÃO A: Cole o Link do GitHub</span>
              <p className="text-white/70">
                1. Na tela <code className="text-white bg-white/10 px-1 py-0.5">vercel.com/new</code>, procure o campo de busca ou <strong>"Import Third-Party Git Repository"</strong>.
              </p>
              <p className="text-white/70">
                2. Cole a URL completa do seu repositório no GitHub (ex: <code className="text-[#ff3e00]">https://github.com/seu-usuario/seu-repositorio</code>).
              </p>
              <p className="text-white/70">
                3. Pressione <strong>Enter</strong> ou clique no botão <strong>Continue / Import</strong>.
              </p>
            </div>

            <div className="bg-black/60 p-4 border border-white/10 space-y-2">
              <span className="text-green-400 font-bold block">// SOLUÇÃO B: Dar Permissão ao Vercel</span>
              <p className="text-white/70">
                1. Na lista de repositórios do Vercel, clique no menu suspenso com sua foto do GitHub ou em <strong>"Adjust GitHub App Permissions"</strong>.
              </p>
              <p className="text-white/70">
                2. Autorize o Vercel a visualizar <strong>"All repositories"</strong> (Todos os repositórios) ou selecione o novo repositório que criou.
              </p>
              <p className="text-white/70">
                3. Atualize a página e o botão <strong>Import</strong> aparecerá ao lado do seu repositório.
              </p>
            </div>
          </div>

          <div className="bg-black/80 p-4 border border-white/10 text-xs font-mono space-y-2">
            <span className="text-[#ff3e00] font-bold block">// SOLUÇÃO C: Publicação sem GitHub (Vercel CLI ou Netlify)</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <p className="text-white font-bold mb-1">Via Vercel CLI (Direto do Terminal):</p>
                <div className="bg-[#050505] p-2 text-green-400 text-[11px] border border-white/10">
                  <p>$ cd pasta-do-projeto</p>
                  <p>$ npx vercel</p>
                </div>
                <p className="text-[#888] text-[10px] mt-1">Siga as instruções na tela e aperte Enter. O site vai pro ar sem precisar do GitHub!</p>
              </div>
              <div>
                <p className="text-white font-bold mb-1">Via Netlify (Arraste e Solte):</p>
                <p className="text-white/70 text-[11px] mb-2">
                  1. Acesse <a href="https://app.netlify.com/drop" target="_blank" className="text-[#ff3e00] underline font-bold">app.netlify.com/drop</a>.
                </p>
                <p className="text-white/70 text-[11px]">
                  2. Arraste a pasta descompactada para a tela do navegador. O site fica online instantaneamente!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
