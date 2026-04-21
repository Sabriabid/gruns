import AtlasCard from "@/components/atlas/AtlasCard";
import AtlasSectionHeader from "@/components/atlas/AtlasSectionHeader";
import AtlasBadge from "@/components/atlas/AtlasBadge";
import AtlasCallout from "@/components/atlas/AtlasCallout";
import AtlasKeyValue from "@/components/atlas/AtlasKeyValue";
import AtlasQuoteBlock from "@/components/atlas/AtlasQuoteBlock";
import { brandCore, gomuIngredients } from "@/lib/atlas/brand";
import { ump, ums } from "@/lib/atlas/mechanisms";
import { avatars } from "@/lib/atlas/avatars";
import { angles } from "@/lib/atlas/angles";
import { sufferingMatrix, sufferingLevels, awarenessLevels } from "@/lib/atlas/souffrance";
import { verbatims, topProblems } from "@/lib/atlas/verbatims";
import { atlasBrandTOC } from "@/lib/atlas/navigation";

export default function BrandPage() {
  const goldenVerbatims = verbatims.filter((v) => v.isGolden);

  return (
    <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10">
      {/* TOC sticky */}
      <aside className="hidden lg:block">
        <nav className="sticky top-24 space-y-1 text-sm">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-atlas-muted mb-2">
            Sections
          </div>
          {atlasBrandTOC.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="block rounded-md px-2 py-1.5 text-atlas-muted hover:text-atlas-text-strong hover:bg-atlas-surface transition-colors"
            >
              {t.label}
            </a>
          ))}
        </nav>
      </aside>

      <div className="space-y-14 min-w-0">
        {/* Hero */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <AtlasBadge tone="accent">BRAND HUB</AtlasBadge>
            <AtlasBadge tone="muted">
              {brandCore.sourceDocs.length} docs sources
            </AtlasBadge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-atlas-text-strong leading-tight">
            Le Protocole Tout-en-Un — le <span className="text-atlas-accent">Grüns français</span>, en mieux.
          </h1>
          <div className="mt-6 max-w-3xl">
            <AtlasCallout tone="insight" kicker="One Belief" title={brandCore.oneBeliefCompact}>
              {brandCore.oneBelief}
            </AtlasCallout>
          </div>
        </section>

        {/* Identity & mission */}
        <section>
          <AtlasSectionHeader
            id="identity"
            kicker="01 — Identité"
            title="Mission & positionnement"
            description="Source : CONTEXTE_MARQUE_BRANDING.md"
          />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <AtlasCard>
              <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-2">
                Mission
              </div>
              <p className="text-atlas-text leading-relaxed">{brandCore.mission}</p>
            </AtlasCard>
            <AtlasCard>
              <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-2">
                Positionnement
              </div>
              <p className="text-atlas-text leading-relaxed">{brandCore.positioning}</p>
            </AtlasCard>
          </div>

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            {brandCore.pillars.map((p) => (
              <AtlasCard key={p.title} className="!p-4">
                <div className="text-2xl">{p.icon}</div>
                <div className="mt-2 font-semibold text-atlas-text-strong text-sm">
                  {p.title}
                </div>
                <div className="mt-1 text-[12px] text-atlas-muted leading-relaxed">
                  {p.body}
                </div>
              </AtlasCard>
            ))}
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <AtlasCard variant="success">
              <div className="text-[11px] uppercase tracking-wider text-atlas-success font-semibold mb-2">
                ✅ Ce qu&apos;on dit
              </div>
              <ul className="space-y-1.5 text-sm text-atlas-text">
                {brandCore.toneOfVoice.dos.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-atlas-success">›</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </AtlasCard>
            <AtlasCard variant="crit">
              <div className="text-[11px] uppercase tracking-wider text-atlas-danger font-semibold mb-2">
                ❌ Ce qu&apos;on ne dit JAMAIS
              </div>
              <ul className="space-y-1.5 text-sm text-atlas-text">
                {brandCore.toneOfVoice.donts.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-atlas-danger">×</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </AtlasCard>
          </div>
        </section>

        {/* Product */}
        <section>
          <AtlasSectionHeader
            id="product"
            kicker="02 — Produit"
            title="Formule & ingrédients"
            description="15-20 actifs, tous à dosages cliniques, formes biodisponibles privilégiées. Zéro pixie dusting. Source : CONTEXTE_PRODUIT.md"
          />
          <div className="mt-6 overflow-x-auto rounded-xl border border-atlas-border bg-atlas-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-atlas-border text-[11px] uppercase tracking-wider text-atlas-muted">
                  <th className="py-3 px-4 text-left font-medium">Actif</th>
                  <th className="py-3 px-4 text-left font-medium">Catégorie</th>
                  <th className="py-3 px-4 text-left font-medium">Forme biodisponible</th>
                  <th className="py-3 px-4 text-left font-medium">Pourquoi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-atlas-border">
                {gomuIngredients.map((ing) => (
                  <tr key={ing.name}>
                    <td className="py-3 px-4 text-atlas-text-strong font-medium">{ing.name}</td>
                    <td className="py-3 px-4 text-atlas-muted capitalize">{ing.category}</td>
                    <td className="py-3 px-4 text-atlas-accent font-medium">{ing.form}</td>
                    <td className="py-3 px-4 text-atlas-text">{ing.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* One Belief */}
        <section>
          <AtlasSectionHeader
            id="one-belief"
            kicker="03 — One Belief"
            title="La croyance à installer"
            description="16-Word Sales Letter (Albuquerque). Si le prospect croit ça, il n'a plus d'échappatoire logique. Source : NECESSARY_BELIEFS.md"
          />
          <div className="mt-6">
            <AtlasCard variant="accent">
              <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
                Empreinte neurologique (version compacte)
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-atlas-text-strong leading-tight">
                {brandCore.oneBeliefCompact}
              </div>
              <div className="mt-6 text-[11px] uppercase tracking-wider text-atlas-muted font-semibold mb-2">
                Version complète
              </div>
              <p className="text-atlas-text leading-relaxed">{brandCore.oneBelief}</p>
            </AtlasCard>
          </div>
        </section>

        {/* Mechanisms */}
        <section>
          <AtlasSectionHeader
            id="mechanisms"
            kicker="04 — Mécanismes uniques"
            title="UMP / UMS — le problème nommé, la solution nommée"
            description="Sources : MECANISMES_UNIQUES.md"
          />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <AtlasCard variant="crit">
              <AtlasBadge tone="danger">UMP — Problème</AtlasBadge>
              <h3 className="mt-3 text-xl font-bold text-atlas-text-strong">{ump.name}</h3>
              <p className="mt-1 text-sm text-atlas-danger font-medium">{ump.tagline}</p>
              {ump.problemNamed && (
                <p className="mt-3 text-sm text-atlas-text leading-relaxed">{ump.problemNamed}</p>
              )}
              <p className="mt-3 text-sm text-atlas-text leading-relaxed">{ump.narrative}</p>
              {ump.jaws && (
                <div className="mt-4 space-y-2">
                  {ump.jaws.map((j, i) => (
                    <div
                      key={i}
                      className="rounded-md bg-atlas-danger/10 border border-atlas-danger/20 p-3 text-[13px] text-atlas-text"
                    >
                      🦷 {j}
                    </div>
                  ))}
                </div>
              )}
            </AtlasCard>
            <AtlasCard variant="success">
              <AtlasBadge tone="success">UMS — Solution</AtlasBadge>
              <h3 className="mt-3 text-xl font-bold text-atlas-text-strong">{ums.name}</h3>
              <p className="mt-1 text-sm text-atlas-success font-medium">{ums.tagline}</p>
              {ums.solutionNamed && (
                <p className="mt-3 text-sm text-atlas-text leading-relaxed">{ums.solutionNamed}</p>
              )}
              <p className="mt-3 text-sm text-atlas-text leading-relaxed">{ums.narrative}</p>
            </AtlasCard>
          </div>
        </section>

        {/* Avatars */}
        <section>
          <AtlasSectionHeader
            id="avatars"
            kicker="05 — Cibles"
            title="Avatars psychographiques"
            description="Source : AVATAR_360.md — chaque fact ancré dans un verbatim ou un pattern documenté."
          />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {avatars.map((a) => (
              <AtlasCard key={a.id}>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-atlas-text-strong">
                    {a.name}
                    <span className="text-atlas-muted font-normal ml-2 text-base">
                      · {a.age} ans
                    </span>
                  </h3>
                  <AtlasBadge tone="accent">{a.archetype}</AtlasBadge>
                </div>
                <p className="text-sm text-atlas-muted italic leading-relaxed">
                  {a.oneLiner}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[12px]">
                  {Object.entries(a.demographics).map(([k, v]) => (
                    <div key={k}>
                      <div className="text-atlas-muted">{k}</div>
                      <div className="text-atlas-text">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-atlas-danger font-semibold mb-1">
                      Douleur identitaire
                    </div>
                    <p className="text-sm text-atlas-text leading-relaxed">
                      « {a.pains.identity} »
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-1">
                      Désirs
                    </div>
                    <ul className="text-sm text-atlas-text space-y-1">
                      {a.desires.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-atlas-accent">›</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-atlas-warning font-semibold mb-1">
                      Objections
                    </div>
                    <ul className="text-sm text-atlas-text space-y-1">
                      {a.objections.slice(0, 3).map((o, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-atlas-warning">›</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-atlas-border">
                    <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold mb-2">
                      Verbatim signature
                    </div>
                    <AtlasQuoteBlock
                      text={a.quotes[0].text}
                      source={a.quotes[0].source}
                      tone="negative"
                    />
                  </div>
                </div>
              </AtlasCard>
            ))}
          </div>
        </section>

        {/* Suffering matrix */}
        <section>
          <AtlasSectionHeader
            id="suffering"
            kicker="06 — Matrice souffrance × conscience"
            title="6 niveaux de souffrance × 5 niveaux de conscience"
            description="Source : 6_SOUFFRANCE.md — cadre combinant Schwartz (awareness) et niveaux de souffrance (physique → identitaire)."
          />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <AtlasCard>
              <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
                Les 6 niveaux de souffrance
              </div>
              <ol className="space-y-3">
                {sufferingLevels.map((s) => (
                  <li key={s.level} className="flex gap-3">
                    <span className="text-atlas-accent font-bold tabular-nums w-5 shrink-0">
                      {s.level}
                    </span>
                    <div>
                      <div className="font-semibold text-atlas-text-strong text-sm">
                        {s.name}
                      </div>
                      <div className="text-[12px] text-atlas-muted">
                        {s.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </AtlasCard>
            <AtlasCard>
              <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
                Les 5 niveaux de conscience (Schwartz)
              </div>
              <ol className="space-y-3">
                {awarenessLevels.map((s) => (
                  <li key={s.level} className="flex gap-3">
                    <span className="text-atlas-accent font-bold tabular-nums w-5 shrink-0">
                      {s.level}
                    </span>
                    <div>
                      <div className="font-semibold text-atlas-text-strong text-sm">
                        {s.name}
                      </div>
                      <div className="text-[12px] text-atlas-muted">
                        {s.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </AtlasCard>
          </div>

          <div className="mt-6">
            <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold mb-3">
              Cellules clés de la matrice ({sufferingMatrix.length} documentées)
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {sufferingMatrix.map((s) => (
                <div
                  key={s.id}
                  className="rounded-lg border border-atlas-border bg-atlas-surface p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AtlasBadge tone="accent">S{s.sufferingLevel}</AtlasBadge>
                    <AtlasBadge tone="info">C{s.awarenessLevel}</AtlasBadge>
                    {s.bestAngleId && (
                      <AtlasBadge tone="muted">→ {s.bestAngleId}</AtlasBadge>
                    )}
                  </div>
                  <p className="text-sm text-atlas-text leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-atlas-border text-[13px] italic text-atlas-accent">
                    Hook : « {s.hook} »
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Angles */}
        <section>
          <AtlasSectionHeader
            id="angles"
            kicker="07 — Angles publicitaires"
            title={`${angles.length} angles ancrés dans les verbatims`}
            description="Source : 15_ANGLES_PUB.md — chaque angle est relié à un avatar, un niveau de souffrance, et une LP cible."
          />
          <div className="mt-6 grid md:grid-cols-2 gap-3">
            {angles.map((a) => (
              <AtlasCard key={a.id} className="!p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-atlas-accent font-bold tabular-nums text-lg leading-none">
                      {String(a.number).padStart(2, "0")}
                    </span>
                    <AtlasBadge tone="accent">{a.type}</AtlasBadge>
                    <AtlasBadge tone="muted">→ {a.targetAvatarId}</AtlasBadge>
                  </div>
                  {a.recommendedLPSlug && (
                    <code className="text-[11px] text-atlas-muted font-mono">
                      /lp/{a.recommendedLPSlug}
                    </code>
                  )}
                </div>
                <h4 className="font-bold text-atlas-text-strong text-base leading-tight">
                  {a.name}
                </h4>
                <p className="mt-2 text-sm text-atlas-accent italic">« {a.hook} »</p>
                <p className="mt-2 text-sm text-atlas-text leading-relaxed">
                  <span className="text-atlas-muted">H1 : </span>
                  {a.headline}
                </p>
                <div className="mt-3 flex items-center gap-1 flex-wrap">
                  {a.platforms.map((p) => (
                    <AtlasBadge key={p} tone="muted">
                      {p}
                    </AtlasBadge>
                  ))}
                </div>
              </AtlasCard>
            ))}
          </div>
        </section>

        {/* Offer */}
        <section>
          <AtlasSectionHeader
            id="offer"
            kicker="08 — Offre & garantie"
            title="L'offre irrésistible"
            description="Value Equation Hormozi. Ratio cible 5:1 minimum. Sources : OFFRE.md, GARANTIE.md"
          />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <AtlasCard variant="accent">
              <div className="flex items-baseline justify-between mb-3">
                <AtlasBadge tone="accent">Abonnement (populaire)</AtlasBadge>
                <AtlasBadge tone="success">Offre lancement -30%</AtlasBadge>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-atlas-text-strong">
                  {brandCore.offer.subscription.price}€
                </span>
                <span className="text-atlas-muted">/ mois</span>
                {brandCore.offer.subscription.strikePrice && (
                  <span className="text-atlas-muted line-through text-sm">
                    {brandCore.offer.subscription.strikePrice}€
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-atlas-text">
                {brandCore.offer.subscription.perks.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-atlas-success">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </AtlasCard>
            <AtlasCard>
              <AtlasBadge tone="muted">Achat ponctuel</AtlasBadge>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-atlas-text-strong">
                  {brandCore.offer.oneTime.price}€
                </span>
              </div>
              <div className="mt-1 text-sm text-atlas-muted">
                {brandCore.offer.oneTime.shipping}
              </div>
              <div className="mt-4 text-[13px] text-atlas-muted italic leading-relaxed">
                Visuellement désavantagé : pas de livraison offerte, pas de badge, pas de perks. Le one-time existe pour crédibiliser le subscribe par contraste.
              </div>
            </AtlasCard>
          </div>

          <div className="mt-4">
            <AtlasCallout tone="opportunity" kicker="Garantie" title={brandCore.guarantee.name}>
              {brandCore.guarantee.promise}
              <div className="mt-2 text-[12px] text-atlas-muted">
                Durée : {brandCore.guarantee.duration}
              </div>
            </AtlasCallout>
          </div>
        </section>

        {/* Verbatims & top problems */}
        <section>
          <AtlasSectionHeader
            id="verbatims"
            kicker="09 — Voix du client"
            title="Top 10 problèmes + verbatims GOLDEN"
            description="Sources : VOIX_DU_CLIENT.md (synthèse 153 verbatims) + VERBATIM1/2/3 (bruts)."
          />
          <div className="mt-6">
            <AtlasKeyValue
              rows={topProblems.map((p) => ({
                label: `#${p.rank} — ${p.title}`,
                value: (
                  <div>
                    <div className="text-sm text-atlas-text font-normal leading-relaxed">
                      {p.description}
                    </div>
                    <div className="mt-1 text-[11px] text-atlas-muted">
                      Fréquence : {p.frequency}
                    </div>
                  </div>
                ),
              }))}
            />
          </div>
          <div className="mt-8">
            <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
              ⭐ Verbatims GOLDEN ({goldenVerbatims.length})
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {goldenVerbatims.map((v) => (
                <AtlasQuoteBlock
                  key={v.id}
                  text={v.rawText}
                  source={`${v.source}${v.brandMentioned ? ` — ${v.brandMentioned}` : ""}`}
                  tone={v.sentiment === "negative" ? "negative" : "positive"}
                  tag={v.themes[0]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer link back */}
        <section className="border-t border-atlas-border pt-8">
          <p className="text-sm text-atlas-muted leading-relaxed">
            Documents sources complets (lecture raw markdown) :{" "}
            {brandCore.sourceDocs.map((d, i) => (
              <span key={d}>
                <code className="text-atlas-accent">{d}</code>
                {i < brandCore.sourceDocs.length - 1 && ", "}
              </span>
            ))}
            .
          </p>
        </section>
      </div>
    </div>
  );
}
