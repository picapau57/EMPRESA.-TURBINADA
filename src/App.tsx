import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ROICalculator } from './components/ROICalculator';
import { PricingPlans } from './components/PricingPlans';
import { AIChatWidget } from './components/AIChatWidget';
import { LeadModal } from './components/LeadModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] flex flex-col font-sans selection:bg-[#ff3e00] selection:text-white">
      {/* Top Corporate Navigation */}
      <Header onOpenLead={() => setIsLeadModalOpen(true)} />

      {/* Main Corporate Sections */}
      <main className="flex-1 space-y-4">
        {/* Hero Section */}
        <Hero onOpenLead={() => setIsLeadModalOpen(true)} />

        {/* AI Solutions & Modules */}
        <section id="solucoes">
          <Services onOpenLead={() => setIsLeadModalOpen(true)} />
        </section>

        {/* Pricing Plans (Mercado Pago) */}
        <PricingPlans onSelectPlan={() => setIsLeadModalOpen(false)} />

        {/* ROI Simulator */}
        <section id="simulador-roi">
          <ROICalculator />
        </section>

        {/* Live AI Assistant Demo / Widget */}
        <section id="demo">
          <AIChatWidget />
        </section>
      </main>

      {/* Lead & Audit Modal */}
      {isLeadModalOpen && (
        <LeadModal onClose={() => setIsLeadModalOpen(false)} />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}


