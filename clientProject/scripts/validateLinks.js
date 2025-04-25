/**
 * validateLinks.js
 * ----------------
 * Re-wires the “Validate HTML” and “Validate CSS” footer links
 * so they point at the current page’s URL.*/

   document.addEventListener("DOMContentLoaded", () => {
    const htmlLink = document.getElementById("validation_link_html");
    const cssLink  = document.getElementById("validation_link_css");
  
    if (htmlLink) {
      htmlLink.href =
        "https://validator.w3.org/check?uri=" + encodeURIComponent(location.href);
    }
    if (cssLink) {
      cssLink.href =
        "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(location.href);
    }
  });