// ─────────────── 1  Reschedule: toggle new date/time fields
document.addEventListener("DOMContentLoaded", () => {
  const actionType       = document.getElementById("action-type");
  const rescheduleFields = document.getElementById("reschedule-fields");
  const hiddenClass      = "reschedule-hidden";

  actionType.addEventListener("change", function () {
    if (this.value === "reschedule") {
      rescheduleFields.classList.remove(hiddenClass);
    } else {
      rescheduleFields.classList.add(hiddenClass);
    }
  });
});

/*
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
  });*/