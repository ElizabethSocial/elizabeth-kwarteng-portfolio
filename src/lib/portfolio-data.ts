import microsys from "@/assets/flyer-microsys.asset.json";
import mims from "@/assets/flyer-mims.asset.json";
import nyameye from "@/assets/flyer-nyameye.asset.json";

export const WHATSAPP_URL =
  "https://wa.me/233209030906?text=" +
  encodeURIComponent(
    "Hi Elizabeth, I reviewed your digital marketing portfolio and would like to connect!",
  );

export const CONTACT = {
  phone: "+233 20 903 0906",
  phoneLocal: "0209030906",
  email: "eskwart01@gmail.com",
  emailAlt: "lizgishq@gmail.com",
  location: "Teshie Nungua Estates, Accra, Ghana",
  linkedin: "https://www.linkedin.com/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies & Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const CREDIBILITY = [
  "Digital Marketing Strategy",
  "Social Media",
  "SEO",
  "Content",
  "Paid Advertising",
  "Analytics",
];

export const METRICS = [
  {
    value: 5,
    suffix: "+",
    label: "Years Professional Experience",
    trend: "Since 2019",
  },
  {
    value: 3000,
    suffix: "+",
    label: "Social Media Connections Growth",
    trend: "In 3 months",
  },
  {
    value: 1000,
    suffix: "+",
    label: "New Followers Generated",
    trend: "Audience growth strategy",
  },
  {
    value: 85,
    suffix: "%",
    label: "Increase in Audience Engagement",
    trend: "Within 1 month",
  },
  {
    value: 25,
    suffix: "%",
    label: "Increase in Public Participation",
    trend: "Campaign outcome",
  },
];

export const SERVICES = [
  {
    no: "01",
    icon: "Compass",
    title: "Digital Marketing Strategy",
    summary:
      "End-to-end marketing plans built on audience research, positioning and clear commercial goals.",
    deliverables: [
      "Market & audience research",
      "Channel and messaging strategy",
      "Campaign roadmap & budget split",
      "KPI framework and reporting cadence",
    ],
  },
  {
    no: "02",
    icon: "Share2",
    title: "Social Media Marketing",
    summary:
      "Community-first social programmes that grow followers and turn engagement into enquiries.",
    deliverables: [
      "Content calendars & pillars",
      "Platform-native creative",
      "Community management",
      "Growth & engagement reporting",
    ],
  },
  {
    no: "03",
    icon: "PenLine",
    title: "Content Strategy & Creation",
    summary:
      "Editorial systems and on-brand assets — copy, visuals and multimedia that carry one voice.",
    deliverables: [
      "Brand voice & messaging guide",
      "Copywriting & storytelling",
      "Canva visual design",
      "Multimedia content production",
    ],
  },
  {
    no: "04",
    icon: "Search",
    title: "Search Engine Optimization (SEO)",
    summary:
      "Search visibility work that puts brands in front of demand already looking for them.",
    deliverables: [
      "Keyword & intent research",
      "On-page optimisation",
      "Content briefs for search",
      "Ranking & traffic tracking",
    ],
  },
  {
    no: "05",
    icon: "Target",
    title: "Paid Advertising (Meta & Google)",
    summary:
      "Targeted paid campaigns with disciplined testing, tight audiences and cost control.",
    deliverables: [
      "Campaign structure & targeting",
      "Ad creative & copy variants",
      "A/B testing and optimisation",
      "Spend efficiency reporting",
    ],
  },
  {
    no: "06",
    icon: "BarChart3",
    title: "Marketing Analytics & Optimization",
    summary:
      "Measurement that closes the loop — what worked, what to cut, and where to invest next.",
    deliverables: [
      "Analytics setup & dashboards",
      "Performance tracking",
      "Insight and recommendation reports",
      "Continuous optimisation cycles",
    ],
  },
];

export const CASE_STUDIES = [
  {
    client: "Microsys Company Limited",
    category: "Product Launch Campaign",
    image: microsys.url,
    flyerText:
      "MICROSYS COMPANY LTD — NEW PRODUCT. Office Chair, Ergonomic Lumbar Support. Price only ₵340.00. SHOP NOW! 0244332916 · mcl_ghana@gmail.com",
    objective:
      "Introduce a new ergonomic office chair to Ghana's SME and corporate procurement market with a clear price-led offer.",
    audience:
      "Office managers, SME owners and corporate buyers in Accra, 25–50, sourcing office furniture and IT equipment.",
    channels: ["Facebook", "WhatsApp Business", "Instagram"],
    results: [
      { metric: "Product enquiries", value: "Direct-response uplift" },
      { metric: "Offer clarity", value: "Single price-led message" },
      { metric: "Reach", value: "Local B2B buyers" },
    ],
  },
  {
    client: "Mims Byte",
    category: "Food & Beverage Promotion",
    image: mims.url,
    flyerText:
      "Mim's Bytz — Hot Chicken Wings. Order Now! 020 908 1622 · Kwei Tsuru Street, Accra",
    objective:
      "Drive same-day orders for a signature menu item and build repeat ordering habits around a bold flavour identity.",
    audience:
      "Young professionals and students within delivery range of Kwei Tsuru Street, Accra, 18–35, ordering via social.",
    channels: ["Instagram", "Facebook", "WhatsApp"],
    results: [
      { metric: "Order intent", value: "Call-to-order prompts" },
      { metric: "Brand recall", value: "High-contrast visual identity" },
      { metric: "Engagement", value: "Comment & share driven" },
    ],
  },
  {
    client: "Nyame Ye Furniture",
    category: "Retail & Interior Showcase",
    image: nyameye.url,
    flyerText:
      "NYAME YE FURNITURE — Comfort & style. SALE 30% OFF. Limited Stock! Order now. 0254783836 · Nyameyefurniture.com",
    objective:
      "Showcase the collection range and convert seasonal interest with a time-limited 30% discount offer.",
    audience:
      "Homeowners, newly-weds and interior-conscious buyers in Greater Accra furnishing living spaces.",
    channels: ["Instagram", "Facebook", "Website"],
    results: [
      { metric: "Catalogue exposure", value: "4 room settings in one asset" },
      { metric: "Urgency", value: "Limited-stock discount framing" },
      { metric: "Traffic", value: "Website & phone enquiries" },
    ],
  },
];

export const SKILLS = [
  {
    group: "Strategy",
    items: [
      "Campaign Planning",
      "Audience Research",
      "Positioning & Messaging",
      "Stakeholder Engagement",
      "Go-to-Market Planning",
    ],
  },
  {
    group: "Content",
    items: [
      "Copywriting",
      "Content Calendars",
      "Visual Design (Canva)",
      "Multimedia Production",
      "Brand Storytelling",
    ],
  },
  {
    group: "SEO",
    items: ["Keyword Research", "On-Page SEO", "Search Content Briefs", "Performance Tracking"],
  },
  {
    group: "Paid Media",
    items: ["Meta Ads", "Google Ads", "Audience Targeting", "A/B Testing", "Budget Optimisation"],
  },
  {
    group: "Analytics",
    items: [
      "Google Analytics",
      "Social Insights",
      "Reporting & Dashboards",
      "Conversion Analysis",
    ],
  },
];

export const TOOLSTACK = [
  "Canva",
  "Meta Business Suite",
  "Google Analytics",
  "Google Workspace",
  "PowerPoint",
  "AI-Powered Marketing Tools",
];

export const EXPERIENCE = [
  {
    role: "Digital Marketing Bootcamp Trainee",
    org: "Generation Ghana",
    period: "May 2026 – Present",
    highlight: true,
    points: [
      "Intensive practitioner training across strategy, social media, SEO, paid media and analytics.",
      "Building and optimising live campaign work with performance review cycles.",
      "Applying data-driven frameworks to audience research and content planning.",
    ],
  },
  {
    role: "Digital Content & Research Officer",
    org: "Ghana Immigration Service",
    period: "June 2020 – Present",
    highlight: false,
    points: [
      "Lead digital engagement and content production for public-facing communication campaigns.",
      "Conduct audience research and translate findings into targeted messaging strategies.",
      "Grew social media connections by 3,000+ in three months and engagement by 85% in one month.",
      "Contributed to a 25% increase in public participation through coordinated campaign rollout.",
    ],
  },
  {
    role: "Sales & Marketing Executive",
    org: "Earlbeam Group Holdings",
    period: "Sept 2019 – Jul 2020",
    highlight: false,
    points: [
      "Executed sales and marketing campaigns for new business acquisition.",
      "Managed client relationships and translated feedback into promotional messaging.",
      "Supported market research and competitive positioning work.",
    ],
  },
  {
    role: "HR Support & Executive Assistant",
    org: "Puma Energy Ghana",
    period: "Sept 2018 – Aug 2019",
    highlight: false,
    points: [
      "Coordinated internal communications and executive reporting.",
      "Managed stakeholder scheduling, documentation and cross-team delivery.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "Digital Marketing Program",
    org: "Generation Ghana",
    year: "2026",
    highlight: true,
  },
  {
    title: "MA, International Affairs",
    org: "University of Ghana",
    year: "",
    highlight: false,
  },
  {
    title: "BA, French & Linguistics",
    org: "University of Ghana",
    year: "",
    highlight: false,
  },
];

export const TESTIMONIAL = {
  quote:
    "Elizabeth consistently demonstrates professionalism, strong communication skills, and a commitment to delivering quality results. She approaches every task with diligence and works effectively with both clients and stakeholders.",
  name: "Lucia Imoru",
  title: "Deputy Superintendent, Ghana Immigration Service",
};
