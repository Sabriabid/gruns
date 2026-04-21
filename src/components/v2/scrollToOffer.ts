export function scrollToOffer() {
  const el = document.getElementById("offre");
  if (!el) return;
  if (typeof el.scrollIntoView === "function") {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo(0, el.offsetTop);
  }
}
