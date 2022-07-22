
const menuBtn = document.querySelector(".menu-icon");
const navMedia = document.querySelector(".nav-link");
const navItems = document.querySelector(".nav-link_items");



menuBtn.addEventListener( "click", () => {

    menuBtn.classList.toggle("active");
    navMedia.classList.toggle("active");
    navItems.classList.toggle("active");
});


