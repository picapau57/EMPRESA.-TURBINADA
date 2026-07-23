import React, { useState } from 'react';
import { Check, Sparkles, CreditCard, QrCode, ShieldCheck, Zap, Lock, ArrowRight, Copy, CheckCircle2, AlertCircle, Building2, HelpCircle } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  recommendedFor: string;
}

const PLANS: PricingPlan[] = [
  {
    id: 'pme',
    name: 'Plano PME Starter',
    badge: 'Início Rápido',
    priceMonthly: 297,
    priceAnnual: 237,
    description: 'Essencial para pequenas e médias empresas automatizarem os primeiros processos.',
    features: [
      '1 Agente IA para WhatsApp / Web',
      'Até 1.000 atendimentos inteligentes/mês',
      'Atendimento e Respostas Automáticas 24/7',
      'Agendamento automático de reuniões',
      'Integração básica com Google Sheets / CRM',
      'Suporte prioritário via WhatsApp',
    ],
    recommendedFor: 'Pequenas empresas, consultórios e e-commerce em crescimento',
  },
  {
    id: 'turbinado',
    name: 'Empresa Turbinada',
    badge: 'Mais Escolhido 🔥',
    popular: true,
    priceMonthly: 697,
    priceAnnual: 557,
    description: 'Transformação digital completa com IA em todos os setores operacionais.',
    features: [
      'Agentes IA Ilimitados (WhatsApp, Web & E-mail)',
      'Até 10.000 atendimentos inteligentes/mês',
      'Extrator Inteligente de Documentos (OCR + IA)',
      'Scoring Automático de Leads e Qualificação',
      'Conexão direta com ERP, CRM e Banco de Dados',
      'Dashboard com Simulador de ROI e Métricas',
      'SLA de Uptime 99.9% e Servidor de Alta Performance',
      'Gerente de Contas Dedicado',
    ],
    recommendedFor: 'Empresas em expansão que querem escala sem aumentar equipe',
  },
  {
    id: 'enterprise',
    name: 'Corporate Enterprise',
    badge: 'Alta Performance',
    priceMonthly: 1490,
    priceAnnual: 1192,
    description: 'Para grandes corporações que necessitam de modelos treinados com dados próprios.',
    features: [
      'Modelos de IA Customizados e Treinados sob medida',
      'Atendimentos e Requisições Ilimitadas',
      'Integrações via API REST, Webhooks e On-Premise',
      'Conformidade estrita com LGPD & Criptografia FIPS',
      'Treinamento presencial/online da equipe',
      'Suporte 24/7 com tempo de resposta em até 15 min',
    ],
    recommendedFor: 'Grandes indústrias, redes de franquias e fintechs',
  },
];

interface PricingPlansProps {
  onSelectPlan?: (planName: string, price: number) => void;
}

export function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Mercado Pago simulated checkout form state
  const [cardForm, setCardForm] = useState({
    cardNumber: '',
    cardHolder: '',
    expiration: '',
    cvv: '',
    docType: 'CPF',
    docNumber: '',
    installments: '1',
  });

  const currentPrice = (plan: PricingPlan) => {
    return billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
  };

  const handleOpenCheckout = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setPaymentSuccess(false);
    setCopiedPix(false);
    if (onSelectPlan) {
      onSelectPlan(plan.name, currentPrice(plan));
    }
  };

  // Generate a realistic Mercado Pago PIX Copy and Paste code
  const getPixCode = () => {
    if (!selectedPlan) return '';
    const price = currentPrice(selectedPlan);
    return `00020126580014BR.GOV.BCB.PIX0136mp-empresaturbinada-ia-${selectedPlan.id}-mp520400005303986540${price}.005802BR5925EMPRESA TURBINADA POR IA6009SAO PAULO62070503***6304D1A2`;
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(getPixCode());
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };

  const handleConfirmPixPayment = () => {
    setPaymentSuccess(true);
  };

  return (
    <section id="planos" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ff3e00]/10 text-[#ff3e00] text-xs font-mono font-bold uppercase tracking-widest border border-[#ff3e00]/30">
          <Zap className="w-3.5 h-3.5" /> PLANOS & INVESTIMENTO
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">
          Escolha o Plano Ideal para <span className="text-[#ff3e00]">Turbinar sua Empresa</span>
        </h2>
        <p className="text-white/70 font-mono text-xs sm:text-sm leading-relaxed">
          Sem contratos abusivos. Cancele ou faça upgrade a qualquer momento. Pagamentos processados com total segurança via <strong className="text-white">Mercado Pago</strong>.
        </p>

        {/* Toggle Billing Cycle */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className={`text-xs font-mono font-bold uppercase ${billingCycle === 'monthly' ? 'text-white' : 'text-white/40'}`}>
            Mensal
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-14 h-7 bg-[#1a1a1a] border border-white/20 rounded-full p-1 relative transition-colors focus:outline-none"
          >
            <div
              className={`w-5 h-5 bg-[#ff3e00] rounded-full transition-transform ${
                billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs font-mono font-bold uppercase flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-white' : 'text-white/40'}`}>
            Anual <span className="bg-[#ff3e00] text-black text-[10px] font-black px-1.5 py-0.5 uppercase">20% OFF</span>
          </span>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PLANS.map((plan) => {
          const price = currentPrice(plan);
          return (
            <div
              key={plan.id}
              className={`bg-[#0c0c0c] border relative flex flex-col justify-between p-6 sm:p-8 transition-all hover:border-[#ff3e00] ${
                plan.popular
                  ? 'border-[#ff3e00] shadow-2xl shadow-[#ff3e00]/10 bg-gradient-to-b from-[#120805] to-[#0c0c0c]'
                  : 'border-white/10'
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-mono font-black uppercase tracking-widest ${
                    plan.popular ? 'bg-[#ff3e00] text-white' : 'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-white/60 font-sans leading-relaxed min-h-[36px]">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-2 font-mono">
                    <span className="text-sm font-bold text-white/50">R$</span>
                    <span className="text-4xl sm:text-5xl font-black text-white">{price}</span>
                    <span className="text-xs text-white/50">/ mês</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="text-[11px] text-[#ff3e00] font-mono mt-1 font-bold">
                      Faturado anualmente (Economia de R$ {(plan.priceMonthly - plan.priceAnnual) * 12}/ano)
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                    // O QUE ESTÁ INCLUSO:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-white/80">
                        <Check className="w-4 h-4 text-[#ff3e00] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mt-8 space-y-4">
                <div className="text-[10px] text-white/40 font-mono text-center">
                  Recomendado para: <strong className="text-white/70">{plan.recommendedFor}</strong>
                </div>

                <button
                  onClick={() => handleOpenCheckout(plan)}
                  className={`w-full py-4 font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-[#ff3e00] text-white hover:bg-white hover:text-black shadow-lg shadow-[#ff3e00]/20'
                      : 'bg-white/10 text-white hover:bg-[#ff3e00]'
                  }`}
                >
                  <CreditCard className="w-4 h-4" /> Assinar via Mercado Pago
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mercado Pago Security Guarantee Badge */}
      <div className="mt-12 bg-white/5 border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/70">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-green-400 shrink-0" />
          <div>
            <div className="text-white font-bold uppercase text-xs">Checkout Garantido Mercado Pago</div>
            <p className="text-white/50 text-[11px]">
              Seus dados financeiros são criptografados com padrões internacionais de segurança SSL 256 bits.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/40 font-bold text-[11px]">
          <span className="flex items-center gap-1"><QrCode className="w-4 h-4 text-[#ff3e00]" /> PIX Instantâneo</span>
          <span>•</span>
          <span className="flex items-center gap-1"><CreditCard className="w-4 h-4 text-blue-400" /> Cartão em até 12x</span>
        </div>
      </div>

      {/* Mercado Pago Checkout Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0e0e0e] border-2 border-[#ff3e00] w-full max-w-lg p-6 sm:p-8 relative shadow-2xl my-8">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white p-1 font-mono text-sm"
            >
              [FECHAR ✕]
            </button>

            {!paymentSuccess ? (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" /> MERCADO PAGO CHECKOUT
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                    Assinatura: {selectedPlan.name}
                  </h3>
                  <div className="text-sm font-mono text-white/70 mt-1">
                    Total: <strong className="text-[#ff3e00] text-lg font-black">R$ {currentPrice(selectedPlan)}</strong>
                    <span className="text-xs text-white/40"> / {billingCycle === 'annual' ? 'mês (anual)' : 'mês'}</span>
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 border text-center font-bold uppercase flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'pix'
                        ? 'border-[#ff3e00] bg-[#ff3e00]/10 text-white'
                        : 'border-white/10 text-white/60 hover:text-white bg-black'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-green-400" /> PIX (Aprovação Instantânea)
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 border text-center font-bold uppercase flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#ff3e00] bg-[#ff3e00]/10 text-white'
                        : 'border-white/10 text-white/60 hover:text-white bg-black'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-400" /> Cartão de Crédito
                  </button>
                </div>

                {/* PIX Payment Option */}
                {paymentMethod === 'pix' && (
                  <div className="bg-black p-5 border border-white/10 space-y-4 font-mono text-xs">
                    <div className="text-center space-y-2">
                      <div className="text-white/80 font-bold text-xs uppercase">
                        Escaneie o QR Code PIX com o app do seu Banco:
                      </div>

                      {/* Simulated QR Code */}
                      <div className="bg-white p-4 inline-block mx-auto border-4 border-black">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(getPixCode())}`}
                          alt="QR Code PIX Mercado Pago"
                          className="w-40 h-40 mx-auto"
                        />
                      </div>
                      <div className="text-[10px] text-green-400 font-bold uppercase">
                        ✓ Aprovação imediata via Mercado Pago
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <label className="text-white/60 text-[10px] uppercase font-bold block">
                        Ou copie o código PIX Copia e Cola:
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          readOnly
                          value={getPixCode()}
                          className="w-full bg-[#111] border border-white/20 p-2 text-[10px] text-white/70 font-mono truncate"
                        />
                        <button
                          onClick={handleCopyPix}
                          className="bg-[#ff3e00] text-white px-3 py-2 text-xs font-bold uppercase shrink-0 hover:bg-white hover:text-black transition-colors flex items-center gap-1"
                        >
                          {copiedPix ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedPix ? 'Copiado!' : 'Copiar'}
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={handleConfirmPixPayment}
                      className="w-full bg-green-500 text-black py-3.5 font-black uppercase text-xs tracking-wider hover:bg-green-400 transition-colors flex items-center justify-center gap-2 mt-4"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Já realizei o Pagamento PIX
                    </button>
                  </div>
                )}

                {/* Credit Card Payment Option */}
                {paymentMethod === 'card' && (
                  <form onSubmit={handleCardSubmit} className="space-y-3 font-mono text-xs">
                    <div>
                      <label className="block text-white/70 mb-1 font-bold">Número do Cartão:</label>
                      <input
                        type="text"
                        required
                        maxLength={19}
                        placeholder="0000 0000 0000 0000"
                        value={cardForm.cardNumber}
                        onChange={(e) => setCardForm({ ...cardForm, cardNumber: e.target.value })}
                        className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                      />
                    </div>

                    <div>
                      <label className="block text-white/70 mb-1 font-bold">Nome do Titular (como no cartão):</label>
                      <input
                        type="text"
                        required
                        placeholder="NOME SOBRENOME"
                        value={cardForm.cardHolder}
                        onChange={(e) => setCardForm({ ...cardForm, cardHolder: e.target.value })}
                        className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00] uppercase"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-white/70 mb-1 font-bold">Validade (MM/AA):</label>
                        <input
                          type="text"
                          required
                          maxLength={5}
                          placeholder="12/28"
                          value={cardForm.expiration}
                          onChange={(e) => setCardForm({ ...cardForm, expiration: e.target.value })}
                          className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 mb-1 font-bold">CVV:</label>
                        <input
                          type="text"
                          required
                          maxLength={4}
                          placeholder="123"
                          value={cardForm.cvv}
                          onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                          className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-white/70 mb-1 font-bold">Doc:</label>
                        <select
                          value={cardForm.docType}
                          onChange={(e) => setCardForm({ ...cardForm, docType: e.target.value })}
                          className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                        >
                          <option>CPF</option>
                          <option>CNPJ</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-white/70 mb-1 font-bold">CPF/CNPJ do Titular:</label>
                        <input
                          type="text"
                          required
                          placeholder="000.000.000-00"
                          value={cardForm.docNumber}
                          onChange={(e) => setCardForm({ ...cardForm, docNumber: e.target.value })}
                          className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/70 mb-1 font-bold">Opções de Parcelamento (Mercado Pago):</label>
                      <select
                        value={cardForm.installments}
                        onChange={(e) => setCardForm({ ...cardForm, installments: e.target.value })}
                        className="w-full bg-black border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#ff3e00]"
                      >
                        <option value="1">1x de R$ {currentPrice(selectedPlan)} à vista</option>
                        <option value="2">2x de R$ {(currentPrice(selectedPlan) / 2).toFixed(2)} sem juros</option>
                        <option value="3">3x de R$ {(currentPrice(selectedPlan) / 3).toFixed(2)} sem juros</option>
                        <option value="6">6x de R$ {(currentPrice(selectedPlan) / 6).toFixed(2)} sem juros</option>
                        <option value="12">12x de R$ {(currentPrice(selectedPlan) / 12).toFixed(2)} sem juros</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 bg-[#ff3e00] text-white py-3.5 font-black uppercase text-xs tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                    >
                      PAGAR R$ {currentPrice(selectedPlan)} COM CARTÃO <Lock className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            ) : (
              /* Success Screen */
              <div className="text-center py-8 space-y-4 font-mono">
                <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  Pagamento Aprovado!
                </h3>
                <p className="text-xs text-white/80 max-w-xs mx-auto leading-relaxed">
                  Sua assinatura do <strong className="text-[#ff3e00]">{selectedPlan.name}</strong> foi confirmada com sucesso via Mercado Pago.
                </p>
                <div className="bg-white/5 p-4 border border-white/10 text-[11px] text-white/60 space-y-1">
                  <div>Status: <span className="text-green-400 font-bold">ATIVO</span></div>
                  <div>ID da Transação: <span className="text-white font-mono">MP-{Math.floor(Math.random() * 89999999 + 10000000)}</span></div>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="mt-4 bg-white text-black px-6 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-[#ff3e00] hover:text-white transition-colors"
                >
                  Concluir e Acessar Painel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
