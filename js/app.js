

////////////////////////////////////////////////////////////////////////////////////////

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


var rellax = new Rellax('.title-bg');




// btn = document.querySelector('.inner-program__btn');
// dop = document.querySelector('.inner-program__item-dop');


// btn.onclick = function () {
//     btn.classList.add('active');
//     dop.classList.add('active');

// }




// var swiper = new Swiper('.cases__slider', {
//     slidesPerView: 1,
//     slidesPerGroup: 1,

//     loop: true,
//     speed: 1000,
//     navigation: {
//         nextEl: '.cases__slider-next',
//         prevEl: '.cases__slider-prev',
//     },
//     breakpoints: {

//         768: {
//             slidesPerView: 2,

//             slidesPerGroup: 2,
//             spaceBetween: 100,
//         },

//     }

// });

// var swiper = new Swiper('.rev__slider', {
//     slidesPerView: 1,
//     slidesPerGroup: 1,
//     spaceBetween: 100,
//     loop: true,
//     speed: 1000,
//     navigation: {
//         nextEl: '.rev__slider-next',
//         prevEl: '.rev__slider-prev',
//     },
//     breakpoints: {

//         768: {
//             slidesPerView: 2,
//             spaceBetween: 100,
//             slidesPerGroup: 2,
//         },

//     }

// });




// var swiper = new Swiper('.points-container', {
//     autoHeight: true,
//     loop: true,
//     spaceBetween: 50,

//     simulateTouch: true,
//     speed: 700,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         dynamicBullets: true,
//     },
// });

////////////////////////////////

let header = gsap.timeline({
    scrollTrigger: {
        trigger: ".header",   // pin the trigger element while active
        start: "top center",

    }
});
if (window.innerWidth > 737) {

    header
        .from(".header__man", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
        .from(".header__text", { duration: 1.2, ease: "power4.out", opacity: 0, x: 150 }, "-=0.6")
        .from(".header__plane-mini", { duration: 1.2, ease: "power4.out", opacity: 0, x: 150 }, "-=0.6")



} else {
    header
        .from(".header__man", { duration: 1, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
        .from(".header__text", { duration: 1.2, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
        .from(".header__plane-mini", { duration: 10, ease: "power4.out", x: 750 }, "-=0.6")

}
////////////////////////////////

let about = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",   // pin the trigger element while active
        start: "0px center"


    }
});


let aboutMob = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__text",   // pin the trigger element while active
        start: "-100px center",




    }
});
if (window.innerWidth > 737) {

    about
        .from(".about__title", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
        .from(".about__text-item", { duration: 1.2, ease: "power4.out", opacity: 0, x: 50, stagger: .2 }, "-=0.6")




} else {
    about
        .from(".about__title", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

    aboutMob
        .from(".about__text-item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50, stagger: .2 }, "-=0.6")
}


////////////////////////////////


let cases = gsap.timeline({
    scrollTrigger: {
        trigger: ".cases",   // pin the trigger element while active
        start: "-100px center",
    }
});

let casesInn = gsap.timeline({
    scrollTrigger: {
        trigger: ".cases__text",   // pin the trigger element while active
        start: "top center",

    }
});


if (window.innerWidth > 737) {

    cases
        .from(".cases__title", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

    casesInn
        .from(".cases__text-item", { duration: 1.2, ease: "power4.out", opacity: 0, x: 50, stagger: .2 }, "-=0.6")


} else {
    cases
        .from(".cases__title", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")

    casesInn
        .from(".cases__text-item", { duration: 1.2, ease: "power4.out", opacity: 0, x: 50, stagger: .2 }, "-=0.6")
}


////////////////////////////////

let program = gsap.timeline({
    scrollTrigger: {
        trigger: ".program",   // pin the trigger element while active
        start: "top center",
    }
});




if (window.innerWidth > 737) {

    program
        .from(".program__title ", { duration: 1, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
        .from(".wrap-program__item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50, stagger: .3 }, "-=0.6")


} else {
    program
        .from(".program__title ", { duration: 1, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
        .from(".wrap-program__item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50, stagger: .3 }, "-=0.6")
}

////////////////////////////////


let inside = gsap.timeline({
    scrollTrigger: {
        trigger: ".inside",   // pin the trigger element while active
        start: "-100px center",

    }
});

let insideInn = gsap.timeline({
    scrollTrigger: {
        trigger: ".inside__list",   // pin the trigger element while active
        start: "-100px center",


    }
});


if (window.innerWidth > 737) {

    inside
        .from(".inside__title", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")

    insideInn
        .from(".inside__list-item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50, stagger: .2 }, "-=0.6")


} else {
    inside
        .from(".inside__title", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")

    insideInn
        .from(".inside__list-item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50, stagger: .2 }, "-=0.6")
}




////////////////////////////////

let tarif = gsap.timeline({
    scrollTrigger: {
        trigger: ".tarif",   // pin the trigger element while active
        start: "top center",
    }
});




if (window.innerWidth > 737) {

    tarif
        .from(".tarif__title", { duration: 1, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
        .from(".wrap-tarif__item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50, stagger: .3 }, "-=0.6")


} else {
    tarif
        .from(".tarif__title ", { duration: 1, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
        .from(".wrap-tarif__item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50, stagger: .3 }, "-=0.6")
}

