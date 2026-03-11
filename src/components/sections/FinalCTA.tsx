"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import EmailCapture from "@/components/ui/EmailCapture";
import { fadeInUp, defaultTransition, defaultViewport } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-brand-green to-[#005c2e]">
      <motion.div
        className="max-w-3xl mx-auto px-4 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={defaultTransition}
      >
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
      </motion.div>
    </section>
  );
}
