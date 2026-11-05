import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';

interface LegalViewProps {
  type?: 'privacy' | 'terms';
}

export const LegalView: React.FC<LegalViewProps> = ({ type = 'privacy' }) => {
  const { lang, navigateTo } = useApp();

  return (
    <div className="pt-[72px]">
      
      {/* Hero Header with Photographic Overlay */}
      <section className="relative text-white py-24 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0F1318]">
        <img
          src="/src/assets/images/corporate_advisory_b2b_1793841272961.jpg"
          alt="Legal and corporate compliance at Asia Export"
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
              {T.legalPage.heroTag[lang]}
            </span>
            <h1 className="text-4xl sm:text-6xl text-white font-normal leading-[1.1] max-w-3xl">
              {type === 'terms' ? T.legalPage.termsTitle[lang] : T.legalPage.privacyTitle[lang]}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6 max-w-3xl">
          <p className="text-xl sm:text-2xl text-[#5E6670] dark:text-[#9AA3AD] leading-relaxed mb-8">
            {T.legalPage.pendingNotice[lang]}
          </p>

          <div className="p-8 rounded-2xl bg-white dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] space-y-4 text-sm text-[#5E6670] dark:text-[#9AA3AD]">
            <h3 className="text-lg font-medium text-[#0F1318] dark:text-white">
              {T.legalPage.frameworkTitle[lang]}
            </h3>
            <p>
              {T.legalPage.p1[lang]}
            </p>
            <p>
              {T.legalPage.p2[lang]}
            </p>
            <div className="pt-4">
              <button
                onClick={() => navigateTo('contacto')}
                className="text-[#FFB000] font-semibold text-sm hover:underline cursor-pointer"
              >
                {T.legalPage.btnContact[lang]} →
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
