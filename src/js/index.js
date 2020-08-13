window.addEventListener("load", init());

const loader = document.querySelector(".loader");
const main = document.querySelector(".main-container");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

      main.style.overflow = "visible";
      main.style.display = "block"
    main.style.height = "auto";
    main.style.opacity = 1;
  }, 2000);
}
