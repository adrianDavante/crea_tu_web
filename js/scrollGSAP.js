gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let smoother = ScrollSmoother.create({
  smooth: 4, 
  effects: true
});

const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault()
        const target = link.getAttribute("href")
        smoother.scrollTo(target, true, "top 100px")
    })
})