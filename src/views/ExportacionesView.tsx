import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';

export const ExportacionesView: React.FC = () => {
  const { lang, navigateTo } = useApp();

  return (
    <div className="pt-[72px]">
      
      {/* Hero Section with Photographic Overlay Scrim */}
      <section className="relative text-white py-24 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0F1318]">
        <img
          src="/src/assets/images/export_agro_harvest_1793841258356.jpg"
          alt="Chilean agricultural exports"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1318]/95 via-[#0F1318]/90 to-[#0F1318]/75 backdrop-blur-[2px]" />

        <div className="max-w-[1160px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[#FFB000] text-[13px] tracking-[0.14em] uppercase font-semibold block mb-4">
              {T.exportPage.heroTag[lang]}
            </span>
            <h1 className="text-4xl sm:text-6xl text-white font-normal leading-[1.1] mb-6">
              {T.exportPage.heroTitle[lang]}
            </h1>
            <p className="text-[#BBB] text-lg sm:text-xl leading-relaxed">
              {T.exportPage.heroDesc[lang]}
            </p>
          </motion.div>
        </div>
      </section>


      {/* Frutas y Verduras (10 items) */}
      <section className="py-20 sm:py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6">
          
          {/* Real Photography Spotlight: Chilean Agricultural Export */}
          <div className="mb-14 rounded-3xl overflow-hidden border border-[#E4E2DC] dark:border-[#2A313B] shadow-xl relative group">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/export_agro_harvest_1793841258356.jpg"
                alt="Frutas frescas, arándanos, nueces y paltas chilenas seleccionadas para el mercado asiático"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-[#FFB000] text-xs font-mono uppercase tracking-widest mb-1">
                Origen Certificado · Valles de Chile
              </span>
              <h3 className="text-xl sm:text-3xl font-normal max-w-xl text-white">
                Nutrición intacta desde los huertos chilenos hasta el consumidor en Asia
              </h3>
              <p className="text-sm text-[#DDD] mt-2 max-w-lg hidden sm:block">
                Atmósfera controlada, selección en frío y protocolos fitosanitarios aprobados por el SAG y la aduana china (GACC).
              </p>
            </div>
          </div>

          <span className="text-[#FFB000] text-sm font-semibold tracking-wider uppercase block mb-3">
            Corredor Agroindustrial
          </span>
          <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6] mb-12">
            Frutas y verduras
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Maní */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Maní">
                <g transform="rotate(-35 60 60)">
                  <rect x="38" y="18" width="44" height="84" rx="22" fill="#D9A55B"/>
                  <path d="M40 58q20 8 40 0v8q-20 8-40 0z" fill="#C28B43"/>
                  <g fill="#B9823A">
                    <circle cx="52" cy="38" r="1.8"/>
                    <circle cx="66" cy="32" r="1.8"/>
                    <circle cx="60" cy="46" r="1.8"/>
                    <circle cx="54" cy="80" r="1.8"/>
                    <circle cx="68" cy="88" r="1.8"/>
                    <circle cx="62" cy="76" r="1.8"/>
                  </g>
                </g>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Maní</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Vitamina E y B6; niacina, cistina, tiamina, riboflavina; fibra y proteína.
              </p>
            </div>

            {/* Almendra */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Almendra">
                <path d="M60 14c24 18 30 48 0 90-30-42-24-72 0-90z" fill="#C98E57"/>
                <path d="M60 26v68" stroke="#A8703C" strokeWidth="2.5"/>
                <path d="M49 40c-4 14-2 28 4 40" stroke="#E5B684" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Almendra</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Vitaminas E, B1, B2; magnesio, hierro, potasio, calcio; fibra y proteína.
              </p>
            </div>

            {/* Avellana */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Avellana">
                <circle cx="60" cy="72" r="28" fill="#B77A3E"/>
                <ellipse cx="50" cy="64" rx="8" ry="12" fill="#fff" opacity=".18"/>
                <path d="M28 64q4-34 32-34t32 34l-8-7-6 9-8-9-10 9-8-9-6 9z" fill="#6E8F3A"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Avellana</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Vitaminas E, A y ácido fólico; calcio y magnesio; fibra y proteína.
              </p>
            </div>

            {/* Lúcuma */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Lúcuma">
                <circle cx="60" cy="64" r="34" fill="#E3A21A"/>
                <path d="M60 30a34 34 0 010 68z" fill="#F3C84B"/>
                <ellipse cx="60" cy="64" rx="11" ry="15" fill="#6B3E1D"/>
                <path d="M60 30c0-8 4-12 10-12" stroke="#5E7F30" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Lúcuma</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Vitaminas B, C, B3; fibra, hierro, caroteno y niacina.
              </p>
            </div>

            {/* Ciruela */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Ciruela">
                <circle cx="60" cy="68" r="30" fill="#6B3F8E"/>
                <path d="M60 38v60" stroke="#4E2C6C" strokeWidth="2"/>
                <ellipse cx="48" cy="58" rx="6" ry="10" fill="#fff" opacity=".18"/>
                <path d="M60 38c4-14 14-16 24-14-2 10-12 16-24 14z" fill="#5E9B3A"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Ciruela</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Vitaminas C, A, E, B3; potasio, calcio, hierro y magnesio.
              </p>
            </div>

            {/* Uva */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Uva">
                <g fill="#7B4FA3">
                  <circle cx="44" cy="46" r="11"/>
                  <circle cx="60" cy="46" r="11"/>
                  <circle cx="76" cy="46" r="11"/>
                  <circle cx="52" cy="62" r="11"/>
                  <circle cx="68" cy="62" r="11"/>
                  <circle cx="60" cy="78" r="11"/>
                  <circle cx="60" cy="94" r="9"/>
                </g>
                <g fill="#fff" opacity=".2">
                  <circle cx="41" cy="42" r="3"/>
                  <circle cx="57" cy="42" r="3"/>
                  <circle cx="73" cy="42" r="3"/>
                  <circle cx="49" cy="58" r="3"/>
                  <circle cx="65" cy="58" r="3"/>
                </g>
                <path d="M60 34V20" stroke="#6B4423" strokeWidth="4" strokeLinecap="round"/>
                <path d="M60 26c10-10 24-8 28-2-8 8-20 8-28 2z" fill="#5E9B3A"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Uva</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Vitaminas C, B; ácido fólico; fibra, hierro, calcio, magnesio, fósforo y potasio.
              </p>
            </div>

            {/* Damasco */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Damasco">
                <circle cx="60" cy="66" r="34" fill="#F29A3A"/>
                <path d="M60 32c-9 22-9 46 0 68" stroke="#D7762A" strokeWidth="2.5" fill="none"/>
                <ellipse cx="46" cy="56" rx="7" ry="11" fill="#fff" opacity=".2"/>
                <path d="M60 32c2-10 10-14 18-12-2 8-8 14-18 12z" fill="#5E9B3A"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Damasco</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Vitaminas C y A; betacaroteno; potasio y hierro.
              </p>
            </div>

            {/* Palta */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Palta">
                <path d="M60 12c20 0 34 30 34 54a34 34 0 01-68 0c0-24 14-54 34-54z" fill="#2F5D2A"/>
                <path d="M60 22c14 0 25 26 25 44a25 25 0 01-50 0c0-18 11-44 25-44z" fill="#C9D86B"/>
                <circle cx="60" cy="72" r="14" fill="#7A4A25"/>
                <ellipse cx="55" cy="67" rx="4" ry="5" fill="#fff" opacity=".25"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Palta</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                12 vitaminas, entre ellas E, K y B; potasio, magnesio, ácido fólico.
              </p>
            </div>

            {/* Manzana */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Manzana">
                <path d="M60 38c-12-10-36-4-36 22 0 22 14 42 26 42 5 0 7-3 10-3s5 3 10 3c12 0 26-20 26-42 0-26-24-32-36-22z" fill="#D63A3A"/>
                <ellipse cx="42" cy="62" rx="6" ry="12" fill="#fff" opacity=".2"/>
                <path d="M60 38c0-10 2-16 8-20" stroke="#6B4423" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                <path d="M64 28c8-8 18-6 24-2-6 9-17 9-24 2z" fill="#5E9B3A"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Manzana</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Vitaminas B y C; potasio, calcio, magnesio, sodio, ácidos fosfórico y sulfúrico, silicato.
              </p>
            </div>

            {/* Arándano */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Arándano">
                <g fill="#3F4FA0">
                  <circle cx="44" cy="72" r="20"/>
                  <circle cx="78" cy="68" r="20"/>
                  <circle cx="60" cy="42" r="20"/>
                </g>
                <g fill="#232C6B">
                  <circle cx="44" cy="72" r="4.5"/>
                  <circle cx="78" cy="68" r="4.5"/>
                  <circle cx="60" cy="42" r="4.5"/>
                </g>
                <g fill="#fff" opacity=".2">
                  <ellipse cx="36" cy="64" rx="5" ry="7"/>
                  <ellipse cx="70" cy="60" rx="5" ry="7"/>
                  <ellipse cx="52" cy="34" rx="5" ry="7"/>
                </g>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Arándano</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Vitamina C; fibra, potasio, hierro y calcio; antioxidantes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mariscos y Crustáceos (Dark section) */}
      <section className="py-20 sm:py-24 bg-[#0F1318] text-white border-y border-white/10">
        <div className="max-w-[1160px] mx-auto px-6">
          <span className="text-[#FFB000] text-sm font-semibold tracking-wider uppercase block mb-3">
            Costa Pacífica Chilena
          </span>
          <h2 className="text-3xl sm:text-5xl text-white mb-12">
            Mariscos y crustáceos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Camarones */}
            <div className="p-7 rounded-2xl bg-[#1A2029] border border-white/10 hover:border-[#FFB000]/40 transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Camarones">
                <path d="M30 78c-2-30 20-50 44-40 12 6 14 20 8 30" fill="none" stroke="#F0775A" strokeWidth="16" strokeLinecap="round"/>
                <path d="M58 44l6 14M46 52l8 12M38 64l8 8" stroke="#D95B3F" strokeWidth="3" strokeLinecap="round"/>
                <path d="M80 70l18-6-2 18-16 2z" fill="#E0674A"/>
                <circle cx="34" cy="78" r="3" fill="#fff"/>
                <path d="M30 76c-10 4-14 12-14 24M36 68c-14-2-18-8-20-14" stroke="#F0775A" strokeWidth="2" fill="none"/>
              </svg>
              <h3 className="text-2xl text-white mb-2">Camarones</h3>
              <p className="text-[#AAA] text-[15px] leading-relaxed">
                Vitaminas B, E y D; proteínas, omega 3; sodio, potasio, cinc y selenio.
              </p>
            </div>

            {/* Jibia */}
            <div className="p-7 rounded-2xl bg-[#1A2029] border border-white/10 hover:border-[#FFB000]/40 transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Jibia">
                <path d="M60 12c18 14 22 42 14 58H46C38 54 42 26 60 12z" fill="#D58AA3"/>
                <path d="M60 12L40 36h40z" fill="#C06E8B" opacity=".6"/>
                <path d="M46 70v28M54 70v34M62 70v34M70 70v30M78 70v22" stroke="#C06E8B" strokeWidth="5" strokeLinecap="round"/>
                <circle cx="52" cy="62" r="4.5" fill="#fff"/>
                <circle cx="68" cy="62" r="4.5" fill="#fff"/>
                <circle cx="52" cy="62" r="2" fill="#222"/>
                <circle cx="68" cy="62" r="2" fill="#222"/>
              </svg>
              <h3 className="text-2xl text-white mb-2">Jibia</h3>
              <p className="text-[#AAA] text-[15px] leading-relaxed">
                Vitaminas A, B y E; selenio, calcio, yodo.
              </p>
            </div>

            {/* Cochayuyo */}
            <div className="p-7 rounded-2xl bg-[#1A2029] border border-white/10 hover:border-[#FFB000]/40 transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Cochayuyo">
                <g fill="none" strokeWidth="8" strokeLinecap="round">
                  <path d="M38 106c-16-26 14-34 0-58s10-26 6-36" stroke="#4F6B2E"/>
                  <path d="M62 106c-14-24 14-30 0-52s8-24 4-40" stroke="#7A8F3A"/>
                  <path d="M86 106c-14-22 12-30 0-48s6-22 4-36" stroke="#3E5A2A"/>
                </g>
              </svg>
              <h3 className="text-2xl text-white mb-2">Cochayuyo</h3>
              <p className="text-[#AAA] text-[15px] leading-relaxed">
                Vitaminas A, B, C, D, E y ácido fólico; yodo, magnesio, hierro y calcio.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Vinos y Aceite de Oliva */}
      <section className="py-20 sm:py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6">
          <span className="text-[#FFB000] text-sm font-semibold tracking-wider uppercase block mb-3">
            Valles y Terroir
          </span>
          <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6] mb-12">
            Vinos y aceite de oliva
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            
            {/* Vinos y Licores */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Vinos y licores">
                <path d="M30 104V64c0-8 6-10 6-18V18h12v28c0 8 6 10 6 18v40z" fill="#5E1F2E"/>
                <rect x="32" y="74" width="20" height="18" fill="#E8D9B0"/>
                <rect x="36" y="14" width="12" height="8" fill="#C9A24A"/>
                <path d="M70 34h28c0 20-4 32-14 34-10-2-14-14-14-34z" fill="#8E2A41"/>
                <path d="M84 68v28M74 98h22" stroke="#ddd" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Vinos y licores</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Cepas insignes de valles centrales de Chile; vitaminas C y B; potasio, calcio, magnesio, sodio, hierro y fósforo.
              </p>
            </div>

            {/* Aceite de Oliva */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Aceite de oliva">
                <path d="M40 104V60c0-8-6-12-6-24V24h30v12c0 12-6 16-6 24v44z" fill="#B9A21E"/>
                <rect x="38" y="12" width="22" height="12" rx="2" fill="#2E3B1C"/>
                <rect x="36" y="68" width="26" height="22" rx="2" fill="#F1EEE6"/>
                <ellipse cx="86" cy="86" rx="12" ry="16" fill="#6B8F2E"/>
                <path d="M86 70c0-6 4-10 8-10" stroke="#4A6A1F" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M92 36c-6 8-9 12-9 16a9 9 0 0018 0c0-4-3-8-9-16z" fill="#E3C93A"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Aceite de oliva</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Extra virgen prensado en frío con acidez certificada inferior a 0.2%; vitaminas A, D, E y K; calcio y zinc.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFB000] text-[#0F1318] py-20 text-center mx-4 sm:mx-6 rounded-3xl my-10 shadow-lg">
        <div className="max-w-[1160px] mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-normal mb-4">
            {T.exportPage.ctaTitle[lang]}
          </h2>
          <p className="text-lg text-[#0F1318]/85 max-w-xl mx-auto mb-8">
            {T.exportPage.ctaDesc[lang]}
          </p>
          <button
            onClick={() => navigateTo('contacto')}
            className="btn-shimmer inline-block bg-[#0F1318] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-sm cursor-pointer"
          >
            {T.exportPage.ctaBtn[lang]}
          </button>
        </div>
      </section>

    </div>
  );
};
