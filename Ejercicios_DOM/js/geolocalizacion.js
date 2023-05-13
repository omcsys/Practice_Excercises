const d = document,
  w = window,
  n = navigator;

export default function geolocalizar(id) {
const $id=d.getElementById(id),
opciones={
    enableHighAccuracy:true,
    timeout:5000,
    maximunAge: 0
};

const succes = (position) => {
  let coordenadas = position.coords;

  $id.innerHTML = `
  <p>Tu posición actual es:</p>
  <ul>
  <li>Latitud: <b>${coordenadas.latitude}</b></li>
  <li>Longitud: <b>${coordenadas.longitude}</b></li>
  <li>Precisión: <b>${coordenadas.accuracy}</b></li>
  </ul>
  <a href='https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z' target="_blank" rel="noopener">Ver en Google Maps</a>
  `;
};

const error = err=>{
    $id.innerHTML=`<p><mark>Error ${err.code}: ${err.message}</mark></p>`
};

n.geolocation.getCurrentPosition(succes, error, opciones);

// Función para hacer seguimiento a la posición, siempre que cambie
// n.geolocation.watchPosition(succes, error, opciones);


};