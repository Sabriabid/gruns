import type { DashboardSnapshot } from "./types";

export const dashboardSnapshot: DashboardSnapshot = {
  asOf: "2026-04-15",
  northStar: {
    targetEUR: 100_000_000,
    currentMRR: 0,
    targetMRR: 8_333_333,
  },
  kpis: [
    {
      key: "mrr",
      label: "MRR",
      value: "0",
      unit: "€",
      status: "red",
      hint: "Pré-lancement. Target v1 : 50K€ MRR d'ici Q3.",
    },
    {
      key: "subs",
      label: "Abonnés actifs",
      value: "0",
      status: "red",
      hint: "Target 100M€ : ~280K abonnés à 29€/mois moyenne.",
    },
    {
      key: "cac",
      label: "CAC cible",
      value: "< 55",
      unit: "€",
      status: "orange",
      hint: "Scénario 34,99€ × churn 12% → LTV 165€ → CAC max (÷3) 55€.",
    },
    {
      key: "ltv",
      label: "LTV réaliste",
      value: "165",
      unit: "€",
      status: "green",
      hint: "Prix 34,99€ × churn 12% × marge 57%. Benchmark scénarios Excel.",
    },
    {
      key: "lps-live",
      label: "LPs live",
      value: "10",
      unit: "/ 10",
      status: "green",
      hint: "10 angles en prod — voir status board.",
    },
    {
      key: "ads-test",
      label: "Ads en test",
      value: "0",
      status: "red",
      hint: "Meta/TikTok creative queue à construire.",
    },
    {
      key: "docs-consumed",
      label: "Brand data consommée",
      value: "90",
      unit: "%",
      status: "green",
      hint: "17 docs → 6 data files Atlas. Quasi tout.",
    },
    {
      key: "trustpilot",
      label: "Avis Trustpilot",
      value: "—",
      status: "red",
      hint: "Pré-lancement. Target : 500 avis J+90.",
    },
  ],
  alerts: [
    {
      severity: "crit",
      title: "Pivot Made in China — LP /lp/made-in-france en prod avec copy invalidé",
      body:
        "Produit sourcé en Chine (façonnier chinois, fret maritime, code TARIC confirmé). Le positionnement Made in France est retiré de l'Atlas. Action : réécrire le copy de /lp/made-in-france (pivoter sur dosages / halal / transparence) ou dépublier.",
      link: { href: "/atlas/status", label: "Voir LP status" },
    },
    {
      severity: "crit",
      title: "Formule finale non validée",
      body:
        "Dosages cibles OK sur le papier — mais validation façonnier + consultant formulateur en attente. Bloque packaging, tests Eurofins, et toute claim produit définitive.",
      link: { href: "/atlas/status", label: "Voir status projet" },
    },
    {
      severity: "warn",
      title: "Recherche Grüns à lancer",
      body:
        "Les 12 sections du deep-dive Grüns sont scaffoldées mais vides. Action : WebFetch gruns.co + Meta Ad Library + Trustpilot pour remplir business/product/lps en priorité.",
      link: { href: "/atlas/gruns", label: "Hub Grüns" },
    },
    {
      severity: "warn",
      title: "Tracking analytics + UTM à câbler",
      body:
        "Chaque LP doit loguer source + slug dans le funnel. Pré-requis du scaling pub.",
    },
    {
      severity: "info",
      title: "Économie unitaire cadrée",
      body:
        "3 scénarios prix × 3 churns dispo. Recommandé : 34,99€ × 12% churn → LTV 165€, CAC max 55€, marge brute 57%.",
      link: { href: "/atlas/economics", label: "Voir économie unitaire" },
    },
  ],
  recentActivity: [
    {
      date: "2026-04-15",
      type: "content",
      label: "Atlas v0.1 — hub brand + scaffold Grüns + roadmap en ligne",
    },
    {
      date: "2026-04-14",
      type: "lp",
      label: "Fix .htaccess — plus de 403 sur les LPs Hostinger",
    },
    {
      date: "2026-04-13",
      type: "lp",
      label: "10 landing pages LP en prod (digestion, halal, stress-sommeil, ...)",
    },
    {
      date: "2026-04-10",
      type: "content",
      label: "BIBLE_FONDAMENTALE + 16 docs stratégie / copy / verbatims finalisés",
    },
  ],
};
