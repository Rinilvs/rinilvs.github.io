const square = document.getElementById("square");
const navbar = document.getElementById("navbar");

square.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
