import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { FAQS } from '../data/siteContent';
import { Search, ChevronDown, MessageSquare } from 'lucide-react';

export const FaqView: React.FC = () => {
  const { lang, navigateTo, openChat } = useApp();
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const tags = ['all', ...Array.from(new Set(FAQS.map((f) => f.tag)))];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesTag = selectedTag === 'all' || faq.tag === selectedTag;
    const qText = faq.q[lang].toLowerCase();
    const aText = faq.a[lang].toLowerCase();
    const matchesSearch = !search || qText.includes(search.toLowerCase()) || aText.includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="pt-[72px] space-y-16 pb-24">
      {/* Hero Header with Photographic Overlay */}
      <section className="relative text-white py-24 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0F1318]">
        <img
          src="/src/assets/images/hero_shipping_logistics_1793841258140.jpg"
          alt="Chilean ocean trade FAQ and regulations"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1318]/95 via-[#0F1318]/90 to-[#0F1318]/75 backdrop-blur-[2px]" />

        <div className="max-w-[1160px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[#FFB000] font-semibold">
              {lang === 'es' ? 'Centro de Ayuda y Regulaciones' : lang === 'en' ? 'Help Center & Trade Regulations' : '帮助中心与双边经贸法规'}
            </div>
            <h1 className="text-4xl sm:text-6xl font-normal leading-[1.1] text-white">
              {lang === 'es'
                ? 'Preguntas Frecuentes de Comercio Exterior'
                : lang === 'en'
                ? 'Trade & Regulatory Frequently Asked Questions'
                : '中智外贸与海关合规常见问题解答'}
            </h1>
            <p className="text-base sm:text-lg text-[#BBB] leading-relaxed">
              {lang === 'es'
                ? 'Respuestas directas sobre normativas aduaneras, tiempos de navegación marítima, aranceles del TLC Chile–China y requerimientos técnicos de importación y exportación.'
                : lang === 'en'
                ? 'Direct answers regarding customs regulations, transit times, FTA tariffs, and technical import/export compliance.'
                : '针对中智自贸关税、航运时效、动植检验疫以及重型设备清关的官方解答。'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Topic Filters */}
      <section className="max-w-[1160px] mx-auto px-6">
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                lang === 'es'
                  ? 'Buscar pregunta o normativa...'
                  : lang === 'en'
                  ? 'Search questions or regulations...'
                  : '搜索常见问题或海关规定...'
              }
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] rounded-xl text-[#0F1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB000]"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-xs px-3.5 py-1.5 rounded-full capitalize font-medium transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-[#FFB000] text-[#0F1318] font-semibold'
                    : 'bg-white dark:bg-[#1A2029] text-slate-600 dark:text-slate-300 border border-[#E4E2DC] dark:border-[#2A313B] hover:border-[#FFB000]'
                }`}
              >
                {tag === 'all'
                  ? lang === 'es'
                    ? 'Todos los temas'
                    : lang === 'en'
                    ? 'All Topics'
                    : '全部类别'
                  : tag}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="mt-8 space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] rounded-2xl p-5 sm:p-6 transition-colors shadow-xs"
              >
                <button
                  onClick={() => setExpandedIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B07A00] dark:text-[#FFB000] block mb-1">
                      {faq.tag}
                    </span>
                    <h2 className="text-base sm:text-lg font-semibold text-[#0F1318] dark:text-white">
                      {faq.q[lang]}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FFB000]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-4 text-sm text-[#5E6670] dark:text-[#9AA3AD] leading-relaxed max-w-3xl animate-in fade-in duration-150">
                    <p>{faq.a[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Unresolved question banner */}
      <section className="max-w-[1160px] mx-auto px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F1318] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-2xl font-normal text-white">
              {lang === 'es'
                ? '¿No encontró respuesta a su consulta específica?'
                : lang === 'en'
                ? 'Didn’t find the answer to your specific operation?'
                : '未找到您拟议操作的相关解答？'}
            </h3>
            <p className="text-sm text-[#BBB]">
              {lang === 'es'
                ? 'Inicie un diálogo directo en nuestra mesa de operaciones en línea o escriba a nuestro equipo legal.'
                : lang === 'en'
                ? 'Connect directly through our online trade desk or contact our corporate legal team.'
                : '请随时联络我们的在线咨询专席，或致信法务商贸顾问团队。'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              onClick={() => openChat()}
              className="btn-shimmer px-6 py-3 bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0] text-sm font-semibold rounded-full transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{lang === 'es' ? 'Te ayudamos?' : lang === 'en' ? 'Can we help?' : '需要协助吗？'}</span>
            </button>
            <button
              onClick={() => navigateTo('contacto')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer border border-white/15"
            >
              {lang === 'es' ? 'Formulario de Contacto' : lang === 'en' ? 'Contact Form' : '商务询价表单'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
