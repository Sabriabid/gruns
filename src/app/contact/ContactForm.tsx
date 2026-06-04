"use client";

import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";

const CONTACT_EMAIL = "contact@gomudaily.com";

const SUBJECTS = [
  "Question produit",
  "Commande & abonnement",
  "Presse",
  "Partenariat",
  "Autre",
];

const LABELS = {
  name: "Ton nom",
  email: "Ton email",
  subject: "Sujet",
  message: "Ton message",
};

const PLACEHOLDERS = {
  name: "Prénom Nom",
  email: "toi@exemple.com",
  message: "Dis-nous tout — on lit chaque message.",
};

const ERRORS = {
  name: "Indique-nous ton nom.",
  email: "Entre un email valide (avec un @).",
  message: "Écris quelques mots avant d'envoyer.",
};

const HELP_NOTE =
  "Ton client mail va s'ouvrir avec le message déjà pré-rempli. Il ne te reste qu'à appuyer sur Envoyer.";

const SENT_NOTE =
  "C'est parti ! Ton client mail devrait s'ouvrir. Si rien ne se passe, écris-nous directement à l'adresse ci-dessous.";

const FALLBACK_LEAD = "Le formulaire ne s'ouvre pas ? Écris-nous directement à";

const inputCls =
  "w-full rounded-2xl border border-gomu-purple-deep/15 bg-gomu-paper px-4 py-3.5 text-[16px] text-gomu-ink placeholder:text-gomu-ink/40 outline-none transition-shadow focus:border-gomu-purple-deep/30 focus:ring-2 focus:ring-gomu-yellow";

const labelCls =
  "block text-[13px] uppercase tracking-cap font-medium text-gomu-purple-deep/70 mb-2";

const errCls = "mt-1.5 text-[13px] text-red-600";

type Errors = { name?: string; email?: string; message?: string };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = ERRORS.name;
    if (!email.includes("@")) nextErrors.email = ERRORS.email;
    if (!message.trim()) nextErrors.message = ERRORS.message;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Sujet : ${subject}`,
      "",
      message,
    ].join("\n");

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "[Gomu] " + subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.location.href = href;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="reveal">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={labelCls}>
            {LABELS.name}
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={PLACEHOLDERS.name}
            className={inputCls}
            autoComplete="name"
          />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelCls}>
            {LABELS.email}
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={PLACEHOLDERS.email}
            className={inputCls}
            autoComplete="email"
          />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-subject" className={labelCls}>
          {LABELS.subject}
        </label>
        <select
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={`${inputCls} appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-12`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%233B0A5E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className={labelCls}>
          {LABELS.message}
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={PLACEHOLDERS.message}
          rows={6}
          className={`${inputCls} resize-y`}
        />
        {errors.message && <p className={errCls}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gomu-purple-deep px-8 py-4 text-[16px] font-semibold text-gomu-cream shadow-[0_5px_0_rgba(59,10,94,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gomu-purple-1 hover:shadow-[0_7px_0_rgba(59,10,94,0.25)] active:scale-[0.98]"
      >
        Envoyer le message <Send size={17} />
      </button>

      <p className="mt-4 text-[14px] leading-[1.6] text-gomu-ink/60">
        {sent ? SENT_NOTE : HELP_NOTE}
      </p>

      <p className="mt-5 text-[14px] leading-[1.6] text-gomu-ink/70">
        {FALLBACK_LEAD}{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-1 font-medium text-gomu-purple-deep underline underline-offset-4 decoration-gomu-purple-deep/30 hover:decoration-gomu-purple-deep"
        >
          {CONTACT_EMAIL} <ArrowRight size={14} />
        </a>
      </p>
    </form>
  );
}
