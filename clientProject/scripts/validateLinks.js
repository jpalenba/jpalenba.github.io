/**
 * validateLinks.js
 * ----------------
 * Ensures the footer validator links point to the current page URL.
 * Waits until HTMLInclude has injected the footer before modifying.
 */

(function () {
  const setValidatorLinks = () => {
    const pageURL = location.href.split('#')[0];            // strip any fragment
    const htmlLink = document.getElementById('validation_link_html');
    const cssLink  = document.getElementById('validation_link_css');
    const wcagLink = document.getElementById('validation_link_wcag');

    if (htmlLink) htmlLink.href = `https://validator.w3.org/check?uri=${encodeURIComponent(pageURL)}`;
    if (cssLink)  cssLink.href  = `https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(pageURL)}`;
    if (wcagLink) wcagLink.href = `https://wave.webaim.org/report#/${encodeURIComponent(pageURL)}`;

    // Return true only when all three <a> elements exist so the observer knows when to stop
    return !!(htmlLink && cssLink && wcagLink);
  };

  // 1️⃣ First attempt: in case the footer is already present (e.g., quick cache)
  if (setValidatorLinks()) return;

  // 2️⃣ Fallback: observe mutations until the footer validators appear
  const observer = new MutationObserver(() => {
    if (setValidatorLinks()) observer.disconnect();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
