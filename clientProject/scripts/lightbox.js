/**
 * lightbox.js
 * -----------
 * Vanilla-JS lightbox: clicking any <a class="lightbox">
 * opens the linked image full-screen; click × or ESC to close.
 */

(function () {
  const ESC = 27;

  /* Open the overlay with the full-size image */
  const openLightbox = (src) => {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";

    const img = document.createElement("img");
    img.src = src;
    overlay.appendChild(img);

    /* Close on click or on ESC key-press */
    const close = () => overlay.remove();

    overlay.addEventListener("click", close);

    const escHandler = (e) => {
      if (e.keyCode === ESC) {
        close();
        document.removeEventListener("keydown", escHandler);
      }
    };
    document.addEventListener("keydown", escHandler);

    document.body.appendChild(overlay);
  };

  /* Attach lightbox behavior to every <a class="lightbox"> */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a.lightbox").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(link.href);
      });
    });
  });
})();
