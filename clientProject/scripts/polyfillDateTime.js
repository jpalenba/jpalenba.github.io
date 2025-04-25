/**
 * polyfillDateTime.js
 * -------------------
 * Converts unsupported <input type="date|time"> controls
 * into plain text fields with a helpful placeholder.
 */

document.addEventListener("DOMContentLoaded", () => {
  const supports = (type) => {
    const el = document.createElement("input");
    el.type = type;
    return el.type === type;
  };

  /* Fallback for <input type="date"> */
  if (!supports("date")) {
    document.querySelectorAll('input[type="date"]').forEach((i) => {
      i.type = "text";
      if (!i.placeholder) {
        i.placeholder = "MM/DD/YYYY";
      }
    });
  }

  /* Fallback for <input type="time"> */
  if (!supports("time")) {
    document.querySelectorAll('input[type="time"]').forEach((i) => {
      i.type = "text";
      if (!i.placeholder) {
        i.placeholder = "HH:MM";
      }
    });
  }
});
