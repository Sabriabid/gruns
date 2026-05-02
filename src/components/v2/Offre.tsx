"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { resolveSource, submitToBrevo } from "@/lib/brevo";

const BENEFITS = [
  "15-20 actifs à dosages cliniques",
  "Formes biodisponibles nommées",
  "Tests Eurofins publiés lot par lot",
  "Halal & vegan natif",
  "Expédié sous 48h ouvrées",
  "Garantie satisfait ou remboursé 30 jours",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Offre() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    if (!EMAIL_RE.test(email)) {
      setError("Adresse email invalide.");
      return;
    }
    setError("");
    setSubmitting(true);
    const result = await submitToBrevo(email, resolveSource());
    setSubmitting(false);
    if (!result.ok) {
      setError("Une erreur est survenue. Réessaie dans un instant.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="offre"
      className="relative bg-gomu-purple-deep text-gomu-cream py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
        <div className="text-center reveal">
          <Eyebrow tone="light" className="justify-center">
            Offre de lancement · 500 premières places
          </Eyebrow>
          <h2 className="font-display tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1]">
            Un{" "}
            <span className="italic">
              <span className="hl-on-dark">prix honnête</span>
            </span>{" "}
            pour la nutrition quotidienne.
          </h2>
        </div>

        <div className="mt-12 md:mt-16 reveal">
          <div className="max-w-[560px] mx-auto rounded-[28px] bg-gomu-cream text-gomu-purple-deep border-[3px] border-gomu-yellow p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-cap text-gomu-purple-deep/70">
              Le protocole tout-en-un
            </div>
            <div className="mt-1 text-[14px] text-gomu-purple-deep/80">
              30 sachets · 1 mois · Abonnement mensuel
            </div>

            <div className="mt-6 h-px bg-gomu-purple-deep/20"></div>

            <div className="mt-6 grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 items-baseline">
              <div className="text-[13px] uppercase tracking-cap text-gomu-purple-deep/70">
                Prix de lancement · 1er mois
              </div>
              <div className="font-display italic text-[56px] md:text-[72px] leading-none tracking-display text-gomu-purple-deep">
                20€
              </div>
              <div className="text-[13px] uppercase tracking-cap text-gomu-purple-deep/70">
                Puis · annulable en 2 clics
              </div>
              <div className="font-display italic text-[26px] md:text-[32px] leading-none text-gomu-purple-deep/80">
                29€
                <span className="text-[14px] text-gomu-purple-deep/60 not-italic font-sans">
                  /mois
                </span>
              </div>
            </div>

            <div className="mt-6 h-px bg-gomu-purple-deep/20"></div>

            <ul className="mt-6 space-y-2.5 text-[14.5px] leading-[1.5]">
              {BENEFITS.map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check
                    size={18}
                    className="text-gomu-purple-1 mt-0.5 shrink-0"
                    strokeWidth={2.25}
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[560px] mx-auto mt-8">
            {!submitted ? (
              <>
                <div className="flex flex-col sm:flex-row gap-3 bg-gomu-cream rounded-full sm:p-1.5 p-3">
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") submit();
                    }}
                    placeholder="ton@email.com"
                    aria-label="Adresse email"
                    className="flex-1 bg-transparent text-gomu-purple-deep placeholder-gomu-purple-deep/40 px-5 py-3 sm:py-3 outline-none text-[15px]"
                  />
                  <button
                    onClick={submit}
                    disabled={submitting}
                    className="rounded-full bg-gomu-purple-deep text-gomu-cream hover:bg-gomu-purple-1 transition-colors px-6 py-3.5 text-[14.5px] font-medium inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Envoi…" : "Bloquer ma place à 20€"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                </div>
                {error && (
                  <p className="mt-3 text-center text-[13px] text-gomu-yellow">
                    {error}
                  </p>
                )}
                <p className="mt-4 text-center text-[13px] leading-[1.55] text-gomu-cream/70">
                  On ne facture rien aujourd&apos;hui. Tu reçois un email au
                  moment du lancement pour confirmer ta commande.
                </p>
              </>
            ) : (
              <div className="rounded-[22px] bg-gomu-yellow text-gomu-purple-deep p-6 md:p-7 text-center">
                <div className="font-display italic text-[26px] md:text-[30px] leading-[1.15]">
                  Tu es sur la liste.
                </div>
                <p className="mt-2 text-[15px] leading-[1.55]">
                  On t&apos;envoie un email avec les détails dans quelques
                  minutes. Check tes spams au cas où.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
