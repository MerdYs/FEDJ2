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

const nav = document.querySelector("header nav:nth-of-type(2)");
  const btn = nav.querySelector("button");

  btn.addEventListener("click", () => {
    const open = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", !open);
});

  const toggleBtn = document.getElementById("menu-toggle");
  const mainMenu = document.getElementById("main-menu");

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    mainMenu.classList.toggle("open");
  });