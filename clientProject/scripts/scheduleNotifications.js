/**
 * scheduleNotifications.js
 * ------------------------
 * Friendly pop-ups after every key action – no back-end needed.
 *
 * 1.  schedule.html  (.appointment-form)
 *       ✓ “Your appointment has been scheduled!”
 * 2.  cancel-reschedule.html  (.cancel-form)
 *       ✓ “Your appointment has been deleted.”  (Cancel)
 *       ✓ “Your appointment has been rescheduled!”  (Reschedule)
 * 3.  msghairdresser.html  (.message-form)
 *       ✓ “Your message has been sent!”
 */

document.addEventListener('DOMContentLoaded', () => {
    /* ─── 1 ▸ New appointment ────────────────────────── */
    const appointmentForm = document.querySelector('.appointment-form');
    if (appointmentForm) {
      appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();                         // stay on page
        alert('✅  Your appointment has been scheduled!');
        appointmentForm.reset();
      });
    }
  
    /* ─── 2 ▸ Cancel / Reschedule ────────────────────── */
    const cancelForm = document.querySelector('.cancel-form');
    if (cancelForm) {
      cancelForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const action           = document.getElementById('action-type').value;
        const rescheduleFields = document.getElementById('reschedule-fields');
        const hiddenClass      = 'reschedule-hidden';
  
        if (action === 'cancel') {
          alert('🗑️  Your appointment has been deleted.');
        } else if (action === 'reschedule') {
          alert('📅  Your appointment has been rescheduled!');
        } else {
          alert('⚠️  Please choose whether you want to cancel or reschedule.');
          return;                                   
        }
  
        cancelForm.reset();
        if (rescheduleFields) rescheduleFields.classList.add(hiddenClass);
      });
    }
  
    /* ─── 3 ▸ Message a hairdresser ──────────────────── */
    const messageForm = document.querySelector('.message-form');
    if (messageForm) {
      messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        alert('✉️  Your message has been sent!');
  
        messageForm.reset();
  
        /* Reset the live char counter if present */
        const counter = document.getElementById('char-counter');
        if (counter) counter.textContent = '0/500';
      });
    }
  });
  