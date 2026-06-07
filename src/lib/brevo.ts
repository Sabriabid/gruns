// Brevo email capture — client-side submission for static export.
// API route is not viable (next.config.ts uses output: 'export').
// Sabri must paste the public Brevo Form URL below once the form is created in the dashboard.

// Public Brevo form endpoint (sibforms). Safe to ship in client JS — this is a
// public submission URL, not an API key. Update here if the form is recreated.
export const BREVO_FORM_URL =
  "https://5f68aa66.sibforms.com/serve/MUIFALqVjlQalQwocleus5PLLaglLzJzMVTfvmpUH0O-2V-YL7g7Ue5tbq5wQGWnhHOvZoet8B93e4uHuEBSVIEIztEarKSSu0zmAXyryRzw0hoWR3Ns-sq04Cb1nE6AkiHwWnnYwHCJdpjqEJbLmSWjKi3gQtmHlgrVLqo2jIfZzr8YWpCzQ60FM_UiiekP5W0ytJN4itu5472puQ==";

export type BrevoSource =
  | "homepage"
  | "un-sachet"
  | "halal"
  | "tout-en-un"
  | "le-rituel"
  | "direct"
  | string;

// Slugs served by app/lp/[slug]/page.tsx (config: src/lib/lp-angles.ts).
const VALID_LP_SLUGS = new Set([
  "un-sachet",
  "halal",
  "tout-en-un",
  "le-rituel",
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

// Skip real submissions on localhost so dev tests don't pollute the live Brevo
// list. Append ?brevo=live to force a real submit while testing locally.
function shouldSkipSubmit(): boolean {
  if (typeof window === "undefined") return true;
  const forced =
    new URLSearchParams(window.location.search).get("brevo") === "live";
  if (forced) return false;
  return /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
}

export async function submitToBrevo(
  email: string,
  prenom: string,
  source: BrevoSource,
): Promise<BrevoSubmitResult> {
  if (!BREVO_FORM_URL || shouldSkipSubmit()) {
    // No URL, or local dev without ?brevo=live — log and pretend success so the
    // UX flow can still be exercised without creating real contacts.
    if (typeof console !== "undefined") {
      console.warn("[brevo] capture skipped (no URL or local dev).", {
        email,
        prenom,
        source,
      });
    }
    return { ok: true };
  }

  try {
    // Mirror a native Brevo form POST: url-encoded fields + empty anti-bot
    // honeypot. EMAIL and PRENOM are both required by the form. LP_SOURCE only
    // sticks if a matching contact attribute + form field exist in Brevo; it is
    // harmlessly ignored otherwise.
    const body = new URLSearchParams({
      EMAIL: email,
      PRENOM: prenom,
      LP_SOURCE: source,
      email_address_check: "", // Brevo honeypot — must stay empty.
      locale: "fr",
    });

    // no-cors: sibforms returns an opaque cross-origin response we can't read,
    // so treat a non-throwing request as success. Brevo's dashboard is the
    // source of truth for delivery. (URLSearchParams sets a CORS-safelisted
    // Content-Type automatically, which no-cors requires.)
    await fetch(BREVO_FORM_URL, { method: "POST", body, mode: "no-cors" });
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Erreur inconnue.",
    };
  }
}
