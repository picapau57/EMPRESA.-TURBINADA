import React from 'react';
import { Bot, MessageSquare, FileText, BarChart3, Workflow, Users, ArrowUpRight, CheckCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenLead: () => void;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'chatbot',
    title: 'Atendimento Automatizado por IA',
    category: 'VENDAS & SUPORTE',
    description: 'Agentes virtuais treinados com o conhecimento da sua empresa para qualificar leads e fechar vendas no WhatsApp e Site 24h por dia.',
    iconName: 'Bot',
    tags: ['WhatsApp Business', 'GPT-4o', 'Agendamento Auto'],
    roiIncrease: '+300% de qualificação'
  },
  {
    id: 'ocr',
    title: 'Extrator Inteligente de Documentos',
    category: 'FINANCEIRO & OPERAÇÕES',
    description: 'Leitura e digitação automática de notas fiscais, relatórios em PDF, contratos e planilhas diretamente para o seu ERP.',
    iconName: 'FileText',
    tags: ['OCR com IA', 'Integração ERP', 'Zero Erro Humano'],
    roiIncrease: '90% menos tempo gasto'
  },
  {
    id: 'crm',
    title: 'CRM com Inteligência de Leads',
    category: 'GESTÃO COMERCIAL',
    description: 'Análise preditiva dos melhores clientes, acompanhamento automático de propostas e relatórios estratégicos diários.',
    iconName: 'BarChart3',
    tags: ['Follow-up Auto', 'Scoring de Leads', 'Dashboard Realtime'],
    roiIncrease: '+45% em conversão'
  },
  {
    id: 'workflow',
    title: 'Automação End-to-End de Processos',
    category: 'INTEGRAÇÃO DE SISTEMAS',
    description: 'Conectamos seus softwares legados com Webhooks, Make, n8n e Python para rodar sua operação sem gargalos manuais.',
    iconName: 'Workflow',
    tags: ['n8n / Make', 'Webhooks', 'Sem Lock-in'],
    roiIncrease: 'Economia de 60h/mês'
  }
];

export function Services({ onOpenLead }: ServicesProps) {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#ff3e00] uppercase tracking-widest block mb-2">
            // ARQUITETURA DE SOLUÇÕES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Módulos para Turbinar sua Operação
          </h2>
        </div>
        <p className="text-sm font-mono text-white/50 max-w-md">
          Sistemas modulares prontos para implementação rápida e hospedagem de alta performance na Vercel ou nuvem própria.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff3e00] transition-all group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#ff3e00]/10 text-[#ff3e00] border border-[#ff3e00]/20 uppercase">
                  {service.category}
                </span>
                <span className="text-xs font-mono font-bold text-green-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> {service.roiIncrease}
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-[#ff3e00] transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 bg-black/50 text-white/60 border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex justify-between items-center">
              <button
                onClick={onOpenLead}
                className="text-xs font-black uppercase tracking-wider text-white group-hover:text-[#ff3e00] flex items-center gap-1 transition-colors"
              >
                Implementar este Módulo <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
