// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => lightbox.classList.remove('active'));

// Filter
const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const cat = btn.dataset.filter;

  document.querySelectorAll('.photo').forEach(p => {
    p.style.display = (cat === 'all' || p.dataset.category === cat) ? 'block' : 'none';
  });
}));

// Fade-in on scroll
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, options);

document.querySelectorAll('.photo').forEach(p => observer.observe(p));
