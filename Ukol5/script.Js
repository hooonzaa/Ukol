function Fanta() {
    const Ukol5 = document.getElementById("Ukol5").value;
    let michas = "";
    if (Ukol5) {
      for (let i = 1; i <= Ukol5; i++) {
        for (let j = 2; j <= Ukol5; j++) {
          if (i % j === 0) {
            michas += (i / j) + "<br>";
          }
        }
      }
      document.getElementById("Ukol").innerHTML = michas;
    }
  }