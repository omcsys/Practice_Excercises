const d = document,
  n = navigator,
  w = window;

export default function aleatorio(boton, lista, etiqueta, agregarElemento, textoAAgregar, eliminarNodo) {
  let $boton = d.querySelector(boton),
    $lista = d.getElementById(lista),
    $etiqueta = d.querySelector(etiqueta),
    $agregarELemento = d.querySelector(agregarElemento),
    $textoAAgregar,
    items = $lista.getElementsByTagName("li"),
    intervalo,
    hijo,
    textoHijo,
    $eliminarNodo= d.querySelector(eliminarNodo);

    
    $boton.addEventListener("click", (e) => {
    let cont = 0;
    if (cont === 0) {
      intervalo = setInterval(() => {
        $etiqueta.innerHTML = items[Math.floor(Math.random() * items.length)].textContent;
        cont++;
        if (cont === items.length * 5) {
          clearInterval(intervalo);
        }
      }, 20);
    }
});

$agregarELemento.addEventListener("click", e=>{
    hijo = d.createElement("li");
    $textoAAgregar = d.getElementById(textoAAgregar).value;
    textoHijo = d.createTextNode($textoAAgregar);
    hijo.appendChild(textoHijo)
    $lista.appendChild(hijo);

});


$eliminarNodo.addEventListener("click", e=>{
    $lista.lastElementChild.remove();
});


}
