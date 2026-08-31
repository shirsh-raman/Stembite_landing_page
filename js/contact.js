document.addEventListener('DOMContentLoaded', () => {
  // Contact form submission
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation visual feedback
      const inputs = form.querySelectorAll('.form-input, .form-textarea');
      let valid = true;

      inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
          input.style.borderColor = 'var(--stb-error)';
          valid = false;
        } else {
          input.style.borderColor = 'var(--stb-border)';
        }
      });

      if (valid) {
        // Show success message
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message Sent! ✓';
        submitBtn.style.background = 'var(--stb-green-secondary)';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          form.reset();
        }, 3000);
      }
    });
  }

  // FAQ accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    const toggleFAQ = () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.style.maxHeight;
      const expanded = !isOpen;

      document.querySelectorAll('.faq-answer').forEach(a => {
        a.style.maxHeight = null;
        a.style.padding = '0';
      });
      document.querySelectorAll('.faq-question').forEach(fq => {
        fq.setAttribute('aria-expanded', 'false');
        fq.querySelector('span').textContent = '+';
      });

      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.padding = '1rem 0';
        q.setAttribute('aria-expanded', 'true');
        q.querySelector('span').textContent = '\u2212';
      }
    };

    q.addEventListener('click', toggleFAQ);
    q.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFAQ();
      }
    });
  });
});
