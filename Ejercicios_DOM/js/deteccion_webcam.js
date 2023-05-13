const d = document,
  n = navigator,
  w = window;
export default function webCam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
          $video.insertAdjacentHTML(
            "beforebegin",
            `<p><mark>Sucedió el siguiente error: ${err}</mark></p>`
          );
    }
      );
  }
}