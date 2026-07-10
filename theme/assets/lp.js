/* Gomu LP kit — la seule dette JS des LP (~1 Ko) :
   1. reveal au scroll (IntersectionObserver, une fois)
   2. sticky CTA mobile après un seuil de scroll
   3. fermeture de la barre d'annonce (si dismissible)   */
(function () {
  'use strict';

  /* 1. Reveal */
  var revealed = document.querySelectorAll('[data-lp-reveal]');
  if ('IntersectionObserver' in window && revealed.length) {
    var io = new IntersectionObserver(
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
    revealed.forEach(function (el) { io.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add('in'); });
  }

  /* 2. Sticky CTA */
  var sticky = document.querySelector('[data-lp-sticky]');
  if (sticky) {
    var threshold = parseInt(sticky.getAttribute('data-lp-sticky'), 10) || 600;
    var update = function () {
      sticky.classList.toggle('lp-sticky--visible', window.scrollY > threshold);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* 3. Barre d'annonce dismissible */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lp-dismiss]');
    if (btn) {
      var bar = btn.closest('[data-lp-announcement]');
      if (bar) bar.style.display = 'none';
    }
  });
})();
