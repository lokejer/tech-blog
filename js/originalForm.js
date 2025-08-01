// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('login-form');

//   // grab inputs and their error message <small> siblings
//   const inputs = [
//     {
//       // el stands for element
//       el: document.getElementById('fname'),
//       errorEl: document.getElementById('fname').nextElementSibling,
//       validate: value => value.trim() !== '',
//       errorMsg: 'First Name is required.'
//     },
//     {
//       el: document.getElementById('lname'),
//       errorEl: document.getElementById('lname').nextElementSibling,
//       validate: value => value.trim() !== '',
//       errorMsg: 'Last Name is required.'
//     },
//     {
//       el: document.getElementById('password'),
//       errorEl: document.getElementById('password').nextElementSibling,
//       validate: value => value.length >= 6,
//       errorMsg: 'Password must be at least 6 characters.'
//     }
//   ];

//   // delete error message when user types
//   inputs.forEach(({ el, errorEl }) => {
//     el.addEventListener('input', () => {
//       el.classList.remove('error');
//       errorEl.textContent = '';
//       errorEl.classList.remove('active');
//     });

//     // bold the label when input field is focused on
//     el.addEventListener('focus', () => {
//       const label = el.previousElementSibling;
//       if (label && label.tagName === 'LABEL') {
//         label.classList.add('focused-label');
//       }
//     })

//     // unbold the label when input field is not focused on
//     el.addEventListener('blur', () => {
//       const label = el.previousElementSibling;
//       if (label && label.tagName === 'LABEL') {
//         label.classList.remove('focused-label');
//       }
//     })
//   });

//   // listen for form submit
//   form.addEventListener('submit', (e) => {
//     e.preventDefault(); // prevents the form from actually submitting and refreshing the page, so validation can run first.

//     let firstInvalidInput = null;

//     inputs.forEach(({ el, errorEl, validate, errorMsg }) => {
//       if (!validate(el.value)) {
//         el.classList.add('error');
//         errorEl.textContent = errorMsg;
//         errorEl.classList.add('active');

//         if (!firstInvalidInput) {
//           firstInvalidInput = el;
//         }
//       } else {
//         el.classList.remove('error');
//         errorEl.textContent = '';
//         errorEl.classList.remove('active');
//       }
//     });

//     if (firstInvalidInput) {
//       firstInvalidInput.focus();
//       return; // stop submission
//     }

//     // check captcha
//     if (document.getElementById('captcha').value !== '84e1MQ') {
//       alert('Invalid CAPTCHA');
//       document.getElementById('captcha').focus();
//       return;
//     }

//     // If all valid, proceed (you can add more logic here)
//     alert('Form submitted successfully!');
//     form.reset(); // clear all input values

//     // form.submit(); // uncomment if you want real submit
//   });
// });

// form submission handling
document.getElementById('discussionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // show success message
  document.getElementById('successMessage').classList.remove('d-none');
  
  // scroll to top to show message
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // hide form temporarily
  this.style.opacity = '0.7';
  this.style.pointerEvents = 'none';
  
  // reset after 3 seconds (simulate processing)
  setTimeout(() => {
    this.style.opacity = '1';
    this.style.pointerEvents = 'auto';
    // optionally reset form: this.reset();
  }, 3000);
});

// form reset handling
document.querySelector('button[type="reset"]').addEventListener('click', function() {
  // hide success message when resetting
  document.getElementById('successMessage').classList.add('d-none');
});

// auto-resize textareas
document.querySelectorAll('textarea').forEach(textarea => {
  textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
});