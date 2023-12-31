const video = document.getElementById("cam");

video.addEventListener("click", () => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // function 의 this와 화살표 함수의 this 가 다름
        console.log(1);
        video.srcObject = stream;
      })
      .catch(function (error) {
        console.log("Something went wrong!");
        console.log(error);
        return;
      });
  }

  video.addEventListener("loadedmetadata", () => {
    const map = document.getElementById("map");
    map.width = video.videoWidth;
    map.height = video.videoHeight;

    map.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  });

  function draw(t) {
    const map = document.getElementById("map");
    map.width = video.videoWidth;
    map.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.translate(video.videoWidth, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  }
});
