const d = document;

let x = 0,
y = 0;

export default function teclado(tecla, moverbola, escenario) {
    let $moverBola = d.querySelector(moverbola),
      $escenario = d.querySelector(escenario);
    let $fondo = $escenario.getBoundingClientRect(),
      $punto = $moverBola.getBoundingClientRect();

    //   Alert con atajo de teclado
    if (tecla.key === "a" && tecla.altKey) {
      alert("Ha oprimido la opción de ¡¡¡¡ALERT!!! con el teclado");
    }

    if (tecla.key === "p" && tecla.altKey) {
      prompt(
        "Ingrese texto random, ha oprimido el atajo del ¡¡¡PROMPT!!! en el teclado"
      );
    }

    if (tecla.key === "c" && tecla.altKey) {
      confirm("Ha oprimido la opción de ¡¡¡CONFIRM!!! con el teclado");
    }

    // Evento de movimiento del punto
    switch (tecla.key) {
      case "ArrowLeft":
        if ($fondo.left < $punto.left) {
          tecla.preventDefault();
          x = x - 10;
        }
        break;
      case "ArrowRight":
        if ($fondo.right > $punto.right) {
          tecla.preventDefault();
          x = x + 10;
        }
        break;
      case "ArrowDown":
        if ($fondo.bottom > $punto.bottom) {
          tecla.preventDefault();
          y = y + 10;
        }

        break;
      case "ArrowUp":
        if ($fondo.top < $punto.top) {
          tecla.preventDefault();
          y = y - 10;
        }

        break;

      default:
        break;
    }
    $moverBola.style.transform = `translate(${x}px, ${y}px)`;
  }
