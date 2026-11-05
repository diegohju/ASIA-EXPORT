import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { PROCESS_STEPS } from '../data/siteContent';
import { Compass } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const ProcessView: React.FC = () => {
  const { lang, navigateTo } = useApp();

  return (
    <div className="pt-[72px] space-y-16 pb-24 overflow-hidden">
      {/* Hero Header with Photographic Overlay */}
      <section className="relative text-white py-24 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0F1318]">
        <img
          src="/src/assets/images/hero_shipping_logistics_1793841258140.jpg"
          alt="Pacific shipping corridor logistics"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1318]/95 via-[#0F1318]/90 to-[#0F1318]/75 backdrop-blur-[2px]" />

        <div className="max-w-[1160px] mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-4"
          >
            <motion.div variants={fadeUpItem} className="text-xs font-mono uppercase tracking-wider text-[#FFB000] font-semibold">
              {lang === 'es' ? 'Flujo Operacional · 5 Etapas' : lang === 'en' ? 'Operational Workflow · 5 Phases' : '标准化作业流程 · 5大核心阶段'}
            </motion.div>
            <motion.h1 variants={fadeUpItem} className="text-4xl sm:text-6xl text-white font-normal leading-[1.1]">
              {lang === 'es'
                ? 'Cómo Trabajamos: Trazabilidad y Control de Riesgos'
                : lang === 'en'
                ? 'Our Process: Traceability & Risk Control'
                : '服务流程：全链路溯源与外贸风控体系'}
            </motion.h1>
            <motion.p variants={fadeUpItem} className="text-base sm:text-lg text-[#BBB] leading-relaxed">
              {lang === 'es'
                ? 'Nuestro modelo operativo elimina la incertidumbre en el comercio exterior con Asia. Supervisamos cada embarque desde la auditoría de la fábrica o huerto en origen hasta la internación legal en recintos aduaneros chilenos.'
                : lang === 'en'
                ? 'Our operational blueprint removes cross-border friction with Asia. We supervise every shipment from orchard or factory vetting to formal release at Chilean customs bonded terminals.'
                : '标准化五步法管控流程，杜绝跨国经贸履约陷阱。从源头实地验厂出证，到航运温控追踪，再到目的港保税清关全维闭环。'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 5-Step Deep Dive with Staggered Scroll Animation */}
      <section className="max-w-[1160px] mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-6"
        >
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              variants={fadeUpItem}
              className="bg-white dark:bg-[#1A2029] border border-[#E4E2DC] dark:border-[#2A313B] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 sm:gap-8 hover:border-[#FFB000] dark:hover:border-[#FFB000] transition-colors shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-mono font-bold text-[#FFB000] shrink-0 w-16">
                {step.step}
              </div>

              <div className="flex-1 space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#0F1318] dark:text-white">
                  {step.title[lang]}
                </h2>
                <p className="text-sm text-[#5E6670] dark:text-[#9AA3AD] leading-relaxed">
                  {step.desc[lang]}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {lang === 'es' ? 'Entregable / Documentación:' : lang === 'en' ? 'Deliverable / Documentation:' : '交付成果与法定单证：'}
                  </span>
                  <span className="text-xs font-semibold text-[#0F1318] dark:text-white bg-slate-100 dark:bg-[#12161C] px-3 py-1 rounded-md border border-[#E4E2DC] dark:border-[#2A313B]">
                    {step.deliverable[lang]}
                  </span>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-end text-right shrink-0 text-xs text-slate-400 font-mono">
                <span>{lang === 'es' ? `Fase ${idx + 1} de 5` : lang === 'en' ? `Phase ${idx + 1} of 5` : `第 ${idx + 1} 步 / 共 5 步`}</span>
                <span className="text-emerald-500 font-semibold mt-1">✓ {lang === 'es' ? 'Auditado' : lang === 'en' ? 'Audited' : '双向审核'}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pacific Route Infrastructure */}
      <section className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0F1318] text-white rounded-3xl p-8 sm:p-12 border border-white/10 space-y-6 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>{lang === 'es' ? 'Infraestructura Portuaria y Logística' : lang === 'en' ? 'Port and Multimodal Infrastructure' : '港口与海运航线枢纽网络'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-normal text-white">
            {lang === 'es'
              ? 'Corredor Transpacífico Valparaíso / San Antonio ⇄ Shanghai / Ningbo'
              : lang === 'en'
              ? 'Transpacific Ocean Corridor: Valparaíso / San Antonio ⇄ Shanghai / Ningbo'
              : '跨太平洋直航主干道：智利瓦尔帕莱索 / 圣安东尼奥 ⇄ 中国上海 / 宁波'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 pt-2">
            <div className="space-y-1.5 p-5 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block font-semibold text-sm">
                {lang === 'es' ? 'Puertos de Salida (Chile)' : lang === 'en' ? 'Departure Ports (Chile)' : '智利启运港口'}
              </strong>
              <p className="text-slate-300 leading-relaxed">
                {lang === 'es'
                  ? 'Terminal Pacífico Sur (TPS Valparaíso) y San Antonio Terminal Internacional (STI). Manejo preferencial de contenedores reefer y graneles.'
                  : lang === 'en'
                  ? 'Terminal Pacífico Sur (TPS Valparaíso) and San Antonio Terminal Internacional (STI). Priority reefer cold-chain and dry cargo berths.'
                  : '瓦尔帕莱索港（TPS）与圣安东尼奥国际码头（STI），优先安排恒温冷藏箱与大宗干货快速装船。'}
              </p>
            </div>
            <div className="space-y-1.5 p-5 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block font-semibold text-sm">
                {lang === 'es' ? 'Puertos de Llegada (Asia)' : lang === 'en' ? 'Arrival Ports (Asia)' : '亚洲目标枢纽口岸'}
              </strong>
              <p className="text-slate-300 leading-relaxed">
                {lang === 'es'
                  ? 'Puerto de Shanghai (SIPG), Puerto de Ningbo-Zhoushan, Shenzhen (Yantian) y Qingdao. Despacho ágil con pre-inspección aduanera.'
                  : lang === 'en'
                  ? 'Shanghai Port (SIPG), Ningbo-Zhoushan, Shenzhen (Yantian), and Qingdao with pre-arrival customs expediting.'
                  : '上海洋山港（SIPG）、宁波舟山港、深圳盐田及青岛港，支持提前报关审单与快速放行。'}
              </p>
            </div>
            <div className="space-y-1.5 p-5 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block font-semibold text-sm">
                {lang === 'es' ? 'Respaldo Aduanero' : lang === 'en' ? 'Customs Credentials' : '海关资质与自贸关税'}
              </strong>
              <p className="text-slate-300 leading-relaxed">
                {lang === 'es'
                  ? 'Agenciamiento oficial con acreditación ante el Servicio Nacional de Aduanas de Chile y la Administración General de Aduanas de China (GACC).'
                  : lang === 'en'
                  ? 'Certified operations accredited before the Chilean National Customs Service and China Customs (GACC).'
                  : '智利全国海关总署与中国海关总署（GACC）双向合规备案，全面落实原产地证与零关税待遇。'}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Box */}
      <section className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#FFB000] text-[#0F1318] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg"
        >
          <div>
            <h3 className="text-2xl font-normal">
              {lang === 'es'
                ? '¿Desea evaluar los costos landed de su próximo embarque?'
                : lang === 'en'
                ? 'Ready to calculate landed costs for your next shipment?'
                : '需要测算您下一批货物的到岸全包成本（Landed Cost）吗？'}
            </h3>
            <p className="text-sm text-[#0F1318]/85 mt-1">
              {lang === 'es'
                ? 'Calculamos aranceles TLC, fletes marítimos y seguros sin compromiso.'
                : lang === 'en'
                ? 'We evaluate FTA preferential tariffs, ocean freight quotes, and cargo insurance.'
                : '免费核算中智自贸协定关税、班轮海运费及远洋全险。'}
            </p>
          </div>
          <button
            onClick={() => navigateTo('contacto')}
            className="btn-shimmer px-7 py-3.5 bg-[#0F1318] text-white hover:bg-black text-sm font-semibold rounded-full transition-colors shrink-0 cursor-pointer shadow-sm"
          >
            {lang === 'es' ? 'Solicitar Evaluación' : lang === 'en' ? 'Request Feasibility Review' : '索取测算与方案'}
          </button>
        </motion.div>
      </section>
    </div>
  );
};
