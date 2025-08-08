// Enhanced form submission handling with better validation
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Add bootstrap validation classes
  this.classList.add('was-validated');
  
  // Custom email validation
  const emailInput = document.getElementById('userEmail');
  if (emailInput.value && !isValidEmail(emailInput.value)) {
    emailInput.setCustomValidity('Please enter a valid email address');
  } else {
    emailInput.setCustomValidity('');
  }
  
  // Check if form is valid
  if (this.checkValidity()) {
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('d-none');
    successMessage.focus(); // For screen readers
    
    // Scroll to top to show message
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hide form temporarily
    this.style.opacity = '0.7';
    this.style.pointerEvents = 'none';
    
    // Reset after 3 seconds (simulate processing)
    setTimeout(() => {
      this.style.opacity = '1';
      this.style.pointerEvents = 'auto';
      this.classList.remove('was-validated');
      // Optionally reset form: this.reset();
    }, 3000);
  } else {
    // Scroll to first invalid field
    const firstInvalid = this.querySelector(':invalid');
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

// Enhanced form reset handling
document.querySelector('button[type="reset"]').addEventListener('click', function() {
  // Hide success message when resetting
  document.getElementById('successMessage').classList.add('d-none');
  // Remove validation classes
  document.getElementById('discussionForm').classList.remove('was-validated');
  // Reset all character counters
  updateAllCounters();
});

// Auto-resize textareas
document.querySelectorAll('textarea').forEach(textarea => {
  textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
});

// Range slider value updates
document.getElementById('techInterest').addEventListener('input', function() {
  document.getElementById('interestValue').textContent = `(${this.value})`;
});

document.getElementById('readingFreq').addEventListener('input', function() {
  const frequencies = ['Rarely', 'Once/week', '2 times/week', '3 times/week', '4 times/week', '5 times/week', '6 times/week', 'Daily'];
  document.getElementById('freqValue').textContent = `(${frequencies[this.value - 1]})`;
});

// Switch animations
document.querySelectorAll('.form-switch .form-check-input').forEach(switchInput => {
  switchInput.addEventListener('change', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 150);
  });
});

// Character counter functionality
function updateCharacterCounter(textareaId, counterId, maxLength = 1000) {
  const textarea = document.getElementById(textareaId);
  const counter = document.getElementById(counterId);
  
  if (!textarea || !counter) return;
  
  const currentLength = textarea.value.length;
  counter.textContent = `${currentLength}/${maxLength} characters`;
  
  // Update counter styling based on length
  counter.classList.remove('warning', 'danger');
  if (currentLength > maxLength * 0.9) {
    counter.classList.add('danger');
  } else if (currentLength > maxLength * 0.75) {
    counter.classList.add('warning');
  }
  
  // Add ARIA live region for screen readers
  if (currentLength > maxLength * 0.9) {
    counter.setAttribute('aria-live', 'polite');
  } else {
    counter.removeAttribute('aria-live');
  }
}

// Initialize character counters
function updateAllCounters() {
  updateCharacterCounter('articleLiked', 'likedCounter', 500);
  updateCharacterCounter('articleImprovement', 'improvementCounter', 500);
  updateCharacterCounter('similarArticles', 'topicsCounter', 1000);
  updateCharacterCounter('additionalComments', 'commentsCounter', 1000);
}

// Add event listeners for character counting
document.getElementById('articleLiked').addEventListener('input', () => updateCharacterCounter('articleLiked', 'likedCounter', 500));
document.getElementById('articleImprovement').addEventListener('input', () => updateCharacterCounter('articleImprovement', 'improvementCounter', 500));
document.getElementById('similarArticles').addEventListener('input', () => updateCharacterCounter('similarArticles', 'topicsCounter', 1000));
document.getElementById('additionalComments').addEventListener('input', () => updateCharacterCounter('additionalComments', 'commentsCounter', 1000));

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Real-time email validation
document.getElementById('userEmail').addEventListener('input', function() {
  if (this.value && !isValidEmail(this.value)) {
    this.setCustomValidity('Please enter a valid email address');
  } else {
    this.setCustomValidity('');
  }
});

// Initialize counters on page load
document.addEventListener('DOMContentLoaded', updateAllCounters);