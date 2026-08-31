document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline__item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.2 });

  timelineItems.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = i % 2 === 0 ? 'translateX(-20px)' : 'translateX(20px)';
    item.style.transition = 'all 0.5s ease';
    observer.observe(item);
  });
});
