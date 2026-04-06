import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lpPages, lpShared, allSlugs } from "@/lib/lp-content";
import LPAnnouncementBar from "@/components/lp/LPAnnouncementBar";
import LPHero from "@/components/lp/LPHero";
import LPReason from "@/components/lp/LPReason";
import LPSocialProofStats from "@/components/lp/LPSocialProofStats";
import LPTimeline from "@/components/lp/LPTimeline";
import LPTrustGrid from "@/components/lp/LPTrustGrid";
import LPBuyBox from "@/components/lp/LPBuyBox";
import LPFAQ from "@/components/lp/LPFAQ";
import LPFooter from "@/components/lp/LPFooter";
import LPStickyCTA from "@/components/lp/LPStickyCTA";

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lp = lpPages[slug];
  if (!lp) return {};
  return {
    title: lp.meta.title,
    description: lp.meta.description,
    openGraph: {
      title: lp.meta.title,
      description: lp.meta.description,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lp = lpPages[slug];
  if (!lp) notFound();

  const reasons = [
    lp.reasonOne,
    ...lp.poolReasonKeys.map((key, i) => ({
      ...lpShared.poolReasons[key],
      number: String(i + 2).padStart(2, "0"),
    })),
  ];

  return (
    <>
      <LPAnnouncementBar
        text={lpShared.announcement.text}
        emoji={lpShared.announcement.emoji}
      />
      <main>
        <LPHero data={lp.hero} />
        {reasons.map((reason, i) => (
          <LPReason key={i} data={reason} index={i} />
        ))}
        <LPSocialProofStats data={lpShared.socialProofStats} />
        <LPTimeline data={lpShared.timeline} />
        <LPTrustGrid data={lpShared.trustGrid} />
        <LPBuyBox data={lpShared.buyBox} />
        <LPFAQ data={lpShared.faq} />
      </main>
      <LPFooter data={lpShared.footer} />
      <LPStickyCTA />
    </>
  );
}
