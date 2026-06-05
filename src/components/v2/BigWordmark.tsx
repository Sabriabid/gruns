export default function BigWordmark() {
  return (
    <section className="bg-gomu-ink text-gomu-cream pt-10 pb-0 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Tonal — same-hue as the ink background, like gruns' giant footer
            wordmark. The chartreuse full-stop carries the only pop. */}
        <div className="font-display font-bold wordmark-huge text-gomu-purple-deep leading-[0.78] tracking-display translate-y-[18%]">
          Gomu<span className="text-gomu-chartreuse">.</span>
        </div>
      </div>
    </section>
  );
}
