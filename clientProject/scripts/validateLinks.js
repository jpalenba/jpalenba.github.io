/**
 * validate-links.js
 * -----------------
 * Points the validator badges in the footer at the URL
 * of the page the visitor is currently viewing.
 *

 */

document.addEventListener("HTMLIncludeLoaded", () => {
  const htmlLink = document.getElementById("validation_link_html");
  const cssLink  = document.getElementById("validation_link_css");
  const wcagLink = document.getElementById("validation_link_wcag"); 

  const pageURL = location.href.split('#')[0];

  if (htmlLink) htmlLink.href =
      "https://validator.w3.org/check?uri=" + encodeURIComponent(pageURL);

  if (cssLink) cssLink.href =
      "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(pageURL);

  if (wcagLink) wcagLink.href =
      "https://wave.webaim.org/report#/" + encodeURIComponent(pageURL);
});

  