const decisions = [
      "Ngoding Tanpa Duduk (1 Jam).",
      "Bikin Web Pakai Emoji Doang.",
      "Buat Website dari Mimpi.",
      "Ngobrol Sama Batu.",
      "Tanya ke Google: 'Kenapa ayam menyeberang jalan?'",
      "Ngomong Pakai Lirik Lagu selama 1 jam.",
      "Telepon Teman, Tanya 'Mau beli rumah nggak?' Tanpa Penjelasan.",
      "Coba minum air putih sebanyak 2 liter hari ini.",
      "Ucapkan 'terima kasih' ke 3 orang secara random.",
      "Berbicara Full Bahasa Inggris Palsu 5 Menit."
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