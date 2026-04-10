// ============================================================
// VISION HUB — Site-wide constants & editable content
// Edit contact info, metrics, testimonials, and more here.
// ============================================================

export const SITE = {
  name: "Vision Hub",
  tagline: "Outsourcing & Operational Support Partner — Morocco",
  description:
    "Vision Hub helps international brands deploy customer support, field operations, and business teams in Morocco with speed, structure, and local expertise.",
  url: "https://visionhub.ma", // ← replace with real domain
  locale: "en",
} as const;

export const CONTACT = {
  email: "contact@visionhubgroup.ma", // ← replace
  /** Display + tel: — E.164 without spaces */
  phoneTel: "+212778238464",
  phone: "+212 778 238 464",
  whatsapp: "+212 778 238 464",
  whatsappLink: "https://wa.me/212778238464",
  address: "Casablanca, Morocco", // ← replace
  bookingUrl: "#contact", // ← replace with Calendly or booking link
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Customer Support Outsourcing",
    slug: "customer-support",
    short:
      "Multilingual support teams trained to deliver fast, consistent, and brand-aligned customer experiences.",
    description:
      "We build and manage dedicated customer support teams that integrate with your brand voice and SLA requirements. From phone and email to live chat, our agents are trained on your products, processes, and quality standards — delivering consistent service that scales with your business.",
    forWhom: "Brands that need reliable, multilingual customer service coverage in Morocco or across the region.",
    delivery: "We recruit, train, and manage agents in-house, with dedicated QA leads and real-time reporting dashboards.",
    outcome: "Lower response times, higher CSAT scores, and a fully managed support operation you can scale on demand.",
  },
  {
    title: "Field Operations & Brand Activation",
    slug: "field-operations",
    short:
      "On-ground teams to execute retail presence, activations, and field performance with precision.",
    description:
      "We deploy field teams across Morocco to represent your brand in retail environments, events, and on-ground activations. Our teams are trained on brand standards and operate with clear KPIs, daily reporting, and structured coordination.",
    forWhom: "Companies launching or expanding retail presence, running promotional campaigns, or needing field intelligence in Morocco.",
    delivery: "End-to-end field management: recruitment, training, deployment, supervision, and performance reporting.",
    outcome: "Stronger brand visibility, consistent retail execution, and real-time field data to guide decisions.",
  },
  {
    title: "Back Office & Data Processing",
    slug: "back-office",
    short:
      "Reliable operational support for data handling, reporting, and administrative workflows.",
    description:
      "We handle the operational backbone of your business — data entry, document processing, reporting, and administrative tasks — with accuracy and confidentiality. Our back-office teams integrate into your workflows and tools.",
    forWhom: "Organizations with high-volume administrative, data processing, or reporting needs.",
    delivery: "Dedicated teams working within your systems, with quality checks and process documentation built in.",
    outcome: "Faster turnaround, fewer errors, and internal teams freed up to focus on higher-value work.",
  },
  {
    title: "Recruitment & Team Deployment",
    slug: "recruitment",
    short:
      "We source, train, and manage local talent aligned with your business needs.",
    description:
      "Finding the right people in a new market is hard. We handle the full cycle — sourcing, screening, onboarding, and ongoing management — so you get a team that's ready to perform from day one.",
    forWhom: "International companies entering Morocco that need local teams without setting up their own HR infrastructure.",
    delivery: "Full recruitment pipeline with structured onboarding, compliance handling, and team management.",
    outcome: "Faster time-to-hire, lower attrition, and a workforce aligned with your standards and culture.",
  },
  {
    title: "Sales Support",
    slug: "sales-support",
    short:
      "Dedicated teams to support retail sales, product promotion, and conversion.",
    description:
      "We provide trained sales support staff who work at the point of sale — in retail stores, showrooms, and events — to drive product awareness and conversion. Our teams are managed with clear targets and daily performance tracking.",
    forWhom: "Brands that need in-store sales presence, promotional staff, or product demonstration teams in Morocco.",
    delivery: "Recruitment, product training, deployment, and performance management of sales support teams.",
    outcome: "Higher sell-through rates, better product visibility, and measurable sales impact at the point of purchase.",
  },
] as const;

export const METRICS = [
  { value: "50+", label: "Active Field & Support Staff" },
  { value: "10+", label: "Cities Covered in Morocco" },
  { value: "48h", label: "Average Deployment Time" },
  { value: "4", label: "Brands Under Management" },
] as const;

export const CASE_STUDIES = [
  {
    client: "Carlcare",
    parent: "Transsion Holdings",
    slug: "carlcare",
    industry: "Consumer Electronics",
    challenge:
      "Carlcare, the after-sales service arm of Transsion Holdings, needed a reliable operations partner in Morocco to manage field operations, retail execution, and customer support across multiple cities for its portfolio of brands — Infinix, Tecno, Itel, and Oraimo.",
    solution:
      "Vision Hub became Carlcare's operational backbone in Morocco, deploying trained teams across key locations to handle retail operations, marketing activations, field coordination, and customer-facing support. We built standardized processes with daily reporting and structured QA across all four brands.",
    scope: ["Retail operations", "Marketing & activations", "Field operations", "Customer support", "Multi-brand coordination"],
    outcome:
      "Consistent operational execution across Infinix, Tecno, Itel, and Oraimo — with improved field coverage, stronger retail presence, and a scalable structure that grows with Carlcare's expansion in Morocco.",
  },
] as const;

export const INDUSTRIES = [
  {
    name: "Automotive",
    slug: "automotive",
    description:
      "Supporting automotive brands with showroom staffing, field coordination, launch activations, and after-sales support operations across Morocco.",
    icon: "car",
  },
  {
    name: "Consumer Electronics",
    slug: "consumer-electronics",
    description:
      "Deploying customer service, retail support, and field teams for electronics brands managing multi-city operations and service networks.",
    icon: "smartphone",
  },
  {
    name: "Retail",
    slug: "retail",
    description:
      "Providing in-store teams, promotional staff, and operational support for retail brands scaling their presence in Moroccan markets.",
    icon: "store",
  },
  {
    name: "Field Services",
    slug: "field-services",
    description:
      "Managing distributed field teams for brands that need on-ground execution, data collection, audits, and location-based operations.",
    icon: "mapPin",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description: "We understand your business, needs, and operational goals.",
  },
  {
    step: 2,
    title: "Solution Design",
    description: "We define the right team structure and execution model.",
  },
  {
    step: 3,
    title: "Recruitment & Setup",
    description: "We hire, train, and prepare your team.",
  },
  {
    step: 4,
    title: "Deployment",
    description: "We launch operations quickly and efficiently.",
  },
  {
    step: 5,
    title: "Monitoring & Optimization",
    description: "We track performance and continuously improve.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Vision Hub delivered strong field execution and reliable operational support. They understood our requirements and moved fast.",
    author: "Client Representative",
    company: "International Brand Partner",
  },
  {
    quote:
      "A professional and structured partner that made our expansion into Morocco significantly smoother.",
    author: "Operations Director",
    company: "Global Electronics Company",
  },
  // ← Add real testimonials here
] as const;

export const OPEN_POSITIONS = [
  {
    title: "Field Operations Coordinator",
    location: "Casablanca, Morocco",
    type: "Full-time",
    department: "Operations",
  },
  {
    title: "Customer Support Agent — French & Arabic",
    location: "Casablanca, Morocco",
    type: "Full-time",
    department: "Customer Support",
  },
  {
    title: "Sales Support Representative",
    location: "Multiple Cities, Morocco",
    type: "Full-time",
    department: "Sales",
  },
  // ← Add real positions here
] as const;
