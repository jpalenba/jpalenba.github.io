/**
 * survey.js  (Cut & Play Salon)
 * ---------------------------------------------
 * Purpose:
 *   1.  Show/Hide the “new date / new time” fields when the
 *       parent picks “Reschedule” on cancel-reschedule.html.
 *   2.  Provide graceful fallbacks for <input type="date|time">
 *       on browsers that don’t support those controls.
 *   3.  Hide the main navigation bar when the page is the home
 *       page (index.html).
 */

// ─────────────── 1  Reschedule: toggle new date/time fields
  document.addEventListener("DOMContentLoaded", function () {
    const actionType = document.getElementById("action-type");
    const rescheduleFields = document.getElementById("reschedule-fields");
  
    actionType.addEventListener("change", function () {
      if (this.value === "reschedule") {
        rescheduleFields.style.display = "block";
      } else {
        rescheduleFields.style.display = "none";
      }
    });
  });

// ─────────────── 2  Polyfill <input type="date|time"> if unsupported
  document.addEventListener('DOMContentLoaded', function () {
    function isInputTypeSupported(type) {
      const input = document.createElement('input');
      input.setAttribute('type', type);
      return input.type === type;
    }
  
    if (!isInputTypeSupported('date')) {
      const dateInputs = document.querySelectorAll('input[type="date"]');
      dateInputs.forEach((input) => {
        input.type = 'text';
        input.placeholder = 'MM/DD/YYYY';
      });
    }
  
    if (!isInputTypeSupported('time')) {
      const timeInputs = document.querySelectorAll('input[type="time"]');
      timeInputs.forEach((input) => {
        input.type = 'text';
        input.placeholder = 'HH:MM';
      });
    }
  });

// ─────────────── 3  Hide navbar only on home page
  window.addEventListener("DOMContentLoaded", () => {
    const checkNav = () => {
      const nav = document.getElementById("main-nav");
      const isHomePage =
        location.pathname.endsWith("index.html") ||
        location.pathname === "/" ||
        location.pathname === "";
  
      if (nav && isHomePage) {
        nav.style.display = "none";
      } else if (!nav) {
       
        setTimeout(checkNav, 1); 
      }
    };
  
    checkNav();
  });
  