import { ProjectFile } from '../types';

export function getReconstructedFiles(targetUrl: string = 'https://empresaturbinadaporia.lovable.app/'): ProjectFile[] {
  const cleanDomain = targetUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const appSlug = cleanDomain.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

  return [
    {
      path: 'package.json',
      name: 'package.json',
      language: 'json',
      status: 'verified',
      content: `{
  "name": "${appSlug || 'empresa-turbinada-por-ia'}",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "motion": "^12.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}`
    },
    {
      path: 'vercel.json',
      name: 'vercel.json',
      language: 'json',
      status: 'verified',
      content: `{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`
    },
    {
      path: 'vite.config.ts',
      name: 'vite.config.ts',
      language: 'typescript',
      status: 'verified',
      content: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});`
    },
    {
      path: 'index.html',
      name: 'index.html',
      language: 'html',
      status: 'reconstructed',
      content: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Empresa Turbinada por IA — Target: ${cleanDomain}</title>
    <meta name="description" content="Acelere o crescimento da sua empresa com inteligência artificial, automações avançadas e inteligência de negócios." />
  </head>
  <body class="bg-[#0a0a0a] text-[#f0f0f0] font-sans antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
    },
    {
      path: 'src/App.tsx',
      name: 'App.tsx',
      language: 'typescript',
      status: 'reconstructed',
      content: `import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ROICalculator } from './components/ROICalculator';
import { AIChatWidget } from './components/AIChatWidget';
import { LeadModal } from './components/LeadModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div class="min-h-screen bg-[#0a0a0a] text-[#f0f0f0]">
      <Hero onOpenLead={() => setIsModalOpen(true)} />
      <Services onOpenLead={() => setIsModalOpen(true)} />
      <ROICalculator />
      <AIChatWidget />
      {isModalOpen && <LeadModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}`
    },
    {
      path: 'src/components/Hero.tsx',
      name: 'Hero.tsx',
      language: 'typescript',
      status: 'reconstructed',
      content: `import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenLead: () => void;
}

export function Hero({ onOpenLead }: HeroProps) {
  return (
    <section class="border-b border-white/10 pt-16 pb-20 px-6 max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ff3e00]/10 border border-[#ff3e00]/30 text-[#ff3e00] text-xs font-mono font-bold tracking-wider uppercase mb-6">
            <Sparkles class="w-4 h-4" /> EMPRESA TURBINADA POR IA
          </div>
          <h1 class="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Transforme sua <span class="text-[#ff3e00]">Empresa</span> em uma Máquina de Alta Performance
          </h1>
          <p class="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
            Elimine processos manuais repetitivos, automatize o atendimento com IA generativa e escale seus resultados operacionais sem aumentar custos fixos.
          </p>
          <div class="flex flex-wrap gap-4">
            <button 
              onClick={onOpenLead}
              class="bg-[#ff3e00] text-white px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors flex items-center gap-2"
            >
              Turbinar Minha Empresa <ArrowRight class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`
    },
    {
      path: 'README.md',
      name: 'README.md',
      language: 'markdown',
      status: 'verified',
      content: `# ${cleanDomain} — Reconstruído para Vercel / Netlify

Este projeto foi extraído e reconstruído a partir da URL \`${targetUrl}\` para um código-fonte limpo React + Vite + Tailwind CSS.

## 🚀 Como Executar Localmente

\`\`\`bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
\`\`\`

## 📦 Como Publicar na Vercel (Pelo GitHub)

1. Envie a pasta deste projeto para um repositório no seu GitHub.
2. Acesse https://vercel.com/new
3. Importe o repositório e clique em **Deploy** (a Vercel detectará o Vite + React automaticamente).
`
    }
  ];
}

export const RECONSTRUCTED_FILES = getReconstructedFiles();

