document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.process-step');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  steps.forEach((step) => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';
    step.style.transition = 'all 0.6s ease';
    observer.observe(step);
  });
});
