// =============================================================================
// Atlas types — Shared interfaces for the internal command center
// =============================================================================

export type ID = string;
export type ISODate = string;

export type AtlasStatus =
  | "backlog"
  | "draft"
  | "wip"
  | "qa"
  | "live"
  | "blocked"
  | "paused"
  | "done"
  | "killed";

export type HealthSignal = "green" | "orange" | "red";

// -----------------------------------------------------------------------------
// Dashboard
// -----------------------------------------------------------------------------

export interface KPI {
  key: string;
  label: string;
  value: string | number;
  unit?: string;
  delta?: number;
  deltaLabel?: string;
  trend?: number[];
  status: HealthSignal;
  hint?: string;
}

export interface DashboardAlert {
  severity: "info" | "warn" | "crit";
  title: string;
  body: string;
  link?: { href: string; label: string };
}

export interface DashboardActivity {
  date: ISODate;
  type: "lp" | "ad" | "content" | "research" | "ops";
  label: string;
  link?: { href: string; label: string };
}

export interface DashboardSnapshot {
  asOf: ISODate;
  northStar: { targetEUR: number; currentMRR: number; targetMRR: number };
  kpis: KPI[];
  alerts: DashboardAlert[];
  recentActivity: DashboardActivity[];
}

// -----------------------------------------------------------------------------
// Brand
// -----------------------------------------------------------------------------

export interface BrandCore {
  mission: string;
  positioning: string;
  oneBelief: string;
  oneBeliefCompact: string;
  ums: { name: string; narrative: string };
  ump: { name: string; narrative: string };
  offer: {
    subscription: { price: number; strikePrice?: number; perks: string[] };
    oneTime: { price: number; shipping: string };
  };
  guarantee: { name: string; promise: string; duration: string };
  pillars: { icon: string; title: string; body: string }[];
  toneOfVoice: { style: string; dos: string[]; donts: string[] };
  sourceDocs: string[];
}

export interface Avatar {
  id: string;
  name: string;
  age: number;
  archetype: string;
  oneLiner: string;
  demographics: Record<string, string>;
  values: string[];
  pains: { surface: string; deep: string; identity: string };
  desires: string[];
  objections: string[];
  quotes: { text: string; source: string }[];
  primaryAnglesIds: ID[];
  primarySufferingIds: ID[];
  sourceDoc: string;
}

export interface MassDesire {
  id: ID;
  rank: number;
  label: string;
  framework: "LF8" | "Schwartz" | "Both";
  manifestation: string;
  gomuActivation: string;
}

export interface SufferingCell {
  id: ID;
  sufferingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  awarenessLevel: 1 | 2 | 3 | 4 | 5;
  description: string;
  hook: string;
  bestAngleId?: ID;
}

export interface Belief {
  id: ID;
  statement: string;
  isOneBelief: boolean;
  category: "product" | "brand" | "category" | "self";
  installMechanism: string;
}

export interface Mechanism {
  type: "UMP" | "UMS";
  name: string;
  tagline: string;
  problemNamed?: string;
  solutionNamed?: string;
  narrative: string;
  jaws?: [string, string];
}

export interface Angle {
  id: ID;
  number: number;
  name: string;
  type: "problem" | "solution" | "product" | "most-aware" | "unaware";
  hook: string;
  headline: string;
  subhead?: string;
  bodyOutline: string;
  verbatimAnchors: { text: string; source: string }[];
  targetAvatarId: string;
  targetSufferingId?: ID;
  recommendedLPSlug?: string;
  status: "draft" | "validated" | "in_test" | "winner" | "killed";
  platforms: ("meta" | "tiktok" | "snapchat" | "email" | "youtube")[];
}

export interface Verbatim {
  id: ID;
  source: "trustpilot" | "amazon" | "reddit" | "blog" | "press" | "forum" | "interview";
  sourceUrl?: string;
  authorAlias?: string;
  date?: ISODate;
  rating?: 1 | 2 | 3 | 4 | 5;
  brandMentioned?: string;
  rawText: string;
  themes: string[];
  sentiment: "positive" | "neutral" | "negative";
  isPainPoint: boolean;
  isGolden: boolean;
}

// -----------------------------------------------------------------------------
// Competitor intelligence
// -----------------------------------------------------------------------------

export type GrunsSectionKey =
  | "business"
  | "product"
  | "lps"
  | "funnel"
  | "offer"
  | "copy"
  | "ads"
  | "social-proof"
  | "seo"
  | "email"
  | "cx"
  | "weaknesses";

export interface GrunsSectionMeta {
  key: GrunsSectionKey;
  title: string;
  oneLiner: string;
  icon: string;
  confidence: "low" | "med" | "high";
}

export interface GrunsBusiness {
  yearFounded?: number;
  founders: { name: string; role: string; note?: string }[];
  hq?: string;
  employeeCount?: string;
  fundraising: {
    round: string;
    amountUSD?: number;
    date?: ISODate;
    investors: string[];
    source?: string;
  }[];
  revenueEstimate?: {
    valueUSD: number;
    year: number;
    method: string;
    sources: string[];
  };
  timeline: { date: ISODate; event: string; source?: string }[];
  sources: { label: string; url: string }[];
}

export interface Ingredient {
  name: string;
  form?: string;
  doseMg?: number;
  pctRDA?: number;
  bioavailability?: "low" | "med" | "high" | "unknown";
  category: "vitamin" | "mineral" | "prebiotic" | "adaptogen" | "other";
  vsGomu?: "win" | "tie" | "loss" | "unknown";
  notes?: string;
}

export interface GrunsProduct {
  productName: string;
  ingredients: Ingredient[];
  allergens: string[];
  certifications: string[];
  format: { servingType: string; perBox: number; flavors: string[] };
  packaging: { material: string; recyclable?: boolean; notes: string };
  claims: string[];
  gomuVsGrunsSummary: string;
  sources: { label: string; url: string }[];
}

export interface GrunsLP {
  slug: string;
  url: string;
  type: "listicle" | "celebrity" | "capture" | "segment" | "homepage" | "advertorial";
  segment?: string;
  heroVariant?: string;
  reasonOneTitle?: string;
  firstSeen?: ISODate;
  lastSeen?: ISODate;
  teardown?: string;
  waybackSnapshots?: string[];
}

export interface GrunsLPLibrary {
  totalCountEstimate: number;
  inventory: GrunsLP[];
  blockPool: { id: ID; name: string; usageCount: number; description: string }[];
  reusePctEstimate: number;
  takeaways: string[];
  sources: { label: string; url: string }[];
}

export interface FunnelStep {
  order: number;
  name: string;
  url?: string;
  notes: string;
  screenshotRef?: string;
}

export interface GrunsFunnel {
  steps: FunnelStep[];
  popups: { trigger: string; content: string; offer?: string }[];
  upsells: { stage: "pre" | "post"; product: string; priceUSD: number }[];
  stickyElements: string[];
  takeaways: string[];
  sources: { label: string; url: string }[];
}

export interface GrunsOffer {
  subscribe: { priceUSD: number; perks: string[]; shippingFree: boolean };
  onetime: { priceUSD: number; shippingFeeUSD?: number };
  bundles: { name: string; priceUSD: number; perks: string[] }[];
  promoCodes: { code: string; discount: string; source: string; asOf: ISODate }[];
  refundPolicy: string;
  guarantee: string;
  priceHistory: { date: ISODate; subPriceUSD: number; otPriceUSD: number; source?: string }[];
  takeaways: string[];
  sources: { label: string; url: string }[];
}

export interface GrunsCopy {
  dominantHeadlines: { text: string; lpSlug?: string; type: "h1" | "h2" }[];
  usps: string[];
  signatureWords: string[];
  toneOfVoice: string;
  namedMechanisms: { name: string; explanation: string }[];
  takeaways: string[];
  sources: { label: string; url: string }[];
}

export interface GrunsAd {
  id: ID;
  platform: "meta" | "tiktok" | "youtube" | "snapchat";
  format: "ugc" | "talking-head" | "listicle-advertorial" | "celebrity" | "before-after" | "static";
  hook3sec: string;
  scriptOrCaption: string;
  angle: string;
  firstSeen?: ISODate;
  lastSeen?: ISODate;
  metaLibraryId?: string;
  assetUrl?: string;
}

export interface GrunsAds {
  ads: GrunsAd[];
  celebrityPartnerships: {
    name: string;
    role: string;
    firstSeen?: ISODate;
    notes: string;
  }[];
  publishersAdvertorial: string[];
  dominantAngles: string[];
  takeaways: string[];
  sources: { label: string; url: string }[];
}

export interface GrunsSocialProof {
  trustpilot?: {
    count: number;
    rating: number;
    distribution?: Record<string, number>;
    lastChecked: ISODate;
  };
  otherPlatforms: { name: string; count?: number; rating?: number; url?: string }[];
  topPositive: { text: string; source: string }[];
  topNegative: { text: string; source: string }[];
  onSiteStats: { stat: string; credibility: "low" | "med" | "high"; note?: string }[];
  takeaways: string[];
  sources: { label: string; url: string }[];
}

export interface GrunsSEO {
  domainRating?: number;
  organicTrafficEstimateMonthly?: number;
  topKeywords: { keyword: string; position?: number; volume?: number }[];
  topBacklinks: { domain: string; dr?: number; url?: string }[];
  blogPosts: { title: string; url: string; targetKeyword?: string }[];
  takeaways: string[];
  sources: { label: string; url: string }[];
}

export interface EmailFlow {
  name: "welcome" | "abandoned-cart" | "post-purchase" | "winback" | "newsletter";
  emails: {
    order: number;
    delayHours: number;
    subject: string;
    preheader?: string;
    notes?: string;
  }[];
}

export interface GrunsEmail {
  flows: EmailFlow[];
  smsOptInIncentive?: string;
  takeaways: string[];
  sources: { label: string; url: string }[];
}

export interface GrunsCX {
  checkout: { steps: number; paymentOptions: string[]; expressCheckout: string[] };
  shipping: { carrier: string; daysMin?: number; daysMax?: number; international: boolean };
  unboxing: {
    boxDesign: string;
    insertCard: boolean;
    sample: boolean;
    recyclable?: boolean;
  };
  loyalty?: { name: string; mechanic: string };
  referral?: { incentive: string };
  supportChannels: string[];
  uxScore: { criterion: string; score: 1 | 2 | 3 | 4 | 5; note: string }[];
  takeaways: string[];
  sources: { label: string; url: string }[];
}

export interface ExploitableWeakness {
  id: ID;
  category:
    | "price"
    | "trust"
    | "sourcing"
    | "halal"
    | "made-in-france"
    | "ux"
    | "taste"
    | "packaging"
    | "regulatory"
    | "availability";
  weakness: string;
  evidence: { type: "verbatim" | "screenshot" | "data" | "reasoning"; ref: string }[];
  gomuAdvantage: string;
  exploitAngleIds: ID[];
  exploitLPSlugs: string[];
  priority: 1 | 2 | 3 | 4 | 5;
}

export interface GrunsDeepDive {
  meta: {
    lastUpdated: ISODate;
    researchPhase: "scaffold" | "partial" | "mature";
    globalConfidence: "low" | "med" | "high";
  };
  scorecard: { copy: number; design: number; offer: number; funnel: number; brand: number };
  sections: GrunsSectionMeta[];
  business: GrunsBusiness;
  product: GrunsProduct;
  lps: GrunsLPLibrary;
  funnel: GrunsFunnel;
  offer: GrunsOffer;
  copy: GrunsCopy;
  ads: GrunsAds;
  socialProof: GrunsSocialProof;
  seo: GrunsSEO;
  email: GrunsEmail;
  cx: GrunsCX;
  weaknesses: ExploitableWeakness[];
}

export interface CompetitorFRProfile {
  id: ID;
  name: string;
  url: string;
  oneLiner: string;
  model: string;
  pricing: { label: string; priceEUR: number; note?: string }[];
  strengths: string[];
  weaknesses: string[];
  threatLevel: 1 | 2 | 3 | 4 | 5;
  gomuAdvantage: string;
}

// -----------------------------------------------------------------------------
// Project status
// -----------------------------------------------------------------------------

export interface LPStatus {
  slug: string;
  title: string;
  angle: string;
  status: "draft" | "build" | "qa" | "live" | "paused" | "killed";
  owner: string;
  trafficSources: ("meta" | "tiktok" | "snapchat" | "email" | "organic")[];
  url?: string;
  blocker?: string;
  liveSince?: ISODate;
  metrics?: {
    sessions?: number;
    cvr?: number;
    cpa?: number;
    roas?: number;
    updatedAt: ISODate;
  };
  nextActions?: string[];
}

export interface StackItem {
  category: "frontend" | "hosting" | "analytics" | "ads" | "email" | "payment" | "fulfillment" | "support";
  name: string;
  usage: string;
  status: "live" | "evaluating" | "planned";
  notes?: string;
}

export interface DataDocStatus {
  path: string;
  title: string;
  sizeKb: number;
  lastEditedAt?: ISODate;
  consumedByLPs: string[];
  consumedPct: number;
}

// -----------------------------------------------------------------------------
// Roadmap
// -----------------------------------------------------------------------------

export interface NorthStar {
  targetRevenueEUR: number;
  targetYear: number;
  targetMRR: number;
  targetActiveSubs: number;
  maxCAC: number;
  minROAS: number;
  monthlyGrowthRequiredPct: number;
  current: {
    mrr: number;
    subs: number;
    cac: number;
    roas: number;
    asOf: ISODate;
  };
  assumptions: string[];
}

export interface RoadmapItem {
  id: ID;
  title: string;
  description: string;
  pillar: "acquisition" | "retention" | "product" | "brand" | "ops" | "team" | "tech";
  priority: "P0" | "P1" | "P2";
  rice: {
    reach: number;
    impact: 1 | 2 | 3 | 5 | 10;
    confidence: number;
    effort: number;
    score: number;
  };
  estimatedRevenueImpactEUR: number;
  status: "backlog" | "now" | "next" | "wip" | "blocked" | "done";
  owner?: string;
  dueQuarter: "Q2-2026" | "Q3-2026" | "Q4-2026" | "Q1-2027";
  dependencies: ID[];
}

export interface Risk {
  id: ID;
  title: string;
  category: "regulatory" | "supply" | "competitive" | "team" | "financial";
  severity: 1 | 2 | 3 | 4 | 5;
  likelihood: 1 | 2 | 3 | 4 | 5;
  mitigation: string;
  owner?: string;
}
