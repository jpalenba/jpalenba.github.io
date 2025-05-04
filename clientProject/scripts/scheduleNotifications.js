/**
 * scheduleNotifications.js
 * ------------------------
 * Shows a friendly notice after the user schedules, cancels,
 * or reschedules an appointment.  (No back-end required.)
 *
 * ‣ On the Schedule page (appointment-form)
 *      – alerts “Your appointment has been scheduled!”
 * ‣ On the Cancel / Reschedule page (cancel-form)
 *      – if the user picked “Cancel”:     “Your appointment has been deleted.”
 *      – if the user picked “Reschedule”: “Your appointment has been rescheduled!”
 *      – form resets afterwards and hides the optional fields again.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ───────── 1.  schedule.html  (book a brand-new appointment) */
    const appointmentForm = document.querySelector('.appointment-form');
    if (appointmentForm) {
      appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();                       // stay on the same page
        alert('✅  Your appointment has been scheduled!');
        appointmentForm.reset();                  // clear the form
      });
    }
  
    /* ───────── 2.  cancel-reschedule.html  (modify or delete) */
    const cancelForm = document.querySelector('.cancel-form');
    if (cancelForm) {
      cancelForm.addEventListener('submit', (e) => {
        e.preventDefault();                       // stay on the same page
  
        const action = document.getElementById('action-type').value;
        const rescheduleFields = document.getElementById('reschedule-fields');
        const hiddenClass = 'reschedule-hidden';
  
        if (action === 'cancel') {
          alert('🗑️  Your appointment has been deleted.');
        } else if (action === 'reschedule') {
          alert('📅  Your appointment has been rescheduled!');
        } else {
          alert('⚠️  Please choose whether you want to cancel or reschedule.');
          return;                                 // don’t clear the form
        }
  
        cancelForm.reset();                       // clear everything
        /* hide the extra date/time inputs after resetting */
        if (rescheduleFields) rescheduleFields.classList.add(hiddenClass);
      });
    }
  
  });
  