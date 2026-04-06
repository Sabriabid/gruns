"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { content } from "@/lib/content";
import EmailCapture from "@/components/ui/EmailCapture";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Signup */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <h3 className="text-brand-yellow font-bold text-lg mb-4">
              {content.footer.signup.title}
            </h3>
            <EmailCapture
              placeholder={content.footer.signup.placeholder}
              buttonText="→"
              successMessage="Inscrit !"
              variant="dark"
            />
          </motion.div>

          {/* Link columns */}
          {content.footer.columns.map((col) => (
            <motion.div key={col.title} variants={fadeInUp}>
              <h3 className="text-brand-yellow font-bold text-lg mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-transform inline-block text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-brand-yellow font-bold text-lg mb-4">
              Suivez-nous
            </h3>
            <div className="flex gap-4">
              {content.footer.social.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-transform"
                  aria-label={s}
                >
                  <Instagram size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* LP Pages */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3 text-center">
            Landing Pages
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <Link href="/lp/digestion" className="text-white/60 hover:text-white transition-colors">Digestion</Link>
            <Link href="/lp/stress-sommeil" className="text-white/60 hover:text-white transition-colors">Stress & Sommeil</Link>
            <Link href="/lp/halal" className="text-white/60 hover:text-white transition-colors">Halal</Link>
            <Link href="/lp/pilules" className="text-white/60 hover:text-white transition-colors">Pilules</Link>
            <Link href="/lp/energie" className="text-white/60 hover:text-white transition-colors">&Eacute;nergie</Link>
            <Link href="/lp/made-in-france" className="text-white/60 hover:text-white transition-colors">Made in France</Link>
            <Link href="/lp/multi-pots" className="text-white/60 hover:text-white transition-colors">Multi-pots</Link>
            <Link href="/lp/immunite" className="text-white/60 hover:text-white transition-colors">Immunit&eacute;</Link>
            <Link href="/lp/arnaque" className="text-white/60 hover:text-white transition-colors">Arnaque&nbsp;?</Link>
            <Link href="/lp/parents" className="text-white/60 hover:text-white transition-colors">Parents</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-2xl sm:text-3xl font-bold text-brand-yellow">
            {content.brand}
          </span>
          <p className="text-white/40 text-sm">
            © {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
