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
    function toggleActive(element) {
        // Toggle the active class on the clicked button
        element.classList.toggle('active');
    }

    document.addEventListener("DOMContentLoaded", function() {
        const buttons = document.querySelectorAll('.btn-outline-secondary');
        // Ensure only the third button is active initially
        buttons.forEach((btn, index) => {
            if (index === 2) {  // Index 2 means the third button (0-based index)
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });

  