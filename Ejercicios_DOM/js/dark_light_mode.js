export default function darkNLight(boton, tema, clase) {
  const d = document,
    $boton = d.querySelector(boton),
    $selectores = d.querySelectorAll(tema);

    const modoClaro = () => {
      $boton.classList.remove("dark");
      $selectores.forEach((element) => {
        element.classList.remove(clase);
      });
      localStorage.setItem("tema", "claro");
    };
    const modoOscuro = () => {
      $boton.classList.add("dark");
      $selectores.forEach((element) => {
        element.classList.add(clase);
      });
      localStorage.setItem("tema", "oscuro");
    };

    d.addEventListener("click", (e) => {
      if (e.target.matches(boton)) {
        if (e.target.matches(".dark")) {
          modoClaro();
        } else {
          modoOscuro();
        }
      }
    });

  d.addEventListener("DOMContentLoaded", (e) => {
    // alert("Dark Light");
    if (localStorage.getItem("tema") === null)localStorage.setItem("tema", "claro");
    if (localStorage.getItem("tema") === "claro")modoClaro();
    if (localStorage.getItem("tema") === "oscuro")modoOscuro();
  });
}
