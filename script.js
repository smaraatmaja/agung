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
    window.addEventListener("load", function () {
      const audio = document.getElementById("audio");
      audio.play().catch((e) => {
        console.warn("Autoplay diblokir. Silakan tekan tombol 🎵 untuk memulai.");
      });
    });

