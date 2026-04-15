import AtlasCard from "@/components/atlas/AtlasCard";
import AtlasSectionHeader from "@/components/atlas/AtlasSectionHeader";
import AtlasBadge from "@/components/atlas/AtlasBadge";
import AtlasCallout from "@/components/atlas/AtlasCallout";
import AtlasKeyValue from "@/components/atlas/AtlasKeyValue";
import AtlasMiniBar from "@/components/atlas/AtlasMiniBar";
import AtlasStatBlock from "@/components/atlas/AtlasStatBlock";
import {
  pricingScenarios,
  churnScenarios,
  ltvMatrix,
  cogsBreakdown,
  fulfillmentOptions,
  northStarRecalibrated,
  economicsTakeaways,
} from "@/lib/atlas/economics";

function fmtEUR(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M€`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K€`;
  return `${n.toFixed(2).replace(".", ",")}€`;
}

const categoryLabels: Record<string, { label: string; tone: "accent" | "warn" | "info" | "success" | "muted" }> = {
  produit: { label: "Produit (Chine)", tone: "accent" },
  douane: { label: "Douane & taxes", tone: "warn" },
  logistique: { label: "Logistique", tone: "info" },
  "3pl": { label: "3PL Peakfast", tone: "info" },
  stripe: { label: "Paiement", tone: "muted" },
};

function cacTone(cac: number): "success" | "accent" | "warn" | "danger" {
  if (cac >= 70) return "success";
  if (cac >= 50) return "accent";
  if (cac >= 30) return "warn";
  return "danger";
}

export default function EconomicsPage() {
  const recommended = pricingScenarios.find((p) => p.recommended)!;
  const recommendedLTV = ltvMatrix.find((c) => c.recommended)!;
  const cogsTotal = cogsBreakdown.reduce((a, c) => a + c.amountEUR, 0);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <AtlasBadge tone="accent">ÉCONOMIE UNITAIRE</AtlasBadge>
          <AtlasBadge tone="warn">Source : xlsx internes</AtlasBadge>
          <AtlasBadge tone="muted">MAJ 2026-04-15</AtlasBadge>
        </div>
        <h1 className="text-4xl font-bold text-atlas-text-strong leading-tight">
          L&apos;économie unitaire. <span className="text-atlas-accent">Sans romance.</span>
        </h1>
        <p className="mt-4 text-atlas-muted max-w-3xl leading-relaxed">
          3 scénarios de prix × 3 scénarios de churn. COGS complet, marges brutes, matrice LTV × CAC max.
          Source : <code className="text-atlas-accent">GOMU_PNL_Scenarios.xlsx</code> + <code className="text-atlas-accent">GOMU_LTV_Scenarios.xlsx</code>.
        </p>
      </section>

      {/* Recommendation top-of-page */}
      <section>
        <AtlasCard variant="accent">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <AtlasBadge tone="accent">RECOMMANDATION</AtlasBadge>
            <AtlasBadge tone="success">Scénario B × churn réaliste</AtlasBadge>
          </div>
          <h2 className="text-2xl font-bold text-atlas-text-strong">
            Prix {fmtEUR(recommended.priceEUR)} / mois · churn 12%
          </h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold">Marge brute</div>
              <div className="text-2xl font-bold text-atlas-text-strong tabular-nums">
                {fmtEUR(recommended.grossMarginEUR)}
              </div>
              <div className="text-[11px] text-atlas-success">
                = {recommended.grossMarginPct.toFixed(1)}% du PV
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold">LTV</div>
              <div className="text-2xl font-bold text-atlas-text-strong tabular-nums">
                {fmtEUR(recommendedLTV.ltvEUR)}
              </div>
              <div className="text-[11px] text-atlas-muted">sur 8,3 mois moyens</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold">CAC max (÷3)</div>
              <div className="text-2xl font-bold text-atlas-text-strong tabular-nums">
                {fmtEUR(recommendedLTV.cacMaxEUR)}
              </div>
              <div className="text-[11px] text-atlas-muted">Ratio rentabilité 3:1 DTC</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold">COGS total</div>
              <div className="text-2xl font-bold text-atlas-text-strong tabular-nums">
                {fmtEUR(recommended.cogsTotalEUR)}
              </div>
              <div className="text-[11px] text-atlas-muted">3PL Peakfast, franchise TVA</div>
            </div>
          </div>
        </AtlasCard>
      </section>

      {/* Pricing scenarios cards */}
      <section>
        <AtlasSectionHeader
          kicker="Prix"
          title="Les 3 scénarios de prix"
          description="Même COGS (~15€) — c'est le PV qui fait exploser la marge brute."
        />
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {pricingScenarios.map((p) => (
            <AtlasCard
              key={p.id}
              variant={p.recommended ? "accent" : "default"}
              className="relative"
            >
              {p.recommended && (
                <div className="absolute -top-2 right-4">
                  <AtlasBadge tone="success">Recommandé</AtlasBadge>
                </div>
              )}
              <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold">
                Scénario {p.id} — {p.label}
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-atlas-text-strong tabular-nums">
                  {fmtEUR(p.priceEUR)}
                </span>
                <span className="text-atlas-muted text-sm">/ mois</span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-atlas-muted">COGS total</span>
                  <span className="text-atlas-text tabular-nums">{fmtEUR(p.cogsTotalEUR)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-atlas-text-strong">Marge brute</span>
                  <span className="text-atlas-success tabular-nums">{fmtEUR(p.grossMarginEUR)}</span>
                </div>
                <AtlasMiniBar
                  value={p.grossMarginPct}
                  max={100}
                  showValue
                  label="Marge %"
                  tone={p.grossMarginPct >= 60 ? "success" : p.grossMarginPct >= 50 ? "accent" : "warn"}
                />
              </div>
            </AtlasCard>
          ))}
        </div>
      </section>

      {/* COGS breakdown */}
      <section>
        <AtlasSectionHeader
          kicker="COGS"
          title={`Breakdown coût unitaire — ${fmtEUR(cogsTotal)} au prix 30€`}
          description="Scénario 3PL Peakfast, franchise en base TVA (TVA import non récupérable). Détail par ligne."
        />
        <div className="mt-6 overflow-x-auto rounded-xl border border-atlas-border bg-atlas-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-atlas-border text-[11px] uppercase tracking-wider text-atlas-muted">
                <th className="py-3 px-4 text-left font-medium">Ligne</th>
                <th className="py-3 px-4 text-left font-medium">Catégorie</th>
                <th className="py-3 px-4 text-right font-medium">Montant</th>
                <th className="py-3 px-4 text-left font-medium">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-atlas-border">
              {cogsBreakdown.map((l, i) => {
                const cat = categoryLabels[l.category];
                return (
                  <tr key={i}>
                    <td className="py-2.5 px-4 text-atlas-text-strong font-medium">
                      {l.label}
                      {l.variable && (
                        <span className="ml-2 text-[11px] text-atlas-muted">(variable)</span>
                      )}
                    </td>
                    <td className="py-2.5 px-4">
                      <AtlasBadge tone={cat.tone}>{cat.label}</AtlasBadge>
                    </td>
                    <td className="py-2.5 px-4 text-right text-atlas-accent font-semibold tabular-nums">
                      {fmtEUR(l.amountEUR)}
                    </td>
                    <td className="py-2.5 px-4 text-[12px] text-atlas-muted">{l.note ?? ""}</td>
                  </tr>
                );
              })}
              <tr className="bg-atlas-surface-2 font-bold">
                <td className="py-3 px-4 text-atlas-text-strong">TOTAL COGS</td>
                <td className="py-3 px-4"></td>
                <td className="py-3 px-4 text-right text-atlas-accent tabular-nums">
                  {fmtEUR(cogsTotal)}
                </td>
                <td className="py-3 px-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-3">
          <AtlasCallout tone="info" title="Franchise en base TVA (setup initial)">
            TVA import 5,5% = coût sec (non récupérable). Simple administrativement. Retenu ici.
          </AtlasCallout>
          <AtlasCallout tone="opportunity" title="Passage assujetti TVA (dès 300 cmd/mois)">
            TVA import récupérable via autoliquidation. +1€/cmd de marge brute. ROI positif dès le seuil de 300 commandes/mois.
          </AtlasCallout>
        </div>
      </section>

      {/* LTV × CAC matrix */}
      <section>
        <AtlasSectionHeader
          kicker="Matrice LTV × CAC"
          title="3 prix × 3 churns — 9 scénarios"
          description="LTV théorique = (1 / churn) × marge brute. CAC max = LTV ÷ 3 (ratio rentabilité 3:1 DTC)."
        />
        <div className="mt-6 overflow-x-auto rounded-xl border border-atlas-border bg-atlas-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-atlas-border text-[11px] uppercase tracking-wider text-atlas-muted">
                <th className="py-3 px-4 text-left font-medium">Prix ↓ / Churn →</th>
                {churnScenarios.map((c) => (
                  <th key={c.id} className="py-3 px-4 text-center font-medium">
                    {c.label}
                    <div className="text-[10px] text-atlas-muted normal-case font-normal mt-0.5">
                      {c.churnPct}% · {c.avgLifetimeMonths.toFixed(1)} mois
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-atlas-border">
              {pricingScenarios.map((p) => (
                <tr key={p.id}>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-atlas-text-strong">
                      {fmtEUR(p.priceEUR)}
                    </div>
                    <div className="text-[11px] text-atlas-muted">
                      Marge {p.grossMarginPct.toFixed(0)}%
                    </div>
                  </td>
                  {churnScenarios.map((c) => {
                    const cell = ltvMatrix.find(
                      (m) => m.priceScenarioId === p.id && m.churnScenarioId === c.id
                    )!;
                    return (
                      <td
                        key={c.id}
                        className={`py-3 px-4 text-center ${
                          cell.recommended ? "bg-atlas-accent/10 ring-1 ring-inset ring-atlas-accent/40" : ""
                        }`}
                      >
                        <div className="text-[11px] text-atlas-muted uppercase tracking-wider mb-1">
                          LTV / CAC max
                        </div>
                        <div className="text-lg font-bold text-atlas-text-strong tabular-nums">
                          {fmtEUR(cell.ltvEUR)}
                        </div>
                        <div className="mt-1">
                          <AtlasBadge tone={cacTone(cell.cacMaxEUR)}>
                            CAC &lt; {fmtEUR(cell.cacMaxEUR)}
                          </AtlasBadge>
                        </div>
                        {cell.recommended && (
                          <div className="mt-2 text-[10px] uppercase tracking-wider text-atlas-accent font-semibold">
                            ★ Recommandé
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-3">
          {churnScenarios.map((c) => (
            <AtlasCard key={c.id} className="!p-4">
              <div className="flex items-baseline justify-between gap-2">
                <div className="font-semibold text-atlas-text-strong text-sm">{c.label}</div>
                <AtlasBadge
                  tone={c.id === "optimistic" ? "success" : c.id === "realistic" ? "accent" : "danger"}
                >
                  {c.churnPct}%
                </AtlasBadge>
              </div>
              <div className="mt-1 text-[11px] text-atlas-muted">{c.benchmark}</div>
              <div className="mt-2 text-[13px] text-atlas-text">
                Durée de vie moyenne : <span className="font-semibold">{c.avgLifetimeMonths.toFixed(1)} mois</span>
              </div>
            </AtlasCard>
          ))}
        </div>
      </section>

      {/* Fulfillment comparison */}
      <section>
        <AtlasSectionHeader
          kicker="Fulfillment"
          title="3PL Peakfast vs Expédition perso"
          description="Même produit, deux modes de traitement des commandes. 2€/cmd d'écart sur la marge brute."
        />
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {fulfillmentOptions.map((f) => (
            <AtlasCard
              key={f.mode}
              variant={f.mode === "3PL Peakfast" ? "accent" : "default"}
            >
              <div className="flex items-baseline justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-atlas-text-strong">{f.mode}</h3>
                {f.mode === "3PL Peakfast" && <AtlasBadge tone="success">Recommandé</AtlasBadge>}
              </div>
              <AtlasKeyValue
                rows={[
                  { label: "COGS à 30€ PV", value: fmtEUR(f.cogsAt30EUR) },
                  {
                    label: "Marge brute à 30€",
                    value: `${fmtEUR(f.marginAt30EUR)} (${f.marginAt30Pct.toFixed(1)}%)`,
                  },
                  {
                    label: "Delta vs 3PL",
                    value: f.deltaVs3PLEUR === 0 ? "—" : (
                      <span className={f.deltaVs3PLEUR < 0 ? "text-atlas-danger" : "text-atlas-success"}>
                        {f.deltaVs3PLEUR > 0 ? "+" : ""}{fmtEUR(f.deltaVs3PLEUR)}/cmd
                      </span>
                    ),
                  },
                ]}
                dense
              />
              <div className="mt-4 grid grid-cols-1 gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-atlas-success font-semibold mb-1">
                    Pros
                  </div>
                  <ul className="space-y-1 text-[13px] text-atlas-text">
                    {f.pros.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-atlas-success">+</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-atlas-danger font-semibold mb-1">
                    Cons
                  </div>
                  <ul className="space-y-1 text-[13px] text-atlas-text">
                    {f.cons.map((c, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-atlas-danger">−</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AtlasCard>
          ))}
        </div>
      </section>

      {/* North Star recalibrated */}
      <section>
        <AtlasSectionHeader
          kicker="North Star recalibré"
          title="100M€ — combien de clients, combien de budget pub ?"
          description="Traduction des scénarios économiques en cibles opérationnelles."
        />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <AtlasStatBlock
            label="Revenu cible"
            value={fmtEUR(northStarRecalibrated.targetRevenueEUR)}
            status="green"
          />
          <AtlasStatBlock
            label="Clients nets / an"
            value={`${Math.round(northStarRecalibrated.requiredGrossCustomersYear / 1000)}K`}
            status="orange"
            hint={`@ ${fmtEUR(northStarRecalibrated.pricePointEUR)}/mo × ${northStarRecalibrated.avgSubscriptionMonths.toFixed(1)} mois`}
          />
          <AtlasStatBlock
            label="LTV scénario cible"
            value={fmtEUR(northStarRecalibrated.ltvEUR)}
            status="green"
          />
          <AtlasStatBlock
            label="CAC max rentable"
            value={fmtEUR(northStarRecalibrated.cacMaxEUR)}
            status="orange"
          />
        </div>
        <div className="mt-6">
          <AtlasCallout tone="insight" title="Budget pub estimé">
            Pour acquérir ~343K clients nets dans l&apos;année, il faut un budget pub compris entre{" "}
            <strong className="text-atlas-success">
              {fmtEUR(northStarRecalibrated.estimatedAdBudgetEUR.low)}
            </strong>{" "}
            (CAC optimiste 30€) et{" "}
            <strong className="text-atlas-danger">
              {fmtEUR(northStarRecalibrated.estimatedAdBudgetEUR.high)}
            </strong>{" "}
            (CAC max rentable 55€). La trajectoire est exponentielle — pic Q3-Q4.
          </AtlasCallout>
        </div>
        <div className="mt-6">
          <AtlasCard>
            <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
              Notes & hypothèses
            </div>
            <ul className="space-y-2 text-sm text-atlas-text">
              {northStarRecalibrated.notes.map((n, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-atlas-accent">›</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </AtlasCard>
        </div>
      </section>

      {/* Takeaways */}
      <section>
        <AtlasSectionHeader kicker="Takeaways" title="Ce qu'on retient" />
        <div className="mt-6 space-y-2">
          {economicsTakeaways.map((t, i) => (
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

      {/* Sources */}
      <section className="border-t border-atlas-border pt-6">
        <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold mb-2">
          Sources
        </div>
        <ul className="text-sm text-atlas-muted space-y-1">
          <li>
            <code className="text-atlas-accent">data/GOMU_PNL_Scenarios.xlsx</code> — COGS breakdown, douanes, 3PL Peakfast, scénarios 3PL vs perso
          </li>
          <li>
            <code className="text-atlas-accent">data/GOMU_LTV_Scenarios.xlsx</code> — matrice LTV × CAC × marge, scénarios prix × churn
          </li>
        </ul>
      </section>
    </div>
  );
}
