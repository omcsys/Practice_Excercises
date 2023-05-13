export default function countdown(fecha, etiqueta, boton) {
  const d = document;
  
  let $boton = d.querySelector(boton),
    $mensaje = d.querySelector(etiqueta),
    ahora = new Date().getTime(),
    fechaABuscar = new Date(fecha).getTime(),
    dias, 
    horas,
    minutos, 
    segundos;

  var intervalo="";
  clearInterval(intervalo);

  // console.log("Boton: "+$boton.innerHTML);

  if (fechaABuscar < ahora) {
    $mensaje.innerHTML = "No puede ser una fecha pasada";
  } else {
    $boton.setAttribute("disabled", true);
    // $boton.innerHTML="Intentar otra fecha";
    intervalo = setInterval(() => {
      ahora = new Date().getTime();

      dias = Math.floor((fechaABuscar - ahora) / (1000 * 60 * 60 * 24));
      horas = (
        "0" +
        Math.floor(
          ((fechaABuscar - ahora) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
      ).slice(-2);

      minutos = Math.floor(
        (((fechaABuscar - ahora) % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) /
          (1000 * 60)
      );

      segundos = Math.floor(
        ((((fechaABuscar - ahora) % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) %
          (1000 * 60)) /
          1000
      );

      $mensaje.innerHTML = `Faltan: ${dias} dias ${horas} horas ${minutos} Minutos y ${segundos} segundos`;

      if (fechaABuscar - ahora < 0) {
        clearInterval(intervalo);
        $mensaje.innerHTML = `La cuenta regresiva ha llegado a su fin`;
        $boton.removeAttribute("disabled");
      }
    }, 1000);
  }

}
