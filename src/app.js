let navToggle = document.querySelector("#navToggle");
let navClose = document.querySelector("#navClose");
let backdrop = document.querySelector(".backdrop");
let mobileNav = document.querySelector(".mobile-nav");
let navTags = [navToggle, backdrop, navClose];
let body = document.querySelector("body");

// for collapse
let collapseToggles = document.querySelectorAll(".collapse-toggle");
let collapseMenus = document.querySelectorAll(".collapse-menu");

// Product image
let mainImage = document.querySelector(".main-image");
let sideImages = document.querySelectorAll(".side-image");

// for qty
let qty = document.querySelector("#qty");
let qtyPlus = document.querySelector("#qtyPlus");
let qtyMinus = document.querySelector("#qtyMinus");

// for description and reviews
let description = document.querySelector("#description");
let reviews = document.querySelector("#reviews");
let writeReview = document.querySelector("#writeReview");
let descriptionToggle = document.querySelector("#descriptionToggle");
let reviewsToggle = document.querySelector("#reviewsToggle");
let writeReviewToggle = document.querySelector("#writeReviewToggle");

let productInfos = [description, reviews, writeReview];
let productInfoToggles = [descriptionToggle, reviewsToggle, writeReviewToggle];


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

// for product image
[...sideImages].map((sideImage) => {
    sideImage.addEventListener("click", function () {
        mainImage.src = sideImage.src;
    });
});

// for Qty
qtyPlus.addEventListener("click", () => {
    qty.value++;
});

qtyMinus.addEventListener("click", () => {
    qty.value !== "0" ? qty.value-- : (qty.value = 0);
});

// for description and reviews
productInfoToggles.map((productInfoToggle) => {
    productInfoToggle.addEventListener('click', function () {
        let target = productInfoToggle.getAttribute('data-target');
        productInfos.map((productInfo) => {
            if (productInfo.id === target) {
                let openedContent = document.querySelector('.product-info[data-open="true"]');
                let openedToggle = document.querySelector('.product-info-toggle[data-open="true"]');
                openedContent.classList.add('hidden');
                openedContent.dataset.open = 'false';
                openedToggle.classList.remove('bg-gray-300');
                openedToggle.dataset.open = 'false';

                productInfo.classList.remove('hidden');
                productInfo.dataset.open = 'true';
                productInfoToggle.classList.add("bg-gray-300");
                productInfoToggle.dataset.open = 'true';
            }
        })
    })
})