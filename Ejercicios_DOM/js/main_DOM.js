import countdown from "./countdown.js";
import darkNLight from "./dark_light_mode.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import webCam from "./deteccion_webcam.js";
import aleatorio from "./elemento_aleatorio.js";
import teclado from "./eventos_teclado.js";
import filtrarImagenes from "./filtrar_imagenes.js";
import geolocalizar from "./geolocalizacion.js";
import menuHamburguesa from "./menu_Hamburguesa.js";
import narrador from "./narrador.js";
import networkStatus from "./net_detection.js";
import responsiveMedia from "./objeto_responsive.js";
import relojes from "./relojes.js";
import responsive_slider from "./responsive_slider.js";
import responsiveTester from "./responsive_tester.js";
import scrollSpy from "./scroll_spy.js";
import scrollTopButton from "./scroll_top_button.js";
import contactFormValidation from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menuHamburguesa(".panel-btn", ".panel", ".menu a");

  relojes(
    ".reloj",
    ".alarma",
    ".inicia-reloj",
    ".detiene-reloj",
    ".inicia-alarma",
    ".detiene-alarma",
    ".botones-relojes"
  );

  scrollTopButton(".scroll_top");
  
  responsiveMedia(
    "video",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/WM8bTdBs-cw" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/WM8bTdBs-cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "mapa",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/WM8bTdBs-cw" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25422314.472063176!2d153.75508085410127!3d-38.93974873400565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNueva%20Zelanda!5e0!3m2!1ses!2sco!4v1682976447346!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester(
    ".tester",
    "cerrarTester",
    d.querySelector(".URL").value,
    d.querySelector(".ancho").value,
    d.querySelector(".alto").value,
    "responsive-tester"
  );

userDeviceInfo("user-device");

webCam("webcam");

geolocalizar("geolocation");

filtrarImagenes("filtrar", ".cards figure", "esconder");

aleatorio(
  ".aleatorio",
  "listaElementos",
  ".muestraElemento",
  ".agregar",
  "textoELemento",
  ".eliminar"
);

responsive_slider();

scrollSpy();

smartVideo();

contactFormValidation();


});

// Programación para el botón del tema claro u oscuro, fuera del DOMcontentLoaded para que pueda guardar en localStorage
darkNLight(".dark_n_light", "[dark-mode]", "light_mode");
// darkNLight(".dark_n_light", "body_light");


// Evento para el ejercicio de mover la bola
d.addEventListener("keydown", (e) => {
  teclado(e, ".punto", ".fondo");
  
});

// Evento para el ejercicio de la cuenta regresiva
  d.querySelector(".BotonCuentaRegresiva").onclick = () => {
    if (d.querySelector(".fecha").value === "") {
      alert("No ha seleccionado ninguna fecha");
    } else {
      countdown(d.getElementById("horaAFijar").value,".countdown",".BotonCuentaRegresiva");
    }
  };

  networkStatus();


  narrador();