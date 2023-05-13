const d= document,
w = window;

export default function responsiveMedia(id, mq, contenidoMovil, contenidoEscritorio){
let breakPoint = w.matchMedia(mq);
// console.log(breakPoint);
const responsive = (e) =>{
    if (e.matches){
        d.getElementById(id).innerHTML=contenidoEscritorio;
    } else{
        d.getElementById(id).innerHTML=contenidoMovil;
    }
}
breakPoint.addEventListener("change", responsive);
responsive(breakPoint);
}