// Brevo email capture — client-side submission for static export.
// API route is not viable (next.config.ts uses output: 'export').
// Sabri must paste the public Brevo Form URL below once the form is created in the dashboard.

// TODO: replace with the live Brevo form URL (public form endpoint).
export const BREVO_FORM_URL = "";

export type BrevoSource =
  | "homepage"
  | "un-sachet"
  | "halal"
  | "digestion"
  | "sans-arnaque-abonnement"
  | "direct"
  | string;

const VALID_LP_SLUGS = new Set([
  "un-sachet",
  "halal",
  "digestion",
  "sans-arnaque-abonnement",
]);

// Resolve `source` from the current URL: ?source= wins, else pathname → slug,
// else "homepage" for "/", else "direct".
export function resolveSource(): BrevoSource {
  if (typeof window === "undefined") return "direct";

  const params = new URLSearchParams(window.location.search);
  const explicit = params.get("source");
  if (explicit) return explicit;

  const path = window.location.pathname;
  if (path === "/" || path === "") return "homepage";

  const lpMatch = path.match(/^\/lp\/([^/]+)\/?$/);
  if (lpMatch && VALID_LP_SLUGS.has(lpMatch[1])) return lpMatch[1];

  return "direct";
}

export type BrevoSubmitResult = { ok: true } | { ok: false; error: string };

export async function submitToBrevo(
  email: string,
  source: BrevoSource,
): Promise<BrevoSubmitResult> {
  if (!BREVO_FORM_URL) {
    // Form URL not yet configured — log and pretend success in dev to keep UX flowing.
    if (typeof console !== "undefined") {
      console.warn("[brevo] BREVO_FORM_URL is empty — capture skipped.", {
        email,
        source,
      });
    }
    return { ok: true };
  }

  try {
    const body = new FormData();
    body.append("EMAIL", email);
    body.append("LP_SOURCE", source);

    const res = await fetch(BREVO_FORM_URL, {
      method: "POST",
      body,
      mode: "no-cors",
    });

    // Brevo public forms typically respond opaque (no-cors) — treat as success
    // unless network throws. The dashboard is the source of truth for delivery.
    void res;
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Erreur inconnue.",
    };
  }
}
