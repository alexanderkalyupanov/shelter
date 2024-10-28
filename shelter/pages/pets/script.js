"use strict";

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

createCards(4, ".our-friends__box", "our-friends__box--item");
createCards(0, ".our-friends__box", "our-friends__box--item");
createCards(2, ".our-friends__box", "our-friends__box--item", "item-friends");
createCards(1, ".our-friends__box", "our-friends__box--item", "item-400", "item-friends");
createCards(5, ".our-friends__box", "our-friends__box--item", "item-400", "item-friends");
createCards(7, ".our-friends__box", "our-friends__box--item", "item-400", "item-friends");
createCards(3, ".our-friends__box", "our-friends__box--item", "item-friends");
createCards(6, ".our-friends__box", "our-friends__box--item", "item-friends");
popup(".our-friends__box", ".our-friends__box--item");

