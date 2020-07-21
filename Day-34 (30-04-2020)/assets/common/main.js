$('.banner-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 2,
            nav: true,
            loop: true
        }
    }
})

$('.categories .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
})

$('.features .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
})

$('.blogs .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 2,
            nav: true,
            loop: true
        }
    }
})

$('.logo-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 5,
            nav: true,
            loop: true
        }
    }
})