document.addEventListener('DOMContentLoaded', () => {
  // Filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card-lg');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');

      const filter = btn.dataset.filter;

      productCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // FAQ accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    const toggleFAQ = () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.style.maxHeight;
      const expanded = !isOpen;

      // Close all
      document.querySelectorAll('.faq-answer').forEach(a => {
        a.style.maxHeight = null;
        a.style.padding = '0';
      });
      document.querySelectorAll('.faq-question').forEach(fq => {
        fq.setAttribute('aria-expanded', 'false');
        fq.querySelector('span').textContent = '+';
      });

      // Open clicked if it was closed
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
