import { Fragment } from "react";

/**
 * Rich-text model for the config-driven landing pages.
 *
 * The v2 design relies on inline markup (line breaks, italics, the yellow
 * highlighter `.hl` / `.hl-on-dark`, bold emphasis). To keep the per-angle
 * config (src/lib/lp-angles.ts) 100% plain data — and therefore serializable
 * across the server → client boundary (Hero is a client component) — we never
 * put ReactNode in the config. Instead, content is expressed as typed segments
 * and rendered here.
 *
 *   RichText  = lines joined by <br/>
 *   RichLine  = a single line, made of segments
 *   RichSeg   = plain string, or a styled run ({ t, hl, italic, bold })
 */
export type RichSegment =
  | string
  | { t: string; hl?: boolean; italic?: boolean; bold?: boolean };
export type RichLine = RichSegment[];
export type RichText = RichLine[];

export interface RenderRichOpts {
  /** On dark backgrounds, use `.hl-on-dark` and a cream bold; otherwise `.hl`. */
  onDark?: boolean;
}

/** Render a RichText value to JSX. Pure — safe in both server and client components. */
export function renderRich(rich: RichText, opts: RenderRichOpts = {}) {
  const hlClass = opts.onDark ? "hl-on-dark" : "hl";
  const boldClass = opts.onDark
    ? "font-medium text-gomu-cream"
    : "font-sans not-italic font-semibold text-gomu-purple-deep";

  return rich.map((line, li) => (
    <Fragment key={li}>
      {li > 0 && <br />}
      {line.map((seg, si) => {
        if (typeof seg === "string") {
          return <Fragment key={si}>{seg}</Fragment>;
        }
        // Wrap inner-first so italic ends up outermost (matches the v2 markup,
        // e.g. <span class="italic"><span class="hl-on-dark">…</span></span>).
        let node: React.ReactNode = seg.t;
        if (seg.hl) node = <span className={hlClass}>{node}</span>;
        if (seg.bold) node = <b className={boldClass}>{node}</b>;
        if (seg.italic) node = <span className="italic">{node}</span>;
        return <Fragment key={si}>{node}</Fragment>;
      })}
    </Fragment>
  ));
}
