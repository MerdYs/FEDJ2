document.querySelectorAll("main > section").forEach(section => {
  const video = section.querySelector(":scope > video");
  const button = section.querySelector(":scope > button:last-of-type");

  if (!video || !button) return;

  button.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      button.querySelector("img").src = "./images/svg/svgexport-22.svg";
    } else {
      video.pause();
      button.querySelector("img").src = "./images/svg/svgexport-23.svg";
    }
  });
});
