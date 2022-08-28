window.onscroll = function () { myFunction() };
var hero = document.getElementById("hero");
var header = document.getElementById("header");
var menu = document.getElementById('mobile-menu')
function myFunction() {
    if (window.pageYOffset > 1.4 * header.offsetHeight) {
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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleSeeMore(elementId) {
    let element = document.getElementById(`${elementId}`);
    let button = document.getElementsByClassName(`${elementId}`)
    if (button[0].innerHTML.toUpperCase() == 'Show Details'.toUpperCase()) {
        button[0].innerHTML = 'Hide Details'
    } else {
        button[0].innerHTML = 'Show Details'
    }
    element.classList.toggle('hidden')
}


// share website handler
const shareData = {
    title: 'Navritih NirmanN',
    text: 'Make your dreams Come true...',
    url: window.location.href
}

const btn = document.getElementById('share-button');

btn.addEventListener('click', async () => {
    try {
        await navigator.share(shareData);
    } catch (err) {
        alert('Something went wrong while sharing!')
    }
});