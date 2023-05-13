export default function relojes(parrafo, archivoSonoro, iniciaReloj, detieneReloj, iniciaAlarma, detieneAlarma, botones) {
  const d = document;

  let temporizador;
  const $alarm = d.createElement("audio");
  $alarm.src = "assets/alarma.mp3";
  $alarm.setAttribute("loop", true);

  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciaReloj)) {
      temporizador = setInterval(() => {
        let fecha = new Date().toLocaleTimeString();
        d.querySelector(parrafo).innerHTML = fecha;
      }, 1000);
      d.querySelector(iniciaReloj).setAttribute("disabled", true);
      // modo Jonmircha
      // e.target.disabled = true;
    }

    if (e.target.matches(detieneReloj)) {
      clearInterval(temporizador);
      d.querySelector(parrafo).innerHTML = "";
      d.querySelector(iniciaReloj).removeAttribute("disabled");
      // modo Jonmircha
      // d.querySelector(iniciaReloj).disabled = false;
    }

    if (e.target.matches(iniciaAlarma)) {
      $alarm.play();
      // Modo hecho por mí
      // d.querySelector(archivoSonoro).play();
      d.querySelector(parrafo).innerHTML = "Sonando Alarma";
      d.querySelector(iniciaAlarma).setAttribute("disabled", true);
    }

    if (e.target.matches(detieneAlarma)) {
      $alarm.pause();
      $alarm.currentTime = 0;
      // Modo hecho por mí
      // d.querySelector(archivoSonoro).pause();
      // d.querySelector(archivoSonoro).currentTime=0;
      d.querySelector(parrafo).innerHTML = "";
      d.querySelector(iniciaAlarma).removeAttribute("disabled");
    }
  });
}
