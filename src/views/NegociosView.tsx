import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';

export const NegociosView: React.FC = () => {
  const { lang, navigateTo } = useApp();

  return (
    <div className="pt-[72px]">
      
      {/* Hero Section with Photographic Overlay Scrim */}
      <section className="relative text-white py-24 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0F1318]">
        <img
          src="/src/assets/images/corporate_advisory_b2b_1793841272961.jpg"
          alt="Corporate legal and tax advisory in Santiago"
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
              {T.negociosPage.heroTag[lang]}
            </span>
            <h1 className="text-4xl sm:text-6xl text-white font-normal leading-[1.1] mb-6">
              {T.negociosPage.heroTitle[lang]}
            </h1>
            <p className="text-[#BBB] text-lg sm:text-xl leading-relaxed">
              {T.negociosPage.heroDesc[lang]}
            </p>
          </motion.div>
        </div>
      </section>


      {/* Asesoría Legal (5 items) */}
      <section className="py-20 sm:py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6">
          
          {/* Real Photography Spotlight: Santiago Corporate Advisory */}
          <div className="mb-14 rounded-3xl overflow-hidden border border-[#E4E2DC] dark:border-[#2A313B] shadow-xl relative group">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/corporate_advisory_b2b_1793841272961.jpg"
                alt="Reunión del equipo legal y tributario de Holding Sarrazin y Asia Export en Las Condes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-[#FFB000] text-xs font-mono uppercase tracking-widest mb-1">
                Estructuración Jurídica & Financiera · Apoquindo 6275
              </span>
              <h3 className="text-xl sm:text-3xl font-normal max-w-xl text-white">
                Seguridad jurídica y optimización tributaria para transacciones transfronterizas
              </h3>
              <p className="text-sm text-[#DDD] mt-2 max-w-lg hidden sm:block">
                Constitución de sociedades, ingreso de capitales extranjeros, debida diligencia y acuerdos comerciales bajo marco legal chileno e internacional.
              </p>
            </div>
          </div>

          <span className="text-[#FFB000] text-sm font-semibold tracking-wider uppercase block mb-3">
            Garantías Contractuales y Corporativas
          </span>
          <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6] mb-12">
            Asesoría legal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Constitución legal de empresas */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Constitución legal de empresas">
                <path d="M22 54L60 24l38 30z" fill="#5F7396"/>
                <rect x="30" y="54" width="60" height="42" fill="#9FB2CE"/>
                <g fill="#5F7396">
                  <rect x="38" y="62" width="10" height="28"/>
                  <rect x="55" y="62" width="10" height="28"/>
                  <rect x="72" y="62" width="10" height="28"/>
                </g>
                <rect x="22" y="96" width="76" height="8" rx="2" fill="#6F86A8"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Constitución legal de empresas</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Gestión y revisión integral de la sociedad: objeto social, participación societaria y modelo de tributación en Chile.
              </p>
            </div>

            {/* Inversión extranjera */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Inversión extranjera">
                <circle cx="54" cy="58" r="34" fill="#2F6FA8"/>
                <path d="M20 58h68M54 24c-18 20-18 48 0 68M54 24c18 20 18 48 0 68M28 40h52M28 76h52" stroke="#9CC4EA" strokeWidth="2" fill="none"/>
                <circle cx="92" cy="86" r="18" fill="#FFB000"/>
                <path d="M85 86h14M93 79l7 7-7 7" stroke="#12161C" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Inversión extranjera</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Informe práctico de ventajas y desventajas del ingreso de capitales extranjeros a Chile bajo estatutos DL 600 y Ley 20.848.
              </p>
            </div>

            {/* Redacción de contratos */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Redacción de contratos">
                <rect x="26" y="14" width="62" height="84" rx="6" fill="#F1EEE6"/>
                <path d="M36 32h42M36 44h42M36 56h26" stroke="#B9B4A6" strokeWidth="3" strokeLinecap="round"/>
                <path d="M36 80c6-12 10 6 16-4s8 4 14-2" stroke="#FFB000" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M82 72l22-22 8 8-22 22-12 4z" fill="#3A4252"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Redacción de contratos</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Revisión minuciosa de cláusulas mercantiles, Incoterms y ajustes legales a las normas chilenas e internacionales.
              </p>
            </div>

            {/* Fusiones */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Fusiones">
                <circle cx="44" cy="60" r="30" fill="#FFB000" opacity=".92"/>
                <circle cx="76" cy="60" r="30" fill="#3E7CC4" opacity=".92"/>
                <path d="M60 34a30 30 0 010 52 30 30 0 010-52z" fill="#fff" opacity=".85"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Fusiones</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Informe de beneficios y ventajas legales y corporativas de fusionarse con una empresa constituida en Chile.
              </p>
            </div>

            {/* Due diligence */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Due diligence">
                <rect x="20" y="16" width="58" height="76" rx="6" fill="#F1EEE6"/>
                <path d="M30 34h38M30 46h38M30 58h20" stroke="#B9B4A6" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="76" cy="72" r="20" fill="#9CC4EA" fillOpacity=".35" stroke="#FFB000" strokeWidth="6"/>
                <path d="M91 87l16 16" stroke="#FFB000" strokeWidth="8" strokeLinecap="round"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Due diligence</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed">
                Auditoría legal y financiera de contingencias, pasivos ocultos y ventajas en la compra o absorción de sociedades chilenas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Asesoría Tributaria (Dark Section) */}
      <section className="py-20 sm:py-24 bg-[#0F1318] text-white border-y border-white/10">
        <div className="max-w-[1160px] mx-auto px-6">
          <span className="text-[#FFB000] text-sm font-semibold tracking-wider uppercase block mb-3">
            Planificación y Cumplimiento SII
          </span>
          <h2 className="text-3xl sm:text-5xl text-white mb-12">
            Asesoría tributaria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Regímenes tributarios */}
            <div className="p-7 rounded-2xl bg-[#1A2029] border border-white/10 hover:border-[#FFB000]/40 transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Regímenes tributarios">
                <rect x="30" y="14" width="60" height="92" rx="8" fill="#3A4252"/>
                <rect x="38" y="22" width="44" height="22" rx="3" fill="#B7E1A8"/>
                <g fill="#FFB000">
                  <circle cx="44" cy="58" r="5"/>
                  <circle cx="60" cy="58" r="5"/>
                  <circle cx="76" cy="58" r="5"/>
                  <circle cx="44" cy="74" r="5"/>
                  <circle cx="60" cy="74" r="5"/>
                  <circle cx="76" cy="74" r="5"/>
                </g>
                <rect x="39" y="86" width="22" height="10" rx="5" fill="#F1EEE6"/>
                <rect x="66" y="86" width="16" height="10" rx="5" fill="#F1EEE6"/>
              </svg>
              <h3 className="text-2xl text-white mb-2">Regímenes tributarios</h3>
              <p className="text-[#AAA] text-[15px] leading-relaxed">
                Determinación del régimen tributario idóneo (Semi-integrado, ProPyme, Renta Atribuida) según la estructura patrimonial del negocio.
              </p>
            </div>

            {/* Nuevos negocios */}
            <div className="p-7 rounded-2xl bg-[#1A2029] border border-white/10 hover:border-[#FFB000]/40 transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Nuevos negocios">
                <path d="M56 98V58" stroke="#4E9A3E" strokeWidth="5" strokeLinecap="round"/>
                <path d="M56 62c-4-20-22-24-34-18 2 18 16 24 34 18z" fill="#6BBF4F"/>
                <path d="M56 52c4-20 22-24 34-18-2 18-16 24-34 18z" fill="#4E9A3E"/>
                <ellipse cx="56" cy="100" rx="30" ry="6" fill="#6F5434"/>
                <circle cx="94" cy="26" r="14" fill="#FFB000"/>
                <path d="M94 19v14M89 24h8a3 3 0 010 6h-8" stroke="#12161C" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
              </svg>
              <h3 className="text-2xl text-white mb-2">Nuevos negocios</h3>
              <p className="text-[#AAA] text-[15px] leading-relaxed">
                Análisis de exenciones, créditos tributarios y convenios de doble tributación para el inicio de nuevas operaciones en Chile.
              </p>
            </div>

            {/* Auditoría en adquisiciones */}
            <div className="p-7 rounded-2xl bg-[#1A2029] border border-white/10 hover:border-[#FFB000]/40 transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Auditoría en adquisiciones">
                <rect x="26" y="20" width="68" height="84" rx="8" fill="#F1EEE6"/>
                <rect x="46" y="12" width="28" height="14" rx="5" fill="#5F7396"/>
                <g stroke="#4E9A3E" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M36 50l5 5 9-10"/>
                  <path d="M36 74l5 5 9-10"/>
                </g>
                <path d="M60 52h24M60 76h24" stroke="#B9B4A6" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <h3 className="text-2xl text-white mb-2">Auditoría en adquisiciones</h3>
              <p className="text-[#AAA] text-[15px] leading-relaxed">
                Diagnóstico del marco tributario y legal actual de la empresa objetivo antes de finiquitar la transacción de compra.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Más Servicios (3 items) */}
      <section className="py-20 sm:py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6">
          <span className="text-[#FFB000] text-sm font-semibold tracking-wider uppercase block mb-3">
            Estrategia de Mercado y Expansión
          </span>
          <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6] mb-12">
            Más servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Evaluación de negocios */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Evaluación de negocios">
                <g fill="#3E7CC4">
                  <rect x="22" y="66" width="18" height="34" rx="3"/>
                  <rect x="48" y="50" width="18" height="50" rx="3"/>
                </g>
                <rect x="74" y="30" width="18" height="70" rx="3" fill="#FFB000"/>
                <path d="M20 54l30-20 22 12 26-24" stroke="#F1EEE6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Evaluación de negocios</h3>
              <ul className="space-y-1 text-sm text-[#5E6670] dark:text-[#9AA3AD] list-disc pl-5">
                <li>Preparación y evaluación de proyectos de inversión</li>
                <li>Planificación estratégica corporativa</li>
                <li>Diseño de plan y modelo de negocios</li>
                <li>Elaboración y negociación de Term Sheet</li>
              </ul>
            </div>

            {/* Estudios de mercado */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Estudios de mercado">
                <circle cx="58" cy="62" r="36" fill="#3E7CC4"/>
                <path d="M58 62V26a36 36 0 0131 54z" fill="#FFB000"/>
                <path d="M58 62l31 18A36 36 0 0158 98z" fill="#6BBF4F"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Estudios de mercado</h3>
              <ul className="space-y-1 text-sm text-[#5E6670] dark:text-[#9AA3AD] list-disc pl-5">
                <li>Informe benchmarking sectorial Chile–Asia</li>
                <li>Identidad y posicionamiento de marca</li>
                <li>Análisis de precios competitivos y canales</li>
              </ul>
            </div>

            {/* Comercio exterior */}
            <div className="p-7 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Comercio exterior">
                <circle cx="60" cy="66" r="34" fill="#2F6FA8"/>
                <path d="M26 66h68M60 32c-16 18-16 50 0 68M60 32c16 18 16 50 0 68" stroke="#9CC4EA" strokeWidth="2" fill="none"/>
                <path d="M16 44Q60 0 104 44" stroke="#FFB000" strokeWidth="3" fill="none" strokeDasharray="5 5"/>
                <circle cx="104" cy="44" r="5" fill="#FFB000"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Comercio exterior</h3>
              <ul className="space-y-1 text-sm text-[#5E6670] dark:text-[#9AA3AD] list-disc pl-5">
                <li>Asesoría en importación y exportación (Latinoamérica–Asia)</li>
                <li>Asesoría en logística y transporte multimodal</li>
                <li>Despacho aduanero y certificados de origen TLC</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFB000] text-[#0F1318] py-20 text-center mx-4 sm:mx-6 rounded-3xl my-10 shadow-lg">
        <div className="max-w-[1160px] mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-normal mb-4">
            {T.negociosPage.ctaTitle[lang]}
          </h2>
          <p className="text-lg text-[#0F1318]/85 max-w-xl mx-auto mb-8">
            {T.negociosPage.ctaDesc[lang]}
          </p>
          <button
            onClick={() => navigateTo('contacto')}
            className="btn-shimmer inline-block bg-[#0F1318] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-sm cursor-pointer"
          >
            {T.negociosPage.ctaBtn[lang]}
          </button>
        </div>
      </section>

    </div>
  );
};
