const w = window,
  d = document,
  n = navigator;

export default function filtrarImagenes(cajaTexto, imagenes, clase) {
  const $filtrar = d.getElementById(cajaTexto),
    $section = d.querySelectorAll(imagenes);

  $filtrar.addEventListener("keyup", (e) => {
    $section.forEach((el) => {
      if (el.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
        el.classList.remove(clase);
      } else {
        el.classList.add(clase);
      }
    });
  });
}
