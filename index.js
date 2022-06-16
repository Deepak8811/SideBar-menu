const menuToggle = document.querySelector(".menuToggle");
const nevigation = document.querySelector(".nevigation");

menuToggle.onclick = function () {
  nevigation.classList.toggle("open");
}
