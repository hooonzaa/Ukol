function Fanta() {
    const Ukol4 = document.getElementById("Ukol4").value;
    let michas = "";
    if (Ukol4) {
      for (let i = 1; i <= Ukol4; i++) {
        michas += i + "<br>";
      }
      document.getElementById("Ukol").innerHTML = michas;
    }
  }
   