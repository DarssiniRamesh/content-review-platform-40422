/*
Summary:
- Enforces aria-hidden/focusable=false on decorative SVGs to avoid keyboard traps and SR noise.
- Adds keyboard/click handlers to CTA buttons as placeholders (no navigation specified).
- Provides initial focus to the first CTA for quick keyboard discovery, without stealing focus after interaction.
- Leaves room for future integration: replace console.log with actual navigation when routes are available.
*/
(function(){
  "use strict";

  // PUBLIC_INTERFACE
  function initIndiceScreen(){
    /** Initializes the Índice layout, improves a11y for inline SVG, and adds CTA keyboard support. */

    // Decorative SVG: ensure not focusable for AT and legacy Edge/IE
    document.querySelectorAll('.notice__icon svg').forEach(svg => {
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      svg.setAttribute('role', 'img'); // role is ignored due to aria-hidden but safe
    });

    // CTA behavior: provide basic click handlers (to be wired later)
    const ctas = document.querySelectorAll('.cta-group .cta-frame');
    ctas.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        // Placeholder: integrate with navigation when specified
        // eslint-disable-next-line no-console
        console.log(`CTA ${idx+1} pressed (no-op).`);
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    // Optional: focus first CTA to hint keyboard interaction
    const firstCTA = document.querySelector('.cta-group .cta-frame');
    if (firstCTA && !document.body.dataset.userInteracted) {
      try { firstCTA.focus({ preventScroll: true }); } catch(e){ firstCTA.focus(); }
    }

    // Track a single interaction to avoid future auto-focus
    ['pointerdown','keydown'].forEach(evt=>{
      window.addEventListener(evt, ()=>{ document.body.dataset.userInteracted = '1'; }, { once:true, passive:true });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initIndiceScreen);
  } else {
    initIndiceScreen();
  }

  // PUBLIC_INTERFACE
  window.IndiceInit = initIndiceScreen;
})();
