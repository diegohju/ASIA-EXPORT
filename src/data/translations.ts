/**
 * Sistema integral de traducciones trilingües (Español / Inglés / Chino)
 * para Asia Export (Holding Sarrazin).
 */

export type Language = 'es' | 'en' | 'zh';

export const T = {
  nav: {
    home: { es: 'Inicio', en: 'Home', zh: '首页' },
    about: { es: 'Nosotros', en: 'About Us', zh: '关于我们' },
    services: { es: 'Servicios', en: 'Services', zh: '服务总览' },
    exportaciones: { es: 'Exportaciones', en: 'Exports', zh: '出口业务' },
    importaciones: { es: 'Importaciones', en: 'Imports', zh: '进口业务' },
    negocios: { es: 'Negocios', en: 'Advisory', zh: '商业法税' },
    contact: { es: 'Contacto', en: 'Contact', zh: '业务联络' },
    quoteBtn: { es: 'Cotización', en: 'Quote', zh: '大宗询价' },
    chatBtn: { es: 'Te ayudamos?', en: 'Can we help you?', zh: '需要帮助吗？' },
  },
  hero: {
    corridor: { es: 'Chile · China', en: 'Chile · China', zh: '智利 · 中国' },
    words: {
      es: ['El', 'aliado', 'estratégico', 'para', 'empresas', 'de', 'éxito'],
      en: ['The', 'strategic', 'partner', 'for', 'thriving', 'enterprises', 'globally'],
      zh: ['成功企业', '跨越太平洋的', '战略', '商业', '伙伴'],
    },
    desc: {
      es: 'Exportamos e importamos productos alimenticios y tecnología, y asesoramos su negocio en materia legal, tributaria y de comercio exterior.',
      en: 'We export and import premium food products and technology, advising your business across legal, tax, and bilateral trade operations.',
      zh: '我们专业进出口食品农副产品与尖端工业科技，依托萨拉津企业控股为您在智利与中国的商业运营提供全方位法律、税务及外贸合规护航。',
    },
    btnQuote: { es: 'Solicitar cotización', en: 'Request Quote', zh: '获取业务询价' },
    btnServices: { es: 'Explorar servicios', en: 'Explore Services', zh: '浏览业务板块' },
    flightBadge: { es: 'Chile ↔ Asia', en: 'Chile ↔ Asia', zh: '智利 ↔ 亚洲' },
    flightDesc: {
      es: 'Exportación, importación y asesoría integral.',
      en: 'Export, import and comprehensive advisory.',
      zh: '进出口贸易与法税全流程综合咨询。',
    },
  },
  marquee: {
    items: {
      es: [
        'Frutas y verduras', 'Camarones', 'Jibia', 'Cochayuyo', 'Aceite de oliva',
        'Vinos y licores', 'Minería', 'Tecnología', 'Automotriz', 'Pet',
        'Asesoría legal', 'Asesoría tributaria', 'Comercio exterior',
      ],
      en: [
        'Fruits & Vegetables', 'Pacific Shrimp', 'Giant Squid', 'Seaweed Cochayuyo', 'Extra Virgin Olive Oil',
        'Fine Chilean Wines', 'Mining Filtration', 'Clean Tech & Solar', 'Automotive Fleet', 'Pet & Vet Equipment',
        'Legal Structuring', 'Tax Optimization', 'Cross-Border Logistics',
      ],
      zh: [
        '智利新鲜果蔬坚果', '深海野生红虾', '太平洋大王鱿', '天然黑黄金海茸', '特级初榨橄榄油',
        '智利名庄葡萄酒', '大型矿山机械过滤', '光伏储能与水净化', '重型车队滤芯与轮胎', '高端宠物与兽医设备',
        '涉外公司法律顾问', '智利财税合规筹划', '中智自贸清关物流',
      ],
    },
  },
  section01: {
    tag: '{ 01 }',
    title: { es: 'Quiénes somos', en: 'About Us', zh: '关于我们' },
    lead: {
      es: 'Somos una compañía con visión de futuro, atenta a las oportunidades de los mercados asiáticos y orientada a mejorar la calidad de vida de las personas.',
      en: 'We are a forward-looking company attentive to expanding opportunities across Asian markets, dedicated to enhancing people’s quality of life.',
      zh: '我们是一家立足未来的外贸与商业顾问机构，深耕亚洲与拉美不断扩大的经贸机遇，以高品质天然供给改善民生。',
    },
    desc: {
      es: 'Respaldados por la trayectoria jurídica y empresarial de Holding Sarrazin, combinamos presencia física en el centro financiero de Santiago (Av. Apoquindo 6275) con redes de distribución directa en los mayores puertos de China.',
      en: 'Backed by the legal and corporate track record of Holding Sarrazin, we combine physical presence in Santiago’s financial core (Av. Apoquindo 6275) with direct distribution networks across China’s major ports.',
      zh: '依托萨拉津企业控股（Holding Sarrazin）扎实的法律与投资积淀，我们在圣地亚哥金融商务中心（Apoquindo 6275）与中国各大核心口岸建立全天候双向协同网络。',
    },
    btn: { es: 'Conocer más', en: 'Learn More', zh: '了解更多' },
    photoTag: {
      es: 'Gobernanza Corporativa · Apoquindo 6275, Las Condes',
      en: 'Corporate Governance · Apoquindo 6275, Las Condes',
      zh: '集团总部与治理中心 · 圣地亚哥拉斯孔德斯',
    },
    photoDesc: {
      es: 'Mesa directiva y equipo consultor en comercio bilateral Chile–China.',
      en: 'Board of directors and Chile–China trade consulting desk.',
      zh: '中智双边商贸与涉外投资专家委员会。',
    },
  },
  section02: {
    tag: '{ 02 }',
    title: { es: 'Nuestra oferta en cifras', en: 'Our Capabilities in Numbers', zh: '核心业务实力与数据' },
    stat1: { es: 'productos de exportación', en: 'export product lines', zh: '大类出口优质天然商品' },
    stat2: { es: 'sectores de importación', en: 'import technical sectors', zh: '大工业与科技进口领域' },
    stat3: { es: 'líneas de negocio', en: 'core business lines', zh: '大专业业务运营支柱' },
    stat4: { es: 'servicios de asesoría legal y tributaria', en: 'legal & tax advisory services', zh: '项涉外法律与财税顾问服务' },
  },
  corridor: {
    tag: {
      es: 'Ruta del Pacífico · 22 a 28 Días de Tránsito',
      en: 'Pacific Ocean Corridor · 22 to 28 Transit Days',
      zh: '太平洋直航走廊 · 22至28天海运直达',
    },
    title: {
      es: 'Logística marítima directa entre puertos chilenos y las principales terminales asiáticas',
      en: 'Direct ocean shipping between Chilean ports and major Asian terminals',
      zh: '连接智利瓦尔帕莱索/圣安东尼奥与中国主要沿海港口的直航海运干线',
    },
    desc: {
      es: 'Contratos consolidados con navieras de primer nivel, trazabilidad satelital en tiempo real y despacho aduanero preferencial bajo TLC Chile–China.',
      en: 'Consolidated freight agreements with Tier-1 carriers, real-time satellite tracking, and preferential customs clearance under Chile–China FTA.',
      zh: '与全球顶级航运公司建立长期舱位保障，全程冷链温控卫星溯源，深度享受中智自贸协定零关税待遇。',
    },
  },
  section03: {
    tag: '{ 03 }',
    title: { es: 'Productos y servicios', en: 'Products & Services', zh: '业务板块与服务' },
    lead: {
      es: 'Importamos y exportamos productos alimenticios y tecnología, con soluciones para lograr una negociación exitosa.',
      en: 'We export and import food products and technology, delivering robust solutions for successful negotiations.',
      zh: '涵盖高品质天然食品出口、尖端工业机械进口及全方位涉外法税咨询，护航跨国贸易无缝落地。',
    },
    c1Badge: { es: 'Alimentos Naturales · SAG / GACC', en: 'Natural Foods · SAG / GACC', zh: '天然健康食品 · SAG与中国海关总署合规' },
    c1Title: { es: 'Exportaciones', en: 'Exports', zh: '出口业务' },
    c1Desc: {
      es: 'Frutas y verduras, camarones, jibia, cochayuyo, aceite de oliva, vinos y licores extraídos directamente desde su origen en Chile.',
      en: 'Fresh fruits, nuts, deep-sea shrimp, giant squid, seaweed, extra virgin olive oil, and fine Chilean wines sourced directly from origin.',
      zh: '原产地直采新鲜水果坚果、深海野生海产、特级初榨橄榄油及顶级名庄葡萄酒，锁住天然纯粹营养。',
    },
    c1Link: { es: 'Ver catálogo completo →', en: 'View Complete Catalog →', zh: '查看完整出口目录 →' },
    c2Badge: { es: 'Minería & Equipos · Fábricas China', en: 'Mining & Equipment · China Factories', zh: '重工业装备 · 优质制造源头直采' },
    c2Title: { es: 'Importaciones', en: 'Imports', zh: '进口业务' },
    c2Desc: {
      es: 'Sector minero, tecnologías de energía limpia, filtros automotrices, neumáticos y suministros para mascotas.',
      en: 'Heavy mining machinery filtration, renewable solar technologies, automotive fleet spare parts, tires, and veterinary equipment.',
      zh: '智利大型铜矿机械专用过滤、光伏储能与水净化、重卡车队耗材及高端宠物医疗设备。',
    },
    c2Link: { es: 'Ver sectores de importación →', en: 'View Import Sectors →', zh: '查看进口产品系列 →' },
    c3Badge: { es: 'Holding Sarrazin · Legal & Tax', en: 'Holding Sarrazin · Legal & Tax', zh: '萨拉津控股 · 涉外法税专席' },
    c3Title: { es: 'Negocios', en: 'Advisory & Business', zh: '法税商业顾问' },
    c3Desc: {
      es: 'Asesoría legal y tributaria, constitución societaria, inversión extranjera, due diligence y estudios de mercado.',
      en: 'Corporate legal structuring, tax optimization, foreign direct investment, M&A due diligence, and market feasibility studies.',
      zh: '协助外资落地智利、合资并购尽职调查、最适财税架构筹划及拉美市场可行性深度调研。',
    },
    c3Link: { es: 'Ver asesorías estratégicas →', en: 'View Advisory Services →', zh: '探索战略顾问项目 →' },
  },
  section04: {
    tag: '{ 04 }',
    title: { es: 'Por qué elegirnos', en: 'Why Choose Us', zh: '为什么选择我们' },
    b1Tag: { es: '01 · Respaldo', en: '01 · Heritage & Backing', zh: '01 · 雄厚背书' },
    b1Title: { es: 'Holding Sarrazin', en: 'Holding Sarrazin', zh: '萨拉津企业控股' },
    b1Desc: {
      es: 'Operamos con la trayectoria de un holding corporativo con presencia consolidada en Chile y España.',
      en: 'We operate with the institutional heritage of a corporate holding with consolidated operations in Chile and Spain.',
      zh: '依托跨国企业集团稳固底蕴，在智利圣地亚哥与欧洲西班牙马德里均设有全资实体与办事机构。',
    },
    b2Tag: { es: '02 · Integral', en: '02 · Comprehensive Advisory', zh: '02 · 全维保障' },
    b2Title: { es: 'Asesoría legal y tributaria', en: 'Legal and Tax Advisory', zh: '双边法税全程护航' },
    b2Desc: {
      es: 'Acompañamos su operación con asesoría legal, tributaria y de estructuración de negocios en Chile.',
      en: 'We accompany every cross-border shipment with specialized legal, tax, and commercial structuring in Chile.',
      zh: '专职涉外律师与税务师全程跟进，确保合同条款严密、财税架构合规并尽享中智关税减免。',
    },
    b3Tag: { es: '03 · Corredor', en: '03 · Pacific Gateway', zh: '03 · 专属通道' },
    b3Title: { es: 'Chile–Asia', en: 'Chile–Asia', zh: '中智直通桥梁' },
    b3Desc: {
      es: 'Exportación e importación directa, con asesoría especializada en logística marítima y transporte.',
      en: 'Direct export and import channels with specialized multimodal ocean freight management and customs clearance.',
      zh: '端到端双向直达通道，专人负责订舱、口岸清关检验及冷链多式联运，全程可视可控。',
    },
  },
  section05: {
    tag: '{ 05 }',
    title: { es: 'Preguntas frecuentes', en: 'Frequently Asked Questions', zh: '常见问答' },
    lead: {
      es: 'Respuestas a las consultas habituales sobre el corredor de comercio bilateral.',
      en: 'Direct answers to key inquiries regarding the bilateral trade corridor.',
      zh: '解答中智双向商贸运作与法税投资中的核心关切。',
    },
    q1: { es: '¿Qué productos exportan?', en: 'What products do you export?', zh: '你们主要出口哪些智利特色产品？' },
    a1: {
      es: 'Principalmente frutas y verduras (maní, almendra, avellana, lúcuma, ciruela, uva, damasco, palta, manzana, arándano), camarones, jibia, cochayuyo, aceite de oliva, vinos y licores.',
      en: 'Primarily fresh fruits and nuts (peanuts, almonds, hazelnuts, lucuma, prunes, grapes, apricots, avocados, apples, blueberries), wild shrimp, giant squid, seaweed, extra virgin olive oil, and fine Chilean wines.',
      zh: '重点出口智利特色农副产品（蓝莓、车厘子、牛油果、苹果、葡萄、李子干、巴旦木、榛子、花生、蛋黄果等）、深海大王鱿鱼、纯野生海茸黑黄金、特级初榨橄榄油以及精品酒庄葡萄酒。',
    },
    q2: { es: '¿Qué productos importan?', en: 'What products do you import?', zh: '你们从中国主要进口哪些工业及科技设备？' },
    a2: {
      es: 'Equipos y accesorios para minería (filtros para excavación, rellenos y transporte), tecnología (paneles solares y plantas de purificación de aguas), repuestos automotrices (filtros y neumáticos) y productos para mascotas (accesorios, aseo y ecógrafos veterinarios).',
      en: 'Heavy mining machinery filtration (excavation, backfilling, transport), clean technology (solar PV panels and water treatment plants), automotive fleet spare parts and heavy tires, as well as specialized pet and veterinary ultrasound equipment.',
      zh: '专注智利支柱产业所需工业装备：大型铜矿山重型设备液压及空气机滤、光伏新能源与工业/农业污水净化设备、重型卡车滤芯与特种轮胎、以及专业宠物护理品和高端兽医超声波诊断仪。',
    },
    q3: { es: '¿Qué asesoría ofrecen?', en: 'What advisory services do you provide?', zh: '你们提供哪些专业法税与商业顾问服务？' },
    a3: {
      es: 'Asesoría legal y tributaria integral, constitución de sociedades, inversión extranjera, debida diligencia, evaluación de proyectos, estudios de mercado y asesoría en logística y transporte multimodal entre Latinoamérica y Asia.',
      en: 'End-to-end legal and tax advisory, corporate incorporation in Chile, foreign direct investment structuring, M&A due diligence, project evaluation, market studies, and multimodal logistics management between Latin America and Asia.',
      zh: '提供全流程一站式服务：智利公司注册设立、外国投资法合规备案（DL 600/20.848）、并购财务与法律尽调、双边税收协定筹划、商业项目评估及跨太平洋航运清关顾问。',
    },
    q4: { es: '¿Cómo puedo contactarlos?', en: 'How can I contact your executive team?', zh: '如何与你们的业务团队取得联系？' },
    a4: {
      es: 'Por teléfono al +56 2 223 337 30, al correo Contacto@asiaexport.cl, en nuestras oficinas corporativas en Av. Apoquindo 6275, Las Condes, Santiago, o mediante nuestro formulario de cotización y chat en línea.',
      en: 'By phone at +56 2 223 337 30, email at Contacto@asiaexport.cl, at our headquarters in Av. Apoquindo 6275, Las Condes, Santiago, or via our quotation form and online trade desk.',
      zh: '您可致电智利总部电话 +56 2 223 337 30，发送邮件至 Contacto@asiaexport.cl，亲临圣地亚哥拉斯孔德斯阿波金多大道 6275 号集团大厦，或通过本网站大宗询价表单及在线咨询专席联络。',
    },
  },
  cta: {
    title: { es: '¿Evaluamos su próxima operación?', en: 'Ready to evaluate your next operation?', zh: '期待开启您的下一次跨国商贸合作？' },
    subtitle: { es: 'Reciba también oportunidades de negocios en Chile.', en: 'Receive quarterly business & investment opportunities in Chile.', zh: '欢迎获取智利前沿商机与自贸税率深度报告。' },
    btn: { es: 'Solicitar cotización', en: 'Request Corporate Quote', zh: '提交大宗采购/外贸询价' },
    placeholder: { es: 'su.correo@empresa.com', en: 'your.email@company.com', zh: '输入您的工作邮箱' },
    subBtn: { es: 'Suscribirme', en: 'Subscribe', zh: '立即订阅' },
    subSuccess: {
      es: '✓ Gracias por suscribirse. Recibirá reportes de mercado Chile–Asia.',
      en: '✓ Thank you for subscribing. You will receive Chile–Asia market briefings.',
      zh: '✓ 订阅成功！最新中智双边商机与行业动态将发送至您的邮箱。',
    },
  },
  footer: {
    tagline: {
      es: 'El aliado estratégico para empresas de éxito en el corredor comercial Chile–China.',
      en: 'The strategic partner for thriving enterprises in the Chile–China trade corridor.',
      zh: '跨越太平洋连接智利与中国的战略外贸与投资伙伴。',
    },
    directorate: { es: 'Directorio', en: 'Sitemap', zh: '网站导航' },
    contact: { es: 'Contacto', en: 'Contact', zh: '联络方式' },
    headquarters: { es: 'Oficinas Corporativas', en: 'Corporate Headquarters', zh: '集团总部' },
    address: {
      es: 'Av. Apoquindo 6275, Las Condes. Santiago de Chile.',
      en: 'Av. Apoquindo 6275, Las Condes. Santiago, Chile.',
      zh: '智利圣地亚哥拉斯孔德斯阿波金多大道 6275 号。',
    },
    rights: {
      es: 'Asia Export · Holding Sarrazin. Todos los derechos reservados.',
      en: 'Asia Export · Holding Sarrazin. All rights reserved.',
      zh: 'Asia Export · 萨拉津企业控股。保留所有权利。',
    },
    corridorLine: {
      es: 'Conexión Comercial Chile – Asia · Santiago de Chile',
      en: 'Bilateral Trade Gateway Chile – Asia · Santiago, Chile',
      zh: '中智双向经贸专属桥梁 · 智利圣地亚哥',
    },
  },
  contactPage: {
    heroTag: { es: 'Contacto', en: 'Contact', zh: '业务联络' },
    heroTitle: { es: 'Cotización corporativa', en: 'Corporate Quotation', zh: '大宗业务询价与合作' },
    heroDesc: {
      es: 'Inicie su operación en el corredor Chile–China con la asesoría de nuestro equipo comercial y legal.',
      en: 'Launch your cross-border operation with direct guidance from our commercial and legal desks.',
      zh: '依托我们资深的外贸与法律团队，即刻启动您的中智双向贸易与投资项目。',
    },
    talkTitle: { es: 'Hablemos', en: 'Let’s Connect', zh: '沟通洽谈' },
    nameLabel: { es: 'Nombre completo', en: 'Full Name', zh: '姓名' },
    companyLabel: { es: 'Empresa', en: 'Company', zh: '企业名称' },
    phoneLabel: { es: 'Teléfono', en: 'Phone', zh: '联系电话' },
    emailLabel: { es: 'Correo electrónico corporativo', en: 'Corporate Email', zh: '公司邮箱' },
    opLabel: { es: 'Tipo de operación', en: 'Operation Type', zh: '业务意向类型' },
    msgLabel: { es: 'Mensaje o detalle de la operación', en: 'Inquiry Details', zh: '需求或拟议操作详情' },
    submitBtn: { es: 'Enviar solicitud de cotización', en: 'Submit Quotation Request', zh: '提交业务询价申请' },
    openChatBtn: { es: 'Abrir Chat Online Corporativo', en: 'Open Online Corporate Desk', zh: '开启在线企业顾问专席' },
    waBtn: { es: 'Conversar por WhatsApp', en: 'Chat via WhatsApp', zh: '通过 WhatsApp 沟通' },
    oppTitle: { es: 'Oportunidades en Chile', en: 'Opportunities in Chile', zh: '智利商业与投资动态' },
    oppDesc: {
      es: 'Boletín bimensual con oportunidades de inversión, licitaciones y cambios arancelarios.',
      en: 'Bimonthly briefing on Chilean investment tenders, market entries, and FTA tariff shifts.',
      zh: '双月度中智双边商机简报：涉及重大项目、进出口准入及关税政策动态。',
    },
  },
  aboutPage: {
    heroTag: { es: 'Nosotros', en: 'About Us', zh: '关于我们' },
    heroTitle: {
      es: 'Una visión de futuro en los mercados asiáticos',
      en: 'A Future-Driven Vision Across Asian Markets',
      zh: '深耕亚洲市场的长远发展愿景',
    },
    s1Title: { es: 'Nuestra historia', en: 'Our Story', zh: '我们的发展历程' },
    s1Desc: {
      es: 'Somos una compañía que desarrolla una visión de futuro, sobre la base de una necesidad creciente y llena de oportunidades en los mercados asiáticos, con el propósito de mejorar la calidad de vida de las personas.',
      en: 'We are a company developing a future-oriented vision built on growing opportunities in Asian markets while aiming to enhance people’s quality of life.',
      zh: '我们是一家立足未来的跨国商贸企业，把握亚洲市场不断扩大的机遇，致力于以纯天然原产地资源提升全球消费者的生活品质与健康福祉。',
    },
    s2Title: { es: 'Misión', en: 'Our Mission', zh: '集团使命' },
    s2Desc: {
      es: 'Somos proveedores de alimentos naturales. Abastecemos a familias de mercados asiáticos con nuestra logística, experiencia y recursos, para mejorar su calidad de vida de forma saludable y cubrir sus necesidades de alimentación. Nuestros productos se extraen directamente desde su origen y llegan a los consumidores finales sin alterar sus propiedades naturales.',
      en: 'We supply natural foods to families across Asian markets, leveraging our logistics, experience and resources to enhance health and meet nutritional needs directly from origin without altering natural properties.',
      zh: '我们是纯天然健康食品的源头供应商，依托专业远洋物流、深厚经验与跨国资源，直接从智利原产地采集无污染天然产品，在完整保持其纯粹营养的前提下送达亚洲终端消费者家庭。',
    },
    s3Title: { es: 'Holding Sarrazin', en: 'Holding Sarrazin', zh: '萨拉津控股集团' },
    s3Desc: {
      es: 'Asia Export forma parte de Holding Sarrazin (Sarrazin Group), grupo empresarial con trayectoria multisectorial y presencia en Chile y España.',
      en: 'Asia Export is part of Holding Sarrazin (Sarrazin Group), a business conglomerate with multisectoral presence across Chile and Spain.',
      zh: 'Asia Export 隶属于萨拉津企业控股（Sarrazin Group），集团在拉美智利与欧洲西班牙均拥有深厚的实体产业与跨境投资经验。',
    },
    ctaTitle: { es: 'Conversemos sobre su negocio', en: 'Let’s Discuss Your Business', zh: '共话双边商机' },
    ctaDesc: {
      es: 'Nuestros directores y especialistas comerciales están a su disposición para coordinar operaciones bilaterales.',
      en: 'Our directors and trade specialists are at your disposal to coordinate bilateral operations.',
      zh: '我们的企业高管与涉外商贸专家随时恭候，为您协调跨国进出口与投资落地。',
    },
  },
  exportPage: {
    heroTag: { es: '{ 01 } Servicios', en: '{ 01 } Services', zh: '{ 01 } 服务总览' },
    heroTitle: { es: 'Exportaciones', en: 'Export Operations', zh: '智利特色出口业务' },
    heroDesc: {
      es: 'Alimentos naturales y productos chilenos de alta gama directamente desde su origen a los mercados asiáticos, preservando su calidad nutricional y certificaciones.',
      en: 'Natural foods and high-grade Chilean commodities directly from origin to Asian markets, preserving nutritional potency and strict compliance.',
      zh: '将智利最纯净的天然食品与名产直供亚洲核心口岸，全程温控保持原产地鲜活风味与权威检疫认证。',
    },
    bannerTag: { es: 'Origen Certificado · Valles de Chile', en: 'Certified Origin · Chilean Valleys', zh: '原产地认证 · 智利中央山谷' },
    bannerTitle: {
      es: 'Nutrición intacta desde los huertos chilenos hasta el consumidor en Asia',
      en: 'Untouched nutrition from Chilean orchards directly to consumers in Asia',
      zh: '从智利生态种植园直达亚洲终端餐桌的原生健康营养',
    },
    bannerDesc: {
      es: 'Atmósfera controlada, selección en frío y protocolos fitosanitarios aprobados por el SAG y la aduana china (GACC).',
      en: 'Controlled atmosphere reefer transport, cold-chain selection, and phytosanitary protocols verified by SAG and China GACC.',
      zh: '气调集装箱保鲜、全程冷链溯源，严格执行智利农牧局（SAG）出证及中国海关总署（GACC）准入标准。',
    },
    fruitsTitle: { es: 'Frutas y verduras', en: 'Fruits & Vegetables', zh: '新鲜水果与天然坚果' },
    seafoodTitle: { es: 'Mariscos y crustáceos', en: 'Seafood & Crustaceans', zh: '纯净深海海产与藻类' },
    winesTitle: { es: 'Vinos y aceite de oliva', en: 'Wines & Olive Oil', zh: '名庄葡萄酒与特级初榨橄榄油' },
    ctaTitle: { es: 'Exporte con respaldo y trazabilidad', en: 'Export with Full Traceability', zh: '全程溯源护航，放心出口' },
    ctaDesc: {
      es: 'Coordinamos despachos marítimos y aéreos hacia los principales puertos de China y Asia Pacífico.',
      en: 'We coordinate multimodal sea and air shipments directly to premier ports across China and Asia Pacific.',
      zh: '专人统筹至中国上海、深圳、广州、天津及香港等枢纽港口的海运与空运航线。',
    },
    ctaBtn: { es: 'Solicitar cotización de exportación', en: 'Request Export Quotation', zh: '索取出口大宗报价单' },
  },
  importPage: {
    heroTag: { es: '{ 02 } Servicios', en: '{ 02 } Services', zh: '{ 02 } 服务总览' },
    heroTitle: { es: 'Importaciones', en: 'Import Operations', zh: '工业装备与科技进口' },
    heroDesc: {
      es: 'Equipamiento técnico, maquinaria para minería, tecnologías de energía limpia, repuestos automotrices y productos especializados traídos directamente desde fábricas certificadas en China.',
      en: 'Technical equipment, heavy mining machinery, clean solar technologies, automotive fleet spares, and specialized goods sourced directly from certified factories in China.',
      zh: '精选中国合规源头制造厂，为智利关键产业直供重型矿山机械耗材、清洁能源装备、车队零配件及高科技产品。',
    },
    bannerTag: { es: 'Suministro Industrial · Gran Minería & Energía', en: 'Industrial Supply · Mining & Clean Energy', zh: '工业直采 · 智利铜矿与新能源' },
    bannerTitle: {
      es: 'Filtros de alta exigencia e insumos técnicos con homologación de fábrica',
      en: 'Heavy-duty filtration and technical supplies with factory OEM certification',
      zh: '符合智利严苛工业标准的矿山机滤与特种装备'
    },
    bannerDesc: {
      es: 'Importación directa desde fabricantes líderes en China para faenas mineras, flotas de transporte y plantas de purificación de agua en Chile.',
      en: 'Direct sourcing from premier Chinese manufacturers for mining sites, logistics fleets, and municipal water plants in Chile.',
      zh: '源头大宗直采，为智利矿区、大型运输车队及自来水/农业净化项目降低全生命周期采购成本。',
    },
    sectorsTitle: { es: 'Sectores y suministros', en: 'Sectors & Product Lines', zh: '核心供应领域' },
    ctaTitle: { es: 'Importe con trazabilidad y despacho integral', en: 'Import with Full Technical Assurance', zh: '原厂直采，一体化清关内陆到门' },
    ctaDesc: {
      es: 'Verificamos proveedores en origen, coordinamos inspección en fábrica y gestionamos la internación aduanera en Chile.',
      en: 'We audit suppliers on-site, oversee pre-shipment factory QA, and manage full customs inland entry in Chile.',
      zh: '我们提供中国验厂稽核、出厂质检验货、海运订舱及智利本土报关完税全流程闭环交付。',
    },
    ctaBtn: { es: 'Solicitar cotización de importación', en: 'Request Import Quotation', zh: '提交进口采购需求' },
  },
  negociosPage: {
    heroTag: { es: '{ 03 } Servicios', en: '{ 03 } Services', zh: '{ 03 } 服务总览' },
    heroTitle: {
      es: 'Negocios: asesoría legal, tributaria y estratégica',
      en: 'Business: Legal, Tax & Strategic Advisory',
      zh: '商业法税：涉外法律、财税与战略顾问',
    },
    heroDesc: {
      es: 'Asesoría integral para empresas e inversionistas que operan en Chile y Asia. Estructuración societaria, régimen impositivo óptimo, debida diligencia y evaluación de proyectos con el respaldo de Holding Sarrazin.',
      en: 'Holistic counsel for multinational enterprises and investors operating between Chile and Asia. Corporate structuring, tax optimization, due diligence, and project evaluation.',
      zh: '为涉足智利与亚洲的跨国企业和投资机构提供全方位保驾护航：外资公司架构、最优税制筹划、并购尽调及商业评估。',
    },
    bannerTag: { es: 'Estructuración Jurídica & Financiera · Apoquindo 6275', en: 'Legal & Financial Structuring · Apoquindo 6275', zh: '法税架构与战略专席 · 圣地亚哥金融街' },
    bannerTitle: {
      es: 'Seguridad jurídica y optimización tributaria para transacciones transfronterizas',
      en: 'Legal certainty and tax optimization for cross-border investments',
      zh: '为中智双向贸易与资本出海提供坚实的法律保障与财税优化'
    },
    bannerDesc: {
      es: 'Constitución de sociedades, ingreso de capitales extranjeros, debida diligencia y acuerdos comerciales bajo marco legal chileno e internacional.',
      en: 'Company incorporation, foreign capital registration, legal audits, and commercial drafting under Chilean and global trade frameworks.',
      zh: '智利外商投资法合规备案、商业合同起草、合资并购法律审计及双边关税减免协定运用。',
    },
    legalTitle: { es: 'Asesoría legal', en: 'Legal Counsel', zh: '公司涉外法律顾问' },
    taxTitle: { es: 'Asesoría tributaria', en: 'Tax & Fiscal Advisory', zh: '智利税务与财会筹划' },
    moreTitle: { es: 'Más servicios', en: 'Strategic Feasibility', zh: '商业评估与市场调研' },
    ctaTitle: { es: 'Consulte con nuestros abogados y tributaristas', en: 'Consult Our Legal and Tax Partners', zh: '预约中智双语法税顾问专席' },
    ctaDesc: {
      es: 'Agende una reunión preliminar para revisar su estructura corporativa y oportunidades en Chile.',
      en: 'Schedule an initial briefing to evaluate your corporate structure and investment pipeline in Chile.',
      zh: '欢迎预约我们的资深执业律师与财税专家，全面梳理您在智利的商业规划与投资方案。',
    },
    ctaBtn: { es: 'Solicitar asesoría corporativa', en: 'Schedule Advisory Briefing', zh: '预约涉外法税专席咨询' },
  },
  servicesPage: {
    heroTag: { es: 'Servicios', en: 'Services', zh: '服务总览' },
    heroTitle: {
      es: 'Tres líneas para una operación sin fricciones',
      en: 'Three Core Lines for Frictionless Operations',
      zh: '三大支柱业务保障跨国贸易顺畅落地',
    },
    heroDesc: {
      es: 'Combinamos el comercio internacional físico con la seguridad jurídica y tributaria para asegurar la rentabilidad de cada embarque.',
      en: 'We unite physical international trade with legal and tax assurance to safeguard the profitability of every shipment.',
      zh: '将实体跨国物流贸易与智利专业法税风控深度融合，全方位保障每一笔跨境贸易的合规与高回报。',
    },
    ctaTitle: { es: 'Cuéntenos qué necesita', en: 'Tell Us What You Need', zh: '告诉我们您的具体需求' },
    ctaDesc: {
      es: 'Diseñamos propuestas comerciales y técnicas personalizadas para su empresa.',
      en: 'We craft customized commercial, technical, and tax proposals for your enterprise.',
      zh: '我们为您量身定制中智双边商贸采购方案、物流计划与涉外法税架构。',
    },
    ctaBtn: { es: 'Solicitar cotización corporativa', en: 'Request Corporate Quote', zh: '索取企业专属方案与报价' },
  },
  legalPage: {
    heroTag: { es: 'Legal & Compliance', en: 'Legal & Compliance', zh: '法律与合规' },
    termsTitle: { es: 'Términos y condiciones', en: 'Terms & Conditions', zh: '服务条款与使用协议' },
    privacyTitle: { es: 'Privacidad y términos', en: 'Privacy & Terms', zh: '隐私保护政策与条款' },
    pendingNotice: {
      es: '[PENDIENTE] El sitio web original de Asia Export no incluye texto legal formal publicado. En estricto apego a las directrices de veracidad y no invención de cláusulas jurídicas, se mantiene catalogado como [PENDIENTE] para homologación con Holding Sarrazin.',
      en: '[PENDING] The original Asia Export website does not contain published formal legal terms. In strict compliance with accuracy guidelines, this section remains marked as [PENDING] awaiting institutional validation by Holding Sarrazin.',
      zh: '[待确认] Asia Export 原始官方网站未公开发布格式化法律文本。根据真实性原则与严谨准则，本章节标记为 [待确认]，待萨拉津控股（Holding Sarrazin）法务部审定后同步。',
    },
    frameworkTitle: {
      es: 'Marco de Cumplimiento Corporativo',
      en: 'Corporate Compliance Framework',
      zh: '企业合规与保密承诺',
    },
    p1: {
      es: 'Asia Export y Holding Sarrazin operan bajo la legislación vigente de la República de Chile (Leyes N° 19.628 sobre Protección de la Vida Privada y N° 20.848 sobre Inversión Extranjera Directa), así como el Tratado de Libre Comercio suscrito con la República Popular China.',
      en: 'Asia Export and Holding Sarrazin operate under the prevailing legal framework of the Republic of Chile (Laws No. 19.628 on Privacy Protection and No. 20.848 on Foreign Direct Investment), as well as the Chile–China Free Trade Agreement.',
      zh: 'Asia Export 与萨拉津控股（Holding Sarrazin）严格遵守智利共和国现行法律（第 19.628 号个人隐私保护法及第 20.848 号外国直接投资法）以及《中国—智利自由贸易协定》之各项规定。',
    },
    p2: {
      es: 'Toda información suministrada a través de nuestros canales de cotización, correo corporativo o chat en línea es tratada bajo estricta reserva profesional con fines de prospección comercial.',
      en: 'All information provided through our quotation forms, corporate email, or online trade desk is treated with strict professional confidentiality for commercial qualification.',
      zh: '客户通过本网站询价表单、企业邮箱或在线顾问渠道提交的一切商业信息与资料，均实行严格保密，仅用于中智双边合作评估。',
    },
    btnContact: { es: 'Consultar con el equipo legal', en: 'Inquire with Legal Desk', zh: '联系法务合规专席' },
  },
  notFoundPage: {
    heroTag: { es: 'Error 404', en: 'Error 404', zh: '404 错误' },
    title: { es: 'Esta página no existe', en: 'Page Not Found', zh: '您访问的页面不存在' },
    desc: {
      es: 'La ruta que intenta consultar no se encuentra disponible o ha sido reubicada dentro del portal de comercio exterior.',
      en: 'The route you are trying to access is unavailable or has been relocated within the bilateral trade portal.',
      zh: '您尝试访问的页面已被移动或暂不可用，请返回主页或导航至相关业务板块。',
    },
    backBtn: { es: 'Volver al inicio', en: 'Back to Home', zh: '返回首页' },
  },
};

export const TRANSLATIONS = T;
export default T;
