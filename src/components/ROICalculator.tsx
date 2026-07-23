import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Zap } from 'lucide-react';

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [avgSalary, setAvgSalary] = useState<number>(3500);
  const [hoursInRepetitiveTasks, setHoursInRepetitiveTasks] = useState<number>(15);

  // Math logic
  // Hours saved = teamSize * hoursInRepetitiveTasks * 0.70 (70% efficiency boost)
  const totalRepetitiveHoursPerMonth = teamSize * hoursInRepetitiveTasks * 4;
  const hoursSavedMonthly = Math.round(totalRepetitiveHoursPerMonth * 0.75);
  
  // Cost per hour = avgSalary / 160
  const hourlyRate = avgSalary / 160;
  const monthlyCostSavings = Math.round(hoursSavedMonthly * hourlyRate);
  const annualSavings = monthlyCostSavings * 12;

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
      <div className="bg-gradient-to-br from-[#111] via-[#0d0d0d] to-[#050505] border-2 border-white/10 p-6 sm:p-10 relative overflow-hidden">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff3e00]/10 text-[#ff3e00] text-xs font-mono font-bold uppercase tracking-widest mb-3 border border-[#ff3e00]/20">
            <Calculator className="w-4 h-4" /> SIMULADOR DE RETORNO SOBRE INVESTIMENTO (ROI)
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Quanto sua empresa economizará com IA?
          </h2>
          <p className="text-sm font-mono text-white/60 mt-2">
            Ajuste os valores abaixo para calcular a redução de custos e ganho de horas semanais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Sliders Input Controls */}
          <div className="space-y-6 bg-white/5 p-6 border border-white/10 font-mono">
            {/* Control 1: Team Size */}
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="uppercase text-white/80 font-bold">Pessoas na Equipe Operacional:</span>
                <span className="text-[#ff3e00] font-bold text-sm">{teamSize} colaboradores</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-[#ff3e00] bg-white/10 h-2 cursor-pointer"
              />
            </div>

            {/* Control 2: Avg Salary */}
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="uppercase text-white/80 font-bold">Salário Médio por Colaborador:</span>
                <span className="text-[#ff3e00] font-bold text-sm">R$ {avgSalary.toLocaleString('pt-BR')}</span>
              </div>
              <input
                type="range"
                min="1800"
                max="15000"
                step="200"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="w-full accent-[#ff3e00] bg-white/10 h-2 cursor-pointer"
              />
            </div>

            {/* Control 3: Hours in repetitive work */}
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="uppercase text-white/80 font-bold">Horas Gastas em Tarefas Repetitivas/Semana:</span>
                <span className="text-[#ff3e00] font-bold text-sm">{hoursInRepetitiveTasks}h / pessoa</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                value={hoursInRepetitiveTasks}
                onChange={(e) => setHoursInRepetitiveTasks(Number(e.target.value))}
                className="w-full accent-[#ff3e00] bg-white/10 h-2 cursor-pointer"
              />
            </div>
          </div>

          {/* Results Output Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black/80 border-2 border-[#ff3e00] p-6 space-y-2 relative">
              <div className="text-[10px] font-mono uppercase text-white/50 font-bold tracking-widest flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-[#ff3e00]" /> Economia Mensal
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#ff3e00] tracking-tight">
                R$ {monthlyCostSavings.toLocaleString('pt-BR')}
              </div>
              <p className="text-[11px] text-white/50 font-mono">
                Economia direta em custo de horas operacionais desperdiçadas.
              </p>
            </div>

            <div className="bg-black/80 border border-white/10 p-6 space-y-2">
              <div className="text-[10px] font-mono uppercase text-white/50 font-bold tracking-widest flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-green-400" /> Horas Livres / Mês
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {hoursSavedMonthly}h
              </div>
              <p className="text-[11px] text-white/50 font-mono">
                Horas redirecionadas para fechamento de novos negócios.
              </p>
            </div>

            <div className="bg-black/80 border border-white/10 p-6 space-y-2 sm:col-span-2">
              <div className="text-[10px] font-mono uppercase text-white/50 font-bold tracking-widest flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-blue-400" /> Retorno Anual Projetado
              </div>
              <div className="text-3xl sm:text-4xl font-black text-green-400 tracking-tight">
                R$ {annualSavings.toLocaleString('pt-BR')} / ano
              </div>
              <p className="text-[11px] text-white/50 font-mono">
                Com base no plano de automação e integração de inteligência artificial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
