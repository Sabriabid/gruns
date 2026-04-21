export default function SachetPlaceholder({
  dark = false,
  size = "xl",
}: {
  dark?: boolean;
  size?: "xl" | "md";
}) {
  return (
    <div
      className={`relative w-full aspect-square ${size === "xl" ? "max-w-[560px]" : "max-w-[360px]"} mx-auto rounded-[32px] overflow-hidden border-2 ${dark ? "border-gomu-yellow/70 bg-gomu-cream" : "border-gomu-purple-deep bg-gomu-paper"}`}
    >
      <div className="absolute inset-0 ph-stripes"></div>
      <div className="absolute inset-6 rounded-[22px] border border-gomu-purple-deep/20 flex flex-col items-center justify-center text-gomu-purple-deep">
        <div className="font-display italic font-semibold text-[84px] md:text-[104px] leading-none tracking-display">
          Gomu
        </div>
        <div className="mt-3 text-[12px] uppercase tracking-cap text-gomu-purple-deep/70">
          8 gummies · 1 jour
        </div>
        <div className="mt-8 h-[2px] w-16 bg-gomu-purple-deep/20"></div>
        <div className="mt-3 text-[11px] uppercase tracking-cap text-gomu-purple-deep/50">
          Base pectine · 30 sachets
        </div>
      </div>
      <div className="absolute bottom-3 right-4 text-[10px] uppercase tracking-cap text-gomu-purple-deep/40 font-mono">
        [PHOTO : sachet]
      </div>
    </div>
  );
}
