// Top urgent-offer bar (gruns DA). Fixed at the very top; the fixed Header sits
// just below it at top-10. Honest pre-launch copy — no fake countdown.
export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-[55] h-10 flex items-center justify-center bg-gomu-yellow text-gomu-purple-deep px-4">
      <p className="text-[12px] md:text-[13px] font-semibold tracking-tight text-center truncate">
        <span aria-hidden className="mr-1.5">
          ✦
        </span>
        Pré-lancement · Premier mois à 20€ pour les 500 premiers inscrits
      </p>
    </div>
  );
}
