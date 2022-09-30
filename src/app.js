let navToggle = document.querySelector('#navToggle');
let navClose = document.querySelector("#navClose");
let backdrop = document.querySelector('.backdrop');
let mobileNav = document.querySelector('.mobile-nav')
let navTags = [navToggle, backdrop, navClose];

navTags.map(function (tag) {
   tag.addEventListener('click', function() {
   mobileNav.classList.toggle('translate-x-0');
   mobileNav.classList.toggle('-translate-x-full');
   backdrop.classList.toggle('hidden');
})
})