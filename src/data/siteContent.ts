/**
 * Contenido oficial, íntegro y verificado de Asia Export (Holding Sarrazin)
 * Extraído directamente de https://www.asiaexport.cl/?rc=test-site
 */

export interface NutrientBenefit {
  name: { es: string; en: string; zh: string };
  category: 'frutas' | 'mariscos' | 'vinos_aceite';
  benefits: { es: string[]; en: string[]; zh: string[] };
}

export interface ServiceItem {
  id: string;
  category: 'export' | 'import' | 'advisory';
  categoryLabel: { es: string; en: string; zh: string };
  title: { es: string; en: string; zh: string };
  shortDesc: { es: string; en: string; zh: string };
  fullDesc: { es: string; en: string; zh: string };
  items: { es: string[]; en: string[]; zh: string[] };
  compliance: { es: string; en: string; zh: string };
}

export interface AdvisoryService {
  title: { es: string; en: string; zh: string };
  desc: { es: string; en: string; zh: string };
  category: 'legal' | 'tributaria' | 'evaluacion' | 'comex';
}

export const COMPANY_INFO = {
  name: "Asia Export",
  holding: "Holding Sarrazin",
  groupName: "Sarrazin Group",
  tagline: "El aliado estratégico para empresas de éxito",
  address: "Av. Apoquindo 6275, Las Condes. Santiago de Chile.",
  email: "Contacto@asiaexport.cl",
  phone: "+ 56 2 223 337 30",
  whatsappNumber: "56222333730",
  whatsappDisplay: "+56 2 223 337 30",
  hours: "Lunes a Viernes 09:00 - 18:30 (GMT-3)",
  website: "www.asiaexport.cl",
  holdingWebsite: "www.sarrazin.cl",
  relatedSites: ["www.sarrazin.cl", "www.asiaexport.cl", "www.rukaa.es"],
  copyright: "©2026 by Sarrazin Group.",
  history: {
    es: "Somos una compañía, desarrollando una visión de futuro y sobre perspectivas de una necesidad creciente y plena de oportunidades en los mercados asiáticos y que además apunta a mejorar la calidad de vida en las personas.",
    en: "We are a company developing a future-oriented vision built on growing opportunities in Asian markets while aiming to enhance people's quality of life.",
    zh: "我们是一家立足未来的跨国商贸企业，把握亚洲市场不断扩大的机遇，致力于以纯天然原产地资源提升全球消费者的生活品质与健康福祉。",
  },
  mission: {
    es: "Somos proveedores de alimentos naturales, abastecemos a las familias de mercados asiáticos, usando nuestra logística, experiencia y recursos para mejorar la calidad de vida de las personas en forma saludable, además de cubrir las necesidades de alimentación, con nuestros productos que serán extraídos directamente desde su origen y llevados a nuestros consumidores finales sin alterar sus propiedades naturales.",
    en: "We supply natural foods to families across Asian markets, leveraging our logistics, experience and resources to enhance health and meet nutritional needs directly from origin without altering natural properties.",
    zh: "我们是纯天然健康食品的源头供应商，依托专业远洋物流、深厚经验与跨国资源，直接从智利原产地采集无污染天然产品，在完整保持其纯粹营养的前提下送达亚洲终端消费者家庭。",
  },
};

export const METRICS = [
  {
    number: "15+",
    label: {
      es: "Años de Trayectoria Sarrazin",
      en: "Years Sarrazin Group Experience",
      zh: "十五年专业沉淀",
    },
    detail: {
      es: "Facilitando inversiones, comercio exterior y operaciones bilaterales",
      en: "Facilitating foreign trade, investment and bilateral operations",
      zh: "助力中智双向贸易、投资与外贸通关",
    },
  },
  {
    number: "100%",
    label: {
      es: "Cumplimiento y Trazabilidad",
      en: "Compliance & Traceability",
      zh: "合规与全程溯源保障",
    },
    detail: {
      es: "Aduanas Chile, SAG, GACC China y certificaciones de inocuidad",
      en: "Chilean Customs, SAG, China GACC and phytosanitary protocols",
      zh: "智利海关、SAG与中国海关总署合规检验",
    },
  },
  {
    number: "48h",
    label: {
      es: "Respuesta de Cotización B2B",
      en: "B2B Quote Turnaround",
      zh: "48小时方案评估",
    },
    detail: {
      es: "Evaluación técnica, viabilidad arancelaria TLC y desglose de ruta",
      en: "Technical review, FTA tariff analysis and route logistics breakdown",
      zh: "专属关税评估、航线拆解及可行性测算",
    },
  },
  {
    number: "3",
    label: {
      es: "Pilares Comerciales Integrales",
      en: "Core Operating Pillars",
      zh: "三大核心业务支柱",
    },
    detail: {
      es: "Exportación de alimentos, Importación técnica y Asesoría Sarrazin",
      en: "Food exports, technical industrial imports, and corporate legal advisory",
      zh: "天然食品出口、工业技术进口与外商投资法税顾问",
    },
  },
];

/**
 * Catálogo íntegro y exacto de productos de Exportación con sus beneficios nutricionales
 * extraídos de /copia-de-conocenos
 */
export const EXPORT_NUTRIENTS: NutrientBenefit[] = [
  // Frutas y Verduras
  {
    name: { es: "Maní", en: "Peanuts", zh: "花生" },
    category: "frutas",
    benefits: {
      es: ["Vitamina E.", "Niacina, cistina, tiamina, riboflavina.", "Vitamina B6.", "Fibra y proteína."],
      en: ["Vitamin E.", "Niacin, cystine, thiamine, riboflavin.", "Vitamin B6.", "Fiber and protein."],
      zh: ["维生素 E", "烟酸、胱氨酸、硫胺素、核黄素", "维生素 B6", "丰富的植物膳食纤维与蛋白质"],
    },
  },
  {
    name: { es: "Almendra", en: "Almonds", zh: "智利大扁杏仁" },
    category: "frutas",
    benefits: {
      es: ["Vitamina E, B1, B2.", "Magnesio, hierro, potasio, calcio."],
      en: ["Vitamin E, B1, B2.", "Magnesium, iron, potassium, calcium."],
      zh: ["维生素 E、B1、B2", "镁、铁、钾、钙等优质微量矿物质"],
    },
  },
  {
    name: { es: "Avellana", en: "Hazelnuts", zh: "欧洲榛子" },
    category: "frutas",
    benefits: {
      es: ["Vitamina E, A y Ácido fólico.", "Calcio y Magnesio."],
      en: ["Vitamin E, A and Folic Acid.", "Calcium and Magnesium."],
      zh: ["维生素 E、A 及叶酸", "钙与镁"],
    },
  },
  {
    name: { es: "Lúcuma", en: "Lúcuma", zh: "智利国宝级蛋黄果（Lúcuma）" },
    category: "frutas",
    benefits: {
      es: ["Vitamina B, C, B3.", "Fibra, Hierro, Caroteno y Niacina."],
      en: ["Vitamin B, C, B3.", "Fiber, Iron, Carotene and Niacin."],
      zh: ["维生素 B、C、B3", "膳食纤维、铁、胡萝卜素与烟酸"],
    },
  },
  {
    name: { es: "Ciruela Deshidratada", en: "Prunes", zh: "精选智利西梅干" },
    category: "frutas",
    benefits: {
      es: ["Vitaminas C, A, E, B3.", "Potasio, Calcio, Hierro, Magnesio."],
      en: ["Vitamins C, A, E, B3.", "Potassium, Calcium, Iron, Magnesium."],
      zh: ["维生素 C、A、E、B3", "钾、钙、铁、镁等矿物质"],
    },
  },
  {
    name: { es: "Uva de Mesa", en: "Table Grapes", zh: "鲜食葡萄" },
    category: "frutas",
    benefits: {
      es: ["Vitaminas C, B.", "Ácido Fólico.", "Fibra, Hierro, Calcio, Magnesio, Fósforo y Potasio."],
      en: ["Vitamins C, B.", "Folic Acid.", "Fiber, Iron, Calcium, Magnesium, Phosphorus and Potassium."],
      zh: ["维生素 C、B", "叶酸", "膳食纤维、铁、钙、镁、磷与钾"],
    },
  },
  {
    name: { es: "Damasco", en: "Apricots", zh: "鲜杏" },
    category: "frutas",
    benefits: {
      es: ["Vitaminas C y A.", "Betacaroteno.", "Potasio y Hierro."],
      en: ["Vitamins C and A.", "Beta-carotene.", "Potassium and Iron."],
      zh: ["维生素 C 与 A", "天然β-胡萝卜素", "钾与铁"],
    },
  },
  {
    name: { es: "Palta (Aguacate)", en: "Avocados", zh: "智利牛油果（鳄梨）" },
    category: "frutas",
    benefits: {
      es: ["12 Vitaminas, entre ellas, E, K, B etc.", "Potasio, Magnesio, Ácido Fólico."],
      en: ["12 Vitamins, including E, K, B etc.", "Potassium, Magnesium, Folic Acid."],
      zh: ["富含12种维生素（含E、K、B族等）", "钾、镁、叶酸及有益单不饱和脂肪酸"],
    },
  },
  {
    name: { es: "Manzana", en: "Apples", zh: "高品质苹果" },
    category: "frutas",
    benefits: {
      es: ["Vitaminas B y C.", "Potasio, Calcio, Magnesio, Sodio, Ácido Fosfórico, Sulfúrico y Silicato."],
      en: ["Vitamins B and C.", "Potassium, Calcium, Magnesium, Sodium, Phosphoric acid, Silicate."],
      zh: ["维生素 B 与 C", "钾、钙、镁、钠、磷酸及微量硅化物"],
    },
  },
  {
    name: { es: "Arándano", en: "Blueberries", zh: "智利高山蓝莓" },
    category: "frutas",
    benefits: {
      es: ["Vitamina C.", "Fibra, Potasio, Hierro y Calcio.", "Altos niveles de Antioxidantes."],
      en: ["Vitamin C.", "Fiber, Potassium, Iron and Calcium.", "High Antioxidant properties."],
      zh: ["高纯度维生素 C", "膳食纤维、钾、铁与钙", "强效天然花青素抗氧化群"],
    },
  },

  // Mariscos y Crustáceos
  {
    name: { es: "Camarones", en: "Cold-Water Shrimps", zh: "冷水深海野生海虾" },
    category: "mariscos",
    benefits: {
      es: ["Vitaminas B, E y D.", "Proteínas de alto valor biológico, Omega 3.", "Sodio, Potasio, Cinc y Selenio."],
      en: ["Vitamins B, E and D.", "High biological value proteins, Omega 3.", "Sodium, Potassium, Zinc and Selenium."],
      zh: ["维生素 B、E 及 D", "高生物效价蛋白质、深海 Omega-3 脂肪酸", "钠、钾、锌及硒"],
    },
  },
  {
    name: { es: "Jibia (Calamar Gigante)", en: "Giant Squid (Jibia)", zh: "太平洋巨型大鱿鱼（Jibia）" },
    category: "mariscos",
    benefits: {
      es: ["Vitaminas A, B y E.", "Selenio, Calcio, Yodo.", "Cero grasa, alto contenido proteico."],
      en: ["Vitamins A, B and E.", "Selenium, Calcium, Iodine.", "Zero fat, high pure protein."],
      zh: ["维生素 A、B 与 E", "硒、钙与天然海洋碘", "超高纯蛋白、低脂肪特色"],
    },
  },
  {
    name: { es: "Cochayuyo (Alga Parda)", en: "Cochayuyo Seaweed", zh: "智利天然公牛藻/海茸（Cochayuyo）" },
    category: "mariscos",
    benefits: {
      es: ["Vitaminas A, B, C, D, E y Ácido Fólico.", "Yodo, Magnesio, Hierro y Calcio."],
      en: ["Vitamins A, B, C, D, E and Folic Acid.", "Iodine, Magnesium, Iron and Calcium."],
      zh: ["维生素 A、B、C、D、E 与丰富叶酸", "海洋活性碘、镁、铁与天然钙质"],
    },
  },

  // Vinos y Aceite de Oliva
  {
    name: { es: "Vinos Chilenos", en: "Chilean Reserve Wines", zh: "智利法定产区名庄葡萄酒" },
    category: "vinos_aceite",
    benefits: {
      es: ["Vitaminas C y B.", "Potasio, Calcio, Magnesio, Sodio, Hierro, Fósforo.", "Polifenoles y resveratrol."],
      en: ["Vitamins C and B.", "Potassium, Calcium, Magnesium, Sodium, Iron, Phosphorus.", "Polyphenols & resveratrol."],
      zh: ["维生素 C 与 B", "钾、钙、镁、钠、铁与磷", "天然红酒多酚与白藜芦醇抗氧化成分"],
    },
  },
  {
    name: { es: "Aceite de Oliva Extra Virgen", en: "Extra Virgin Olive Oil", zh: "特级初榨冷压橄榄油" },
    category: "vinos_aceite",
    benefits: {
      es: ["Vitaminas A, D, E y K.", "Calcio, Fósforo, Magnesio y Zinc.", "Ácido oleico de baja acidez."],
      en: ["Vitamins A, D, E and K.", "Calcium, Phosphorus, Magnesium and Zinc.", "Low acidity oleic acid."],
      zh: ["维生素 A、D、E 及 K", "钙、磷、镁与锌", "超低酸度优质油酸与健康单不饱和脂肪酸"],
    },
  },
];

/**
 * Catálogo íntegro y exacto de Importaciones extraído de /copia-de-productos
 */
export const IMPORT_CATALOG = [
  {
    id: "import-mineria",
    sector: { es: "Minería", en: "Mining Sector", zh: "矿业重工板块" },
    headline: {
      es: "Diferentes equipos y accesorios para el desarrollo de la minería Chilena",
      en: "Various equipment and accessories for the development of Chilean mining",
      zh: "助力智利铜矿与矿山产业发展的专用重型设备与配件",
    },
    subcategories: [
      {
        title: { es: "Filtros de Minería Pesada", en: "Heavy Mining Filters", zh: "重载大口径工业滤芯" },
        desc: {
          es: "Filtros de aire, aceite, combustible e hidráulico para maquinaria pesada de la gran minería.",
          en: "Air, oil, fuel and hydraulic filtration for heavy machinery in large-scale mining operations.",
          zh: "针对大型露天及地下矿山作业重型机械的机油、燃油、空滤与液压滤清器。",
        },
      },
      {
        title: { es: "Equipos de Excavación", en: "Excavation Equipment", zh: "开挖机械配套" },
        desc: {
          es: "Filtros para excavadoras, retroexcavadoras; Filtros para bulldozer.",
          en: "Filters for excavators, backhoes, and heavy bulldozers.",
          zh: "全系适配挖掘机、轮式反铲机及重型推土机专用滤芯总成。",
        },
      },
      {
        title: { es: "Equipos de Rellenos", en: "Compaction & Fill Equipment", zh: "筑坝与回填设备配套" },
        desc: {
          es: "Filtros para moto rodillo; filtros para camiones aljibes.",
          en: "Filters for single drum rollers and water tank sprinkler trucks.",
          zh: "振动压路机与矿用大容积洒水喷水车专用滤芯。",
        },
      },
      {
        title: { es: "Equipos de Transportes", en: "Haulage & Transport", zh: "矿石运载机械配套" },
        desc: {
          es: "Filtros para cargador frontal; Filtros para tolvas mineras.",
          en: "Filters for front wheel loaders and heavy mining dump bodies/hoppers.",
          zh: "大型前置轮式装载机与自卸卡车矿斗液压系统滤清备件。",
        },
      },
    ],
  },
  {
    id: "import-tecnologia",
    sector: { es: "Tecnología", en: "Technology & Clean Energy", zh: "高新科技与环保板块" },
    headline: {
      es: "Energía limpia y purificación de aguas",
      en: "Clean energy and water purification systems",
      zh: "清洁能源与水资源净化处理系统",
    },
    subcategories: [
      {
        title: { es: "Fuentes de Energía Limpia", en: "Clean Energy Sources", zh: "新能源发电装备" },
        desc: {
          es: "Paneles solares fotovoltaicos e inversores de alto rendimiento.",
          en: "High-efficiency photovoltaic solar panels and grid inverters.",
          zh: "高效单晶硅太阳能电池组件及工商业配套储能逆变装备。",
        },
      },
      {
        title: { es: "Purificación de Aguas", en: "Water Purification", zh: "智能化水净化系统" },
        desc: {
          es: "Tratamientos de aguas servidas de uso doméstico; Tratamientos de aguas para cultivos agrícolas.",
          en: "Domestic wastewater treatment plants; Agricultural irrigation water treatment systems.",
          zh: "城镇与生活污水深度净化处理系统；现代农业水肥一体化高效灌溉水质处理成套装置。",
        },
      },
    ],
  },
  {
    id: "import-automotriz",
    sector: { es: "Automotriz", en: "Automotive Fleet", zh: "汽车与物流车队板块" },
    headline: {
      es: "Diferentes repuestos y accesorios para camiones y vehículos livianos",
      en: "Various spare parts and accessories for trucks and light commercial vehicles",
      zh: "轻重型商用卡客车及车队配件与消耗件集采",
    },
    subcategories: [
      {
        title: { es: "Camiones de Trabajo", en: "Heavy Commercial Trucks", zh: "重载工程运输卡车" },
        desc: {
          es: "Filtros de aceite, aire, combustible, hidráulico; Neumáticos radiales para flotas.",
          en: "Oil, air, fuel, and hydraulic filters; Radial fleet tires.",
          zh: "全车润滑、燃油、进气与液压滤清套件，配套耐磨全钢子午线卡客车轮胎。",
        },
      },
      {
        title: { es: "Vehículos Livianos", en: "Light Fleet & Commercial", zh: "轻型货运与乘用车辆" },
        desc: {
          es: "Accesorios en general, filtros de reemplazo y neumáticos certificados.",
          en: "General automotive accessories, replacement filters and certified tires.",
          zh: "通用汽摩配件、快换易损耗滤清组件及高品质规格轮胎。",
        },
      },
    ],
  },
  {
    id: "import-pet",
    sector: { es: "Mascotas (PET)", en: "PET Care & Veterinary", zh: "宠物健康与动物医疗板块" },
    headline: {
      es: "Accesorios y línea de aseo para mascotas, con equipos veterinarios de alta tecnología",
      en: "Accessories and grooming lines for pets, alongside high-tech veterinary diagnostic equipment",
      zh: "宠物洗护用品、舒适居所辅件与高科技动物超声影像医疗设备",
    },
    subcategories: [
      {
        title: { es: "Accesorios para Mascotas", en: "Pet Accessories", zh: "居家与出行辅件" },
        desc: {
          es: "Collares reforzados, casas para mascotas y artículos de descanso.",
          en: "Heavy-duty collars, pet houses and resting beds.",
          zh: "高强度牵引颈圈、耐候型宠物房及生活配件。",
        },
      },
      {
        title: { es: "Línea de Aseo", en: "Grooming & Hygiene Line", zh: "天然清洁洗护系列" },
        desc: {
          es: "Jabones especiales, shampoo para mascotas y tratamientos de aseo dérmico.",
          en: "Special soaps, pet shampoos, and dermatological grooming treatments.",
          zh: "温和配方香皂、低敏香波及专业级毛发日常洁护制剂。",
        },
      },
      {
        title: { es: "Equipos Veterinarios de Alta Tecnología", en: "Advanced Veterinary Technology", zh: "数字化兽用高精密仪器" },
        desc: {
          es: "Ecógrafos veterinarios de diagnóstico clínico con sondas multifrecuencia.",
          en: "High-tech veterinary ultrasound scanners with multi-frequency probes.",
          zh: "多功能彩色多普勒数字化兽用超声影像仪（配备微凸与线阵高频探头）。",
        },
      },
    ],
  },
];

/**
 * Catálogo íntegro y exacto de Negocios y Asesoría extraído de /negocios-all
 */
export const ADVISORY_SERVICES: AdvisoryService[] = [
  {
    category: "legal",
    title: {
      es: "Constitución legal de empresas en Chile",
      en: "Legal incorporation of companies in Chile",
      zh: "智利本地公司法律设立登记",
    },
    desc: {
      es: "Gestionar y revisar la constitución de la sociedad con los objetos sociales, participación societaria, modelo de tributación en Chile, etc.",
      en: "Structuring corporate bylaws, business purposes, shareholding distribution, and tax framework in Chile.",
      zh: "全套统筹智利法人实体（SpA/SRL）公司章程起草、经营宗旨界定、股权架构分配与属地税务模型备案。",
    },
  },
  {
    category: "legal",
    title: {
      es: "Ventajas y Desventajas de las Inversiones Extranjeras",
      en: "Pros & Cons of Foreign Capital Investment in Chile",
      zh: "外国资本入境智利实操评估报告",
    },
    desc: {
      es: "Informe de aplicación práctica del ingreso de capitales extranjeros en Chile.",
      en: "Practical advisory report on foreign capital influx, foreign exchange regulations, and repatriations.",
      zh: "针对外国资本跨境进出智利、外汇清算与投资保护协定出具专项实操指导报告。",
    },
  },
  {
    category: "legal",
    title: {
      es: "Redacción de Contratos en Chile",
      en: "Contract Drafting & Harmonization in Chile",
      zh: "智利本土商事合同草拟与法律审查",
    },
    desc: {
      es: "Revisión de las cláusulas estipuladas en los contratos y ajustes legales a las normas chilenas.",
      en: "Reviewing contractual clauses and adjusting terms to strict Chilean commercial legal standards.",
      zh: "深度审查中外贸易及工程合同关键条款，确保完全契合智利民商法与涉外经贸特别法规。",
    },
  },
  {
    category: "legal",
    title: {
      es: "Asesorías de fusiones con empresas Chilenas",
      en: "M&A Advisory with Chilean Enterprises",
      zh: "智利本土企业并购重组专项法律顾问",
    },
    desc: {
      es: "Informe de Beneficios y ventajas legales sobre la fusión con una empresa chilena.",
      en: "Legal benefits, corporate structuring and regulatory advantages report for mergers in Chile.",
      zh: "出具与智利企业战略合并、参股重组的法定义务、反垄断评估与法定权益分析报告。",
    },
  },
  {
    category: "legal",
    title: {
      es: "Due Diligence en compras de Sociedades Chilenas",
      en: "Due Diligence for Chilean Acquisitions",
      zh: "收购智利目标企业法律财务尽职调查",
    },
    desc: {
      es: "Informe de las desventajas y ventajas financieras, legales en la adquisición de empresas en Chile.",
      en: "Comprehensive report highlighting legal and financial risks and advantages of buying Chilean entities.",
      zh: "全面出具收购智利既有实体在财务负债、劳工纠纷、环保合规与商业合同领域的深度尽调穿透报告。",
    },
  },
  {
    category: "tributaria",
    title: {
      es: "Consultoría en regímenes tributarios en Chile",
      en: "Tax Regime Advisory in Chile",
      zh: "智利国税局税收法定体制专项咨询",
    },
    desc: {
      es: "Elaboración de informe del régimen tributario apropiado al modelo de Negocio constituido en Chile.",
      en: "Determining the optimal corporate tax regime suited to the client's business model in Chile.",
      zh: "针对在智设立的实体业务形态，科学规划匹配最为优惠的一般半集成制或小微企业简易计税体制。",
    },
  },
  {
    category: "tributaria",
    title: {
      es: "Elaboración de informes de tributación Chilena en nuevos negocios",
      en: "Chilean Tax Optimization in New Ventures",
      zh: "新办跨境业务税务激励与红利分析报告",
    },
    desc: {
      es: "Informe de análisis de beneficios tributarios en la creación de nuevos negocios en Chile.",
      en: "Analysis of fiscal incentives, depreciation schemes and trade treaty benefits for new startups in Chile.",
      zh: "深度测算新项目在固定资产加速折旧、自贸区优惠及避免中智双重征税协定下的综合节税空间。",
    },
  },
  {
    category: "tributaria",
    title: {
      es: "Auditoría tributaria en adquisiciones de empresas Chilenas",
      en: "Tax Audit on Chilean M&A Targets",
      zh: "企业并购目标方历史税务合规审计",
    },
    desc: {
      es: "Elaboración del marco tributario y legal actual de la empresa que se está adquiriendo.",
      en: "Auditing historical tax liabilities, withholdings and compliance posture of target companies.",
      zh: "全面清查被收购企业历年国税申报留抵、预缴税款及潜在税务处罚敞口，厘清历史资产权属。",
    },
  },
  {
    category: "evaluacion",
    title: {
      es: "Preparación y Evaluación de Proyectos & Planes de Negocios",
      en: "Project Evaluation, Strategic Planning & Business Models",
      zh: "商业项目可行性评估与商业计划书构建",
    },
    desc: {
      es: "Planificación Estratégica, Plan de Negocios, Modelo de Negocios y Terms Sheet para negociaciones internacionales.",
      en: "Strategic planning, business modeling, market viability and Term Sheet structuring for bilateral ventures.",
      zh: "编制符合跨国资本审阅要求的商业模式画布、财务回报模型、投资备忘录（Term Sheet）及战略演进规划。",
    },
  },
  {
    category: "evaluacion",
    title: {
      es: "Estudios de Mercado e Informe Benchmarking",
      en: "Market Intelligence & Benchmarking Reports",
      zh: "目标市场调研与多维对标分析报告",
    },
    desc: {
      es: "Estudios de mercado locales e internacionales, benchmarking de competidores, identidad y posicionamiento de marca.",
      en: "Local and transpacific market research, competitor benchmarking, brand identity and go-to-market positioning.",
      zh: "针对智利与亚洲两地开展竞争对手供应链、价格带、客群心智与本土品牌定位的多维度实证调研。",
    },
  },
  {
    category: "comex",
    title: {
      es: "Asesoría en Importación / Exportación (Latinoamérica-Asia)",
      en: "Cross-Border Trade Advisory (Latam - Asia)",
      zh: "拉美与亚洲双边进出口通关全案咨询",
    },
    desc: {
      es: "Gestión arancelaria TLC Chile-China, tramitación aduanera y cumplimiento fitosanitario SAG/SERNAPESCA.",
      en: "FTA tariff exemptions, customs agency clearance, and SAG/SERNAPESCA sanitary protocols.",
      zh: "全流程统筹原产地零关税证书申报、海关报关放行协同以及农牧动植检验疫准入报批。",
    },
  },
  {
    category: "comex",
    title: {
      es: "Asesoría en Logística y Transporte Multimodal",
      en: "Logistics & Multimodal Maritime Transport",
      zh: "跨太平洋海运调度与门到门物流规划",
    },
    desc: {
      es: "Consolidación de carga, reserva de bodegas en navieras del Pacífico, fletes marítimos y transporte terrestre hasta destino.",
      en: "Cargo consolidation, transpacific ocean freight bookings, container telemetry and ground haulage to plant.",
      zh: "整柜与拼箱集装箱舱位预订、太平洋快航船期锁定、在途温控追踪及智利境内重载车队陆运直达目的地。",
    },
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: {
      es: "Diagnóstico y Validación de Origen",
      en: "Diagnosis & Source Verification",
      zh: "需求诊断与源头资质验证",
    },
    desc: {
      es: "Evaluamos la viabilidad técnica, aranceles TLC Chile-China y validamos legalmente a las contrapartes comerciales antes de cualquier desembolso.",
      en: "We review technical feasibility, FTA tariffs and legally audit counterpart credentials before any capital commitment.",
      zh: "全面评估产品技术准入规范、中智自贸协定零关税减免代码，并在签约付汇前完成商业实体真实性穿透审查。",
    },
    deliverable: {
      es: "Informe de Factibilidad y Costos Landed",
      en: "Feasibility & Landed Cost Report",
      zh: "到岸成本测算与合规准入评估书",
    },
  },
  {
    step: "02",
    title: {
      es: "Inspección Técnica y Control de Calidad",
      en: "Technical Inspection & Quality Control",
      zh: "实体勘验与技术品质管控",
    },
    desc: {
      es: "Auditamos la producción en planta o en huerto. En exportaciones supervisamos cadena de frío y SAG; en importaciones, pruebas de laboratorio y estanqueidad.",
      en: "We inspect on-site production lines or orchards. Enforcing cold chains for agro exports and lab tolerance tests for industrial imports.",
      zh: "出厂前现场查验：农水产品严控产地采摘与连续冷链，工业机电耗材执行微观公差与耐压密封实测。",
    },
    deliverable: {
      es: "Certificado de Inspección Pre-Embarque",
      en: "Pre-Shipment Inspection Certificate",
      zh: "装船前品质检验报告（PSI）",
    },
  },
  {
    step: "03",
    title: {
      es: "Contratación Internacional y Agenciamiento",
      en: "International Contracts & Customs Agency",
      zh: "国际商事合同与双向报关",
    },
    desc: {
      es: "Elaboramos contratos mercantiles bilingües con el respaldo legal de Holding Sarrazin, seguros de carga marítima y despacho aduanero documental.",
      en: "Drafting bilingual sales contracts under Holding Sarrazin legal counsel, marine cargo insurance, and customs documentation.",
      zh: "由萨拉津法务团队把关出具双语商事贸易合同、投保全险海运一切险，并提前申报单证以实现秒级放行。",
    },
    deliverable: {
      es: "Contrato Mercantil & Póliza de Seguro",
      en: "Commercial Contract & Cargo Policy",
      zh: "具有法律约束力的商事合同与全程保险单",
    },
  },
  {
    step: "04",
    title: {
      es: "Tránsito Marítimo y Trazabilidad Transpacífica",
      en: "Transpacific Maritime Transit & Tracking",
      zh: "跨太平洋海运调度与全程监控",
    },
    desc: {
      es: "Monitoreo satelital 24/7 de la nave y estado de los contenedores (reefer o dry) a lo largo del corredor Valparaíso/San Antonio ⇄ Shanghai/Ningbo.",
      en: "24/7 satellite vessel tracking and container telemetry (reefer/dry) along the primary Chile-China shipping lane.",
      zh: "自智利瓦尔帕莱索/圣安东尼奥港至上海/宁波港，对冷藏柜温度数据及干散货船期实行卫星在线监控。",
    },
    deliverable: {
      es: "Conocimiento de Embarque (B/L) y Telemetría",
      en: "Bill of Lading (B/L) & Live Telemetry",
      zh: "正本海运提单（B/L）与货柜轨迹追溯",
    },
  },
  {
    step: "05",
    title: {
      es: "Despacho Aduanero y Entrega en Destino",
      en: "Customs Clearance & Final Delivery",
      zh: "海关放行与门到门目的地交付",
    },
    desc: {
      es: "Gestión directa ante aduanas y organismos fitosanitarios para la internación legal expedita y transporte terrestre hasta la faena o bodega final.",
      en: "Direct coordination with customs and sanitary agencies for rapid port release and final-mile ground delivery to plant or warehouse.",
      zh: "协同港口查验与动植物检疫放行，安排重型运力陆运直抵矿区客户车间或进口商专属保税仓库。",
    },
    deliverable: {
      es: "Declaración de Ingreso (DIN) / DUS y Acta de Recepción",
      en: "Customs Entry/Export Declaration & Delivery Receipt",
      zh: "进口报关单（DIN/DUS）与收货核验回执",
    },
  },
];

export const FAQS = [
  {
    tag: "Aduanas & Aranceles",
    q: {
      es: "¿Cómo beneficia el Tratado de Libre Comercio (TLC) Chile–China a mis operaciones?",
      en: "How does the Chile–China Free Trade Agreement benefit my business?",
      zh: "中智自由贸易协定（FTA）为双边经贸带来哪些实质关税红利？",
    },
    a: {
      es: "Gracias al TLC vigente, más del 97% de los productos intercambiados entre Chile y China ingresan con arancel 0%, siempre que se acredite el Certificado de Origen oficial (Form F). En Asia Export estructuramos la documentación para asegurar la aplicación efectiva de este beneficio tributario.",
      en: "Over 97% of traded goods between Chile and China enter duty-free (0% tariff) when backed by an official Form F Certificate of Origin. Asia Export verifies and prepares all documentation to ensure zero tariff qualification.",
      zh: "根据深化后的《中智自贸协定》，中智两国超过97%税目的进出口商品实行零关税准入。关键在于精准出具官方原产地证书（Form F）。Asia Export 提供全程单证审核与申报归类，确保企业足额享受零关税减免。",
    },
  },
  {
    tag: "Tiempos & Rutas",
    q: {
      es: "¿Cuánto demora el tránsito marítimo de un contenedor entre Chile y China?",
      en: "What is the typical maritime transit time for containers between Chile and China?",
      zh: "智利与中国主要港口之间的海运直航航程通常需要多少天？",
    },
    a: {
      es: "El tiempo de navegación marítima directa entre los puertos chilenos (Valparaíso o San Antonio) y los puertos de China (Shanghai, Ningbo, Qingdao o Shenzhen) varía entre 24 y 32 días de navegación, dependiendo del servicio contratado (directo express o con recaladas intermedias en el Pacífico).",
      en: "Direct ocean transit between Chilean ports (Valparaíso / San Antonio) and major Asian hubs (Shanghai, Ningbo, Qingdao, Shenzhen) averages between 24 and 32 sailing days, depending on carrier routing and transshipment stops.",
      zh: "智利核心港口（瓦尔帕莱索或圣安东尼奥）至中国核心口岸（上海、宁波、深圳、青岛）的集装箱快航海运时间一般在24天至32天之间，根据快线直达或中转停靠略有差异。",
    },
  },
  {
    tag: "Filtros & Minería",
    q: {
      es: "¿Qué garantías técnicas ofrecen en la importación de repuestos y filtros para faenas mineras?",
      en: "What technical assurances are provided for heavy mining equipment filters and spare parts?",
      zh: "进口重型矿山机械过滤设备与工程备件具备哪些质量保障？",
    },
    a: {
      es: "Todos los filtros de gran minería provienen de fábricas certificadas con normas ISO 9001 e IATF 16949, sometidos a pruebas de colapso por presión diferencial y eficiencia de retención de micropartículas. Entregamos fichas técnicas de homologación compatibles con especificaciones Komatsu, Caterpillar y Liebherr.",
      en: "All industrial filters originate from ISO 9001 and IATF 16949 accredited manufacturing facilities, thoroughly tested for differential collapse pressure and micron retention. Each batch is backed by technical conformity data sheets.",
      zh: "全部矿用备件源自通过 ISO 9001 及 IATF 16949 认证的专业主机配套厂，每批次提供压差爆破测试及微米级过滤效率实验室检验报告，与卡特彼勒、小松、利勃海尔原厂参数严格互换。",
    },
  },
  {
    tag: "Exportación Agro",
    q: {
      es: "¿Cómo garantizan el cumplimiento de los protocolos fitosanitarios chinos (GACC) para frutas?",
      en: "How do you ensure Chinese GACC phytosanitary compliance for fruit exports?",
      zh: "如何确保出口中国的鲜果与坚果符合中国海关总署（GACC）严苛的动植检标准？",
    },
    a: {
      es: "Trabajamos exclusivamente con huertos y packing inscritos y autorizados por el Servicio Agrícola y Ganadero (SAG) y registrados en el sistema CIFER de la Administración General de Aduanas de China (GACC). Se realizan auditorías de trazabilidad de plagas y registro de frío digital ininterrumpido.",
      en: "We coordinate solely with packing houses certified by SAG and registered within China's GACC CIFER platform, carrying out strict quarantine audits and uninterrupted digital reefer cold records.",
      zh: "我们仅联营经智利农牧局（SAG）审定并完成中国海关总署 CIFER 境外生产注册的名录果园与包装厂，严格落实田间检疫规程并在集装箱内植入官方校准温度传感器，实现通关零滞纳。",
    },
  },
  {
    tag: "Legal & Holding Sarrazin",
    q: {
      es: "¿Qué respaldo aporta el Holding Sarrazin a las operaciones de Asia Export?",
      en: "What institutional backing does Holding Sarrazin provide to Asia Export?",
      zh: "萨拉津控股（Holding Sarrazin）为 Asia Export 提供怎样的合规背书与法务支持？",
    },
    a: {
      es: "Holding Sarrazin aporta más de una década y media de solidez corporativa en Chile, con abogados tributarios, auditores comerciales y una oficina física consolidada en Las Condes, Santiago. Esto permite otorgar garantías fiduciarias, representación legal sólida y seguridad patrimonial a inversionistas internacionales.",
      en: "Holding Sarrazin delivers over 15 years of institutional presence in Chile, featuring corporate tax attorneys, financial auditors, and established headquarters in Las Condes, Santiago, offering cross-border fiduciary security.",
      zh: "萨拉津控股集团在智利拥有十余年卓越商业信誉，汇聚执业律师、注册税务师与跨国审计师团队，圣地亚哥拉斯孔德斯核心商务区设有常设实体办公中心，为外贸与跨国投资提供坚实的法律护航与资产风控。",
    },
  },
  {
    tag: "Cotizaciones B2B",
    q: {
      es: "¿Cuál es el volumen mínimo para solicitar una cotización de importación o exportación?",
      en: "What is the minimum cargo threshold to request an import or export quote?",
      zh: "申请大宗进出口咨询或订制外贸方案的起运门槛是什么？",
    },
    a: {
      es: "Atendemos operaciones B2B desde cargas consolidadas LCL (Less than Container Load) en insumos de alta tecnología o repuestos críticos, hasta embarques de múltiples contenedores completos FCL (Full Container Load) en productos agroindustriales, minería o automotriz.",
      en: "We serve B2B clients starting from consolidated LCL cargo for high-tech spares and veterinary instrumentation, up to regular multi-container FCL programs for agricultural and industrial operations.",
      zh: "我们面向企业级客户，支持从高精密设备或紧缺矿山滤清配件的小批量拼箱（LCL），到大宗农水产品与矿用耗材的长协整柜（FCL）多箱联动发运。",
    },
  },
];


export const SERVICES: ServiceItem[] = [
  {
    id: "export-frutas",
    category: "export",
    categoryLabel: { es: "Exportación", en: "Export", zh: "出口业务" },
    title: {
      es: "Frutas Frescas y Deshidratadas Chilenas",
      en: "Chilean Fresh & Dried Fruits",
      zh: "智利优质鲜果及果干制品",
    },
    shortDesc: {
      es: "Maní, almendras, avellanas, lúcuma, ciruelas, uvas, damascos, paltas, manzanas y arándanos cosechados directamente en origen.",
      en: "Peanuts, almonds, hazelnuts, lucuma, prunes, table grapes, apricots, avocados, apples and blueberries directly from origin.",
      zh: "坚果、西梅干、鲜食葡萄、牛油果、高山蓝莓及特色蛋黄果产地直采出口。",
    },
    fullDesc: {
      es: "Somos proveedores de alimentos naturales. Abastecemos a las familias de mercados asiáticos, usando nuestra logística, experiencia y recursos para mejorar la calidad de vida de las personas en forma saludable, extraídos directamente desde su origen sin alterar sus propiedades naturales.",
      en: "Supplying natural healthy foods harvested directly from origin to Asian markets without altering nutritional qualities.",
      zh: "源头直采纯天然健康食品，全程保持纯正营养，通过专业跨国供应链稳定供应亚洲各大枢纽口岸。",
    },
    items: {
      es: [
        "Maní (Vitamina E, niacina, cistina, tiamina, B6, fibra y proteína)",
        "Almendras (Vitamina E, B1, B2, magnesio, hierro, potasio, calcio)",
        "Avellanas (Vitamina E, A, ácido fólico, calcio y magnesio)",
        "Lúcuma (Vitamina B, C, B3, fibra, hierro, caroteno y niacina)",
        "Ciruela deshidratada (Vitamina C, A, E, B3, potasio, calcio, hierro, magnesio)",
        "Uva de mesa (Vitamina C, B, ácido fólico, fibra, fósforo y potasio)",
        "Palta y Arándanos (Vitamina C, antioxidantes, potasio y fibra)",
      ],
      en: [
        "Peanuts (Vitamin E, Niacin, B6, fiber and protein)",
        "Almonds (Vitamin E, B1, B2, magnesium, iron, calcium)",
        "Hazelnuts (Vitamin E, A, folic acid, magnesium)",
        "Lucuma (Vitamin B, C, carotene, niacin)",
        "Prunes (Vitamin C, A, E, potassium, iron)",
        "Table Grapes, Avocados and Blueberries (Antioxidants, minerals)",
      ],
      zh: [
        "花生、杏仁与欧洲榛子（富含维生素 E、B族与微量矿物）",
        "智利西梅干与天然蛋黄果（膳食纤维、铁、胡萝卜素）",
        "鲜食葡萄、牛油果及高山蓝莓（抗氧化花青素群）",
      ],
    },
    compliance: {
      es: "Certificación SAG, registro CIFER en aduana china GACC y protocolo de atmósfera controlada.",
      en: "SAG certification, China GACC CIFER compliance and controlled-atmosphere protocols.",
      zh: "智利SAG检疫出证、海关总署CIFER境外准入与全程气调保鲜。",
    },
  },
  {
    id: "export-mariscos",
    category: "export",
    categoryLabel: { es: "Exportación", en: "Export", zh: "出口业务" },
    title: {
      es: "Mariscos, Crustáceos y Algas del Pacífico",
      en: "Pacific Seafood & Marine Resources",
      zh: "太平洋野生海产与深海藻类",
    },
    shortDesc: {
      es: "Camarones, jibia (calamar gigante) y cochayuyo chileno de aguas frías.",
      en: "Cold-water shrimps, giant squid (jibia) and pristine cochayuyo seaweed.",
      zh: "智利野生冷水海虾、巨型大鱿鱼（Jibia）及纯天然公牛藻（Cochayuyo）。",
    },
    fullDesc: {
      es: "Extracción y comercialización directa de camarones, tubos/aletas de jibia y cochayuyo chileno, ricos en proteínas de alto valor biológico, Omega 3, yodo y minerales oceánicos esenciales.",
      en: "Direct harvesting and export of wild-caught shrimps, giant squid, and mineral-dense cochayuyo algae.",
      zh: "直供富含天然深海 Omega-3、海洋活性碘与高纯度蛋白质的纯野生远洋海产品及功能性藻类原料。",
    },
    items: {
      es: [
        "Camarones (Vitaminas B, E, D, proteínas de alto valor, Omega 3, zinc y selenio)",
        "Jibia (Vitaminas A, B, E, selenio, calcio y yodo, cero grasa)",
        "Cochayuyo (Vitaminas A, B, C, D, E, ácido fólico, yodo, magnesio y calcio)",
      ],
      en: [
        "Cold-water shrimps (High protein, Omega 3, Zinc, Selenium)",
        "Giant squid (Vitamin A, B, E, Iodine, zero fat)",
        "Cochayuyo seaweed (Vitamins, Folic acid, Magnesium, Iodine)",
      ],
      zh: [
        "冷水海虾（优质蛋白、深海Omega-3、锌、硒）",
        "巨型大鱿鱼（纯蛋白、零脂肪、天然海洋碘）",
        "公牛藻/海茸（微量元素、叶酸、钙镁碘平衡）",
      ],
    },
    compliance: {
      es: "Inspección SERNAPESCA, autorización de planta procesadora y cadena de frío ininterrumpida.",
      en: "SERNAPESCA inspection, certified processing plants and uninterrupted cold chain.",
      zh: "智利国家渔业局检验合格、已注册冷链加工船期直发。",
    },
  },
  {
    id: "export-vinos-aceite",
    category: "export",
    categoryLabel: { es: "Exportación", en: "Export", zh: "出口业务" },
    title: {
      es: "Vinos Chilenos y Aceite de Oliva Extra Virgen",
      en: "Chilean Reserve Wines & Extra Virgin Olive Oil",
      zh: "智利名庄葡萄酒与特级初榨橄榄油",
    },
    shortDesc: {
      es: "Vinos varietales, reserva e iconos chilenos y aceite de oliva virgen extra de acidez mínima.",
      en: "Reserve and icon Chilean wines, alongside extra virgin olive oil of superior acidity grade.",
      zh: "智利法定产区珍藏佳酿及超低酸度物理冷榨特级初榨橄榄油。",
    },
    fullDesc: {
      es: "Selección de viñas y productoras de aceite de oliva en valles centrales chilenos para exportación hacia mercados asiáticos, con certificado de origen Form F bajo TLC Chile-China.",
      en: "Curated export program for boutique Chilean wineries and olive estates with Form F 0% tariff certification.",
      zh: "面向亚洲中高端市场，统筹原产地零关税证书申办、法定背标审核与恒温集装箱海运保护。",
    },
    items: {
      es: [
        "Vinos chilenos (Vitaminas C y B, potasio, calcio, magnesio, hierro, polifenoles)",
        "Aceite de oliva extra virgen (Vitaminas A, D, E, K, calcio, fósforo, magnesio y zinc)",
        "Licores y destilados finos chilenos",
      ],
      en: [
        "Chilean reserve and icon wines (Polyphenols, resveratrol, minerals)",
        "Extra virgin olive oil (Vitamins A, D, E, K, oleic acid)",
        "Chilean traditional liqueurs and spirits",
      ],
      zh: [
        "智利经典红白葡萄酒（单宁、白藜芦醇多酚活性）",
        "特级初榨橄榄油（超低酸度、单不饱和脂肪酸）",
        "智利传统精酿利口酒与烈酒",
      ],
    },
    compliance: {
      es: "Certificado de Origen TLC Form F (0% arancel aduanero) y análisis enológico oficial.",
      en: "Form F Free Trade Agreement Certificate of Origin (0% tariff) and official lab analysis.",
      zh: "中智自贸协定零关税原产地证书（Form F）及官方理化分析检验证明。",
    },
  },
  {
    id: "import-mineria",
    category: "import",
    categoryLabel: { es: "Importación", en: "Import", zh: "进口业务" },
    title: {
      es: "Filtros y Maquinaria Pesada para Gran Minería",
      en: "Heavy Mining Machinery & Industrial Filters",
      zh: "大矿山重载机械滤清器与成套工业配件",
    },
    shortDesc: {
      es: "Filtros de aire, aceite, combustible e hidráulico para excavación, rellenos y transportes.",
      en: "Air, lube, fuel and hydraulic filtration for excavation, compaction and haulage rigs.",
      zh: "矿用开挖机械、回填压路设备与大吨位运载车辆多路滤清耗材直采。",
    },
    fullDesc: {
      es: "Diferentes equipos y accesorios para el desarrollo de la minería Chilena: filtros para excavadoras, retroexcavadoras, bulldozer, moto rodillo, camiones aljibes, cargadores frontales y tolvas mineras.",
      en: "Specialized equipment and consumables for Chilean open-pit and underground mining operations.",
      zh: "专为智利大中型矿山现场供应挖掘机、推土机、压路机、洒水车、装载机与自卸卡车专用耐磨耐压滤芯。",
    },
    items: {
      es: [
        "Equipos de excavación: Filtros para excavadoras, retroexcavadoras y bulldozer",
        "Equipos de rellenos: Filtros para moto rodillo y filtros para aljibes",
        "Equipos de transportes: Filtros para cargador frontal y filtros para tolvas",
        "Filtros de aire, aceite, combustible e hidráulico de alta retención",
      ],
      en: [
        "Excavation rigs: Filters for excavators, backhoes, and bulldozers",
        "Compaction units: Filters for single drum rollers and water tank trucks",
        "Haulage machines: Filters for wheel loaders and mining hoppers",
        "Heavy-duty micro-retention hydraulic and lube filtration",
      ],
      zh: [
        "开挖设备：挖掘机、反铲机与重型推土机滤清器",
        "回填设备：振动压路机与大容量洒水车滤清器",
        "运输设备：装载机与大吨位矿斗液压滤清器",
        "多级机油、燃油脱水与微米级液压油滤芯总成",
      ],
    },
    compliance: {
      es: "Certificación ISO 9001/IATF 16949 de fábrica, homologación técnica y resistencia a alta presión.",
      en: "ISO 9001/IATF 16949 certified, pressure burst tested and OEM compatible.",
      zh: "出厂严格具备 ISO 9001 及 IATF 16949 质检体系认证，耐高压爆破实测报告。",
    },
  },
  {
    id: "import-tecnologia",
    category: "import",
    categoryLabel: { es: "Importación", en: "Import", zh: "进口业务" },
    title: {
      es: "Energía Limpia y Purificación de Aguas",
      en: "Clean Energy & Water Purification Systems",
      zh: "光伏太阳能与水净化处理成套系统",
    },
    shortDesc: {
      es: "Fuentes de energía solar fotovoltaica y plantas de tratamiento de aguas domésticas y agrícolas.",
      en: "Solar PV generation modules and treatment plants for domestic and agricultural wastewater.",
      zh: "高效光伏组件及面向市政生活与现代农业灌溉的水资源净化装置。",
    },
    fullDesc: {
      es: "Fuentes de energía: paneles solares fotovoltaicos. Purificación de aguas: tratamientos de aguas servidas de uso doméstico y tratamientos de aguas para cultivos agrícolas.",
      en: "Solar PV solutions and industrial water purification plants engineered for agricultural yields and industrial sites.",
      zh: "一站式引进亚洲光伏组件、离网储能设备及集装箱式反渗透水净化系统，助力智利工农业绿色低碳转型。",
    },
    items: {
      es: [
        "Fuentes de energía: Paneles solares monocristalinos e inversores",
        "Purificación de aguas: Tratamientos de aguas servidas de uso doméstico",
        "Tratamientos de aguas para cultivos agrícolas y sistemas de riego tecnificado",
      ],
      en: [
        "Power generation: Solar photovoltaic modules and inverters",
        "Domestic sanitary wastewater treatment plants",
        "Agricultural crop irrigation water purification systems",
      ],
      zh: [
        "新能源板块：高效单晶硅太阳能电池组件及并网逆变器",
        "水处理板块：生活及生活污水达标深度净化系统",
        "农业水肥配套：现代果园节水灌溉水质改善处理装置",
      ],
    },
    compliance: {
      es: "Homologación eléctrica SEC de Chile y normativas sanitarias de calidad de agua.",
      en: "Chilean SEC electrical compliance and national water sanitation standards.",
      zh: "具备智利国家电力与燃油监管局（SEC）电气安全准入及卫生水质标准。",
    },
  },
  {
    id: "import-automotriz",
    category: "import",
    categoryLabel: { es: "Importación", en: "Import", zh: "进口业务" },
    title: {
      es: "Repuestos, Filtros y Neumáticos para Flotas",
      en: "Tires, Filters & Fleet Automotive Spares",
      zh: "商用车轮胎、滤芯与机电辅件集采",
    },
    shortDesc: {
      es: "Diferentes repuestos y accesorios para camiones de trabajo y vehículos livianos.",
      en: "Spare parts, filtration sets and certified radial tires for truck and commercial vehicle fleets.",
      zh: "针对重型运载卡客车与轻型商业车队的全套滤清、轮胎与易损配件。",
    },
    fullDesc: {
      es: "Filtros de aceite, aire, combustible, hidráulico para camiones de trabajo y vehículos livianos. Camiones de trabajo: filtros y neumáticos. Vehículos livianos: accesorios en general, filtros y neumáticos.",
      en: "Turnkey consumable fleet supplies: engine and hydraulic filters, commercial radial tires (TBR/OTR) and mechanical accessories.",
      zh: "全车润滑、进气、燃油与液压滤清组件，适配重型工程卡车全钢子午线轮胎（TBR/OTR）及轻型商用车通用配件。",
    },
    items: {
      es: [
        "Camiones de trabajo: Filtros de aceite, aire, combustible, hidráulico y neumáticos",
        "Vehículos livianos: Accesorios en general, filtros de reemplazo y neumáticos",
        "Kits de mantenimiento programado para flotas de transporte terrestre",
      ],
      en: [
        "Work trucks: Oil, air, fuel, hydraulic filters and heavy tires",
        "Light vehicles: General accessories, replacement filters and tires",
        "Scheduled maintenance packages for commercial haulage fleets",
      ],
      zh: [
        "重载卡车：机油、空滤、燃油、液压系统滤清器及专用轮胎",
        "轻型车队：全车常规配件、易耗滤芯及高耐磨规格轮胎",
        "物流车队定期维护保养综合零配件直供方案",
      ],
    },
    compliance: {
      es: "Certificación 3CV del Ministerio de Transportes y Telecomunicaciones de Chile.",
      en: "3CV homologation from Chile's Ministry of Transport and Telecommunications.",
      zh: "通过智利交通与电信部 3CV 官方机动车配件安全备案认证。",
    },
  },
  {
    id: "import-pet",
    category: "import",
    categoryLabel: { es: "Importación", en: "Import", zh: "进口业务" },
    title: {
      es: "Línea PET y Equipos Veterinarios de Alta Tecnología",
      en: "Pet Care Products & Advanced Veterinary Diagnostic Tech",
      zh: "宠物洗护生活精品与高科技兽用超声医疗设备",
    },
    shortDesc: {
      es: "Accesorios, línea de aseo para mascotas y ecógrafos veterinarios de diagnóstico clínico.",
      en: "Pet accessories, grooming lines and high-tech clinical veterinary ultrasound scanners.",
      zh: "专业级兽用彩色超声影像仪，以及宠物牵引、耐用居所与洗护清洁精品。",
    },
    fullDesc: {
      es: "Accesorios y línea de aseo para mascotas: collares, casas para mascotas. Línea de aseo: jabones, shampoo, tratamientos de aseo. Equipos veterinarios de alta tecnología: ecógrafos con sondas multifrecuencia.",
      en: "Veterinary clinical instrumentation alongside pet grooming products: soaps, shampoos, collars, and durable pet houses.",
      zh: "引进数字化便携与推车式兽用超声影像诊疗仪，并配套供应温和配方香皂、洗发水及耐用型宠物生活用品。",
    },
    items: {
      es: [
        "Equipos veterinarios de alta tecnología: Ecógrafos de diagnóstico con sondas",
        "Accesorios para mascotas: Collares reforzados, casas para mascotas",
        "Línea de aseo: Jabones especiales, shampoo para mascotas, tratamientos de aseo",
      ],
      en: [
        "High-tech veterinary equipment: Diagnostic ultrasound scanners",
        "Pet accessories: Collars, durable pet houses",
        "Grooming line: Soaps, shampoos and hygiene treatments",
      ],
      zh: [
        "高科技兽用医疗：多频超声探头数字化影像诊断仪",
        "居家生活辅件：高强度宠物项圈、耐候型宠物房",
        "清洁护理系列：功能性香皂、低敏香波及日常洁护品",
      ],
    },
    compliance: {
      es: "Certificado de calibración de fábrica y compatibilidad técnica médica veterinaria.",
      en: "Factory calibration certificates and veterinary electrical safety validation.",
      zh: "具备出厂精密电气安全检验与专业兽医影像校准报告。",
    },
  },
  {
    id: "advisory-legal-tributaria",
    category: "advisory",
    categoryLabel: { es: "Asesoría Sarrazin", en: "Sarrazin Advisory", zh: "萨拉津专业顾问" },
    title: {
      es: "Asesoría Legal, Tributaria y Constitución de Empresas",
      en: "Legal, Tax & Corporate Structuring in Chile",
      zh: "智利法务、外资税务筹划与公司设立",
    },
    shortDesc: {
      es: "Constitución de sociedades en Chile, redacción de contratos, due diligence y auditorías tributarias.",
      en: "Chilean corporate incorporation, bilingual contract drafting, due diligence, and tax audits.",
      zh: "智利股份公司设立、商事合同审查、并购尽职调查与国税体制深度规划。",
    },
    fullDesc: {
      es: "Gestionar y revisar la constitución de la sociedad con los objetos sociales, participación societaria, modelo de tributación en Chile, etc. Informe de aplicación práctica del ingreso de capitales extranjeros en Chile, redacción de contratos, asesorías de fusiones y due diligence en compras de sociedades chilenas.",
      en: "Comprehensive legal and fiscal stewardship in Chile by Bar-certified attorneys and corporate tax auditors from Holding Sarrazin.",
      zh: "全套统筹智利本地法人设立登记、外国资本入境合规、国际商事合同草拟及企业并购法律与财务尽职调查。",
    },
    items: {
      es: [
        "Constitución legal de empresas en Chile (objetos sociales, participación societaria, modelo de tributación)",
        "Ventajas y desventajas de las inversiones extranjeras (ingreso de capitales en Chile)",
        "Redacción de contratos en Chile (revisión de cláusulas y ajustes a normas chilenas)",
        "Asesorías de fusiones con empresas chilenas y Due Diligence en compras de sociedades",
        "Consultoría en regímenes tributarios en Chile y auditoría tributaria en adquisiciones",
      ],
      en: [
        "Corporate incorporation in Chile (bylaws, shareholding, tax posture)",
        "Foreign direct investment practical guidance report",
        "Bilingual commercial contract drafting adjusted to Chilean law",
        "Mergers & Acquisitions and Due Diligence on Chilean targets",
        "Tax regimes consultancy and historical tax audits",
      ],
      zh: [
        "智利公司设立全案（章程、经营范围、股权架构、税制）",
        "外国资本入境实操指南与外汇清算报告",
        "本土商事采购与工程合同法律适用审查",
        "企业并购重组专项法律与财务尽职调查",
        "国税局税收优惠方案与历史税务合规审计",
      ],
    },
    compliance: {
      es: "Abogados colegiados en Chile y auditores tributarios inscritos en registros oficiales de Holding Sarrazin.",
      en: "Holding Sarrazin Bar-admitted corporate counsel and registered tax CPAs.",
      zh: "由智利国家律师公会执业律师及萨拉津控股注册税务审计专家亲办。",
    },
  },
  {
    id: "advisory-mercado-logistica",
    category: "advisory",
    categoryLabel: { es: "Asesoría Sarrazin", en: "Sarrazin Advisory", zh: "萨拉津专业顾问" },
    title: {
      es: "Evaluación de Negocios, Estudios de Mercado y Comercio Exterior",
      en: "Project Evaluation, Market Research & Logistics",
      zh: "商业项目评估、市场调研与国际物流",
    },
    shortDesc: {
      es: "Preparación y evaluación de proyectos, terms sheet, benchmarking, importación/exportación y transporte.",
      en: "Feasibility studies, terms sheet drafting, competitor benchmarking, and transpacific logistics.",
      zh: "投资商业计划书、对标调研报告、海空运舱位调度与通关全案。",
    },
    fullDesc: {
      es: "Preparación y evaluación de proyectos, planificación estratégica, plan de negocios, modelo de negocios, terms sheet, estudios de mercado, informe benchmarking, identidad y posicionamiento de marca, y asesoría especializada en importación/exportación y logística y transporte entre Latinoamérica y Asia.",
      en: "Strategic business planning, landed cost modeling, transpacific freight management, and go-to-market execution.",
      zh: "面向中智双边市场，提供商业模式设计、投资备忘录拟定、行业竞争对标、海运舱位预订与关务协同。",
    },
    items: {
      es: [
        "Preparación y evaluación de proyectos, Plan de Negocios y Modelo de Negocios",
        "Redacción y negociación de Terms Sheet para operaciones internacionales",
        "Estudios de Mercado locales e internacionales e Informe Benchmarking",
        "Asesoría en Importación / Exportación (Latinoamérica-Asia)",
        "Asesoría en Logística y Transporte (Valparaíso/San Antonio ⇄ Shanghai/Ningbo)",
      ],
      en: [
        "Project preparation, strategic planning and business modeling",
        "Terms sheet structuring and bilateral negotiation support",
        "Market intelligence and competitor benchmarking reports",
        "Import & Export advisory between Latin America and Asia",
        "Logistics & Multimodal transport across Pacific corridors",
      ],
      zh: [
        "项目可行性论证、战略演进规划与商业模式画布",
        "跨国投资意向备忘录（Terms Sheet）商务条款谈判",
        "双边市场准入调研与竞争对手多维对标分析报告",
        "拉美-亚洲国际贸易通关与原产地资质申报",
        "太平洋主力船司集装箱海运与陆运闭环调度",
      ],
    },
    compliance: {
      es: "Supervisión de directores de comercio exterior de Sarrazin Group y agentes aduaneros acreditados.",
      en: "Supervised by Sarrazin Group senior trade directors and licensed customs brokers.",
      zh: "由萨拉津集团涉外经贸主管与两国海关持牌代理人协同把关。",
    },
  },
];
