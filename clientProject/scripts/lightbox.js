/**
 * lightbox.js
 * -----------
 * Vanilla-JS lightbox: click <a class="lightbox"> to open;
 * click overlay, × or press Esc to close.
 */
(function () {
  const ESC = "Escape";
  let overlay;                           

  function closeLightbox() {
    overlay.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", escHandler);
  }

  function escHandler(e) {
    if (e.key === ESC) closeLightbox();
  }

  /* Open the overlay with the full-size image */
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

  /* Attach once DOM is ready */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a.lightbox").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(link.href);
      });
    });
  });
})();
