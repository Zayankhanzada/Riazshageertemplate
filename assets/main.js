var swiper = new Swiper('.firstswiper', {
    slidesPerView: 1,
    loop: false,
    initialSlide: 0,
    centeredSlides: false,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.previous',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar', // Use 'progressbar' for a slider-type pagination
    },

});
// form section buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('active');
        });
    });
});

  