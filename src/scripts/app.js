const menuBurger = document.querySelector(".menu__burger");
const menu = document.querySelector(".menu__list");
const menuElem = document.querySelectorAll(".menu__el");
const btnSuivant = document.querySelectorAll("[data-nav]");
const main = document.querySelector(".main");

console.log(menuElem);
menuBurger.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
});

// Reset de la classe .next pour les éléments de nav
for (const element of menuElem) {
  element.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      menu.classList.toggle("menu--open");
      menuElem.forEach((onglet) => {
        onglet.children[0].classList.remove("next");
      });
      event.target.classList.add("next");
    }
  });
}

function resetNextClass(index) {
  menuElem.forEach((onglet) => {
    onglet.children[0].classList.remove("next");
  });
  menuElem[index].children[0].classList.add("next");
}
// Synchro de la Nav
for (const btn of btnSuivant) {
  btn.addEventListener("click", (e) => {
    let pageToGo = +e.target.dataset.nav;
    resetNextClass(pageToGo);
  });
}

// Synchro nav horizontal scroll
let currentPage = 0;
let windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
});

window.addEventListener("mousemove", () => {
  let scrolledDistance = main.scrollLeft;
  currentPage = Math.round(scrolledDistance / windowWidth);
  resetNextClass(currentPage);
});