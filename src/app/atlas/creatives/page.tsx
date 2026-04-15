import AtlasCard from "@/components/atlas/AtlasCard";
import AtlasSectionHeader from "@/components/atlas/AtlasSectionHeader";
import AtlasBadge from "@/components/atlas/AtlasBadge";
import AtlasCallout from "@/components/atlas/AtlasCallout";
import AtlasMiniBar from "@/components/atlas/AtlasMiniBar";
import {
  grunsCreatives,
  creativePatterns,
  gomuPrompts,
  funnelDistributionGruns,
  funnelDistributionGomu,
  creativeTakeaways,
  funnelColor,
  type FunnelStage,
} from "@/lib/atlas/creatives";

const creativesTOC = [
  { id: "funnel", label: "Répartition funnel" },
  { id: "patterns", label: "6 patterns identifiés" },
  { id: "gruns", label: "17 créas Grüns" },
  { id: "prompts", label: "15 prompts Gomu" },
  { id: "matrix", label: "Matrice récapitulative" },
];

function FunnelBadge({ stage }: { stage: FunnelStage }) {
  return <AtlasBadge tone={funnelColor[stage]}>{stage}</AtlasBadge>;
}

export default function CreativesPage() {
  const copyAsJson = (prompt: (typeof gomuPrompts)[number]) =>
    JSON.stringify(
      {
        prompt: prompt.imagePrompt,
        style: prompt.style,
        aspect_ratio: prompt.format,
        copy: prompt.copy,
      },
      null,
      2
    );

  return (
    <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10">
      {/* TOC sticky */}
      <aside className="hidden lg:block">
        <nav className="sticky top-24 space-y-1 text-sm">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-atlas-muted mb-2">
            Sections
          </div>
          {creativesTOC.map((t) => (
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
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <AtlasBadge tone="accent">CRÉATIVES</AtlasBadge>
            <AtlasBadge tone="info">17 Grüns décortiquées</AtlasBadge>
            <AtlasBadge tone="success">15 prompts Gomu production-ready</AtlasBadge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-atlas-text-strong leading-tight">
            Décortiquer Grüns. <span className="text-atlas-accent">Produire Gomu.</span>
          </h1>
          <p className="mt-4 text-atlas-muted max-w-3xl leading-relaxed">
            Reverse engineering chirurgical des 17 créatives Grüns (angle, concept, personnage,
            niveau d&apos;awareness, mécanique persuasive, force, faiblesse), suivi de 15 prompts
            Gomu directement générables, mappés sur nos angles + avatars + exclusivités FR (halal,
            anti-abonnement-piège).
          </p>
          <div className="mt-4 text-[13px] text-atlas-muted">
            Source : <code className="text-atlas-accent">data/ANALYSE_CREA_GRUNS_PROMPTS_GOMU.md</code>
          </div>
        </section>

        {/* Funnel distribution */}
        <section>
          <AtlasSectionHeader
            id="funnel"
            kicker="Awareness × Funnel"
            title="Répartition TOF / MOF / BOF"
            description="Comment chacun investit son mix créatif. La répartition dit tout de la stratégie d'acquisition."
          />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <AtlasCard variant="info">
              <div className="flex items-baseline justify-between mb-3">
                <div className="text-[11px] uppercase tracking-wider text-atlas-info font-semibold">
                  Grüns — 17 créas analysées
                </div>
                <AtlasBadge tone="info">Scaling mode</AtlasBadge>
              </div>
              <div className="space-y-3">
                {funnelDistributionGruns.map((d) => (
                  <div key={d.stage}>
                    <div className="flex justify-between items-baseline mb-1">
                      <FunnelBadge stage={d.stage} />
                      <span className="text-sm text-atlas-text tabular-nums">
                        {d.count} créas · {d.pct}%
                      </span>
                    </div>
                    <AtlasMiniBar
                      value={d.pct}
                      max={50}
                      showValue={false}
                      tone={d.stage === "TOF" ? "accent" : d.stage === "BOF" ? "danger" : "warn"}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[13px] text-atlas-muted leading-relaxed">
                76% de TOF et MOF — Grüns investit dans l&apos;awareness + éducation. Cohérent avec
                leur phase de scaling jusqu&apos;à l&apos;exit Unilever 1,2 Md$.
              </p>
            </AtlasCard>
            <AtlasCard variant="accent">
              <div className="flex items-baseline justify-between mb-3">
                <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold">
                  Gomu — 15 prompts produits
                </div>
                <AtlasBadge tone="accent">Cible</AtlasBadge>
              </div>
              <div className="space-y-3">
                {funnelDistributionGomu.map((d) => (
                  <div key={d.stage}>
                    <div className="flex justify-between items-baseline mb-1">
                      <FunnelBadge stage={d.stage} />
                      <span className="text-sm text-atlas-text tabular-nums">
                        {d.count} prompts · {d.pct}%
                      </span>
                    </div>
                    <AtlasMiniBar
                      value={d.pct}
                      max={50}
                      showValue={false}
                      tone={d.stage === "TOF" ? "accent" : d.stage === "BOF" ? "danger" : "warn"}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[13px] text-atlas-muted leading-relaxed">
                Mix similaire (47% TOF) + 2 prompts exclusifs FR (halal natif, anti-abonnement-piège)
                sans équivalent Grüns.
              </p>
            </AtlasCard>
          </div>
        </section>

        {/* Patterns */}
        <section>
          <AtlasSectionHeader
            id="patterns"
            kicker="Patterns"
            title="6 schémas créatifs récurrents"
            description="Les patterns réutilisables identifiés dans les 17 créas. Chacun adapté pour Gomu."
          />
          <div className="mt-6 space-y-3">
            {creativePatterns.map((p) => (
              <AtlasCard key={p.id}>
                <div className="flex items-baseline justify-between gap-2 flex-wrap mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-atlas-accent font-bold tabular-nums text-lg">
                      {String(p.id).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-bold text-atlas-text-strong">{p.name}</h3>
                  </div>
                  <AtlasBadge tone="muted">
                    {p.creativeIds.length} créas · #{p.creativeIds.join(", #")}
                  </AtlasBadge>
                </div>
                <p className="text-sm text-atlas-accent italic">{p.oneLiner}</p>
                <p className="mt-3 text-sm text-atlas-text leading-relaxed">{p.description}</p>
                <div className="mt-3 rounded-md bg-atlas-success/10 border border-atlas-success/20 p-3">
                  <div className="text-[11px] uppercase tracking-wider text-atlas-success font-semibold mb-1">
                    → Transposition Gomu
                  </div>
                  <p className="text-sm text-atlas-text leading-relaxed">{p.gomuTransposition}</p>
                </div>
              </AtlasCard>
            ))}
          </div>
        </section>

        {/* 17 Gruns creatives */}
        <section>
          <AtlasSectionHeader
            id="gruns"
            kicker="Reverse engineering"
            title={`17 créatives Grüns — décomposition`}
            description="Pour chaque créa : angle pub, concept visuel + personnage, niveau d'awareness, émotion ciblée, mécanique persuasive, force, faiblesse, transposabilité pour Gomu."
          />
          <div className="mt-6 space-y-3">
            {grunsCreatives.map((c) => (
              <AtlasCard
                key={c.id}
                variant={c.directlyTransposable ? "success" : "default"}
                className="!p-5"
              >
                <div className="flex items-baseline justify-between gap-2 flex-wrap mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-atlas-accent font-bold tabular-nums text-lg leading-none">
                      #{String(c.id).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-atlas-text-strong">{c.title}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <FunnelBadge stage={c.funnelStage} />
                    {c.directlyTransposable && (
                      <AtlasBadge tone="success">★ Transposable</AtlasBadge>
                    )}
                    {c.patternIds.map((pid) => (
                      <AtlasBadge key={pid} tone="muted">Pattern {pid}</AtlasBadge>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-1">
                      Angle
                    </div>
                    <p className="text-sm text-atlas-text leading-relaxed">{c.angle}</p>
                    <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mt-3 mb-1">
                      Concept & personnage
                    </div>
                    <p className="text-sm text-atlas-text leading-relaxed">{c.concept}</p>
                    <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mt-3 mb-1">
                      Émotion ciblée
                    </div>
                    <p className="text-sm text-atlas-text italic">{c.emotion}</p>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-1">
                      Mécanique persuasive
                    </div>
                    <p className="text-sm text-atlas-text leading-relaxed">{c.mechanic}</p>
                    <div className="mt-3 grid grid-cols-1 gap-2">
                      <div className="rounded bg-atlas-success/10 border border-atlas-success/20 p-2.5">
                        <div className="text-[10px] uppercase tracking-wider text-atlas-success font-semibold">
                          Force
                        </div>
                        <p className="text-[13px] text-atlas-text mt-0.5">{c.strength}</p>
                      </div>
                      <div className="rounded bg-atlas-danger/10 border border-atlas-danger/20 p-2.5">
                        <div className="text-[10px] uppercase tracking-wider text-atlas-danger font-semibold">
                          Faiblesse
                        </div>
                        <p className="text-[13px] text-atlas-text mt-0.5">{c.weakness}</p>
                      </div>
                    </div>
                    {c.transposeNote && (
                      <div className="mt-3 rounded bg-atlas-accent/10 border border-atlas-accent/30 p-2.5 text-[13px] text-atlas-text">
                        <span className="text-atlas-accent font-semibold">→ </span>
                        {c.transposeNote}
                      </div>
                    )}
                  </div>
                </div>
              </AtlasCard>
            ))}
          </div>
        </section>

        {/* 15 Gomu prompts */}
        <section>
          <AtlasSectionHeader
            id="prompts"
            kicker="Production-ready"
            title={`15 prompts Gomu générables`}
            description="Chaque prompt inclut : copy structuré, prompt image IA (Midjourney / DALL·E / Flux), format, source Grüns. Copiez le JSON complet pour générer."
          />
          <div className="mt-6 space-y-3">
            {gomuPrompts.map((p) => (
              <AtlasCard
                key={p.id}
                variant={p.exclusiveFR ? "accent" : "default"}
                className="!p-5"
              >
                <div className="flex items-baseline justify-between gap-2 flex-wrap mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-atlas-accent font-bold tabular-nums text-lg leading-none">
                      P{String(p.id).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-atlas-text-strong">{p.name}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <FunnelBadge stage={p.funnelStage} />
                    <AtlasBadge tone="muted">{p.format}</AtlasBadge>
                    {p.exclusiveFR && <AtlasBadge tone="accent">★ Exclusif FR</AtlasBadge>}
                    {p.grunsSourceIds.length > 0 && (
                      <AtlasBadge tone="info">
                        Source : Grüns #{p.grunsSourceIds.join(", #")}
                      </AtlasBadge>
                    )}
                    {p.gomuAngleId && <AtlasBadge tone="muted">{p.gomuAngleId}</AtlasBadge>}
                  </div>
                </div>

                <div className="text-[13px] text-atlas-muted mb-3">
                  Angle Gomu : <span className="text-atlas-text">{p.gomuAngleName}</span>
                </div>

                {/* Copy preview */}
                <div className="mb-3 rounded bg-atlas-surface-2 border border-atlas-border p-3">
                  <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-2">
                    Copy
                  </div>
                  <div className="space-y-1.5 text-sm">
                    {p.copy.headline && (
                      <div>
                        <span className="text-atlas-muted">H1 : </span>
                        <span className="text-atlas-text-strong font-medium">{String(p.copy.headline)}</span>
                      </div>
                    )}
                    {p.copy.subheadline && (
                      <div>
                        <span className="text-atlas-muted">Sub : </span>
                        <span className="text-atlas-text">{String(p.copy.subheadline)}</span>
                      </div>
                    )}
                    {p.copy.subline && (
                      <div>
                        <span className="text-atlas-muted">Subline : </span>
                        <span className="text-atlas-text">{String(p.copy.subline)}</span>
                      </div>
                    )}
                    {p.copy.salutation && (
                      <div>
                        <span className="text-atlas-muted">Salutation : </span>
                        <span className="text-atlas-text italic">{String(p.copy.salutation)}</span>
                      </div>
                    )}
                    {p.copy.badge && (
                      <div>
                        <span className="text-atlas-muted">Badge : </span>
                        <span className="text-atlas-accent">{String(p.copy.badge)}</span>
                      </div>
                    )}
                    {p.copy.cta && (
                      <div>
                        <span className="text-atlas-muted">CTA : </span>
                        <span className="text-atlas-success font-semibold">{String(p.copy.cta)}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Prompt JSON */}
                <details className="group">
                  <summary className="cursor-pointer text-[12px] text-atlas-muted hover:text-atlas-text select-none">
                    ▸ Voir le prompt JSON complet (copiable)
                  </summary>
                  <pre className="mt-2 overflow-x-auto rounded bg-atlas-bg border border-atlas-border p-3 text-[11px] text-atlas-text leading-relaxed">
                    {copyAsJson(p)}
                  </pre>
                </details>

                {p.note && (
                  <div className="mt-3 text-[13px] text-atlas-warning leading-relaxed">
                    ⚠️ {p.note}
                  </div>
                )}
              </AtlasCard>
            ))}
          </div>
        </section>

        {/* Matrix recap */}
        <section>
          <AtlasSectionHeader
            id="matrix"
            kicker="Matrice"
            title="Prompts × Funnel × Angle × Format"
            description="Tableau de bord unique pour arbitrer le mix créatif à lancer."
          />
          <div className="mt-6 overflow-x-auto rounded-xl border border-atlas-border bg-atlas-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-atlas-border text-[11px] uppercase tracking-wider text-atlas-muted">
                  <th className="py-3 px-4 text-left font-medium">#</th>
                  <th className="py-3 px-4 text-left font-medium">Prompt</th>
                  <th className="py-3 px-4 text-left font-medium">Angle</th>
                  <th className="py-3 px-4 text-left font-medium">Funnel</th>
                  <th className="py-3 px-4 text-left font-medium">Format</th>
                  <th className="py-3 px-4 text-left font-medium">Source Grüns</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-atlas-border">
                {gomuPrompts.map((p) => (
                  <tr key={p.id}>
                    <td className="py-2.5 px-4 text-atlas-accent font-mono font-bold tabular-nums">
                      P{String(p.id).padStart(2, "0")}
                    </td>
                    <td className="py-2.5 px-4">
                      <div className="text-atlas-text-strong font-medium">{p.name}</div>
                      {p.exclusiveFR && (
                        <AtlasBadge tone="accent" className="mt-1">
                          Exclusif FR
                        </AtlasBadge>
                      )}
                    </td>
                    <td className="py-2.5 px-4 text-atlas-muted text-[13px]">{p.gomuAngleName}</td>
                    <td className="py-2.5 px-4">
                      <FunnelBadge stage={p.funnelStage} />
                    </td>
                    <td className="py-2.5 px-4 text-atlas-text">{p.format}</td>
                    <td className="py-2.5 px-4 text-atlas-muted text-[13px]">
                      {p.grunsSourceIds.length > 0
                        ? p.grunsSourceIds.map((id) => `#${id}`).join(", ")
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Takeaways */}
        <section>
          <AtlasSectionHeader kicker="Takeaways" title="Ce qu&apos;on retient" />
          <div className="mt-6 space-y-2">
            {creativeTakeaways.map((t, i) => (
              <div
                key={i}
                className="rounded-lg border border-atlas-accent/30 bg-atlas-accent/5 p-4 text-sm text-atlas-text leading-relaxed"
              >
                <span className="text-atlas-accent font-bold mr-2">→</span>
                {t}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-atlas-border pt-6">
          <AtlasCallout tone="insight" title="Next steps">
            (1) Générer les 15 créas via Midjourney / Flux avec les prompts JSON. (2) A/B test par
            angle × funnel sur 10 jours. (3) Scaler les winners. (4) Itérer sur le pattern
            storytelling persona-specific — le plus sous-exploité par Grüns.
          </AtlasCallout>
        </section>
      </div>
    </div>
  );
}
