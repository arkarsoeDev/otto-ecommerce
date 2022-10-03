let navToggle = document.querySelector("#navToggle");
let navClose = document.querySelector("#navClose");
let backdrop = document.querySelector(".backdrop");
let mobileNav = document.querySelector(".mobile-nav");
let navTags = [navToggle, backdrop, navClose];
let body = document.querySelector("body");

// for collapse
let collapseToggles = document.querySelectorAll(".collapse-toggle");
let collapseMenus = document.querySelectorAll(".collapse-menu");

// for cartQty
let cartQtysPlus = document.querySelectorAll(".cart-qty-plus");
let cartQtysMinus = document.querySelectorAll(".cart-qty-minus");

// for collapse
function closeAllCollapse() {
    [...collapseMenus].map(function (menu) {
        menu.style.height = 0;
        menu.classList.toggle("h-0");
    });
}

navTags.map(function (tag) {
    tag.addEventListener("click", function () {
        mobileNav.classList.toggle("translate-x-0");
        mobileNav.classList.toggle("-translate-x-full");
        backdrop.classList.toggle("hidden");
        body.classList.toggle("overflow-hidden");
    });
});

// for collapse
[...collapseToggles].map(function (toggle) {
    toggle.addEventListener("click", function () {
        closeAllCollapse();
        let collapseMenu = document.querySelector(
            `.collapse-menu[data-target="${toggle.id}"]`
        );
        if (!collapseMenu.clientHeight) {
            collapseMenu.style.height = `${collapseMenu.firstElementChild.clientHeight}px`;
        } else {
            collapseMenu.style.height = 0;
        }
        collapseMenu.classList.toggle("h-0");
    });
});

// for cartQty

[...cartQtysPlus].map((cartQtyPlus) => {
    cartQtyPlus.addEventListener("click", () => {
        let target = cartQtyPlus.dataset.target;
        let cartQty = document.querySelector(`#${target}`);
        cartQty.value++;
    });
});

[...cartQtysMinus].map((cartQtyMinus) => {
    cartQtyMinus.addEventListener("click", () => {
        let target = cartQtyMinus.dataset.target;
        let cartQty = document.querySelector(`#${target}`);
        cartQty.value > "1" ? cartQty.value-- : (cartQty.value = 1);
    });
});
