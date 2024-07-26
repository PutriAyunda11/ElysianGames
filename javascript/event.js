////////////////////////////////////////////////////////////
////////////Untuk hamburger menu di semua html /////////////////

const mToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav");

mToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

