import StarRating from "@/components/ui/StarRating";

// gruns "4.8 · 100,000 reviews · 1M members" band — but Gomu is pre-launch with
// no real reviews. Same DA, visible [X] placeholders to fill from real data.
export default function SocialProofBand() {
  return (
    <section className="bg-gomu-chartreuse text-gomu-purple-deep py-16 md:py-20 border-y-2 border-gomu-purple-deep">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <StarRating
            size={24}
            className="fill-gomu-purple-deep text-gomu-purple-deep"
          />
          <span className="font-display font-bold text-[26px] md:text-[30px] leading-none">
            [X]/5
          </span>
        </div>
        <p className="mt-4 font-display font-bold tracking-display text-[30px] md:text-[48px] leading-[1.05]">
          [X] avis · [X] membres sur la liste
        </p>
        <p className="mt-3 text-[14px] text-gomu-purple-deep/70">
          Chiffres réels publiés dès les premiers retours clients — on n&apos;invente rien.
        </p>
      </div>
    </section>
  );
}
