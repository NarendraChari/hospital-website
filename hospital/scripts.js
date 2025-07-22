document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (navUl) {
                navUl.classList.toggle('active');
            }
        });
    }
});

// Scroll Animation
function revealOnScroll() {
    const fadeEls = document.querySelectorAll('.fade-in, .slide-up');
    const windowHeight = window.innerHeight;
    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Page Transition Animation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.target === '_blank' || this.href.startsWith('mailto:')) return;
        e.preventDefault();
        document.body.classList.remove('visible');
        setTimeout(() => {
            window.location = this.href;
        }, 400);
    });
});
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => document.body.classList.add('visible'), 50);
});

// Form Focus Animation
const formInputs = document.querySelectorAll('form input, form select, form textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// Testimonial Carousel
document.addEventListener('DOMContentLoaded', function () {
    const testimonialSlider = new Swiper('.testimonial-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
}); 