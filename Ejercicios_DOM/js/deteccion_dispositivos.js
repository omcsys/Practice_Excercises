const d=document,
n=navigator,
ua=n.userAgent;

export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
      isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
          return this.android() || this.ios() || this.windows();
        },
      },
      isDektop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
          return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
          chrome: () => ua.match(/chrome/i),
          safari: () => ua.match(/safari/i),
          firefox: () => ua.match(/firefox/i),
          opera: () => ua.match(/opera|opera mini/i),
          ie: () => ua.match(/insie|iemobile/i),
          edge: () => ua.match(/edge/i),
          any: function () {
            return (
              this.chrome() ||
              this.safari() ||
              this.firefox() ||
              this.opera() ||
              this.ie() ||
              this.edge()
            );
        },

      };

$id.innerHTML = `<ul>
<li>User Agent<b> ${ua}<b></li>
<li>Plataforma<b> ${isMobile.any() ? isMobile.any():isDektop.any()}<b></li>
<li>Navegador<b> ${isBrowser.any() ? isBrowser.any():isBrowser.any()}<b></li>`;


if (isBrowser.chrome()) {
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en Chrome</mark></p>`
}
if (isBrowser.firefox()) {
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en Firefox</mark></p>`
}
if (isBrowser.edge()) {
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en Microsoft Edge</mark></p>`
}
if (isBrowser.safari()&& !(isBrowser.chrome())) {
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en  Safari</mark></p>`
}
    

// redirecciones
// if (isMobile.android()){
// window.location.href="https://www.google.com";
// }

}