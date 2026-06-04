import Eyebrow from "@/components/v2/Eyebrow";

/**
 * Dark purple page-top hero for standalone content pages. Clears the fixed
 * announcement bar (40px) + header (72px), carries the cream-on-dark header
 * state, and matches the homepage dark sections (ph-stripes texture, Fredoka
 * display title with an optional `.hl-on-dark` highlight inside `title`).
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  align = "left",
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <section className="relative overflow-hidden bg-gomu-surface-dark text-gomu-cream pt-[132px] md:pt-[176px] pb-16 md:pb-24">
      <div className="absolute inset-0 opacity-[0.07] ph-stripes-cream pointer-events-none" />
      <div
        className={`relative max-w-7xl mx-auto px-4 md:px-8 ${
          isCenter ? "text-center" : ""
        }`}
      >
        <div className={isCenter ? "max-w-[820px] mx-auto" : "max-w-[860px]"}>
          <Eyebrow tone="light" className={isCenter ? "justify-center" : ""}>
            {eyebrow}
          </Eyebrow>
          <h1 className="font-display font-bold tracking-display mt-4 text-[44px] md:text-[72px] lg:text-[84px] leading-[0.98] text-gomu-cream">
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-6 text-[17px] md:text-[19px] leading-[1.6] text-gomu-cream/80 ${
                isCenter ? "max-w-[640px] mx-auto" : "max-w-[620px]"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>
      </div>
    </section>
  );
}
