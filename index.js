const button = document.querySelector(".btn");
const navbar = document.querySelector(".toggle");
function onclick() {
  navbar.classList.toggle("visible");
}
button.addEventListener("click", onclick);
