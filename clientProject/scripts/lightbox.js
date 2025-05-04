/**
 * lightbox.js
 * -----------
 * Vanilla-JS lightbox: click <a class="lightbox"> to open;
 * click overlay, × or press Esc to close.
 */
(function () {
  const ESC = "Escape";

  /* Open the overlay with the full-size image */
  const openLightbox = (src) => {
    if (document.querySelector(".lightbox-overlay")) return;

    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    /* Accessible dialog semantics */
    overlay.tabIndex = -1;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    const img = new Image();
    img.src = src;
    img.alt = ""; 
    overlay.appendChild(img);

    /* Close helper shared by click & Esc */
    const close = () => {
      overlay.remove();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", escHandler);
    };

    overlay.addEventListener("click", close);

    const escHandler = (e) => {
      if (e.key === ESC) close();
    };
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
