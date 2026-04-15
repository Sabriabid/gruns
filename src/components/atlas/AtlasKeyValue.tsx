import clsx from "clsx";

export interface KeyValueRow {
  label: string;
  value: React.ReactNode;
  hint?: string;
}

export default function AtlasKeyValue({
  rows,
  dense = false,
  className,
}: {
  rows: KeyValueRow[];
  dense?: boolean;
  className?: string;
}) {
  return (
    <dl className={clsx("divide-y divide-atlas-border", className)}>
      {rows.map((r, i) => (
        <div
          key={i}
          className={clsx(
            "flex items-baseline justify-between gap-4",
            dense ? "py-2" : "py-3"
          )}
        >
          <dt className="text-sm text-atlas-muted shrink-0">{r.label}</dt>
          <dd className="text-sm text-atlas-text-strong text-right min-w-0">
            {r.value}
            {r.hint && (
              <div className="text-[11px] text-atlas-muted mt-0.5">{r.hint}</div>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
