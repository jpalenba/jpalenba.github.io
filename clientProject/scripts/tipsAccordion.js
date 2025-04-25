/**
 * tipsAccordion.js
 * ----------------
 * Simple accordion: clicking a “tip-toggle” button
 * shows / hides the adjacent .tip-body paragraph.
 */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tip-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('active');
    });
  });
});
