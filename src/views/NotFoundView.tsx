import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';

export const NotFoundView: React.FC = () => {
  const { lang, navigateTo } = useApp();

  return (
    <div className="pt-[72px] min-h-[85vh] flex items-center relative overflow-hidden bg-[#0F1318] text-white">
      <img
        src="/src/assets/images/hero_shipping_logistics_1793841258140.jpg"
        alt="Ocean trade corridor"
        className="absolute inset-0 w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1318] via-[#0F1318]/90 to-[#0F1318]/75 backdrop-blur-[2px]" />

      <div className="max-w-[1160px] mx-auto px-6 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#FFB000] text-[13px] tracking-[0.14em] uppercase font-semibold block mb-4">
            {T.notFoundPage.heroTag[lang]}
          </span>
          <h1 className="text-4xl sm:text-6xl text-white font-normal mb-6">
            {T.notFoundPage.title[lang]}
          </h1>
          <p className="text-[#BBB] text-lg max-w-md mx-auto mb-8">
            {T.notFoundPage.desc[lang]}
          </p>
          <button
            onClick={() => navigateTo('home')}
            className="btn-shimmer inline-block bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0] px-8 py-3.5 rounded-full font-semibold text-sm transition-colors cursor-pointer shadow-md"
          >
            {T.notFoundPage.backBtn[lang]}
          </button>
        </motion.div>
      </div>
    </div>
  );
};
