import React, { useState } from 'react';
import JSZip from 'jszip';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ROICalculator } from './components/ROICalculator';
import { AIChatWidget } from './components/AIChatWidget';
import { LeadModal } from './components/LeadModal';
import { MigrationHub } from './components/MigrationHub';
import { CodeInspectorModal } from './components/CodeInspectorModal';
import { MigrationGuideModal } from './components/MigrationGuideModal';
import { Footer } from './components/Footer';
import { getReconstructedFiles } from './data/extractedCode';

export default function App() {
  const [activeTab, setActiveTab] = useState<'site' | 'inspector' | 'guide'>('site');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [targetUrl, setTargetUrl] = useState<string>('https://empresaturbinadaporia.lovable.app/');

  // Generate and download ZIP file
  const handleExportZip = async () => {
    setIsExporting(true);
    try {
      const zip = new JSZip();
      const filesToZip = getReconstructedFiles(targetUrl);

      // Add all reconstructed files to the zip folder
      filesToZip.forEach((file) => {
        zip.file(file.path, file.content);
      });

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${targetUrl.replace(/^https?:\/\//, '').replace(/[^a-zA-Z0-9]/g, '-')}-vercel.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating ZIP:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div class="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] flex flex-col font-sans selection:bg-[#ff3e00] selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onExportZip={handleExportZip}
        isExporting={isExporting}
        targetUrl={targetUrl}
        setTargetUrl={setTargetUrl}
      />

      {/* Main Dynamic View */}
      <main class="flex-1">
        {activeTab === 'site' && (
          <div class="space-y-4">
            <Hero
              onOpenLead={() => setIsLeadModalOpen(true)}
              onOpenDiagnostic={() => setActiveTab('guide')}
            />

            <MigrationHub
              onGoToInspector={() => setActiveTab('inspector')}
              onGoToGuide={() => setActiveTab('guide')}
              targetUrl={targetUrl}
              setTargetUrl={setTargetUrl}
            />

            <Services onOpenLead={() => setIsLeadModalOpen(true)} />

            <ROICalculator />

            <AIChatWidget />
          </div>
        )}

        {activeTab === 'inspector' && (
          <CodeInspectorModal
            onExportZip={handleExportZip}
            isExporting={isExporting}
            targetUrl={targetUrl}
          />
        )}

        {activeTab === 'guide' && (
          <MigrationGuideModal onExportZip={handleExportZip} />
        )}
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

