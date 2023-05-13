const w=window,
d=document,
n=navigator;

export default function responsive_slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide");
  let i = 0,
    intervalo;

  let atras = () => {
    $slides[i].classList.remove("active");
    i--;

    if (i < 0) {
      i = $slides.length - 1;
    }
    $slides[i].classList.add("active");
  };

  let adelante = () => {
    $slides[i].classList.remove("active");
    i++;

    if (i >= $slides.length) {
      i = 0;
    }
    $slides[i].classList.add("active");
  };

  let mostrar = () => {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
      adelante();
    }, 4000);
  };

  mostrar();

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      atras();
      clearInterval(intervalo);
      setTimeout(() => {
        mostrar();
      }, 20000);
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      adelante();
      clearInterval(intervalo);
      setTimeout(() => {
        mostrar();
      }, 20000);
    }
  });
}