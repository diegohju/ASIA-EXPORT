import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { COMPANY_INFO } from '../data/siteContent';
import { T } from '../data/translations';
import { MessageSquare, X, Send, Phone, Clock } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'system' | 'user';
  text: string;
  time: string;
  action?: {
    type: 'whatsapp' | 'contact' | 'service';
    label: string;
    payload?: string;
  };
}

export const OnlineChatModal: React.FC = () => {
  const { lang, isChatOpen, closeChat, openChat, navigateTo } = useApp();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message
  useEffect(() => {
    const welcomeTexts = {
      es: 'Bienvenido a la Mesa de Operaciones de Asia Export (Holding Sarrazin). ¿En qué podemos orientarle hoy sobre comercio exterior o asesoría legal/tributaria?',
      en: 'Welcome to Asia Export Operations Desk (Holding Sarrazin). How may we assist your foreign trade or legal/tax structuring today?',
      zh: '您好，欢迎使用 Asia Export（萨拉津控股外贸中心）在线专席。请问需要了解哪类中智双向贸易、设备采购或投资法税业务？',
    };

    setMessages([
      {
        id: 'msg-welcome',
        sender: 'system',
        text: welcomeTexts[lang],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, [lang]);

  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  const quickPrompts = [
    {
      label: {
        es: 'Requisitos de exportación agrícola',
        en: 'Agricultural export compliance',
        zh: '智利农副产品出口准入',
      },
      answer: {
        es: 'Gestionamos permisos fitosanitarios del SAG y registro en el sistema CIFER de la aduana china (GACC) para nueces, ciruelas y fruta fresca en atmósfera controlada.',
        en: 'We oversee SAG phytosanitary certification and GACC CIFER registrations for walnuts, prunes, and fresh fruit under controlled atmosphere.',
        zh: '我们协助完成智利农牧局（SAG）动植检出证及中国海关总署（GACC）CIFER境外注册，全程保障冷链温控及Form F产地证。',
      },
    },
    {
      label: {
        es: 'Importación de maquinaria y filtros',
        en: 'Mining filters & machinery import',
        zh: '矿山机械与滤清器进口',
      },
      answer: {
        es: 'Suministramos filtros de aire, aceite e hidráulicos para maquinaria pesada (excavación, rellenos y transporte) con verificación directa de fábricas en China.',
        en: 'We source high-spec air, oil, and hydraulic filters for mining heavy equipment directly from verified Chinese manufacturers with factory QA.',
        zh: '我们从中国优质源头直供重型挖掘机、推土机及自卸车专用的空滤、机滤及液压滤清器，提供出厂质检与全程清关。',
      },
    },
    {
      label: {
        es: 'Asesoría tributaria e inversión en Chile',
        en: 'Tax structuring & investment in Chile',
        zh: '智利投资法规与财税筹划',
      },
      answer: {
        es: 'Holding Sarrazin estructura la constitución legal de su empresa en Chile, régimen tributario óptimo y cumplimiento bajo convenios de doble tributación.',
        en: 'Holding Sarrazin provides corporate incorporation in Chile, tax regime optimization, and compliance under bilateral double-tax treaties.',
        zh: '萨拉津控股（Holding Sarrazin）提供智利公司设立合规、外资准入备案、最优财税架构设计及双边税收协定深度运用。',
      },
    },
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      time,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Contextual system reply
    setTimeout(() => {
      let replyText = '';
      const lower = query.toLowerCase();

      if (lower.includes('tiempo') || lower.includes('demora') || lower.includes('dias') || lower.includes('transit')) {
        replyText =
          lang === 'es'
            ? 'El tiempo de tránsito marítimo directo entre Valparaíso/San Antonio y Shanghai/Ningbo oscila entre 22 y 28 días de navegación.'
            : lang === 'en'
            ? 'Direct ocean transit between Chilean ports and Shanghai/Ningbo averages 22 to 28 sailing days.'
            : '智利瓦尔帕莱索至上海/宁波港的海运直航时效一般为22至28天。';
      } else if (lower.includes('precio') || lower.includes('costo') || lower.includes('cotizar') || lower.includes('quote')) {
        replyText =
          lang === 'es'
            ? 'Para entregar una estructura de costos landed exacta, evaluamos volumen (LCL/FCL) y códigos arancelarios. Le invitamos a enviar una cotización formal o contactar a un asesor por WhatsApp.'
            : lang === 'en'
            ? 'For an accurate landed cost quotation, please submit your cargo requirements or connect via executive WhatsApp.'
            : '为了提供精准的到岸全成本测算，我们将根据货物货量及海关编码为您定制方案。欢迎提交询价表单或通过官方微信/WhatsApp联络。';
      } else {
        replyText =
          lang === 'es'
            ? `Gracias por su consulta. Un ejecutivo sénior revisará su requerimiento en nuestra sede de Av. Apoquindo 6275. También puede comunicarse al teléfono ${COMPANY_INFO.phone}.`
            : lang === 'en'
            ? `Thank you for reaching out. An operations officer at our Apoquindo 6275 office will review your inquiry. You can also call us directly at ${COMPANY_INFO.phone}.`
            : `感谢您的咨询！我们的资深业务经理将在圣地亚哥阿波金多 6275 号总部审阅您的需求，亦可直接致电 ${COMPANY_INFO.phone}。`;
      }

      const sysReply: ChatMessage = {
        id: `sys-${Date.now()}`,
        sender: 'system',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: {
          type: 'whatsapp',
          label:
            lang === 'es'
              ? 'Continuar por WhatsApp Oficial'
              : lang === 'en'
              ? 'Continue on Official WhatsApp'
              : '通过官方 WhatsApp 详谈',
        },
      };

      setMessages((prev) => [...prev, sysReply]);
    }, 500);
  };

  const handleActionClick = (action: ChatMessage['action']) => {
    if (!action) return;
    if (action.type === 'whatsapp') {
      const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
        'Hola Asia Export, quisiera solicitar asesoría especializada sobre operaciones de comercio exterior Chile-China.'
      )}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else if (action.type === 'contact') {
      closeChat();
      navigateTo('contacto');
    }
  };

  return (
    <>
      {/* Floating Trigger Button - text "Te ayudamos?", message icon with brand color #FFB000 */}
      {!isChatOpen && (
        <button
          onClick={() => openChat()}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3.5 bg-[#0F1318] text-white rounded-full shadow-2xl hover:scale-105 border border-[#FFB000]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] cursor-pointer group"
          aria-label={T.nav.chatBtn[lang]}
        >
          <MessageSquare className="w-4 h-4 text-[#FFB000] group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold tracking-wide text-white">
            {T.nav.chatBtn[lang]}
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400" title="En línea" />
        </button>
      )}

      {/* Chat Window Modal */}
      {isChatOpen && (
        <div
          role="dialog"
          aria-label="Mesa de Asesoría en Línea - Asia Export"
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[560px] bg-white dark:bg-[#12161C] border border-[#E4E2DC] dark:border-[#2A313B] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header - Brand Colors (#0F1318 & #FFB000, NO RED) */}
          <div className="bg-[#0F1318] text-white px-5 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFB000] text-[#0F1318] flex items-center justify-center font-bold text-xs tracking-wider">
                AE
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  {lang === 'es' ? 'Mesa de Comercio Exterior' : lang === 'en' ? 'Foreign Trade Desk' : '外贸与商务专席'}
                </h3>
                <p className="text-[10px] text-[#FFB000] font-mono">
                  Asia Export · Holding Sarrazin
                </p>
              </div>
            </div>
            <button
              onClick={closeChat}
              className="p-1 text-slate-400 hover:text-white transition-colors rounded cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Info Bar */}
          <div className="bg-slate-50 dark:bg-[#1A2029] px-5 py-2 border-b border-[#E4E2DC] dark:border-[#2A313B] flex items-center justify-between text-[11px] text-[#5E6670] dark:text-[#9AA3AD] shrink-0">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#FFB000]" />
              {COMPANY_INFO.hours}
            </span>
            <span className="flex items-center gap-1 font-mono">
              <Phone className="w-3 h-3 text-[#FFB000]" />
              {COMPANY_INFO.phone}
            </span>
          </div>

          {/* Message Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-[#FAF9F6] dark:bg-[#12161C]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#FFB000] text-[#0F1318] font-medium rounded-br-xs'
                      : 'bg-white dark:bg-[#1A2029] text-[#0F1318] dark:text-[#ECEBE6] border border-[#E4E2DC] dark:border-[#2A313B] rounded-bl-xs shadow-xs'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  {msg.action && (
                    <button
                      onClick={() => handleActionClick(msg.action)}
                      className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-[#B07A00] dark:text-[#FFB000] hover:underline cursor-pointer"
                    >
                      <span>{msg.action.label}</span>
                      <span>→</span>
                    </button>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Prompts */}
          <div className="p-2.5 bg-slate-100 dark:bg-[#1A2029] border-t border-[#E4E2DC] dark:border-[#2A313B] flex gap-1.5 overflow-x-auto shrink-0">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp.label[lang])}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white dark:bg-[#12161C] border border-[#E4E2DC] dark:border-[#2A313B] text-[11px] text-[#0F1318] dark:text-[#DDD] hover:border-[#FFB000] hover:text-[#B07A00] dark:hover:text-[#FFB000] transition-colors shrink-0 cursor-pointer"
              >
                {qp.label[lang]}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white dark:bg-[#12161C] border-t border-[#E4E2DC] dark:border-[#2A313B] shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  lang === 'es'
                    ? 'Escriba su consulta comercial...'
                    : lang === 'en'
                    ? 'Type your inquiry...'
                    : '请输入您的业务咨询...'
                }
                className="flex-1 bg-slate-50 dark:bg-[#1A2029] px-4 py-2.5 rounded-xl text-xs text-[#0F1318] dark:text-white border border-[#E4E2DC] dark:border-[#2A313B] focus:outline-none focus:ring-2 focus:ring-[#FFB000]"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0] disabled:opacity-40 rounded-xl transition-colors cursor-pointer"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
