// nav icon
const navBtn = document.querySelector(".nav__toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".header__top");
const filterBtn = document.querySelector(".filter__btn");
const filterList = document.querySelector(".filters-items");
const closeBtn = document.querySelector(".cross");
const sortingBtn = document.querySelector(".sorting__btn");
const sortingList = document.querySelector(".sorting__row");
navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon--active");
};
filterBtn.onclick = function () {
  filterList.style.display = "block";
  filterList.classList.add("filters--mobile");
};
closeBtn.onclick = function () {
  filterList.classList.remove("filters--mobile");
  filterList.style.display = "none";
};
sortingBtn.onclick = function () {
  sortingList.style.display = "block";
  sortingList.classList.add("filters--mobile");
};
closeBtn.onclick = function () {
  sortingList.classList.remove("filters--mobile");
  sortingList.style.display = "none";
};
