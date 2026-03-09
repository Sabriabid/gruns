"use client";

import { useState } from "react";

interface EmailCaptureProps {
  placeholder?: string;
  buttonText: string;
  successMessage: string;
  variant?: "light" | "dark";
}

export default function EmailCapture({
  placeholder = "Votre adresse email",
  buttonText,
  successMessage,
  variant = "light",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Store locally for MVP
    const existing = JSON.parse(localStorage.getItem("groms_emails") || "[]");
    existing.push({ email, date: new Date().toISOString() });
    localStorage.setItem("groms_emails", JSON.stringify(existing));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={`text-center py-4 px-6 rounded-xl ${
          variant === "dark"
            ? "bg-brand-green/20 text-white"
            : "bg-brand-green/10 text-brand-green"
        }`}
      >
        <p className="font-bold text-lg">✓ {successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className={`flex-1 px-5 py-3.5 rounded-[10px] text-base outline-none transition-all ${
          variant === "dark"
            ? "bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-white/50"
            : "bg-white text-brand-dark placeholder:text-brand-dark/40 border border-brand-green/20 focus:border-brand-green"
        }`}
      />
      <button
        type="submit"
        className="bg-brand-green text-white font-bold px-8 py-3.5 rounded-[10px] shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 cursor-pointer whitespace-nowrap"
      >
        {buttonText}
      </button>
    </form>
  );
}
