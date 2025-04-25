/**
 * charCount.js
 * ------------
 * Updates the “0/500” counter under the message <textarea>.
 */

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("message");
    const counter  = document.getElementById("char-counter");
    if (!textarea || !counter) return;
  
    const update = () => {
      counter.textContent = `${textarea.value.length}/500`;
    };
    textarea.addEventListener("input", update);
    update();                       // initialise
  });
  