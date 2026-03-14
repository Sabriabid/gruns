"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    const existing = JSON.parse(localStorage.getItem("gomu_emails") || "[]");
    existing.push({ email, date: new Date().toISOString() });
    localStorage.setItem("gomu_emails", JSON.stringify(existing));
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`text-center py-4 px-6 rounded-xl ${
            variant === "dark"
              ? "bg-brand-purple/20 text-white"
              : "bg-brand-purple/10 text-brand-purple"
          }`}
        >
          <p className="font-bold text-lg">✓ {successMessage}</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-lg"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className={`flex-1 px-5 py-3.5 rounded-[10px] text-base outline-none transition-all ${
              variant === "dark"
                ? "bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-white/50"
                : "bg-white text-brand-dark placeholder:text-brand-dark/40 border border-brand-purple/20 focus:border-brand-purple"
            }`}
          />
          <button
            type="submit"
            className="bg-brand-purple text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base rounded-[10px] shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 cursor-pointer whitespace-normal sm:whitespace-nowrap"
          >
            {buttonText}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
