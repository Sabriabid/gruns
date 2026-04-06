import type { LPFooterData } from "@/lib/lp-content";

interface Props {
  data: LPFooterData;
}

export default function LPFooter({ data }: Props) {
  return (
    <footer className="bg-lp-green-900 text-white/70 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-white font-bold text-lg mb-1 text-center">
          {data.brand}
        </p>
        <p className="text-sm mb-8 text-center">{data.tagline}</p>

        {/* LP navigation */}
        <div className="mb-8">
          <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3 text-center">
            Toutes les pages
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {data.lpLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-4 text-xs">
          {data.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-6 text-sm">
          {data.socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="hover:text-white transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40 text-center">
          &copy; {new Date().getFullYear()} {data.brand}. Tous droits
          r&eacute;serv&eacute;s.
        </p>
      </div>
    </footer>
  );
}
