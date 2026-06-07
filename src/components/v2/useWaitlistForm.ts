"use client";

import { useState } from "react";
import { resolveSource, submitToBrevo } from "@/lib/brevo";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Shared waitlist form state + submit logic, used by both the inline Offre
// section and the WaitlistModal so the Brevo field handling stays in one place.
export function useWaitlistForm() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot — bots fill this, humans never do
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    // Honeypot tripped → silently fake success so the bot doesn't retry.
    if (hp) {
      setSubmitted(true);
      return;
    }
    if (!prenom.trim()) {
      setError("Indique ton prénom.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Adresse email invalide.");
      return;
    }
    setError("");
    setSubmitting(true);
    const result = await submitToBrevo(email, prenom.trim(), resolveSource());
    setSubmitting(false);
    if (!result.ok) {
      setError("Une erreur est survenue. Réessaie dans un instant.");
      return;
    }
    setSubmitted(true);
  };

  return {
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
  };
}
