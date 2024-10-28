"use strict"

import createCards from "../../assets/modules/createCards/createCards.js";
import popup from "../../assets/modules/Popup/popup.js";

const burgerMenu = document.querySelector(".burger-menu"),
     headerNav = document.querySelector(".header-nav"),
     headerList = document.querySelector(".header-list")

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-active")
    headerNav.classList.toggle("header-nav-active")
    document.body.classList.toggle("body-active")
})

document.addEventListener("click", (e) => {
    if (!headerNav.contains(e.target) && !burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove("burger-active");
        headerNav.classList.remove("header-nav-active");
        document.body.classList.remove("body-active");
    }
});

headerList.addEventListener("click", (e) => {
    const headerListItem = document.querySelector(".header-list__item")
    if (!headerListItem.contains(e.target)) {
        burgerMenu.classList.remove("burger-active");
        headerNav.classList.remove("header-nav-active");
        document.body.classList.remove("body-active");
    }
})

console.log(`Реализация burger menu на обеих страницах: 26/26 + \n Реализация попап на обеих страницах: 12/12`)

createCards(0, ".card__container", "our-friend__box--item");
createCards(4, ".card__container", "our-friend__box--item");
createCards(2, ".card__container", "our-friend__box--item");
popup(".card__container", ".our-friend__box--item");

