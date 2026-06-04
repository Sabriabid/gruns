// Footer payment badges — 5 accepted methods (Visa, Mastercard, CB, PayPal,
// Apple Pay) drawn as light card pills so they read on the dark footer.
// Self-contained inline SVG / wordmarks — no external icon assets.

function Pill({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className="h-[26px] px-2 rounded-[6px] bg-white inline-flex items-center justify-center ring-1 ring-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
    >
      {children}
    </span>
  );
}

function Visa() {
  return (
    <span className="text-[12px] font-extrabold italic tracking-[-0.02em] text-[#1A1F71]">
      VISA
    </span>
  );
}

function Mastercard() {
  return (
    <svg width="30" height="19" viewBox="0 0 30 19" aria-hidden>
      <circle cx="11" cy="9.5" r="7.5" fill="#EB001B" />
      <circle cx="19" cy="9.5" r="7.5" fill="#F79E1B" fillOpacity="0.9" />
    </svg>
  );
}

function CB() {
  return (
    <svg width="17" height="17" viewBox="0 0 20 20" aria-hidden>
      <rect width="20" height="20" rx="3" fill="#0B4EA2" />
      <path d="M20 6 L20 20 L6 20 Z" fill="#16A34A" />
      <text
        x="10"
        y="14"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        fill="#fff"
      >
        CB
      </text>
    </svg>
  );
}

function PayPal() {
  return (
    <span className="text-[11.5px] font-extrabold italic tracking-[-0.02em]">
      <span className="text-[#003087]">Pay</span>
      <span className="text-[#009CDE]">Pal</span>
    </span>
  );
}

function ApplePay() {
  return (
    <span className="inline-flex items-center gap-[2px] text-black">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.7 12.8c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-1 2.3-2c.7-1.1 1-2.2 1-2.3 0 0-2-.8-2-2.8zM14.7 6.3c.5-.6.9-1.5.8-2.3-.8 0-1.7.5-2.2 1.1-.5.5-.9 1.4-.8 2.2.9.1 1.8-.4 2.2-1z" />
      </svg>
      <span className="text-[11.5px] font-medium tracking-[-0.01em]">Pay</span>
    </span>
  );
}

export default function PaymentBadges({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      aria-label="Moyens de paiement acceptés"
    >
      <Pill label="Visa">
        <Visa />
      </Pill>
      <Pill label="Mastercard">
        <Mastercard />
      </Pill>
      <Pill label="Cartes Bancaires">
        <CB />
      </Pill>
      <Pill label="PayPal">
        <PayPal />
      </Pill>
      <Pill label="Apple Pay">
        <ApplePay />
      </Pill>
    </div>
  );
}
