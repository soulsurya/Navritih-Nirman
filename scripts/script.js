window.onscroll = function () { myFunction() };
var hero = document.getElementById("hero");
var header = document.getElementById("header");
var menu = document.getElementById('mobile-menu')
function myFunction() {
    if (window.pageYOffset > header.offsetHeight) {
        header.classList.add("make-sticky");
        header.classList.remove("header-bg");
    } else {
        header.classList.remove("make-sticky");
        header.classList.add("header-bg");
    }
}
function toggleMenu() {
    menu.classList.toggle('hidden')
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
    },
    loop: true,
});
function scrollToTop() {
    console.log('inside function')
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}