import { esCase } from "./es.case";

/**
 * Spanish dictionary keyed by the exact English source string.
 * Missing keys fall back to the English text.
 */
export const es: Record<string, string> = {
  // Nav / header
  Work: "Proyectos",
  About: "Sobre mí",
  Testimonials: "Testimonios",
  Contact: "Contacto",
  "Resume ↗": "CV ↗",
  Language: "Idioma",
  "Back to all work": "Volver a los proyectos",

  // Hero
  "Product Designer · UX/UI · Data-Driven Design":
    "Product Designer · UX/UI · Diseño basado en datos",
  "Designing clarity": "Diseñando claridad",
  "in complex": "en sistemas",
  systems: "complejos",
  "Product Designer bridging UX and Data Analytics to simplify high volume systems and enable better product decisions across omnichannel ecosystems.":
    "Product Designer que conecta UX y Data Analytics para simplificar sistemas de alto volumen y habilitar mejores decisiones de producto en ecosistemas omnicanal.",
  "View Case Studies": "Ver casos de estudio",
  "Download Resume": "Descargar CV",
  "B2B / B2C": "B2B / B2C",
  "Ecommerce ecosystems": "Ecosistemas de ecommerce",
  Omnichannel: "Omnicanal",
  "Retail + Digital": "Retail + Digital",

  // Case studies list
  "Case Studies": "Casos de estudio",
  "View Case Study": "Ver caso de estudio",
  Role: "Rol",
  Scope: "Alcance",
  Responsibility: "Responsabilidad",

  // Case study cards data
  "IXComercio — PIM Redesign & Onboarding Strategy":
    "IXComercio — Rediseño del PIM y estrategia de onboarding",
  "Redesigned IXComercio's internal PIM tool to match Akeneo's design system, turning a visual request into a full system optimization with an interactive onboarding flow that eliminated manual QA training.":
    "Rediseño de la herramienta PIM interna de IXComercio para alinearla con el design system de Akeneo, convirtiendo una solicitud visual en una optimización integral del sistema con un flujo de onboarding interactivo que eliminó la capacitación manual de QA.",
  "Product Designer — UX End-to-End": "Product Designer — UX de principio a fin",
  "Redesigned the internal PIM tool to match Akeneo's design system":
    "Rediseño de la herramienta PIM interna para alinearla con el design system de Akeneo",
  "Analytics Dashboards": "Dashboards de analítica",
  "Design of analytics dashboards to support strategic and operational decision-making across a Total Commerce ecosystem deployed across 54 brands in 11 countries.":
    "Diseño de dashboards de analítica para apoyar la toma de decisiones estratégicas y operativas en un ecosistema Total Commerce desplegado en 54 marcas y 11 países.",
  "Product Designer": "Product Designer",
  "UX Architecture, KPI Design, Data Logic":
    "Arquitectura UX, diseño de KPIs, lógica de datos",
  "Donna Moda — Native App for a New Generation":
    "Donna Moda — App nativa para una nueva generación",
  "Comprehensive native app design for Donna Moda & L'UOMO MODA, expanding the brand's reach toward a younger, mobile-first audience through market research, product strategy, and a tailored mobile UI system.":
    "Diseño integral de apps nativas para Donna Moda y L'UOMO MODA, ampliando el alcance de la marca hacia una audiencia joven y mobile-first mediante investigación de mercado, estrategia de producto y un sistema de UI móvil a medida.",
  "Lead Product Designer (UX/UI & Strategy)":
    "Lead Product Designer (UX/UI y estrategia)",
  "Comprehensive design of native applications to expand the brand's reach toward a younger audience.":
    "Diseño integral de aplicaciones nativas para ampliar el alcance de la marca hacia una audiencia más joven.",

  // Tags
  "Design Systems": "Design systems",
  Onboarding: "Onboarding",
  "UX Strategy": "Estrategia UX",
  "Data Visualization": "Visualización de datos",
  BI: "BI",
  Analytics: "Analítica",
  "Decision Systems": "Sistemas de decisión",
  "E-commerce": "E-commerce",
  "Mobile UX": "UX móvil",
  "Product Strategy": "Estrategia de producto",
  "Market Research": "Investigación de mercado",

  // About
  "Designing with empathy, validating with data.":
    "Diseñar con empatía, validar con datos.",
  Disciplines: "Disciplinas",
  "UX · UI · Systems · Data": "UX · UI · Sistemas · Datos",
  Tools: "Herramientas",
  Industries: "Industrias",
  "B2B · B2C · Omnichannel Retail": "B2B · B2C · Retail omnicanal",
  Languages: "Idiomas",
  "English · Español": "Inglés · Español",
  "Hi, I'm Melissa. I design with empathy, but I validate with data.":
    "Hola, soy Melissa. Diseño con empatía, pero valido con datos.",
  "I'm a Product Designer who combines UX and Data to build intuitive, high-impact digital products. I specialize in complex B2B and B2C ecommerce ecosystems, designing seamless omnichannel experiences that connect physical retail and digital platforms.":
    "Soy Product Designer y combino UX y datos para construir productos digitales intuitivos y de alto impacto. Me especializo en ecosistemas complejos de ecommerce B2B y B2C, diseñando experiencias omnicanal fluidas que conectan el retail físico con las plataformas digitales.",
  "What I enjoy most is turning complexity into clarity whether that means simplifying high volume workflows or creating consistent, frictionless experiences across touchpoints.":
    "Lo que más disfruto es convertir la complejidad en claridad, ya sea simplificando flujos de trabajo de alto volumen o creando experiencias consistentes y sin fricción en todos los puntos de contacto.",
  "My background in Data Analytics (SQL, Python, BI tools) allows me to go beyond intuition. I use data to understand behavior, validate decisions, and support product strategies with real insights.":
    "Mi formación en Data Analytics (SQL, Python, herramientas BI) me permite ir más allá de la intuición. Uso los datos para entender comportamientos, validar decisiones y sustentar estrategias de producto con insights reales.",
  "In my recent roles, this has also led me to mentor designers and advocate for more data-informed thinking across teams.":
    "En mis roles recientes, esto también me ha llevado a mentorear diseñadores y promover una mentalidad más informada por datos en los equipos.",
  "Whether I'm structuring information architecture or working with data pipelines, my goal is always the same: build products that improve decision-making and deliver real business value.":
    "Ya sea estructurando arquitectura de información o trabajando con pipelines de datos, mi objetivo siempre es el mismo: construir productos que mejoren la toma de decisiones y generen valor real de negocio.",
  "Currently, I'm exploring the intersection of AI and design systems, and how emerging technologies are shaping the future of product experiences.":
    "Actualmente exploro la intersección entre IA y design systems, y cómo las tecnologías emergentes están dando forma al futuro de las experiencias de producto.",

  // Testimonials
  "Feedback from collaborators": "Opiniones de colaboradores",
  "Perspectives from supervisors and cross-functional team members on impact, collaboration, and execution.":
    "Perspectivas de supervisores y compañeros de equipos multidisciplinarios sobre impacto, colaboración y ejecución.",
  Supervisor: "Supervisor",
  Colleague: "Colega",
  "Direct supervisor": "Supervisora directa",
  "Same team": "Mismo equipo",
  "January 2026": "Enero 2026",
  "December 2025": "Diciembre 2025",
  "Software Engineer · Tech Lead": "Software Engineer · Tech Lead",
  "E-commerce, Payments & Product Expert · PMP · Scrum Master":
    "Experta en E-commerce, Pagos y Producto · PMP · Scrum Master",
  "UX/UI Designer · Visual Designer · Figma":
    "Diseñador UX/UI · Diseñador visual · Figma",
  "Software Engineer · Data & AI": "Software Engineer · Data & AI",
  "Regional Payments Method Coordinator":
    "Coordinador regional de métodos de pago",
  "I had the opportunity to oversee Melissa's work, and it was a very positive experience. She is extremely proactive and committed, always willing to go the extra mile and take ownership of her responsibilities with a great attitude and enthusiasm. She stands out for being detail-oriented and careful in her work — both in design and in Power BI report development — always making sure to deliver quality results. She also has a strong drive to keep learning and improving.":
    "Tuve la oportunidad de supervisar el trabajo de Melissa y fue una experiencia muy positiva. Es sumamente proactiva y comprometida, siempre dispuesta a dar un paso más y a asumir sus responsabilidades con gran actitud y entusiasmo. Destaca por ser detallista y cuidadosa en su trabajo, tanto en diseño como en el desarrollo de reportes en Power BI, asegurando siempre entregar resultados de calidad. Además, tiene un fuerte impulso por seguir aprendiendo y mejorando.",
  "Melissa is a proactive professional with great energy and a solution-oriented mindset. She does thorough research and brings a lot of value to BI projects as a usability lead. She is versatile in web design and a strong addition to any team.":
    "Melissa es una profesional proactiva, con mucha energía y mentalidad orientada a soluciones. Investiga a fondo y aporta gran valor a los proyectos de BI como líder de usabilidad. Es versátil en diseño web y una gran incorporación para cualquier equipo.",
  "I had the chance to work with Meli — a outstanding UX professional with solid, in-depth knowledge. I particularly want to highlight her excellent teamwork, her expert command of interface design and design systems, and her ability to approach and solve problems clearly and effectively. Without a doubt, a tremendous asset to any team.":
    "Tuve la oportunidad de trabajar con Meli, una profesional de UX destacada y con conocimientos sólidos y profundos. Quiero resaltar especialmente su excelente trabajo en equipo, su dominio experto del diseño de interfaces y los design systems, y su capacidad para abordar y resolver problemas de forma clara y efectiva. Sin duda, un gran activo para cualquier equipo.",
  "An excellent designer — autonomous, highly driven, and detail-focused. She consistently improved our dashboards to enhance usability. A wonderful person who would make a meaningful contribution to any company or organization.":
    "Una excelente diseñadora: autónoma, muy motivada y enfocada en el detalle. Mejoró constantemente nuestros dashboards para potenciar la usabilidad. Una gran persona que aportaría de manera significativa a cualquier empresa u organización.",
  "Melissa did an outstanding job bringing clarity to our payment method and sales reports, delivering a clean visual presentation of the key KPIs required by the company's main stakeholders.":
    "Melissa hizo un trabajo sobresaliente al dar claridad a nuestros reportes de métodos de pago y ventas, entregando una presentación visual limpia de los KPIs clave requeridos por los principales stakeholders de la compañía.",

  // Contact
  "Let's Work Together": "Trabajemos juntos",
  "Ready to build": "¿Listos para crear",
  "something great?": "algo increíble?",
  "Open to product design opportunities where I can contribute to building scalable systems and impactful digital products.":
    "Abierta a oportunidades de product design donde pueda contribuir a construir sistemas escalables y productos digitales de impacto.",
  LinkedIn: "LinkedIn",
  Email: "Email",

  // Footer
  "Product Designer · UX/UI · Data-Informed Design":
    "Product Designer · UX/UI · Diseño informado por datos",
  Resume: "CV",
  "All rights reserved.": "Todos los derechos reservados.",

  // 404
  "Oops! Page not found": "¡Ups! Página no encontrada",
  "Return to Home": "Volver al inicio",

  ...esCase,
};
