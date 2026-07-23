import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { LeadForm } from '../types';

interface LeadModalProps {
  onClose: () => void;
}

export function LeadModal({ onClose }: LeadModalProps) {
  const [form, setForm] = useState<LeadForm>({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'Atendimento e WhatsApp com IA'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0d0d0d] border-2 border-[#ff3e00] w-full max-w-lg p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#ff3e00]/10 text-[#ff3e00] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> DIAGNÓSTICO GRATUITO
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">
              Solicitar Projeto de IA
            </h3>
            <p className="text-xs text-white/60 font-mono">
              Preencha os dados abaixo para receber um estudo de viabilidade técnica e proposta personalizada.
            </p>

            <div className="space-y-3 font-mono text-xs pt-2">
              <div>
                <label className="block text-white/70 mb-1 font-bold">Seu Nome:</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ex: Carlos Silva"
                  className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                />
              </div>

              <div>
                <label className="block text-white/70 mb-1 font-bold">E-mail Profissional:</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="carlos@suaempresa.com.br"
                  className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                />
              </div>

              <div>
                <label className="block text-white/70 mb-1 font-bold">Nome da Empresa / WhatsApp:</label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Empresa X - (11) 99999-9999"
                  className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                />
              </div>

              <div>
                <label className="block text-white/70 mb-1 font-bold">Principal Objetivo:</label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                >
                  <option>Atendimento e WhatsApp com IA</option>
                  <option>Automação de Documentos & OCR</option>
                  <option>CRM e Qualificação de Leads</option>
                  <option>Migração e Hospedagem do Sistema na Vercel</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#ff3e00] text-white py-3.5 font-black uppercase text-xs tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              Enviar Solicitação <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4 font-mono">
            <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto animate-bounce" />
            <h3 className="text-2xl font-black uppercase tracking-tight">Solicitação Recebida!</h3>
            <p className="text-xs text-white/70 max-w-xs mx-auto">
              Obrigado, <strong className="text-white">{form.name}</strong>. Nossa equipe entrará em contato em breve via WhatsApp com a análise prévia do seu projeto.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-white text-black px-6 py-2 text-xs font-black uppercase tracking-wider hover:bg-[#ff3e00] hover:text-white transition-colors"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
