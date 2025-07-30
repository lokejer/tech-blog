// form submission handling
document.getElementById('discussionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // add bootstrap validation classes
  this.classList.add('was-validated');
  
  // check if form is valid
  if (this.checkValidity()) {
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
      this.classList.remove('was-validated');
      // optionally reset form: this.reset();
    }, 3000);
  } else {
    // scroll to first invalid field
    const firstInvalid = this.querySelector(':invalid');
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

// form reset handling
document.querySelector('button[type="reset"]').addEventListener('click', function() {
  // hide success message when resetting
  document.getElementById('successMessage').classList.add('d-none');
  // remove validation classes
  document.getElementById('discussionForm').classList.remove('was-validated');
});

// auto-resize textareas
document.querySelectorAll('textarea').forEach(textarea => {
  textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
});