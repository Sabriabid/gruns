import clsx from "clsx";
import { Check, X, Minus } from "lucide-react";

export interface CompareRow {
  dimension: string;
  gomu: React.ReactNode;
  competitor: React.ReactNode;
  verdict?: "win" | "tie" | "loss" | "unknown";
}

const verdictIcon = {
  win: <Check size={14} className="text-atlas-success" />,
  tie: <Minus size={14} className="text-atlas-muted" />,
  loss: <X size={14} className="text-atlas-danger" />,
  unknown: <span className="text-atlas-muted text-xs">?</span>,
};

export default function AtlasComparisonTable({
  competitorName,
  rows,
  className,
}: {
  competitorName: string;
  rows: CompareRow[];
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "overflow-x-auto rounded-xl border border-atlas-border bg-atlas-surface",
        className
      )}
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-atlas-border text-[11px] uppercase tracking-wider text-atlas-muted">
            <th className="py-3 px-4 text-left font-medium">Critère</th>
            <th className="py-3 px-4 text-left font-medium text-atlas-accent">
              Gomu
            </th>
            <th className="py-3 px-4 text-left font-medium">
              {competitorName}
            </th>
            <th className="py-3 px-4 text-center font-medium w-20">Verdict</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-atlas-border">
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="py-3 px-4 text-atlas-muted font-medium">
                {r.dimension}
              </td>
              <td className="py-3 px-4 text-atlas-text-strong">{r.gomu}</td>
              <td className="py-3 px-4 text-atlas-text">{r.competitor}</td>
              <td className="py-3 px-4 text-center">
                {r.verdict ? verdictIcon[r.verdict] : verdictIcon.unknown}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
