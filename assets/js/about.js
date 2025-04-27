// counter.js - Animate Counters on About Page

document.addEventListener('DOMContentLoaded', () => {
  const counters = [
    { id: 'animalsCount', end: 10000 },
    { id: 'speciesCount', end: 5000 },
    { id: 'readersCount', end: 1000000 }
  ];

  const speed = 200; // Lower = faster

  function animateCounter(id, endValue) {
    const element = document.getElementById(id);
    let start = 0;
    const increment = endValue / speed;

    const updateCounter = () => {
      start += increment;
      if (start < endValue) {
        element.innerText = Math.floor(start);
        requestAnimationFrame(updateCounter);
      } else {
        element.innerText = endValue.toLocaleString();
      }
    };

    updateCounter();
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => animateCounter(counter.id, counter.end));
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector('.counters'));
});
