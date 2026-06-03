// gruns "as seen in" press strip, honest pre-launch version: placeholder logo
// slots to fill when real press lands (no invented coverage).
export default function PressLogos() {
  return (
    <section
      aria-label="Presse"
      className="bg-gomu-cream py-8 md:py-10 border-b border-gomu-purple-deep/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-[11px] uppercase tracking-cap text-gomu-purple-deep/45">
          Bientôt dans la presse
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-14">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-7 w-24 md:w-28 rounded-md bg-gomu-purple-deep/8 flex items-center justify-center text-[9px] uppercase tracking-cap text-gomu-purple-deep/40"
            >
              [LOGO]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
