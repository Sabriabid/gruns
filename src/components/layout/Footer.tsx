"use client";

import { Instagram } from "lucide-react";
import { content } from "@/lib/content";
import EmailCapture from "@/components/ui/EmailCapture";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Signup */}
          <div className="lg:col-span-1">
            <h3 className="text-brand-yellow font-bold text-lg mb-4">
              {content.footer.signup.title}
            </h3>
            <EmailCapture
              placeholder={content.footer.signup.placeholder}
              buttonText="→"
              successMessage="Inscrit !"
              variant="dark"
            />
          </div>

          {/* Link columns */}
          {content.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-brand-yellow font-bold text-lg mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h3 className="text-brand-yellow font-bold text-lg mb-4">
              Suivez-nous
            </h3>
            <div className="flex gap-4">
              {content.footer.social.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={s}
                >
                  <Instagram size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
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
