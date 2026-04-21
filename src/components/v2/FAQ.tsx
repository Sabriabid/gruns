"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Eyebrow from "./Eyebrow";

const ITEMS = [
  {
    q: "Quand est-ce que je recevrai mon premier sachet ?",
    a: "Le lancement officiel est prévu au Q2 2026. Les 500 premiers membres de la liste d'attente sont prévenus 72h avant l'ouverture et bénéficient du tarif de lancement à vie. Livraison en 48h dans toute la France métropolitaine dès le jour J.",
  },
  {
    q: "Qu'est-ce qu'il y a exactement dans un sachet ?",
    a: "8 gummies à mâcher en pectine de fruit. Chaque sachet apporte entre 15 et 20 actifs : vitamines A, C, D3, E, K2, complexe B complet (B1, B2, B3, B5, B6, B9 sous forme L-5-MTHF, B12 sous forme méthylcobalamine), zinc bisglycinate, sélénium sous forme sélénométhionine, iode, magnésium, chrome, KSM-66 Ashwagandha, rhodiola rosea, inuline de chicorée. Formule exacte publiée dès le lancement.",
  },
  {
    q: "Pourquoi les dosages en minéraux sont-ils à 25% des AJR ?",
    a: "Parce que c'est une contrainte physique du format gummy — acceptée par toute l'industrie du gummy sérieuse. Un gummy ne peut pas contenir autant de minéraux qu'une gélule de 800mg. En revanche, nos vitamines sont dosées à 100% des AJR, et nos formes minérales sont biodisponibles (ex : zinc bisglycinate 3× mieux absorbé que l'oxyde classique). On préfère parier sur la compliance quotidienne — un produit que tu prends tous les jours bat toujours un produit parfait que tu abandonnes en 15 jours.",
  },
  {
    q: "Comment fonctionne la certification halal ?",
    a: "Notre base est en pectine de fruit, pas en gélatine. C'est halal et vegan par construction, pas par certification ajoutée. On travaille avec un organisme certificateur halal français pour l'apposition du logo officiel sur le packaging.",
  },
  {
    q: "Je peux annuler à tout moment ?",
    a: "Oui. En 2 clics depuis ton espace client. Pas d'email à envoyer, pas de justificatif à fournir, pas de délai de préavis. On a vu ce que font les autres marques — on refuse de jouer à ce jeu.",
  },
  {
    q: "Où puis-je consulter les rapports de tests Eurofins ?",
    a: "Dès l'arrivée du premier lot en stock, chaque rapport sera publié sur /tests-laboratoire. Tu entres le numéro de lot imprimé sur ton sachet, tu accèdes au rapport PDF complet (dosages vérifiés, pesticides, métaux lourds, contaminants microbiens).",
  },
  {
    q: "Ashwagandha : quelles précautions ?",
    a: "L'ANSES a émis un avis en avril 2024 recommandant de déconseiller l'ashwagandha aux personnes souffrant de troubles thyroïdiens ou hépatiques, aux femmes enceintes ou allaitantes. On respecte cette recommandation et l'indique clairement sur le packaging.",
  },
  {
    q: "Combien de temps avant de ressentir des effets ?",
    a: "Honnêtement : pas de miracle en 3 jours. Effets subjectifs (énergie, sommeil) en 1 à 2 semaines selon les individus. Correction biologique mesurable en 4 à 8 semaines. Résultats sanguins visibles après 3 mois de prise régulière. C'est pour ça qu'on mise sur un format plaisir : si tu ne prends pas le produit, il ne fait rien.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-gomu-cream py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="reveal text-center">
          <Eyebrow className="justify-center">Questions fréquentes</Eyebrow>
          <h2 className="font-display tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-purple-deep">
            Tout ce que tu <span className="italic">dois</span> savoir.
          </h2>
        </div>

        <div className="mt-14 reveal border-t border-gomu-purple-deep/20">
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b border-gomu-purple-deep/20"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
                >
                  <span className="font-display text-[20px] md:text-[24px] leading-[1.25] text-gomu-purple-deep pr-4">
                    {it.q}
                  </span>
                  <span
                    className={`shrink-0 w-10 h-10 rounded-full border border-gomu-purple-deep/30 flex items-center justify-center text-gomu-purple-deep transition-transform ${
                      isOpen ? "rotate-180 bg-gomu-purple-deep text-gomu-cream" : ""
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div className={`acc-body ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="pb-7 pr-12 text-[15.5px] md:text-[16px] leading-[1.7] text-gomu-ink/85 max-w-[700px]">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
