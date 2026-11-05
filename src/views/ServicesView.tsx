import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';

export const ServicesView: React.FC = () => {
  const { lang, navigateTo } = useApp();

  return (
    <div className="pt-[72px]">
      
      {/* Hero Header with Real Maritime Cargo Photo & Dark Overlay Scrim */}
      <section className="relative text-white py-24 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0F1318]">
        <img
          src="/src/assets/images/hero_shipping_logistics_1793841258140.jpg"
          alt="International container vessel crossing the Pacific ocean"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1318]/95 via-[#0F1318]/90 to-[#0F1318]/75 backdrop-blur-[2px]" />

        <div className="max-w-[1160px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#FFB000] text-[13px] tracking-[0.14em] uppercase font-semibold block mb-4">
              {T.servicesPage.heroTag[lang]}
            </span>
            <h1 className="text-4xl sm:text-6xl text-white font-normal leading-[1.1] max-w-3xl">
              {T.servicesPage.heroTitle[lang]}
            </h1>
            <p className="text-[#BBB] text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
              {T.servicesPage.heroDesc[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Clean Photography Cards (NO animated icons, as requested) */}
      <section className="py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Exportaciones */}
            <div
              onClick={() => navigateTo('exportaciones')}
              className="group cursor-pointer border border-[#E4E2DC] dark:border-[#2A313B] rounded-[22px] overflow-hidden bg-white dark:bg-[#1A2029] hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/export_agro_harvest_1793841258356.jpg"
                  alt="Cosecha agroindustrial chilena para exportación: arándanos, nueces, uvas y paltas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1318]/80 via-transparent to-black/20" />
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#FFB000] text-xs font-mono px-3 py-1 rounded-full border border-white/15">
                  {T.section03.c1Badge[lang]}
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#FFB000] text-sm font-semibold tracking-wider block mb-1">01</span>
                  <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2 font-normal">
                    {T.section03.c1Title[lang]}
                  </h3>
                  <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] mb-4 leading-relaxed">
                    {T.section03.c1Desc[lang]}
                  </p>
                </div>
                <span className="text-[#B07A00] dark:text-[#FFB000] font-semibold text-sm group-hover:translate-x-1 inline-block transition-transform">
                  {T.section03.c1Link[lang]}
                </span>
              </div>
            </div>

            {/* Card 2: Importaciones */}
            <div
              onClick={() => navigateTo('importaciones')}
              className="group cursor-pointer border border-[#E4E2DC] dark:border-[#2A313B] rounded-[22px] overflow-hidden bg-white dark:bg-[#1A2029] hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/import_mining_industry_1793841273089.jpg"
                  alt="Maquinaria pesada y minería en Chile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1318]/80 via-transparent to-black/20" />
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#FFB000] text-xs font-mono px-3 py-1 rounded-full border border-white/15">
                  {T.section03.c2Badge[lang]}
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#FFB000] text-sm font-semibold tracking-wider block mb-1">02</span>
                  <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2 font-normal">
                    {T.section03.c2Title[lang]}
                  </h3>
                  <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] mb-4 leading-relaxed">
                    {T.section03.c2Desc[lang]}
                  </p>
                </div>
                <span className="text-[#B07A00] dark:text-[#FFB000] font-semibold text-sm group-hover:translate-x-1 inline-block transition-transform">
                  {T.section03.c2Link[lang]}
                </span>
              </div>
            </div>

            {/* Card 3: Negocios */}
            <div
              onClick={() => navigateTo('negocios')}
              className="group cursor-pointer border border-[#E4E2DC] dark:border-[#2A313B] rounded-[22px] overflow-hidden bg-white dark:bg-[#1A2029] hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/corporate_advisory_b2b_1793841272961.jpg"
                  alt="Asesoría legal, tributaria y estratégica en Santiago de Chile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1318]/80 via-transparent to-black/20" />
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#FFB000] text-xs font-mono px-3 py-1 rounded-full border border-white/15">
                  {T.section03.c3Badge[lang]}
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#FFB000] text-sm font-semibold tracking-wider block mb-1">03</span>
                  <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2 font-normal">
                    {T.section03.c3Title[lang]}
                  </h3>
                  <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] mb-4 leading-relaxed">
                    {T.section03.c3Desc[lang]}
                  </p>
                </div>
                <span className="text-[#B07A00] dark:text-[#FFB000] font-semibold text-sm group-hover:translate-x-1 inline-block transition-transform">
                  {T.section03.c3Link[lang]}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFB000] text-[#0F1318] py-20 text-center mx-4 sm:mx-6 rounded-3xl my-10 shadow-lg">
        <div className="max-w-[1160px] mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-normal mb-4">
            {T.servicesPage.ctaTitle[lang]}
          </h2>
          <p className="text-lg text-[#0F1318]/85 max-w-xl mx-auto mb-8">
            {T.servicesPage.ctaDesc[lang]}
          </p>
          <button
            onClick={() => navigateTo('contacto')}
            className="btn-shimmer inline-block bg-[#0F1318] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-sm cursor-pointer"
          >
            {T.servicesPage.ctaBtn[lang]}
          </button>
        </div>
      </section>

    </div>
  );
};
