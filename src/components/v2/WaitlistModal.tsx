"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { ArrowRight, X } from "lucide-react";
import Eyebrow from "./Eyebrow";
import {
  subscribeWaitlist,
  getWaitlistOpen,
  closeWaitlist,
} from "./waitlistStore";
import { useWaitlistForm } from "./useWaitlistForm";

const INPUT_CLS =
  "w-full rounded-full bg-gomu-paper border border-gomu-purple-deep/15 px-5 py-3.5 outline-none text-[15px] text-gomu-purple-deep placeholder-gomu-purple-deep/40 focus:border-gomu-purple-deep/40 transition-colors";

export default function WaitlistModal() {
  const open = useSyncExternalStore(
    subscribeWaitlist,
    getWaitlistOpen,
    () => false,
  );
  const {
    prenom,
    setPrenom,
    email,
    setEmail,
    hp,
    setHp,
    submitting,
    submitted,
    error,
    setError,
    submit,
  } = useWaitlistForm();
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Lock body scroll, focus the first field, and close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(
      () => firstFieldRef.current?.focus(),
      30,
    );
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWaitlist();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
    >
      {/* Backdrop — click to close */}
      <button
        type="button"
        aria-label="Fermer"
        onClick={closeWaitlist}
        className="absolute inset-0 bg-gomu-surface-dark/75 backdrop-blur-[3px]"
      />

      {/* Card */}
      <div className="relative w-full max-w-[460px] bg-gomu-cream text-gomu-purple-deep rounded-[26px] p-7 sm:p-9 shadow-[0_30px_80px_-20px_rgba(59,10,94,0.6)]">
        <button
          type="button"
          aria-label="Fermer"
          onClick={closeWaitlist}
          className="absolute top-4 right-4 text-gomu-purple-deep/45 hover:text-gomu-purple-deep transition-colors"
        >
          <X size={20} />
        </button>

        {/* Honeypot — off-screen; bots fill it and get dropped silently. */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
        >
          <input
            type="text"
            name="hp"
            tabIndex={-1}
            autoComplete="off"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
        </div>

        {!submitted ? (
          <>
            <Eyebrow>Offre de lancement · 500 places</Eyebrow>
            <h2
              id="waitlist-modal-title"
              className="font-display font-bold tracking-display mt-3 text-[30px] sm:text-[36px] leading-[1.05]"
            >
              Rejoins la <span className="hl">liste d&apos;attente</span>.
            </h2>
            <p className="mt-3 text-[14.5px] leading-[1.55] text-gomu-purple-deep/75">
              Premier mois à <b>20€</b> pour les 500 premiers. On te prévient 72h
              avant le lancement.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <input
                ref={firstFieldRef}
                type="text"
                autoComplete="given-name"
                value={prenom}
                onChange={(e) => {
                  setPrenom(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submit();
                }}
                placeholder="Ton prénom"
                aria-label="Prénom"
                className={INPUT_CLS}
              />
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submit();
                }}
                placeholder="ton@email.com"
                aria-label="Adresse email"
                className={INPUT_CLS}
              />
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gomu-purple-deep text-gomu-cream px-6 py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5 hover:bg-gomu-purple-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {submitting ? "Envoi…" : "Bloquer ma place à 20€"}
                {!submitting && <ArrowRight size={16} />}
              </button>
            </div>

            {error && (
              <p className="mt-3 text-center text-[13px] text-gomu-purple-1">
                {error}
              </p>
            )}
            <p className="mt-4 text-center text-[12.5px] leading-[1.5] text-gomu-purple-deep/60">
              On ne facture rien aujourd&apos;hui. Tu reçois un email au
              lancement pour confirmer ta commande.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="font-display italic text-gomu-purple-deep text-[28px] leading-[1.15]">
              Tu es sur la liste.
            </div>
            <p className="mt-3 text-[15px] leading-[1.55] text-gomu-purple-deep/75">
              On t&apos;envoie un email avec les détails dans quelques minutes.
              Check tes spams au cas où.
            </p>
            <button
              type="button"
              onClick={closeWaitlist}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gomu-purple-deep text-gomu-cream px-6 py-3 text-[14px] font-semibold hover:bg-gomu-purple-1 transition-colors"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
