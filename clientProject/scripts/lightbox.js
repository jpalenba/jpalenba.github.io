/**
 * scripts/lightbox.js
 * (drop straight in – no other code changed)
 */
(function () {
  const ESC = "Escape";
  let overlay;         
  let escHandler;       

  /* 1 ─── close helper ──────────────────────────────── */
  function closeLightbox() {
    overlay.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", escHandler); 
  }

  /* 2 ─── Esc-key helper ───────────────────────────── */
  escHandler = function (e) {           // assignment happens *after* the let
    if (e.key === ESC) closeLightbox();
  };

  /* 3 ─── open overlay ─────────────────────────────── */
  const openLightbox = (src) => {
    if (document.querySelector(".lightbox-overlay")) return; 

    overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.tabIndex = -1;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    const img = new Image();
    img.src = src;
    img.alt = "";
    overlay.appendChild(img);

    overlay.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", escHandler);

    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);
    overlay.focus();
  };

  /* 4 ─── wire up thumbnails once DOM is ready ─────── */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a.lightbox").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(link.href);
      });
    });
  });
})();
