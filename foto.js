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

document.querySelectorAll('.photo').forEach(photo => {
  photo.classList.add('visible');
});

/* play lagu */
document.head.appendChild(style);

function startConfetti() {
  createConfettiPiece();
  setTimeout(startConfetti, 100);
}
startConfetti();

const audio = document.getElementById("bgMusic");
const btn = document.getElementById("playMusicBtn");


function playMusicAndHide() {
  const audio = document.getElementById("audio");
  const musicBtn = document.getElementById("musicBtn");

  audio.play(); // mainkan lagu
  musicBtn.style.display = "none"; // sembunyikan tombol

  // Simpan status bahwa tombol sudah ditekan
  sessionStorage.setItem("musicPlayed", "true");
}

window.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("musicBtn");
  const audio = document.getElementById("audio");

  // Cek apakah user sudah menekan tombol sebelumnya
  const musicPlayed = sessionStorage.getItem("musicPlayed");

  if (musicPlayed === "true") {
    musicBtn.style.display = "none";
    audio.play(); // jika user balik ke halaman, tetap play lagu
  } else {
    musicBtn.style.display = "block";
  }
});
