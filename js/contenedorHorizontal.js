gsap.registerPlugin(ScrollTrigger)

let contenedores = gsap.utils.toArray(".proyecto-container")

let scrollHorizontal = gsap.to(contenedores, {
    xPercent: -100 * (contenedores.length - 1),
    ease: "none",

    scrollTrigger: {
        trigger: ".proyectos",
        pin: true, 
        scrub: 0.1,
        start: "top top",
        end: "+=3000"
    }
})


gsap.utils.toArray(".aparecer").forEach(elem => {

    gsap.to(elem, {
        opacity: 1,
        ease: "none",

        scrollTrigger: {
            trigger: elem,
            containerAnimation: scrollHorizontal,
            start: "center 90%",
            end: "center 60%",
            scrub: true
        }
    })
})