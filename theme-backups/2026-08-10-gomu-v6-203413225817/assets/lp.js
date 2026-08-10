/* Gomu LP kit — la seule dette JS des LP (~1 Ko) :
   1. reveal au scroll (IntersectionObserver, une fois)
   2. sticky CTA mobile après un seuil de scroll
   3. fermeture de la barre d'annonce (si dismissible)

   La classe html.lp-js arme l'état caché des reveals et du sticky : si ce
   fichier ne charge pas (adblock, 404, réseau), la classe n'existe pas et
   tout le contenu reste visible — aucun point de défaillance unique.
   shopify:section:load ré-initialise les sections re-rendues par l'éditeur
   de thème (sinon elles resteraient à opacity:0 dans l'aperçu).            */
(function () {
  'use strict';

  document.documentElement.classList.add('lp-js');

  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
  }

  var sticky = null;
  var threshold = 600;

  function updateSticky() {
    if (!sticky || !sticky.isConnected) return;
    sticky.classList.toggle('lp-sticky--visible', window.scrollY > threshold);
  }

  function init(root) {
    root.querySelectorAll('[data-lp-reveal]').forEach(function (el) {
      if (io) io.observe(el);
      else el.classList.add('in');
    });
    if (root.matches && root.matches('[data-lp-sticky]')) {
      sticky = root;
    } else {
      sticky = root.querySelector('[data-lp-sticky]') || sticky;
    }
    if (sticky) {
      threshold = parseInt(sticky.getAttribute('data-lp-sticky'), 10) || 600;
      updateSticky();
    }
  }

  init(document);
  window.addEventListener('scroll', updateSticky, { passive: true });

  /* Éditeur de thème : une section re-rendue arrive avec de nouveaux nœuds. */
  document.addEventListener('shopify:section:load', function (e) {
    init(e.target);
  });

  /* Barre d'annonce dismissible (délégation : survit aux re-rendus). */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lp-dismiss]');
    if (btn) {
      var bar = btn.closest('[data-lp-announcement]');
      if (bar) bar.remove();
    }
  });
})();
