// Show/hide new date/time fields if user selects "Reschedule"
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
  