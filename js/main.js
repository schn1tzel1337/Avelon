// nav icon
const navBtn = document.querySelector(".nav__toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".header__top");
navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon--active");
};
