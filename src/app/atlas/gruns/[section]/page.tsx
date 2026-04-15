import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import AtlasCard from "@/components/atlas/AtlasCard";
import AtlasSectionHeader from "@/components/atlas/AtlasSectionHeader";
import AtlasBadge from "@/components/atlas/AtlasBadge";
import AtlasCallout from "@/components/atlas/AtlasCallout";
import AtlasKeyValue from "@/components/atlas/AtlasKeyValue";
import AtlasQuoteBlock from "@/components/atlas/AtlasQuoteBlock";
import AtlasMiniBar from "@/components/atlas/AtlasMiniBar";
import { getGrunsSection, grunsSections } from "@/lib/atlas/gruns";
import type {
  GrunsBusiness,
  GrunsProduct,
  GrunsLPLibrary,
  GrunsFunnel,
  GrunsOffer,
  GrunsCopy,
  GrunsAds,
  GrunsSocialProof,
  GrunsSEO,
  GrunsEmail,
  GrunsCX,
  ExploitableWeakness,
} from "@/lib/atlas/types";

export function generateStaticParams() {
  return grunsSections.map((s) => ({ section: s.key }));
}

function Sources({ sources }: { sources: { label: string; url: string }[] }) {
  if (!sources.length) return null;
  return (
    <div className="mt-8 border-t border-atlas-border pt-6">
      <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold mb-3">
        Sources
      </div>
      <ul className="space-y-1.5">
        {sources.map((s, i) => (
          <li key={i} className="text-sm">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-atlas-accent hover:underline inline-flex items-center gap-1"
            >
              {s.label}
              <ExternalLink size={12} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Takeaways({ takeaways }: { takeaways: string[] }) {
  if (!takeaways.length) return null;
  return (
    <div className="mt-8">
      <AtlasSectionHeader kicker="Takeaways" title="Ce qu'on retient" />
      <div className="mt-4 space-y-2">
        {takeaways.map((t, i) => (
          <div
            key={i}
            className="rounded-lg border border-atlas-accent/30 bg-atlas-accent/5 p-4 text-sm text-atlas-text leading-relaxed"
          >
            <span className="text-atlas-accent font-bold mr-2">→</span>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Section-specific renderers
// ============================================================================

function BusinessSection({ d }: { d: GrunsBusiness }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Corporate
          </div>
          <AtlasKeyValue
            rows={[
              { label: "Année fondation", value: String(d.yearFounded) },
              {
                label: "Fondateur",
                value: (
                  <>
                    {d.founders[0].name}
                    <div className="text-[12px] text-atlas-muted mt-0.5">
                      {d.founders[0].role} — {d.founders[0].note}
                    </div>
                  </>
                ),
              },
              { label: "HQ", value: d.hq ?? "—" },
              { label: "Équipe", value: d.employeeCount ?? "—" },
              {
                label: "Revenue estimée",
                value: d.revenueEstimate
                  ? `$${(d.revenueEstimate.valueUSD / 1_000_000).toFixed(0)}M (${d.revenueEstimate.year})`
                  : "—",
                hint: d.revenueEstimate?.method,
              },
            ]}
          />
        </AtlasCard>
        <AtlasCard variant="accent">
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Levées de fonds
          </div>
          <ul className="space-y-3">
            {d.fundraising.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <AtlasBadge tone={r.round.includes("Exit") ? "danger" : "muted"}>
                  {r.date ?? "?"}
                </AtlasBadge>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-atlas-text-strong text-sm">
                    {r.round}
                    {r.amountUSD && (
                      <span className="text-atlas-accent ml-2 font-bold tabular-nums">
                        ${r.amountUSD >= 1_000_000_000
                          ? `${(r.amountUSD / 1_000_000_000).toFixed(1)}B`
                          : `${(r.amountUSD / 1_000_000).toFixed(1)}M`}
                      </span>
                    )}
                  </div>
                  {r.investors.length > 0 && (
                    <div className="text-[12px] text-atlas-muted mt-0.5 leading-relaxed">
                      {r.investors.join(", ")}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </AtlasCard>
      </div>
      <div className="mt-6">
        <AtlasSectionHeader kicker="Timeline" title="Milestones clés" />
        <AtlasCard className="mt-4">
          <ul className="divide-y divide-atlas-border">
            {d.timeline.map((t, i) => (
              <li key={i} className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
                <code className="text-[11px] text-atlas-muted tabular-nums w-20 shrink-0 pt-0.5 font-mono">
                  {t.date}
                </code>
                <span className="flex-1 text-sm text-atlas-text">{t.event}</span>
              </li>
            ))}
          </ul>
        </AtlasCard>
      </div>
    </>
  );
}

function ProductSection({ d }: { d: GrunsProduct }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Produit
          </div>
          <AtlasKeyValue
            rows={[
              { label: "Nom commercial", value: d.productName },
              { label: "Format", value: `${d.format.servingType} · ${d.format.perBox} / boîte` },
              { label: "Goûts", value: d.format.flavors.join(", ") },
              { label: "Packaging", value: d.packaging.material, hint: d.packaging.notes },
              { label: "Certifications", value: d.certifications.join(" · ") },
            ]}
          />
        </AtlasCard>
        <AtlasCard variant="accent">
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Claims produit
          </div>
          <ul className="space-y-1.5 text-sm text-atlas-text">
            {d.claims.map((c, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-atlas-accent">›</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </AtlasCard>
      </div>

      <div className="mt-8">
        <AtlasSectionHeader
          kicker="Formule"
          title={`Ingrédients (${d.ingredients.length} documentés)`}
          description="Note : Grüns ne publie pas les dosages ni les formes chimiques sur la page produit publique — à vérifier via étiquette Amazon."
        />
        <div className="mt-4 overflow-x-auto rounded-xl border border-atlas-border bg-atlas-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-atlas-border text-[11px] uppercase tracking-wider text-atlas-muted">
                <th className="py-3 px-4 text-left font-medium">Ingrédient</th>
                <th className="py-3 px-4 text-left font-medium">Catégorie</th>
                <th className="py-3 px-4 text-left font-medium">Forme</th>
                <th className="py-3 px-4 text-center font-medium">vs Gomu</th>
                <th className="py-3 px-4 text-left font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-atlas-border">
              {d.ingredients.map((ing, i) => (
                <tr key={i}>
                  <td className="py-2 px-4 text-atlas-text-strong font-medium">{ing.name}</td>
                  <td className="py-2 px-4 text-atlas-muted capitalize">{ing.category}</td>
                  <td className="py-2 px-4 text-atlas-text">{ing.form ?? "—"}</td>
                  <td className="py-2 px-4 text-center">
                    {ing.vsGomu === "win" && <AtlasBadge tone="success">Gomu 🏆</AtlasBadge>}
                    {ing.vsGomu === "loss" && <AtlasBadge tone="danger">Grüns</AtlasBadge>}
                    {ing.vsGomu === "tie" && <AtlasBadge tone="muted">=</AtlasBadge>}
                    {(!ing.vsGomu || ing.vsGomu === "unknown") && (
                      <AtlasBadge tone="muted">?</AtlasBadge>
                    )}
                  </td>
                  <td className="py-2 px-4 text-[12px] text-atlas-muted">{ing.notes ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6">
        <AtlasCallout tone="insight" title="Synthèse comparative">
          {d.gomuVsGrunsSummary}
        </AtlasCallout>
      </div>
    </>
  );
}

function LPsSection({ d }: { d: GrunsLPLibrary }) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold">
            Total estimé
          </div>
          <div className="mt-2 text-4xl font-bold text-atlas-text-strong tabular-nums">
            {d.totalCountEstimate}+
          </div>
          <div className="text-[12px] text-atlas-muted mt-1">LPs identifiées</div>
        </AtlasCard>
        <AtlasCard variant="accent">
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold">
            Réutilisation blocs
          </div>
          <div className="mt-2 text-4xl font-bold text-atlas-text-strong tabular-nums">
            {d.reusePctEstimate}%
          </div>
          <div className="text-[12px] text-atlas-muted mt-1">
            80% du contenu identique entre LPs
          </div>
        </AtlasCard>
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold">
            Pool de blocs recensés
          </div>
          <div className="mt-2 text-4xl font-bold text-atlas-text-strong tabular-nums">
            {d.blockPool.length}
          </div>
          <div className="text-[12px] text-atlas-muted mt-1">à mesure du crawl</div>
        </AtlasCard>
      </div>

      <div className="mt-8">
        <AtlasSectionHeader kicker="Pool de blocs" title="Composants recyclés" />
        <div className="mt-4 space-y-3">
          {d.blockPool.map((b) => (
            <AtlasCard key={b.id} className="!p-4">
              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                <div className="font-semibold text-atlas-text-strong">{b.name}</div>
                <AtlasBadge tone="muted">usage : {b.usageCount}</AtlasBadge>
              </div>
              <div className="mt-1 text-sm text-atlas-text leading-relaxed">
                {b.description}
              </div>
            </AtlasCard>
          ))}
        </div>
      </div>

      {d.inventory.length === 0 && (
        <div className="mt-8">
          <AtlasCallout tone="warn" title="Inventaire LPs à crawler">
            Scaffold vide pour l&apos;instant. Prochaine étape : crawler `gruns.co/sitemap_pages_1.xml`, Google `site:gruns.co`, Wayback Machine pour peupler l&apos;inventaire des 90+ LPs avec hero, headline, raison n°1, et blocs utilisés.
          </AtlasCallout>
        </div>
      )}
    </>
  );
}

function FunnelSection({ d }: { d: GrunsFunnel }) {
  return (
    <>
      <AtlasCard>
        <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-4">
          Étapes du funnel
        </div>
        <ol className="space-y-3">
          {d.steps.map((s) => (
            <li key={s.order} className="flex items-start gap-3">
              <div className="h-7 w-7 rounded-full bg-atlas-accent/15 border border-atlas-accent/30 flex items-center justify-center text-[11px] text-atlas-accent font-bold shrink-0">
                {s.order}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="font-semibold text-atlas-text-strong text-sm">
                  {s.name}
                  {s.url && (
                    <code className="ml-2 text-[11px] text-atlas-muted font-mono">{s.url}</code>
                  )}
                </div>
                <div className="text-[13px] text-atlas-muted mt-0.5 leading-relaxed">
                  {s.notes}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </AtlasCard>
      {d.stickyElements.length > 0 && (
        <div className="mt-4 text-[13px] text-atlas-muted">
          <span className="font-semibold text-atlas-text">Éléments sticky :</span>{" "}
          {d.stickyElements.join(" · ")}
        </div>
      )}
    </>
  );
}

function OfferSection({ d }: { d: GrunsOffer }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <AtlasCard variant="accent">
          <AtlasBadge tone="accent">Subscribe & Save</AtlasBadge>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-atlas-text-strong tabular-nums">
              ${d.subscribe.priceUSD}
            </span>
            <span className="text-atlas-muted">/ mois</span>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-atlas-text">
            {d.subscribe.perks.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-atlas-success">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </AtlasCard>
        <AtlasCard>
          <AtlasBadge tone="muted">One-Time</AtlasBadge>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-atlas-text-strong tabular-nums">
              ${d.onetime.priceUSD}
            </span>
          </div>
          <div className="mt-4 text-[13px] text-atlas-muted italic leading-relaxed">
            Discount sub vs OT : -{Math.round((1 - d.subscribe.priceUSD / d.onetime.priceUSD) * 100)}%
          </div>
        </AtlasCard>
      </div>

      {d.bundles.length > 0 && (
        <div className="mt-6">
          <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold mb-3">
            Variantes
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {d.bundles.map((b, i) => (
              <AtlasCard key={i} className="!p-4">
                <div className="font-semibold text-atlas-text-strong">{b.name}</div>
                <div className="mt-1 text-2xl font-bold text-atlas-accent tabular-nums">
                  ${b.priceUSD}
                </div>
                {b.perks.length > 0 && (
                  <ul className="mt-2 text-[13px] text-atlas-muted space-y-1">
                    {b.perks.map((p, j) => (
                      <li key={j}>› {p}</li>
                    ))}
                  </ul>
                )}
              </AtlasCard>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <AtlasCallout tone="warn" kicker="Garantie — fine print" title="30-day money-back — avec restrictions">
          {d.refundPolicy}
        </AtlasCallout>
      </div>
    </>
  );
}

function CopySection({ d }: { d: GrunsCopy }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Headlines dominants
          </div>
          <ul className="space-y-3">
            {d.dominantHeadlines.map((h, i) => (
              <li key={i} className="border-l-2 border-atlas-accent pl-3">
                <AtlasBadge tone="muted">{h.type}</AtlasBadge>
                <div className="mt-1 text-atlas-text-strong font-medium">« {h.text} »</div>
              </li>
            ))}
          </ul>
        </AtlasCard>
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            USPs
          </div>
          <ul className="space-y-1.5 text-sm text-atlas-text">
            {d.usps.map((u, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-atlas-accent">›</span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </AtlasCard>
      </div>
      <div className="mt-6">
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-2">
            Tone of voice
          </div>
          <p className="text-sm text-atlas-text leading-relaxed">{d.toneOfVoice}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {d.signatureWords.map((w) => (
              <AtlasBadge key={w} tone="muted">
                {w}
              </AtlasBadge>
            ))}
          </div>
        </AtlasCard>
      </div>
    </>
  );
}

function AdsSection({ d }: { d: GrunsAds }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <AtlasCard variant="accent">
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Celebrity partnerships
          </div>
          {d.celebrityPartnerships.map((c, i) => (
            <div key={i}>
              <div className="font-bold text-atlas-text-strong">{c.name}</div>
              <div className="text-[13px] text-atlas-muted">{c.role}</div>
              <p className="mt-2 text-sm text-atlas-text leading-relaxed">{c.notes}</p>
            </div>
          ))}
        </AtlasCard>
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Publishers advertorial
          </div>
          <ul className="space-y-1.5 text-sm text-atlas-text">
            {d.publishersAdvertorial.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-atlas-accent">›</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </AtlasCard>
      </div>
      <div className="mt-6">
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Angles dominants
          </div>
          <ul className="space-y-2 text-sm text-atlas-text">
            {d.dominantAngles.map((a, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-atlas-accent">›</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </AtlasCard>
      </div>
    </>
  );
}

function SocialProofSection({ d }: { d: GrunsSocialProof }) {
  const tp = d.trustpilot;
  return (
    <>
      {tp && (
        <AtlasCard>
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-4">
            <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold">
              Trustpilot réel
            </div>
            <div className="text-[11px] text-atlas-muted">Vérifié {tp.lastChecked}</div>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-atlas-text-strong tabular-nums">
              {tp.rating}
            </span>
            <span className="text-atlas-muted">★</span>
            <span className="text-atlas-muted">
              · {tp.count.toLocaleString("fr-FR")} avis
            </span>
          </div>
          {tp.distribution && (
            <div className="mt-4 space-y-2">
              {[5, 4, 3, 2, 1].map((star) => {
                const pct = tp.distribution?.[String(star)] ?? 0;
                return (
                  <div key={star} className="flex items-center gap-3">
                    <span className="text-[12px] text-atlas-muted w-6 tabular-nums">{star}★</span>
                    <div className="flex-1">
                      <AtlasMiniBar
                        value={pct}
                        max={100}
                        showValue={false}
                        tone={star === 1 ? "danger" : star >= 4 ? "success" : "accent"}
                      />
                    </div>
                    <span className="text-[12px] text-atlas-text tabular-nums w-10 text-right">
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </AtlasCard>
      )}

      <div className="mt-6">
        <AtlasSectionHeader kicker="Audit stats" title="Stats on-site vs réalité" />
        <div className="mt-4 space-y-3">
          {d.onSiteStats.map((s, i) => (
            <AtlasCard
              key={i}
              variant={s.credibility === "low" ? "crit" : s.credibility === "med" ? "warn" : "success"}
              className="!p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-semibold text-atlas-text-strong">{s.stat}</div>
                <AtlasBadge
                  tone={s.credibility === "low" ? "danger" : s.credibility === "med" ? "warn" : "success"}
                >
                  Crédibilité {s.credibility}
                </AtlasBadge>
              </div>
              {s.note && (
                <p className="mt-2 text-[13px] text-atlas-text leading-relaxed">{s.note}</p>
              )}
            </AtlasCard>
          ))}
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-atlas-success font-semibold mb-3">
            🟢 Top positifs
          </div>
          <div className="space-y-2">
            {d.topPositive.map((q, i) => (
              <AtlasQuoteBlock key={i} text={q.text} source={q.source} tone="positive" />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-atlas-danger font-semibold mb-3">
            🔴 Top négatifs (GOLD pour Gomu)
          </div>
          <div className="space-y-2">
            {d.topNegative.map((q, i) => (
              <AtlasQuoteBlock key={i} text={q.text} source={q.source} tone="negative" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function SEOSection({ d }: { d: GrunsSEO }) {
  return (
    <>
      {d.topBacklinks.length > 0 && (
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Top backlinks identifiés
          </div>
          <ul className="space-y-1.5 text-sm text-atlas-text">
            {d.topBacklinks.map((b, i) => (
              <li key={i} className="flex items-baseline gap-2">
                <span className="text-atlas-accent">›</span>
                <span className="font-mono text-[13px]">{b.domain}</span>
                {b.url && (
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-atlas-muted hover:text-atlas-accent"
                  >
                    <ExternalLink size={12} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </AtlasCard>
      )}
      <div className="mt-6">
        <AtlasCallout tone="warn" title="À quantifier">
          DR Ahrefs, organic traffic, top 20 keywords, backlinks exacts. Utiliser Ahrefs free checker, Ubersuggest, SimilarWeb.
        </AtlasCallout>
      </div>
    </>
  );
}

function EmailSection({ d }: { d: GrunsEmail }) {
  return (
    <>
      <div className="space-y-4">
        {d.flows.map((f) => (
          <AtlasCard key={f.name}>
            <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
              Flow : {f.name}
            </div>
            {f.emails.length > 0 ? (
              <ul className="space-y-2">
                {f.emails.map((e, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AtlasBadge tone="muted">J+{Math.round(e.delayHours / 24)}</AtlasBadge>
                    <div>
                      <div className="font-medium text-atlas-text-strong text-sm">
                        {e.subject}
                      </div>
                      {e.preheader && (
                        <div className="text-[12px] text-atlas-muted">{e.preheader}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-atlas-muted italic">À collecter.</p>
            )}
          </AtlasCard>
        ))}
      </div>
      <div className="mt-6">
        <AtlasCallout tone="info" title="Méthode de collecte">
          (1) Abonnement newsletter avec email test. (2) Checkout démarré puis abandonné. (3) Milled.com/gruns pour l&apos;archive publique. (4) Commande test pour capturer les post-purchase.
        </AtlasCallout>
      </div>
    </>
  );
}

function CXSection({ d }: { d: GrunsCX }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            Checkout & shipping
          </div>
          <AtlasKeyValue
            rows={[
              { label: "Checkout steps", value: String(d.checkout.steps) },
              { label: "Paiement", value: d.checkout.paymentOptions.join(", ") },
              { label: "Express", value: d.checkout.expressCheckout.join(", ") },
              { label: "Shipping", value: `${d.shipping.daysMin}-${d.shipping.daysMax}j ${d.shipping.carrier}` },
              { label: "International", value: d.shipping.international ? "Oui" : "Non (US only)" },
            ]}
          />
        </AtlasCard>
        <AtlasCard>
          <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
            UX Score (0-5)
          </div>
          <div className="space-y-3">
            {d.uxScore.map((s, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-atlas-text">{s.criterion}</span>
                  <span className="text-sm text-atlas-text-strong font-semibold tabular-nums">
                    {s.score}/5
                  </span>
                </div>
                <AtlasMiniBar
                  value={s.score}
                  max={5}
                  showValue={false}
                  tone={s.score <= 2 ? "danger" : s.score >= 4 ? "success" : "warn"}
                />
                <div className="text-[11px] text-atlas-muted mt-1">{s.note}</div>
              </div>
            ))}
          </div>
        </AtlasCard>
      </div>
    </>
  );
}

function WeaknessesSection({ d }: { d: ExploitableWeakness[] }) {
  const sorted = [...d].sort((a, b) => b.priority - a.priority);
  return (
    <div className="space-y-4">
      {sorted.map((w) => (
        <AtlasCard
          key={w.id}
          variant={w.priority >= 4 ? "crit" : w.priority >= 3 ? "warn" : "default"}
        >
          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <AtlasBadge tone={w.priority >= 4 ? "danger" : w.priority >= 3 ? "warn" : "muted"}>
                P{w.priority}
              </AtlasBadge>
              <AtlasBadge tone="muted">{w.category}</AtlasBadge>
            </div>
            <div className="text-[11px] text-atlas-muted">
              Exploite : {w.exploitLPSlugs.length > 0 ? w.exploitLPSlugs.map((s) => `/lp/${s}`).join(", ") : "—"}
            </div>
          </div>
          <h3 className="mt-3 font-bold text-atlas-text-strong text-lg leading-tight">
            {w.weakness}
          </h3>
          <div className="mt-3 rounded-md bg-atlas-success/10 border border-atlas-success/20 p-3">
            <div className="text-[11px] uppercase tracking-wider text-atlas-success font-semibold mb-1">
              → Avantage Gomu
            </div>
            <div className="text-sm text-atlas-text leading-relaxed">{w.gomuAdvantage}</div>
          </div>
          {w.evidence.length > 0 && (
            <details className="mt-3">
              <summary className="text-[12px] text-atlas-muted cursor-pointer hover:text-atlas-text">
                Preuves ({w.evidence.length})
              </summary>
              <ul className="mt-2 space-y-1 text-[12px] text-atlas-muted">
                {w.evidence.map((e, i) => (
                  <li key={i}>
                    <AtlasBadge tone="muted">{e.type}</AtlasBadge>
                    <span className="ml-2">{e.ref}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}
          {w.exploitAngleIds.length > 0 && (
            <div className="mt-3 flex items-center gap-1 flex-wrap">
              <span className="text-[11px] text-atlas-muted">Angles :</span>
              {w.exploitAngleIds.map((id) => (
                <AtlasBadge key={id} tone="accent">{id}</AtlasBadge>
              ))}
            </div>
          )}
        </AtlasCard>
      ))}
    </div>
  );
}

// ============================================================================
// Page
// ============================================================================

type PageProps = {
  params: Promise<{ section: string }>;
};

export default async function GrunsSectionPage({ params }: PageProps) {
  const { section } = await params;
  const result = getGrunsSection(section);
  if (!result) return notFound();
  const { meta, data } = result;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/atlas/gruns" className="text-atlas-muted hover:text-atlas-accent text-sm">
          ← Retour Espionnage Grüns
        </Link>
      </div>

      <AtlasSectionHeader
        kicker={`Section · ${meta.key}`}
        title={meta.title}
        description={meta.oneLiner}
        actions={
          <AtlasBadge
            tone={meta.confidence === "high" ? "success" : meta.confidence === "med" ? "warn" : "danger"}
          >
            Confiance {meta.confidence}
          </AtlasBadge>
        }
      />

      <div>
        {meta.key === "business" && <BusinessSection d={data as GrunsBusiness} />}
        {meta.key === "product" && <ProductSection d={data as GrunsProduct} />}
        {meta.key === "lps" && <LPsSection d={data as GrunsLPLibrary} />}
        {meta.key === "funnel" && <FunnelSection d={data as GrunsFunnel} />}
        {meta.key === "offer" && <OfferSection d={data as GrunsOffer} />}
        {meta.key === "copy" && <CopySection d={data as GrunsCopy} />}
        {meta.key === "ads" && <AdsSection d={data as GrunsAds} />}
        {meta.key === "social-proof" && <SocialProofSection d={data as GrunsSocialProof} />}
        {meta.key === "seo" && <SEOSection d={data as GrunsSEO} />}
        {meta.key === "email" && <EmailSection d={data as GrunsEmail} />}
        {meta.key === "cx" && <CXSection d={data as GrunsCX} />}
        {meta.key === "weaknesses" && <WeaknessesSection d={data as ExploitableWeakness[]} />}
      </div>

      {meta.key !== "weaknesses" && "takeaways" in (data as object) && (
        <Takeaways takeaways={(data as { takeaways: string[] }).takeaways} />
      )}
      {meta.key !== "weaknesses" && "sources" in (data as object) && (
        <Sources sources={(data as { sources: { label: string; url: string }[] }).sources} />
      )}
    </div>
  );
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Promise<{ section: string }> }) {
  return params.then(({ section }) => {
    const meta = grunsSections.find((s) => s.key === section);
    return {
      title: meta ? `Grüns / ${meta.title} — Atlas` : "Section inconnue — Atlas",
    };
  });
}
