# Rediseño Corporativo Integral de Asia Export (Chile–China)

Rediseño integral de la presencia digital de **Asia Export** (Holding Sarrazin) como portal corporativo B2B de comercio exterior entre Chile y Asia/China. La plataforma fusiona el contenido original verificado con la dirección de arte y ritmo editorial de *Green-Volt* (secciones numeradas `{ 01 }`, tipografía limpia, estadísticas de impacto, conmutador de tema claro/oscuro, formulario corporativo con validación y widget interactivo de chat/asistencia en tiempo real).

---

## User Review & Critical Decisions

> [!IMPORTANT]
> Decisiones confirmadas por el usuario en Fase 1:
> - **Paleta de Identidad**: Azul marino profundo (`#0A192F`), carmín institucional (`#C53030`) y lienzo neutro marfil/nieve (`#FBFBF9` / `#FFFFFF` en claro, `#0B1320` en oscuro).
> - **Estética & Temas**: Alternador dinámico de modo claro y oscuro en la barra superior con persistencia local y soporte `@custom-variant dark`.
> - **Canales de Conversión**: Formulario de contacto y cotización corporativa con validación estricta de campos empresariales + widget de **chat online de asesoría en vivo** y enlace directo a WhatsApp ejecutivo (+56 2 223 337 30 / Apoquindo 6275).
> - **Cero datos inventados**: Solo se emplean los servicios y rubros reales de Asia Export (Exportaciones: Frutas frescas/secas, Mariscos, Vinos/Aceite; Importaciones: Minería, Tecnología/Aguas/Solar, Automotriz, PET/Veterinaria; Asesoría: Legal/Tributaria, M&A y Logística). Testimonios nominales se mantienen como credenciales confidenciales de industria marcados como `[PENDIENTE]`.

---

## 1. Overview & Core Concept

- **Qué hace**: Plataforma web multipágina corporativa de alto estándar para la facilitación de exportaciones chilenas hacia Asia e importaciones de equipamiento técnico e industrial desde Asia hacia Chile, complementado con asesoría legal, tributaria y logística aduanera.
- **Público objetivo**: Gerentes generales, directores de compras y abastecimiento, exportadores agrícolas/marítimos y líderes de operaciones mineras e industriales con alto poder adquisitivo.
- **Propuesta de valor**: Trazabilidad garantizada, cumplimiento arancelario y fitosanitario estricto, presencia directa en Santiago de Chile y contrapartes en Asia, respaldada por la trayectoria de Holding Sarrazin.

---

## 2. User Experience & Visual Design

### Estructura de Páginas & Navegación (Sitemap)
1. **Inicio (`/`)**:
   - Hero editorial con titular balanceado y propuesta de valor binacional Chile–China.
   - Bloque de métricas cuantitativas clave `{ 01 }` (Volúmenes, Cobertura portuaria Valparaíso/San Antonio a Shanghai/Ningbo, Red de socios).
   - Pilares de servicio interactivos `{ 02 }` (Exportación, Importación, Asesoría Sarrazin).
   - Metodología y trazabilidad en 4 etapas `{ 03 }`.
   - Credenciales confidenciales por industria `{ 04 }` (Minería, Agroindustria, Acuicultura).
   - Preguntas Frecuentes `{ 05 }`.
   - Banner de llamado a la acción corporativo y Footer integral con directorio de sedes.
2. **Nosotros (`/nosotros`)**:
   - Historia y pertenencia al Holding Sarrazin.
   - Presencia física en Av. Apoquindo 6275, Las Condes.
   - Alianzas estratégicas y estándares de trazabilidad y calidad.
3. **Servicios & Catálogo (`/servicios` + vistas de detalle)**:
   - **Exportaciones**: Frutas frescas y secas (almendras, avellanas, ciruelas, uvas, lúcuma), mariscos (camarones, jibia, cochayuyo), vinos chilenos y aceite de oliva virgen extra.
   - **Importaciones**: Filtros y repuestos para maquinaria pesada de minería, paneles solares y plantas de tratamiento de agua, filtros/neumáticos de camiones de faena, insumos PET y equipos ecógrafos veterinarios.
   - **Asesoría Legal, Tributaria & Logística**: Constitución societaria en Chile, due diligence, contratos y regímenes aduaneros.
4. **Cómo Trabajamos (`/proceso`)**:
   - Flujo de trabajo en 5 fases (Validación en origen, inspección fitosanitaria/técnica, gestión aduanera, tránsito marítimo y entrega última milla).
5. **Preguntas Frecuentes (`/faq`)**:
   - Resoluciones sobre tiempos de tránsito marítimo, regulaciones aduaneras chilenas y chinas, certificaciones y requisitos mínimos de carga.
6. **Contacto & Cotización (`/contacto`)**:
   - Formulario estructurado con selector de tipo de operación (Exportación, Importación, Asesoría), campos validados, teléfono, correo y dirección fiscal.
7. **Políticas y Términos (`/privacidad`, `/terminos`)**:
   - Avisos legales y confidencialidad comercial para transacciones B2B.
8. **Página 404 personalizada (`/404`)**:
   - Navegación de retorno al corredor corporativo.

### Sistema Visual & Tipográfico
- **Dirección Artística**: Inspirada en *Green-Volt* (estilo editorial limpio, cajas con división hairline fina, números de sección entre llaves `{ 01 }`, `{ 02 }`, espaciado amplio, sin píldoras decorativas ni gradientes estridentes).
- **Tipografía**:
  - *Titulares / Display*: `Plus Jakarta Sans` en peso SemiBold/Bold con kerning ajustado y `text-wrap: balance`.
  - *Cuerpo*: `DM Sans` con altura de línea optimizada (1.6) para lectura ejecutiva.
  - *Datos / Metadatos*: `JetBrains Mono` con `tabular-nums` para cifras portuarias y arancelarias.
- **Paleta de Color**:
  - **Primario**: Azul Marino Profundo (`#0A192F` / `#0E1E2E`).
  - **Acento**: Carmín Institucional (`#C53030`), reservado para botones de llamada a la acción primarios y badges de estado activos.
  - **Fondos**: Lienzo marfil claro (`#FBFBF9` en light) / Azul pizarra ultra profundo (`#070F1B` en dark).
  - **Bordes**: Hairlines sutiles (`border-slate-200 dark:border-slate-800`).
- **Microinteracciones**:
  - Selector de idioma con soporte para ES (Chile), EN e ZH (Chino simplificado).
  - Conmutador de modo claro/oscuro con transición suave de colores.
  - Widget de chat flotante de asesoría con respuestas guiadas inmediatas y canal directo a WhatsApp.

---

## 3. Key Product Decisions & Trade-Offs

- **Enrutamiento Multipágina en Cliente (SPA Hash/State Router)**:
  - *Decisión*: Router reactivo por hash y estado interno en React con sincronización del historial del navegador (`/#nosotros`, `/#servicios`, `/#contacto`, etc.).
  - *Razón*: Garantiza una carga instantánea y fluida sin parpadeos, compatible con entornos iFrame y estáticos, manteniendo URLs limpias y compartibles.
- **Tratamiento de Datos No Públicos**:
  - *Decisión*: Marcar claramente secciones de casos con `[PENDIENTE]` o abstraerlos en casos de estudio sectoriales (ej. *Despacho de filtros de minería en Antofagasta*, *Exportación de frutos secos a Guangzhou*), respetando los acuerdos de confidencialidad del Holding Sarrazin.
- **Chat Online de Asesoría Corporativa**:
  - *Decisión*: Componente interactivo con respuestas rápidas contextuales sobre aranceles, requisitos fitosanitarios y logística, además de conexión directa con un click a WhatsApp empresarial.

---

## 4. Technical Architecture & System Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Asia Export Web Platform                        │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ TopBar: Logo Asia Export | Nav Links (1-line) | Lang/Theme | CTA │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌─────────────────────── Page Router / Views ───────────────────────┐ │
│  │                                                                   │ │
│  │  • HomeView ({ 01 } Hero, Metrics, Pilares, Casos, FAQ, CTA)      │ │
│  │  • AboutView (Holding Sarrazin, Historia, Ubicación Apoquindo)    │ │
│  │  • ServicesView & DetailModal (Agro, Pesca, Vinos, Minería, etc.) │ │
│  │  • ProcessView (Etapas 1-5 de Trazabilidad Chile-China)           │ │
│  │  • FAQView (Preguntas frecuentes con búsqueda y filtro)           │ │
│  │  • ContactView (Formulario validado + Datos de Oficina)           │ │
│  │  • LegalView (Políticas de Privacidad y Términos)                 │ │
│  │                                                                   │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌────────────────────── Persistent Overlays ────────────────────────┐ │
│  │  • Floating Advisory Chat Modal (Preguntas Frecuentes / WhatsApp) │ │
│  │  • Service Detail Modal (Fichas técnicas por producto)            │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Footer: Directorio completo, Holding Sarrazin, Contacto & Legal  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Verification Checklist

1. [ ] Cero datos inventados: Solo contenido fidedigno de Asia Export / Sarrazin.
2. [ ] Logo corporativo vectorial exacto y colores solicitados (Azul marino profundo, carmín institucional y marfil).
3. [ ] Alternador de tema Claro / Oscuro funcionando en la barra superior.
4. [ ] Formulario de contacto validado con mensajes de éxito y error.
5. [ ] Chat online de atención ejecutiva interactivo con derivación a WhatsApp corporativo (+56 2 223 337 30).
6. [ ] Todas las páginas accesibles sin enlaces rotos ni dependencias externas frágiles.
7. [ ] Cero píldoras decorativas, tipografía jerarquizada y estilo editorial Green-Volt `{ 01 }`.
