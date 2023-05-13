export default function scrollTopButton(boton_scroll) {
  const d = document,
    w = window;

  let $boton = d.querySelector(boton_scroll);

  d.addEventListener("scroll", (e) => {
    if (window.scrollY > 650) {
      $boton.classList.remove("oculto");
    } else {
      $boton.classList.add("oculto");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(boton_scroll)) {
        w.scrollTo({
            behavior: "smooth",
            top:0,
            left:0
        })
    //   document.documentElement.scrollTop = 0;
    }
  });
}
