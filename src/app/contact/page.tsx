import type { Metadata } from "next";
import { ArrowRight, HelpCircle, Mail, MessageCircle } from "lucide-react";
import PageShell from "@/components/v2/PageShell";
import PageHero from "@/components/v2/PageHero";
import Btn from "@/components/v2/Btn";
import Eyebrow from "@/components/v2/Eyebrow";
import ContactForm from "./ContactForm";

const CONTACT_EMAIL = "contact@gomudaily.com";

const META_DESCRIPTION =
  "Une question sur Gomu ? Écris-nous via le formulaire ou par email. On répond sous 48h ouvrées.";

export const metadata: Metadata = {
  title: "Contact — Gomu",
  description: META_DESCRIPTION,
  openGraph: {
    title: "Contact — Gomu",
    description: META_DESCRIPTION,
    locale: "fr_FR",
    type: "website",
  },
};

const HERO_SUBTITLE =
  "On lit chaque message. On répond sous 48h ouvrées (du lundi au vendredi). Pas de standard téléphonique, pas de bot : juste nous.";

const FORM_INTRO =
  "Remplis le formulaire ci-dessous. Choisis le bon sujet pour qu'on t'oriente plus vite.";

const CHANNELS = [
  {
    icon: Mail,
    title: "Par email",
    body: "Le plus direct. Écris-nous, on revient vers toi sous 48h ouvrées.",
    href: `mailto:${CONTACT_EMAIL}`,
    cta: CONTACT_EMAIL,
  },
  {
    icon: MessageCircle,
    title: "Service client",
    body: "Commande, abonnement, livraison : même adresse, ou passe par le formulaire en sélectionnant « Commande & abonnement ».",
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "[Gomu] Commande & abonnement",
    )}`,
    cta: "Écrire au service client",
  },
  {
    icon: HelpCircle,
    title: "Avant d'écrire",
    body: "Beaucoup de réponses (halal, vegan, dosages, abonnement, lancement) sont déjà dans la FAQ.",
    href: "/#faq",
    cta: "Voir la FAQ",
  },
];

const DELAY_NOTE =
  "Délai de réponse : sous 48h ouvrées. On est une petite équipe en pré-lancement (sortie prévue Q2 2026) — merci de ta patience.";

const CTA_TITLE_LEAD = "Pas encore inscrit·e";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Une question&nbsp;?{" "}
            <span className="hl-on-dark">Écris-nous.</span>
          </>
        }
        subtitle={HERO_SUBTITLE}
      />

      <section className="bg-gomu-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12">
            <div className="reveal">
              <Eyebrow>Formulaire</Eyebrow>
              <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-purple-deep">
                Dis-nous <span className="hl">tout</span>.
              </h2>
              <p className="mt-6 mb-9 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[560px]">
                {FORM_INTRO}
              </p>
              <ContactForm />
            </div>

            <div className="reveal">
              <div className="text-[13px] uppercase tracking-cap font-medium text-gomu-purple-deep/70 mb-5">
                Autres moyens
              </div>

              <div className="space-y-4">
                {CHANNELS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="card-pop bg-gomu-paper border border-gomu-purple-deep/10 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 shrink-0 rounded-full bg-gomu-purple-deep text-gomu-cream w-10 h-10 flex items-center justify-center">
                          <Icon size={18} strokeWidth={2} />
                        </span>
                        <div>
                          <div className="font-display font-semibold text-[19px] text-gomu-purple-deep leading-tight">
                            {c.title}
                          </div>
                          <p className="mt-1.5 text-[15px] leading-[1.55] text-gomu-ink/75">
                            {c.body}
                          </p>
                          <a
                            href={c.href}
                            className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-gomu-purple-deep underline underline-offset-4 decoration-gomu-purple-deep/30 hover:decoration-gomu-purple-deep"
                          >
                            {c.cta} <ArrowRight size={15} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-[14px] leading-[1.6] text-gomu-ink/60">
                {DELAY_NOTE}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gomu-surface-dark text-gomu-cream py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center reveal">
          <Eyebrow tone="light" className="justify-center">
            Pré-lancement · Q2 2026
          </Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-cream">
            {CTA_TITLE_LEAD}&nbsp;?{" "}
            <span className="hl-on-dark">Rejoins la liste.</span>
          </h2>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-cream/80 max-w-[600px] mx-auto">
            Les 500 premiers inscrits ont le premier mois à 20€ au lieu de 29€.
            Annulable en deux clics, sans engagement.
          </p>
          <div className="mt-9 flex justify-center">
            <Btn href="/#offre" onDark>
              Rejoindre la liste <ArrowRight size={18} />
            </Btn>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
