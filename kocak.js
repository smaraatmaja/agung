const decisions = [
      "baca no.1.",
      "baca no.2.",
    ];

    let timerInterval;
    let preCountdownInterval;

    function handleStart() {
      document.getElementById("startBtn").disabled = true;
      resetDecision(true); // true artinya: jangan aktifkan tombol saat reset
      let countdown = 3;
      document.getElementById("decision").innerText = `Mulai dalam ${countdown}...`;

      preCountdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          document.getElementById("decision").innerText = `Mulai dalam ${countdown}...`;
        } else {
          clearInterval(preCountdownInterval);
          startChallenge();
        }
      }, 1000);
    }

    function startChallenge() {
      const randomIndex = Math.floor(Math.random() * decisions.length);
      document.getElementById("decision").innerText = decisions[randomIndex];
      startTimer(300); // 5 menit
    }

    function resetDecision(skipEnable = false) {
      clearInterval(timerInterval);
      clearInterval(preCountdownInterval);
      document.getElementById("decision").innerText = "Klik tombol \"Mulai\" untuk menentukan tantanganmu!";
      document.getElementById("timer").innerText = "Waktu: -";
      if (!skipEnable) {
        document.getElementById("startBtn").disabled = false;
      }
    }

    function goBack() {
      window.history.back();
    }

    function startTimer(durationInSeconds) {
      let timeLeft = durationInSeconds;

      timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById("timer").innerText =
          `Waktu: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          document.getElementById("timer").innerText = "⏰ Waktu habis!";
          alert("⏱️ Waktu habis! Tantangan harus sudah selesai 😅");
          document.getElementById("startBtn").disabled = false;
        }

        timeLeft--;
      }, 1000);
    }
    /* play lagu */
window.addEventListener("load", function () {
  const audio = document.getElementById("audio");
  audio.play().catch((e) => {
    console.warn("Autoplay diblokir. Silakan tekan tombol 🎵 untuk memulai.");
  });
});
