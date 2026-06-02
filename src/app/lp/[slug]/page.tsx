import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { angleSlugs, getAngle } from "@/lib/lp-angles";
import LandingPage from "@/components/lp-v2/LandingPage";

// Static export: only the params below are emitted; any other slug 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return angleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const angle = getAngle(slug);
  if (!angle) return {};
  return {
    title: angle.meta.title,
    description: angle.meta.description,
    openGraph: {
      title: angle.meta.title,
      description: angle.meta.description,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const angle = getAngle(slug);
  if (!angle) notFound();
  return <LandingPage angle={angle} />;
}
