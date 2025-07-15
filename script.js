const confettiContainer = document.getElementById('confetti');

  function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = Math.random() * 10 + 7 + 'px';
    confetti.style.height = confetti.style.width;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-20px';
    confetti.style.opacity = Math.random();
    confetti.style.borderRadius = '3px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.animation = `fall ${3 + Math.random() * 2}s linear forwards`;
    confettiContainer.appendChild(confetti);

    confetti.addEventListener('animationend', () => confetti.remove());
  }

  const style = document.createElement('style');
  style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(110vh) rotate(360deg);
      opacity: 0;
    }
  }
  `;
  document.head.appendChild(style);

  function startConfetti() {
    createConfettiPiece();
    setTimeout(startConfetti, 100);
  }
  startConfetti();

/* play lagu */
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

