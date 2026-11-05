import React from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, ShieldAlert, ArrowRight, FileText } from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { lang, selectedService, closeServiceDetail, navigateTo } = useApp();

  if (!selectedService) return null;

  const handleRequestQuote = () => {
    closeServiceDetail();
    navigateTo('contact');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="bg-[#FBFBF9] dark:bg-[#0B1320] text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header */}
        <div className="sticky top-0 bg-[#FBFBF9] dark:bg-[#0B1320] px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 z-10">
          <div>
            <div className="text-xs font-mono uppercase text-[#C53030] tracking-wider mb-1">
              {selectedService.categoryLabel[lang]} · Ficha Técnica
            </div>
            <h3 id="service-detail-title" className="text-xl font-bold tracking-tight text-[#0A192F] dark:text-white">
              {selectedService.title[lang]}
            </h3>
          </div>
          <button
            onClick={closeServiceDetail}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors rounded-md"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-sm">
          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {lang === 'es' ? 'Descripción Operativa' : lang === 'en' ? 'Operational Overview' : '业务与履约概要'}
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedService.fullDesc[lang]}
            </p>
          </div>

          {/* Catalog Items */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {lang === 'es' ? 'Líneas y Productos Gestionados' : lang === 'en' ? 'Managed Product Lines' : '涵盖具体品类与技术细分'}
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-lg p-4 space-y-2.5">
              {selectedService.items[lang].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C53030] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Standards */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#0A192F] dark:text-[#C53030]" />
              <span>{lang === 'es' ? 'Protocolo y Cumplimiento Regulatorio' : lang === 'en' ? 'Regulatory Compliance' : '监管与质量准入体系'}</span>
            </h4>
            <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs text-slate-800 dark:text-slate-200">
              {selectedService.compliance[lang]}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-[#FBFBF9] dark:bg-[#0B1320] px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={closeServiceDetail}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {lang === 'es' ? 'Cerrar' : lang === 'en' ? 'Close' : '返回'}
          </button>
          <button
            onClick={handleRequestQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A192F] dark:bg-[#C53030] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            <span>{lang === 'es' ? 'Cotizar este Servicio' : lang === 'en' ? 'Request Quote for This' : '针对该项目大宗询价'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
