/**
 * validateLinks.js
 * ----------------
 * Ensures the footer validator links point to the current page URL.
 * Waits until HTMLInclude has injected the footer before modifying.
 */

document.addEventListener("DOMContentLoaded", () => {
  const pageURL = location.href.split('#')[0]; // Clean URL (no fragment)

  // Tries to update the validator links if they exist
  const updateValidatorLinks = () => {
    const htmlLink = document.getElementById("validation_link_html");
    const cssLink  = document.getElementById("validation_link_css");
    const wcagLink = document.getElementById("validation_link_wcag");

    if (htmlLink) htmlLink.href = `https://validator.w3.org/check?uri=${encodeURIComponent(pageURL)}`;
    if (cssLink)  cssLink.href  = `https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(pageURL)}`;
    if (wcagLink) wcagLink.href = `https://wave.webaim.org/report#/${encodeURIComponent(pageURL)}`;
  };

  // Retry until footer loads
  const waitForFooter = setInterval(() => {
    const htmlLink = document.getElementById("validation_link_html");
    const cssLink  = document.getElementById("validation_link_css");
    const wcagLink = document.getElementById("validation_link_wcag");

    if (htmlLink && cssLink && wcagLink) {
      updateValidatorLinks();
      clearInterval(waitForFooter);
    }
  }, 100); // Check every 100ms
});