import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';

export const ImportacionesView: React.FC = () => {
  const { lang, navigateTo } = useApp();

  return (
    <div className="pt-[72px]">
      
      {/* Hero Section with Photographic Overlay Scrim */}
      <section className="relative text-white py-24 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0F1318]">
        <img
          src="/src/assets/images/import_mining_industry_1793841273089.jpg"
          alt="Chilean heavy mining and industrial equipment imports from Asia"
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
              {T.importPage.heroTag[lang]}
            </span>
            <h1 className="text-4xl sm:text-6xl text-white font-normal leading-[1.1] mb-6">
              {T.importPage.heroTitle[lang]}
            </h1>
            <p className="text-[#BBB] text-lg sm:text-xl leading-relaxed">
              {T.importPage.heroDesc[lang]}
            </p>
          </motion.div>
        </div>
      </section>


      {/* Sectores de Importación */}
      <section className="py-20 sm:py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6">
          
          {/* Real Photography Spotlight: Chilean Mining Machinery */}
          <div className="mb-14 rounded-3xl overflow-hidden border border-[#E4E2DC] dark:border-[#2A313B] shadow-xl relative group">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/import_mining_industry_1793841273089.jpg"
                alt="Operación de gran minería del cobre en Chile abastecida con filtros y equipamiento importado desde Asia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-[#FFB000] text-xs font-mono uppercase tracking-widest mb-1">
                Suministro Industrial · Gran Minería & Energía
              </span>
              <h3 className="text-xl sm:text-3xl font-normal max-w-xl text-white">
                Filtros de alta exigencia e insumos técnicos con homologación de fábrica
              </h3>
              <p className="text-sm text-[#DDD] mt-2 max-w-lg hidden sm:block">
                Importación directa desde fabricantes líderes en China para faenas mineras, flotas de transporte y plantas de purificación de agua en Chile.
              </p>
            </div>
          </div>

          <span className="text-[#FFB000] text-sm font-semibold tracking-wider uppercase block mb-3">
            Líneas Técnicas e Industriales
          </span>
          <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6] mb-12">
            Sectores y suministros
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Minería */}
            <div className="p-8 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Minería">
                <path d="M22 78a38 38 0 0176 0z" fill="#F2B01E"/>
                <rect x="14" y="76" width="92" height="12" rx="5" fill="#D99A0F"/>
                <rect x="53" y="36" width="14" height="42" fill="#FFD25A"/>
                <circle cx="60" cy="48" r="6" fill="#fff"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Minería</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed mb-4">
                Equipos y accesorios para la minería chilena: filtros de aire, aceite, combustible e hidráulico para maquinaria pesada de la gran minería.
              </p>
              <ul className="space-y-1.5 text-sm text-[#5E6670] dark:text-[#9AA3AD] list-disc pl-5">
                <li><strong className="text-[#0F1318] dark:text-white">Excavación:</strong> excavadoras, retroexcavadoras, bulldozer</li>
                <li><strong className="text-[#0F1318] dark:text-white">Rellenos:</strong> moto rodillo, camiones aljibes</li>
                <li><strong className="text-[#0F1318] dark:text-white">Transporte:</strong> cargador frontal, tolvas</li>
              </ul>
            </div>

            {/* Tecnología */}
            <div className="p-8 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Tecnología">
                <circle cx="88" cy="30" r="13" fill="#FFC53D"/>
                <path d="M18 100l14-46h68l-14 46z" fill="#2F5FA8"/>
                <path d="M26 78h68M40 54l-8 46M62 54l-4 46M84 54l-2 46" stroke="#8FB4EA" strokeWidth="2"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Tecnología</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed mb-4">
                Suministros de última generación para energía limpia y sistemas de purificación de aguas.
              </p>
              <ul className="space-y-1.5 text-sm text-[#5E6670] dark:text-[#9AA3AD] list-disc pl-5">
                <li>Paneles solares fotovoltaicos y acumuladores</li>
                <li>Tratamiento y purificación de aguas servidas de uso doméstico</li>
                <li>Plantas de tratamiento de aguas para cultivos agrícolas</li>
              </ul>
            </div>

            {/* Automotriz */}
            <div className="p-8 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Automotriz">
                <circle cx="60" cy="60" r="42" fill="#1E232B" stroke="#454C58" strokeWidth="3"/>
                <circle cx="60" cy="60" r="25" fill="#B8C0CC"/>
                <circle cx="60" cy="60" r="7" fill="#6B7380"/>
                <path d="M60 38v14M60 68v14M38 60h14M68 60h14M44 44l10 10M66 66l10 10M76 44L66 54M54 66L44 76" stroke="#6B7380" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Automotriz</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed mb-4">
                Repuestos, filtros de alto rendimiento y neumáticos para flotas de trabajo y vehículos livianos.
              </p>
              <ul className="space-y-1.5 text-sm text-[#5E6670] dark:text-[#9AA3AD] list-disc pl-5">
                <li><strong className="text-[#0F1318] dark:text-white">Camiones de trabajo:</strong> filtros de aceite, aire, combustible, hidráulicos y neumáticos</li>
                <li><strong className="text-[#0F1318] dark:text-white">Vehículos livianos:</strong> accesorios OEM, filtros certificados y neumáticos</li>
              </ul>
            </div>

            {/* Pet */}
            <div className="p-8 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] hover:shadow-xl transition-all">
              <svg className="pi" viewBox="0 0 120 120" role="img" aria-label="Pet">
                <g fill="#E8A83A">
                  <ellipse cx="60" cy="80" rx="23" ry="18"/>
                  <ellipse cx="29" cy="56" rx="8" ry="12" transform="rotate(-20 29 56)"/>
                  <ellipse cx="47" cy="38" rx="8" ry="12"/>
                  <ellipse cx="73" cy="38" rx="8" ry="12"/>
                  <ellipse cx="91" cy="56" rx="8" ry="12" transform="rotate(20 91 56)"/>
                </g>
              </svg>
              <h3 className="text-2xl text-[#0F1318] dark:text-white mb-2">Pet</h3>
              <p className="text-[#5E6670] dark:text-[#9AA3AD] text-[15px] leading-relaxed mb-4">
                Accesorios, línea de aseo e instrumental médico veterinario avanzado.
              </p>
              <ul className="space-y-1.5 text-sm text-[#5E6670] dark:text-[#9AA3AD] list-disc pl-5">
                <li>Collares, arneses y casas para mascotas</li>
                <li>Jabones, shampoo dermocosmético y tratamientos de aseo</li>
                <li>Equipos veterinarios de alta tecnología (ecógrafos diagnósticos)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFB000] text-[#0F1318] py-20 text-center mx-4 sm:mx-6 rounded-3xl my-10 shadow-lg">
        <div className="max-w-[1160px] mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-normal mb-4">
            {T.importPage.ctaTitle[lang]}
          </h2>
          <p className="text-lg text-[#0F1318]/85 max-w-xl mx-auto mb-8">
            {T.importPage.ctaDesc[lang]}
          </p>
          <button
            onClick={() => navigateTo('contacto')}
            className="btn-shimmer inline-block bg-[#0F1318] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-sm cursor-pointer"
          >
            {T.importPage.ctaBtn[lang]}
          </button>
        </div>
      </section>

    </div>
  );
};
