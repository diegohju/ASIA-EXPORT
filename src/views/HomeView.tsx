import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';

export const HomeView: React.FC = () => {
  const { lang, navigateTo } = useApp();
  const [counts, setCounts] = useState({ p15: 0, s4: 0, l3: 0, a8: 0 });
  const [hasCounted, setHasCounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Animated counters on viewport reach
  useEffect(() => {
    if (hasCounted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasCounted(true);
          let start = 0;
          const duration = 1600;
          const stepTime = 30;
          const steps = duration / stepTime;
          const interval = setInterval(() => {
            start++;
            const progress = Math.min(start / steps, 1);
            setCounts({
              p15: Math.round(15 * progress),
              s4: Math.round(4 * progress),
              l3: Math.round(3 * progress),
              a8: Math.round(8 * progress),
            });
            if (start >= steps) clearInterval(interval);
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );
    const elem = document.getElementById('stats-section');
    if (elem) observer.observe(elem);
    return () => observer.disconnect();
  }, [hasCounted]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  const heroWords = T.hero.words[lang];
  const marqueeItems = T.marquee.items[lang];

  return (
    <div className="pt-[72px]">
      
      {/* =========================================================================
          HERO SECTION (With Real Maritime Photograph + Professional Dark Overlay)
          ========================================================================= */}
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-[92vh] flex items-center py-24 sm:py-32 overflow-hidden border-b border-white/10 text-white"
      >
        {/* Real Professional Background Image with Atmospheric Dark Scrim Overlay (Replaces black grid) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_shipping_logistics_1793841258140.jpg"
            alt="Buque de carga marítima en el Océano Pacífico al atardecer"
            className="w-full h-full object-cover object-center filter brightness-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1318]/95 via-[#0F1318]/90 to-[#0F1318]/75 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-[1160px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          
          {/* Hero Left Content */}
          <div>
            <span className="text-[#FFB000] text-[13px] tracking-[0.14em] uppercase font-semibold block mb-4">
              {T.hero.corridor[lang]}
            </span>
            
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-normal leading-[1.08] tracking-[-0.02em] text-white">
              {heroWords.map((word, index) => (
                <React.Fragment key={index}>
                  <span className="wd">
                    <i style={{ animationDelay: `${0.1 + index * 0.1}s` }}>{word}</i>
                  </span>{' '}
                </React.Fragment>
              ))}
            </h1>

            <p className="text-[#DDD] text-lg sm:text-xl mt-6 mb-9 max-w-[540px] leading-relaxed">
              {T.hero.desc[lang]}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => navigateTo('contacto')}
                className="btn-shimmer inline-block bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0] px-7 py-3.5 rounded-full font-semibold text-[15px] transition-colors shadow-sm focus:outline-none cursor-pointer"
              >
                {T.hero.btnQuote[lang]}
              </button>
              <button
                onClick={() => navigateTo('servicios')}
                className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/35 hover:border-[#FFB000] hover:text-[#FFB000] px-7 py-3.5 rounded-full font-semibold text-[15px] transition-colors focus:outline-none cursor-pointer backdrop-blur-xs"
              >
                {T.hero.btnServices[lang]}
              </button>
            </div>
          </div>

          {/* Hero Right Visual: Centered Animated Flight Arc Card */}
          <div className="w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="w-full max-w-[280px] sm:max-w-[300px] bg-black/50 border border-white/25 rounded-2xl p-5 backdrop-blur-md text-[14px] text-[#DDD] shadow-2xl"
            >
              <span className="text-[#FFB000] text-[12px] uppercase tracking-wider block font-semibold mb-1">
                {T.hero.flightBadge[lang]}
              </span>
              <p className="text-xs text-white/90 leading-tight">
                {T.hero.flightDesc[lang]}
              </p>
              
              {/* Animated flight arc */}
              <svg className="w-full h-8 mt-2.5 overflow-visible" viewBox="0 0 200 40" aria-hidden="true">
                <path d="M5 35 Q100 -20 195 35" fill="none" stroke="#FFB000" strokeWidth="2" strokeDasharray="4 6" />
                <circle r="4" fill="#FDFBA0">
                  <animateMotion dur="3.2s" repeatCount="indefinite" path="M5 35 Q100 -20 195 35" />
                </circle>
              </svg>
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MARQUEE TICKER (Amber running ribbon - Trilingual)
          ========================================================================= */}
      <div className="bg-[#FFB000] text-[#0F1318] overflow-hidden whitespace-nowrap py-4 font-serif text-[20px] sm:text-[22px] border-y border-[#B07A00]/30 select-none" aria-hidden="true">
        <div className="mq-track inline-block">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              <span className="px-5">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* =========================================================================
          SECTION { 01 } QUIÉNES SOMOS (With Professional Santiago Executive Photo)
          ========================================================================= */}
      <section className="py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 sm:gap-16 items-center">
          <div>
            <span className="text-[#FFB000] text-[15px] font-sans block mb-3.5 tracking-wider font-semibold">
              {T.section01.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6] mb-6">
              {T.section01.title[lang]}
            </h2>
            <p className="text-xl text-[#5E6670] dark:text-[#9AA3AD] leading-relaxed mb-6">
              {T.section01.lead[lang]}
            </p>
            <p className="text-sm text-[#5E6670] dark:text-[#9AA3AD] leading-relaxed mb-8">
              {T.section01.desc[lang]}
            </p>
            <button
              onClick={() => navigateTo('nosotros')}
              className="btn-shimmer inline-block bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0] px-7 py-3.5 rounded-full font-semibold text-[15px] transition-colors shadow-sm focus:outline-none cursor-pointer"
            >
              {T.section01.btn[lang]}
            </button>
          </div>

          {/* Real Photography of Santiago Boardroom */}
          <div className="relative group overflow-hidden rounded-3xl border border-[#E4E2DC] dark:border-[#2A313B] shadow-xl">
            <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/corporate_advisory_b2b_1793841272961.jpg"
                alt="Directorio de Holding Sarrazin y Asia Export en Santiago de Chile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            {/* Bottom info overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white">
              <span className="text-[#FFB000] text-xs font-mono uppercase tracking-wider block mb-1">
                {T.section01.photoTag[lang]}
              </span>
              <p className="text-sm text-slate-200">
                {T.section01.photoDesc[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION { 02 } NUESTRA OFERTA EN CIFRAS (Dark Section with Counters)
          ========================================================================= */}
      <section id="stats-section" className="py-24 bg-[#0F1318] text-white border-y border-white/10">
        <div className="max-w-[1160px] mx-auto px-6">
          <span className="text-[#FFB000] text-[15px] font-sans block mb-3.5 tracking-wider font-semibold">
            {T.section02.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl text-white mb-12">
            {T.section02.title[lang]}
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-white/15 pt-6">
              <b className="font-serif text-5xl sm:text-7xl lg:text-[84px] text-[#FFB000] leading-none block">
                {counts.p15}
              </b>
              <p className="text-[#BBB] mt-3 text-base">{T.section02.stat1[lang]}</p>
            </div>
            <div className="border-t border-white/15 pt-6">
              <b className="font-serif text-5xl sm:text-7xl lg:text-[84px] text-[#FFB000] leading-none block">
                {counts.s4}
              </b>
              <p className="text-[#BBB] mt-3 text-base">{T.section02.stat2[lang]}</p>
            </div>
            <div className="border-t border-white/15 pt-6">
              <b className="font-serif text-5xl sm:text-7xl lg:text-[84px] text-[#FFB000] leading-none block">
                {counts.l3}
              </b>
              <p className="text-[#BBB] mt-3 text-base">{T.section02.stat3[lang]}</p>
            </div>
            <div className="border-t border-white/15 pt-6">
              <b className="font-serif text-5xl sm:text-7xl lg:text-[84px] text-[#FFB000] leading-none block">
                {counts.a8}
              </b>
              <p className="text-[#BBB] mt-3 text-base">{T.section02.stat4[lang]}</p>
            </div>
          </div>
        </div>

        {/* Cinematic Pacific Corridor Banner */}
        <div className="max-w-[1160px] mx-auto px-6 mt-16">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
            <div className="aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden bg-slate-950">
              <img
                src="/src/assets/images/hero_shipping_logistics_1793841258140.jpg"
                alt="Buque portacontenedores de ultramar navegando el Océano Pacífico"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-10">
              <span className="text-[#FFB000] text-xs font-mono uppercase tracking-widest mb-1.5">
                {T.corridor.tag[lang]}
              </span>
              <h3 className="text-2xl sm:text-4xl font-normal text-white max-w-xl leading-tight">
                {T.corridor.title[lang]}
              </h3>
              <p className="text-sm text-[#DDD] mt-2 max-w-lg hidden sm:block">
                {T.corridor.desc[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION { 03 } PRODUCTOS Y SERVICIOS (Clean Photo Cards - NO ANIMATED ICONS)
          ========================================================================= */}
      <section className="py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6">
          <span className="text-[#FFB000] text-[15px] font-sans block mb-3.5 tracking-wider font-semibold">
            {T.section03.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6] mb-3">
            {T.section03.title[lang]}
          </h2>
          <p className="text-xl text-[#5E6670] dark:text-[#9AA3AD] max-w-2xl mb-12">
            {T.section03.lead[lang]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Exportaciones - PHOTO ONLY (No animated vector icon) */}
            <div
              onClick={() => navigateTo('exportaciones')}
              className="group cursor-pointer border border-[#E4E2DC] dark:border-[#2A313B] rounded-[24px] overflow-hidden bg-white dark:bg-[#1A2029] hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/export_agro_harvest_1793841258356.jpg"
                  alt="Cosecha agroindustrial chilena para exportación"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#FFB000] text-xs font-mono px-3 py-1 rounded-full border border-white/15">
                  {T.section03.c1Badge[lang]}
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#FFB000] text-sm font-semibold tracking-wider block mb-1">01</span>
                  <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">
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

            {/* Card 2: Importaciones - PHOTO ONLY (No animated vector icon) */}
            <div
              onClick={() => navigateTo('importaciones')}
              className="group cursor-pointer border border-[#E4E2DC] dark:border-[#2A313B] rounded-[24px] overflow-hidden bg-white dark:bg-[#1A2029] hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/import_mining_industry_1793841273089.jpg"
                  alt="Maquinaria pesada y minería en Chile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#FFB000] text-xs font-mono px-3 py-1 rounded-full border border-white/15">
                  {T.section03.c2Badge[lang]}
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#FFB000] text-sm font-semibold tracking-wider block mb-1">02</span>
                  <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">
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

            {/* Card 3: Negocios - PHOTO ONLY (No animated vector icon) */}
            <div
              onClick={() => navigateTo('negocios')}
              className="group cursor-pointer border border-[#E4E2DC] dark:border-[#2A313B] rounded-[24px] overflow-hidden bg-white dark:bg-[#1A2029] hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/corporate_advisory_b2b_1793841272961.jpg"
                  alt="Asesoría legal, tributaria y estratégica en Santiago de Chile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#FFB000] text-xs font-mono px-3 py-1 rounded-full border border-white/15">
                  {T.section03.c3Badge[lang]}
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#FFB000] text-sm font-semibold tracking-wider block mb-1">03</span>
                  <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">
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

      {/* =========================================================================
          SECTION { 04 } POR QUÉ ELEGIRNOS (Bento Grid on Dark Section)
          ========================================================================= */}
      <section className="py-24 bg-[#0F1318] text-white border-y border-white/10">
        <div className="max-w-[1160px] mx-auto px-6">
          <span className="text-[#FFB000] text-[15px] font-sans block mb-3.5 tracking-wider font-semibold">
            {T.section04.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl text-white mb-12">
            {T.section04.title[lang]}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A2029] p-8 rounded-2xl border border-white/10">
              <span className="text-[#FFB000] text-xs font-mono uppercase tracking-widest block mb-2">
                {T.section04.b1Tag[lang]}
              </span>
              <h3 className="text-2xl text-white mb-3">
                {T.section04.b1Title[lang]}
              </h3>
              <p className="text-[#AAA] text-[15px] leading-relaxed">
                {T.section04.b1Desc[lang]}
              </p>
            </div>
            
            <div className="bg-[#1A2029] p-8 rounded-2xl border border-white/10">
              <span className="text-[#FFB000] text-xs font-mono uppercase tracking-widest block mb-2">
                {T.section04.b2Tag[lang]}
              </span>
              <h3 className="text-2xl text-white mb-3">
                {T.section04.b2Title[lang]}
              </h3>
              <p className="text-[#AAA] text-[15px] leading-relaxed">
                {T.section04.b2Desc[lang]}
              </p>
            </div>

            <div className="bg-[#1A2029] p-8 rounded-2xl border border-white/10">
              <span className="text-[#FFB000] text-xs font-mono uppercase tracking-widest block mb-2">
                {T.section04.b3Tag[lang]}
              </span>
              <h3 className="text-2xl text-white mb-3">
                {T.section04.b3Title[lang]}
              </h3>
              <p className="text-[#AAA] text-[15px] leading-relaxed">
                {T.section04.b3Desc[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION { 05 } PREGUNTAS FRECUENTES (Editorial Accordion - Trilingual)
          ========================================================================= */}
      <section className="py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 sm:gap-16 items-start">
          <div>
            <span className="text-[#FFB000] text-[15px] font-sans block mb-3.5 tracking-wider font-semibold">
              {T.section05.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6]">
              {T.section05.title[lang]}
            </h2>
            <p className="text-[#5E6670] dark:text-[#9AA3AD] mt-4 text-base">
              {T.section05.lead[lang]}
            </p>
          </div>

          <div className="divide-y divide-[#E4E2DC] dark:divide-[#2A313B]">
            <details className="py-6 group" open>
              <summary className="text-xl sm:text-2xl text-[#0F1318] dark:text-white cursor-pointer list-none focus:outline-none">
                {T.section05.q1[lang]}
              </summary>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] mt-3 leading-relaxed max-w-2xl text-[16px]">
                {T.section05.a1[lang]}
              </p>
            </details>

            <details className="py-6 group">
              <summary className="text-xl sm:text-2xl text-[#0F1318] dark:text-white cursor-pointer list-none focus:outline-none">
                {T.section05.q2[lang]}
              </summary>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] mt-3 leading-relaxed max-w-2xl text-[16px]">
                {T.section05.a2[lang]}
              </p>
            </details>

            <details className="py-6 group">
              <summary className="text-xl sm:text-2xl text-[#0F1318] dark:text-white cursor-pointer list-none focus:outline-none">
                {T.section05.q3[lang]}
              </summary>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] mt-3 leading-relaxed max-w-2xl text-[16px]">
                {T.section05.a3[lang]}
              </p>
            </details>

            <details className="py-6 group">
              <summary className="text-xl sm:text-2xl text-[#0F1318] dark:text-white cursor-pointer list-none focus:outline-none">
                {T.section05.q4[lang]}
              </summary>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] mt-3 leading-relaxed max-w-2xl text-[16px]">
                {T.section05.a4[lang]}
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BANNER CTA + NEWSLETTER (Trilingual)
          ========================================================================= */}
      <section className="bg-[#FFB000] text-[#0F1318] py-20 text-center mx-4 sm:mx-6 rounded-3xl my-10 shadow-lg">
        <div className="max-w-[1160px] mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-normal mb-3">
            {T.cta.title[lang]}
          </h2>
          <p className="text-lg text-[#0F1318]/85 mb-8">
            {T.cta.subtitle[lang]}
          </p>
          
          <button
            onClick={() => navigateTo('contacto')}
            className="btn-shimmer inline-block bg-[#0F1318] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-sm focus:outline-none cursor-pointer mb-10"
          >
            {T.cta.btn[lang]}
          </button>

          {/* Newsletter Form */}
          <div className="max-w-[520px] mx-auto text-left">
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 items-stretch">
              <input
                type="email"
                required
                placeholder={T.cta.placeholder[lang]}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-white px-5 py-3.5 rounded-full text-[#0F1318] border border-black/20 focus:outline-none focus:ring-2 focus:ring-[#0F1318] text-sm"
              />
              <button
                type="submit"
                className="bg-[#0F1318] text-white hover:bg-black px-6 py-3.5 rounded-full font-semibold text-sm transition-colors cursor-pointer shrink-0"
              >
                {T.cta.subBtn[lang]}
              </button>
            </form>
            {newsletterSuccess && (
              <p className="text-[#0F1318] font-bold text-sm mt-3 text-center">
                {T.cta.subSuccess[lang]}
              </p>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
