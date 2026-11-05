import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';
import { MessageSquare, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const { lang, openChat } = useApp();
  
  // Quotation form state
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    operacion: 'exportacion',
    mensaje: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nombre.trim()) {
      errs.nombre = lang === 'es' ? 'El nombre es obligatorio.' : lang === 'en' ? 'Full name is required.' : '请输入您的姓名。';
    }
    if (!formData.empresa.trim()) {
      errs.empresa = lang === 'es' ? 'El nombre de empresa es obligatorio.' : lang === 'en' ? 'Company name is required.' : '请输入企业名称。';
    }
    if (!formData.correo.trim()) {
      errs.correo = lang === 'es' ? 'El correo corporativo es obligatorio.' : lang === 'en' ? 'Corporate email is required.' : '请输入工作邮箱。';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      errs.correo = lang === 'es' ? 'Ingrese un correo electrónico válido.' : lang === 'en' ? 'Please enter a valid email address.' : '请输入有效格式的邮箱。';
    }
    if (!formData.mensaje.trim()) {
      errs.mensaje = lang === 'es' ? 'Por favor detalle su requerimiento u operación.' : lang === 'en' ? 'Please provide details of your operation.' : '请填写拟议合作的简要详情。';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormData({
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
      operacion: 'exportacion',
      mensaje: '',
    });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  return (
    <div className="pt-[72px]">
      
      {/* Hero Header with Photographic Overlay Scrim */}
      <section className="relative text-white py-24 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0F1318]">
        <img
          src="/src/assets/images/corporate_advisory_b2b_1793841272961.jpg"
          alt="Corporate boardroom in Las Condes, Santiago"
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
              {T.contactPage.heroTag[lang]}
            </span>
            <h1 className="text-4xl sm:text-6xl text-white font-normal leading-[1.1] max-w-3xl">
              {T.contactPage.heroTitle[lang]}
            </h1>
            <p className="text-[#BBB] text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
              {T.contactPage.heroDesc[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Two-column Contact Section */}
      <section className="py-24 bg-[#FAF9F6] dark:bg-[#12161C] transition-colors">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 sm:gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-5xl text-[#0F1318] dark:text-[#ECEBE6] mb-6">
              {T.contactPage.talkTitle[lang]}
            </h2>
            
            <div className="space-y-6 text-[16px] text-[#5E6670] dark:text-[#9AA3AD]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB000] shrink-0 mt-1" />
                <p className="leading-relaxed">
                  <strong className="text-[#0F1318] dark:text-white block font-medium">
                    {T.footer.headquarters[lang]}
                  </strong>
                  {T.footer.address[lang]}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FFB000] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0F1318] dark:text-white block font-medium">
                    {lang === 'es' ? 'Teléfono Central' : lang === 'en' ? 'Switchboard Phone' : '智利总部总机'}
                  </strong>
                  <a href="tel:+56222333730" className="hover:text-[#FFB000] transition-colors">
                    +56 2 223 337 30
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FFB000] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0F1318] dark:text-white block font-medium">
                    {lang === 'es' ? 'Correo Electrónico' : lang === 'en' ? 'Direct Email' : '企业联络邮箱'}
                  </strong>
                  <a href="mailto:Contacto@asiaexport.cl" className="hover:text-[#FFB000] transition-colors">
                    Contacto@asiaexport.cl
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Assistance Actions */}
            <div className="mt-10 pt-8 border-t border-[#E4E2DC] dark:border-[#2A313B] space-y-3">
              <button
                onClick={() => openChat()}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0F1318] dark:bg-white text-white dark:text-[#0F1318] hover:bg-black dark:hover:bg-slate-200 px-6 py-3.5 rounded-full font-semibold text-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#FFB000]" />
                <span>{T.contactPage.openChatBtn[lang]}</span>
              </button>

              <a
                href="https://wa.me/56222333730?text=Hola,%20solicito%20cotización%20corporativa%20con%20Asia%20Export."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5D] px-6 py-3.5 rounded-full font-semibold text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>{T.contactPage.waBtn[lang]}</span>
              </a>
            </div>

          </div>

          {/* Right: Quotation Form */}
          <div className="bg-[#FAF9F6] dark:bg-[#1A2029] p-8 sm:p-10 rounded-3xl border border-[#E4E2DC] dark:border-[#2A313B] shadow-lg">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-[#FFB000]/20 text-[#B07A00] dark:text-[#FFB000] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl text-[#0F1318] dark:text-white">
                  {lang === 'es' ? 'Solicitud recibida exitosamente' : lang === 'en' ? 'Quotation Request Received' : '询价信息已成功提交'}
                </h3>
                <p className="text-[#5E6670] dark:text-[#9AA3AD] max-w-md mx-auto text-sm leading-relaxed">
                  {lang === 'es'
                    ? 'Un ejecutivo sénior de comercio exterior de Asia Export revisará su requerimiento y le contactará a la brevedad.'
                    : lang === 'en'
                    ? 'A senior trade director at Asia Export will review your specifications and contact your team promptly.'
                    : 'Asia Export 资深涉外业务总监将在收到信息后第一时间与您取得联系。'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-semibold hover:border-[#FFB000] cursor-pointer"
                >
                  {lang === 'es' ? 'Enviar otra consulta' : lang === 'en' ? 'Send another inquiry' : '提交新咨询'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#0F1318] dark:text-white mb-1.5">
                    {T.contactPage.nameLabel[lang]} <span className="text-[#B3261E]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-[#12161C] border border-[#BBB] dark:border-[#333] rounded-xl text-[#0F1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB000]"
                    placeholder={lang === 'zh' ? '如：王志强' : 'Ej. Rodrigo Silva'}
                  />
                  {errors.nombre && <span className="text-xs text-[#B3261E] mt-1 block">{errors.nombre}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0F1318] dark:text-white mb-1.5">
                      {T.contactPage.companyLabel[lang]} <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#12161C] border border-[#BBB] dark:border-[#333] rounded-xl text-[#0F1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB000]"
                      placeholder={lang === 'zh' ? '如：中粮进出口集团' : 'Ej. Agrícola del Valle S.A.'}
                    />
                    {errors.empresa && <span className="text-xs text-[#B3261E] mt-1 block">{errors.empresa}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0F1318] dark:text-white mb-1.5">
                      {T.contactPage.phoneLabel[lang]}
                    </label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#12161C] border border-[#BBB] dark:border-[#333] rounded-xl text-[#0F1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB000]"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F1318] dark:text-white mb-1.5">
                    {T.contactPage.emailLabel[lang]} <span className="text-[#B3261E]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.correo}
                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-[#12161C] border border-[#BBB] dark:border-[#333] rounded-xl text-[#0F1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB000]"
                    placeholder={lang === 'zh' ? 'contact@enterprise.com' : 'contacto@suempresa.cl'}
                  />
                  {errors.correo && <span className="text-xs text-[#B3261E] mt-1 block">{errors.correo}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F1318] dark:text-white mb-1.5">
                    {T.contactPage.opLabel[lang]}
                  </label>
                  <select
                    value={formData.operacion}
                    onChange={(e) => setFormData({ ...formData, operacion: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-[#12161C] border border-[#BBB] dark:border-[#333] rounded-xl text-[#0F1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB000]"
                  >
                    <option value="exportacion">
                      {lang === 'es' ? 'Exportación (Alimentos naturales hacia Asia)' : lang === 'en' ? 'Export (Natural Chilean foods to Asia)' : '出口业务（智利天然特色农产品至亚洲）'}
                    </option>
                    <option value="importacion">
                      {lang === 'es' ? 'Importación (Equipos, minería, automotriz, tech)' : lang === 'en' ? 'Import (Mining machinery, automotive, tech)' : '进口业务（中国重型工业机械、光伏与耗材至智利）'}
                    </option>
                    <option value="asesoria">
                      {lang === 'es' ? 'Asesoría Legal y Tributaria (Constitución, due diligence)' : lang === 'en' ? 'Legal & Tax Advisory (Structuring, diligence)' : '法税商业顾问（智利公司注册、税收筹划、尽职调查）'}
                    </option>
                    <option value="evaluacion">
                      {lang === 'es' ? 'Evaluación de Proyectos y Estudios de Mercado' : lang === 'en' ? 'Project Evaluation & Feasibility Studies' : '商业可行性评估与中智双向市场调研'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F1318] dark:text-white mb-1.5">
                    {T.contactPage.msgLabel[lang]} <span className="text-[#B3261E]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-[#12161C] border border-[#BBB] dark:border-[#333] rounded-xl text-[#0F1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB000]"
                    placeholder={
                      lang === 'es'
                        ? 'Especifique volúmenes estimados, puertos de destino u origen, o asesoría requerida...'
                        : lang === 'en'
                        ? 'Specify estimated volumes, origin/destination ports, or advisory required...'
                        : '请简述拟议采购量/集装箱柜数、启运口岸或所需法税支持事项...'
                    }
                  />
                  {errors.mensaje && <span className="text-xs text-[#B3261E] mt-1 block">{errors.mensaje}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full py-4 bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0] rounded-full font-semibold text-base transition-colors shadow-sm focus:outline-none cursor-pointer"
                >
                  {T.contactPage.submitBtn[lang]}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Oportunidades en Chile (Dark Section Newsletter) */}
      <section className="py-20 bg-[#0F1318] text-white border-y border-white/10">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl text-white">
              {T.contactPage.oppTitle[lang]}
            </h2>
            <p className="text-[#BBB] mt-2 text-sm">
              {T.contactPage.oppDesc[lang]}
            </p>
          </div>

          <div>
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder={T.cta.placeholder[lang]}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-white px-5 py-3.5 rounded-full text-[#0F1318] border-0 focus:outline-none focus:ring-2 focus:ring-[#FFB000] text-sm"
              />
              <button
                type="submit"
                className="btn-shimmer bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0] px-7 py-3.5 rounded-full font-semibold text-sm transition-colors cursor-pointer shrink-0"
              >
                {T.cta.subBtn[lang]}
              </button>
            </form>
            {newsletterSuccess && (
              <p className="text-[#FFB000] text-xs font-semibold mt-2">
                {T.cta.subSuccess[lang]}
              </p>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
