const d = document;

export default function responsiveTester(botonProbar, botonCerrar, url,ancho,alto, formulario) {
  const $botonProbar = d.getElementById("tester"),
    $botonCerrar = d.getElementById("cerrarTester"),
    $form = d.getElementById(formulario);

  let ventana;

  // d.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   // console.log($form);

  //   if (e.target.matches(".tester")) {
  //     console.log("abrir");
  //       e.preventDefault();
  //     ventana = window.open(
  //       url,
  //       "ventana",
  //       `innerWidth=${$form.ancho.value}`,
  //       `innerHeight=${$form.alto.value}`
  //       );
  //   }
  // });

  // d.addEventListener("click", (e) => {
  //   if (e.target === $form.cerrarTester) {
  //     console.log("cerrar");
  //     ventana.close();
  //   }
  // });

  $botonProbar.addEventListener("click", (e) => {
    e.preventDefault();
    ventana = window.open(
        url,
        "ventana",
        `innerWidth=${$form.ancho.value}`,
        `innerHeight=${$form.alto.value}`
        );
    console.log(ventana);
  });

  $botonCerrar.addEventListener("click", (e) => {
    e.preventDefault();
    ventana.close();
    console.log("Cerrar");
    console.log("Valor ventana cerrar" + ventana);
  });

  //       //   if (e.target.matches(botonProbar)) {
  //       //         ventana = window.open(url);
  //       //   //    console.log(url);
  //       //   console.log("abrir");
  //       // }

  // //   if (e.target.matches(botonCerrar)) {
  // //     console.log("Cerrar");
  // //         ventana.close();
  // }
}
