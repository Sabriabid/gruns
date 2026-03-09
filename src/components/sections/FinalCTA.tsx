"use client";

import { content } from "@/lib/content";
import EmailCapture from "@/components/ui/EmailCapture";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-brand-green">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
          {content.finalCta.title}{" "}
          <em className="not-italic text-brand-yellow">
            {content.finalCta.titleAccent}
          </em>
        </h2>
        <div className="mt-10 flex justify-center">
          <EmailCapture
            placeholder={content.finalCta.emailPlaceholder}
            buttonText={content.finalCta.cta}
            successMessage="Merci ! Vous serez notifié dès le lancement."
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
