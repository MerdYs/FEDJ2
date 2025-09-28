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

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("hamburger-btn");
  const aside = document.querySelector("header > aside");
  const text = btn.querySelector("p");
  const icon = btn.querySelector("img");

  btn.addEventListener("click", () => {
    const isOpen = aside.classList.toggle("open");

    // Wissel tekst
    text.textContent = isOpen ? "Sluit" : "Menu";

    // Wissel icoon
    icon.src = isOpen 
    ? "./images/svg2/svgexport-33.svg"    // sluit icoon
    : "./images/svg/svgexport-16.svg"; // hamburger icoon
  });
});
