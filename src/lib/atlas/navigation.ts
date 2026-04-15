import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Flame,
  Target,
  Activity,
  Rocket,
  Users,
  Megaphone,
  Package,
  Scroll,
  MessageCircle,
  TrendingDown,
  Mail,
  Search,
  Sparkles,
  ShoppingCart,
  DollarSign,
  Type,
  ShieldAlert,
  Award,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: NavItem[];
  badge?: string;
}

export const atlasNavigation: NavItem[] = [
  {
    label: "Overview",
    href: "/atlas",
    icon: LayoutDashboard,
  },
  {
    label: "Brand",
    href: "/atlas/brand",
    icon: Flame,
  },
  {
    label: "Espionnage Grüns",
    href: "/atlas/gruns",
    icon: Target,
    children: [
      { label: "Business", href: "/atlas/gruns/business", icon: Award },
      { label: "Produit", href: "/atlas/gruns/product", icon: Package },
      { label: "Landing Pages", href: "/atlas/gruns/lps", icon: Scroll },
      { label: "Funnel", href: "/atlas/gruns/funnel", icon: ShoppingCart },
      { label: "Offre & Pricing", href: "/atlas/gruns/offer", icon: DollarSign },
      { label: "Copy & Messaging", href: "/atlas/gruns/copy", icon: Type },
      { label: "Publicités", href: "/atlas/gruns/ads", icon: Megaphone },
      { label: "Social Proof", href: "/atlas/gruns/social-proof", icon: MessageCircle },
      { label: "SEO & Content", href: "/atlas/gruns/seo", icon: Search },
      { label: "Email & SMS", href: "/atlas/gruns/email", icon: Mail },
      { label: "Customer XP", href: "/atlas/gruns/cx", icon: Users },
      { label: "Faiblesses", href: "/atlas/gruns/weaknesses", icon: ShieldAlert, badge: "KILL" },
    ],
  },
  {
    label: "Status projet",
    href: "/atlas/status",
    icon: Activity,
  },
  {
    label: "Roadmap 100M€",
    href: "/atlas/roadmap",
    icon: Rocket,
  },
];

export const atlasBrandTOC: { id: string; label: string }[] = [
  { id: "identity", label: "Identité & mission" },
  { id: "product", label: "Produit & formule" },
  { id: "one-belief", label: "One Belief" },
  { id: "mechanisms", label: "UMP / UMS" },
  { id: "avatars", label: "Avatars" },
  { id: "suffering", label: "Matrice souffrance 6×5" },
  { id: "desires", label: "Mass Desires" },
  { id: "angles", label: "15 angles publicitaires" },
  { id: "offer", label: "Offre & garantie" },
  { id: "verbatims", label: "Voix du client" },
];

export const iconMap = {
  LayoutDashboard,
  Flame,
  Target,
  Activity,
  Rocket,
  Users,
  Megaphone,
  Package,
  Scroll,
  MessageCircle,
  TrendingDown,
  Mail,
  Search,
  Sparkles,
  ShoppingCart,
  DollarSign,
  Type,
  ShieldAlert,
  Award,
};
