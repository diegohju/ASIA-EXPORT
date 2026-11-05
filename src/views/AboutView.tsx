import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';

export const AboutView: React.FC = () => {
  const { lang, navigateTo } = useApp();

  return (
    <div className="pt-[72px]">
      
      {/* Hero Header with Real Professional Photo & Dark Overlay Scrim */}
      <section className="relative text-white py-24 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0F1318]">
        <img
          src="/src/assets/images/corporate_advisory_b2b_1793841272961.jpg"
          alt="Holding Sarrazin & Asia Export Boardroom in Santiago"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1318]/95 via-[#0F1318]/90 to-[#0F1318]/80 backdrop-blur-[2px]" />

        <div className="max-w-[1160px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#FFB000] text-[13px] tracking-[0.14em] uppercase font-semibold block mb-4">
              {T.aboutPage.heroTag[lang]}
            </span>
            <h1 className="text-4xl sm:text-6xl text-white font-normal leading-[1.1] max-w-3xl">
              {T.aboutPage.heroTitle[lang]}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section { 01 } Nuestra Historia */}
      <section className="py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 sm:gap-16 items-start">
          <div>
            <span className="text-[#FFB000] text-[15px] font-sans block mb-3.5 tracking-wider font-semibold">
              {'{ 01 }'}
            </span>
            <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6]">
              {T.aboutPage.s1Title[lang]}
            </h2>
          </div>
          <div>
            <p className="text-xl sm:text-2xl text-[#5E6670] dark:text-[#9AA3AD] leading-relaxed">
              {T.aboutPage.s1Desc[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Section { 02 } Misión (Dark Section) */}
      <section className="py-24 bg-[#0F1318] text-white border-y border-white/10">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 sm:gap-16 items-start">
          <div>
            <span className="text-[#FFB000] text-[15px] font-sans block mb-3.5 tracking-wider font-semibold">
              {'{ 02 }'}
            </span>
            <h2 className="text-3xl sm:text-5xl text-white">
              {T.aboutPage.s2Title[lang]}
            </h2>
          </div>
          <div>
            <p className="text-xl sm:text-2xl text-[#BBB] leading-relaxed">
              {T.aboutPage.s2Desc[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Section { 03 } Holding Sarrazin */}
      <section className="py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 sm:gap-16 items-center">
          <div>
            <span className="text-[#FFB000] text-[15px] font-sans block mb-3.5 tracking-wider font-semibold">
              {'{ 03 }'}
            </span>
            <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6] mb-6">
              {T.aboutPage.s3Title[lang]}
            </h2>
            <p className="text-xl text-[#5E6670] dark:text-[#9AA3AD] leading-relaxed mb-6">
              {T.aboutPage.s3Desc[lang]}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.sarrazin.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-block bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0] px-7 py-3 rounded-full font-semibold text-[15px] transition-colors shadow-sm"
              >
                sarrazin.cl ↗
              </a>
              <a
                href="https://www.rukaa.es"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-block bg-white dark:bg-[#1E2530] text-[#0F1318] dark:text-white border border-[#E4E2DC] dark:border-[#2A313B] hover:border-[#FFB000] px-7 py-3 rounded-full font-semibold text-[15px] transition-colors shadow-sm"
              >
                rukaa.es ↗
              </a>
              <span className="text-sm text-[#888]">Santiago de Chile · Madrid</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#E4E2DC] dark:border-[#2A313B] shadow-xl relative group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/corporate_advisory_b2b_1793841272961.jpg"
                alt="Directorio de Holding Sarrazin en Santiago de Chile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
              <span className="text-[#FFB000] text-xs font-mono uppercase block mb-1">
                Santiago de Chile · Las Condes
              </span>
              <p className="text-xs text-slate-200">
                {T.section01.photoDesc[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFB000] text-[#0F1318] py-20 text-center mx-4 sm:mx-6 rounded-3xl my-10 shadow-lg">
        <div className="max-w-[1160px] mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-normal mb-4">
            {T.aboutPage.ctaTitle[lang]}
          </h2>
          <p className="text-lg text-[#0F1318]/85 max-w-xl mx-auto mb-8">
            {T.aboutPage.ctaDesc[lang]}
          </p>
          <button
            onClick={() => navigateTo('contacto')}
            className="btn-shimmer inline-block bg-[#0F1318] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-sm cursor-pointer"
          >
            {T.cta.btn[lang]}
          </button>
        </div>
      </section>

    </div>
  );
};
