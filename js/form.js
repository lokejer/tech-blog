// FORM SUBMISSION + VALIDATION
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // add bootstrap validation classes
  this.classList.add('was-validated');
  
  // custom email validation
  const emailInput = document.getElementById('userEmail');
  if (emailInput.value && !isValidEmail(emailInput.value)) {
    emailInput.setCustomValidity('Please enter a valid email address');
  } else {
    emailInput.setCustomValidity('');
  }
  
  // check if form is valid
  if (this.checkValidity()) {
    
    // get form elements
    const submitBtn = document.querySelector('.btn-primary');
    const resetBtn = document.querySelector('button[type="reset"]');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    // show loading animation immediately
    submitBtn.disabled = true;
    resetBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Submitting...';
    loadingSpinner.classList.remove('d-none');
    loadingSpinner.scrollIntoView({ behavior: 'smooth', block: 'center' }); // scroll to show loading spinner
    
    // mute form (visual feedback that form is being submitted/processed)
    this.style.opacity = '0.7';
    this.style.pointerEvents = 'none';
    
    // SIMULATED PROCESSING - first play the loading animation, only after 3s show success message and reset form
    setTimeout(() => {
      
      // hide loading spinner
      loadingSpinner.classList.add('d-none');
      
      // reset form state
      this.style.opacity = '1';
      this.style.pointerEvents = 'auto';
      this.classList.remove('was-validated');
      this.reset();
      
      // reset buttons
      submitBtn.disabled = false;
      resetBtn.disabled = false;
      submitBtn.innerHTML = '<i class="bi bi-send me-2"></i>Submit Feedback';
      
      // show success message
      const successMessage = document.getElementById('successMessage');
      successMessage.classList.remove('d-none');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      successMessage.focus();
      
      // update character counters
      updateAllCounters();
      
    }, 3000); // 3s 'loading' time
  }
  
  // if form invalid, scroll to first invalid field
  else {
    const firstInvalid = this.querySelector(':invalid');
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

// helper fn for email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// real-time email validation (ONLY when form failed to submit before)
document.getElementById('userEmail').addEventListener('input', function() {
  if (this.value && !isValidEmail(this.value)) {
    this.setCustomValidity('Please enter a valid email address');
  } else {
    this.setCustomValidity('');
  }
});

/* ============== FORM RESET BUTTON ============== */
document.querySelector('button[type="reset"]').addEventListener('click', function() {
  document.getElementById('successMessage').classList.add('d-none');
  document.getElementById('feedbackForm').classList.remove('was-validated');

  // ensure browser clears the form before resetting character counts
  setTimeout(() => {
    updateAllCounters();
  }, 0);
});

/* ============== AUTO-RESIZE TEXTAREAS ============== */
document.querySelectorAll('textarea').forEach(textarea => {
  textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
});

/* ============== UPDATE RANGE SLIDER VALUE(s) ============== */
document.getElementById('techInterest').addEventListener('input', function() {
  document.getElementById('interestValue').textContent = `(${this.value})`;
});

document.getElementById('readingFreq').addEventListener('input', function() {
  const frequencies = ['Rarely', 'Once/week', '2 times/week', '3 times/week', '4 times/week', '5 times/week', '6 times/week', 'Daily'];
  document.getElementById('freqValue').textContent = `(${frequencies[this.value - 1]})`;
});

/* ============== HANDLE CHARACTER COUNTERS ============== */
function updateCharacterCounter(textareaId, counterId, maxLength = 1000) {
  const textarea = document.getElementById(textareaId);
  const counter = document.getElementById(counterId);
  
  if (!textarea || !counter) return;
  
  const currentLength = textarea.value.length;
  counter.textContent = `${currentLength}/${maxLength} characters`;
  
  // update counter styling based on length
  counter.classList.remove('warning', 'danger');
  if (currentLength > maxLength * 0.9) {
    counter.classList.add('danger');
  } else if (currentLength > maxLength * 0.75) {
    counter.classList.add('warning');
  }
  
  // ACCESSIBILITY: screen readers politely remind the user once, when the word count is 900 (approaching the max limit of 1000)
  if (currentLength > maxLength * 0.9) {
    counter.setAttribute('aria-live', 'polite');
  } else {
    counter.removeAttribute('aria-live');
  }
}

// update character counters when user types
function updateAllCounters() {
  updateCharacterCounter('articleLiked', 'likedCounter', 500);
  updateCharacterCounter('articleImprovement', 'improvementCounter', 500);
  updateCharacterCounter('similarArticles', 'topicsCounter', 1000);
  updateCharacterCounter('additionalComments', 'commentsCounter', 1000);
}

// add event listeners
document.getElementById('articleLiked').addEventListener('input', () => updateCharacterCounter('articleLiked', 'likedCounter', 500));
document.getElementById('articleImprovement').addEventListener('input', () => updateCharacterCounter('articleImprovement', 'improvementCounter', 500));
document.getElementById('similarArticles').addEventListener('input', () => updateCharacterCounter('similarArticles', 'topicsCounter', 1000));
document.getElementById('additionalComments').addEventListener('input', () => updateCharacterCounter('additionalComments', 'commentsCounter', 1000));

// initialise when page loads
document.addEventListener('DOMContentLoaded', updateAllCounters);