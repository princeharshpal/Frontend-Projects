const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (details) => {
  gsap.to(".cursor", {
    x: details.clientX,
    y: details.clientY,
  });
});

const lenis = new Lenis({
  duration: 2,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let tl1 = gsap.timeline();

tl1.from(".logo, .right, .middle a", {
  y: -40,
  opacity: 0,
  duration: 0.7,
  delay: 1,
  stagger: 0.15,
});

tl1.from(".h1 span", {
  y: 90,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutPage",
    scroller: "body",
    start: "top 60%",
    end: "top 0%",
    scrub: 2,
  },
});

tl2.from(".profilePhoto", {
  y: -100,
  scale: 1,
  opacity: 0,
  duration: 0.8,
});

let boxes = document.querySelectorAll(".projectBox");

boxes.forEach((box) => {

  box.addEventListener("mouseenter", (details) => {
    box.childNodes[3].style.opacity = "1";
    box.addEventListener("mousemove", (details) => {
      box.childNodes[3].style.left = details.x + "px";
    });
  });

  box.addEventListener("mouseleave", (details) => {
    box.childNodes[3].style.opacity = "0";
  });
});
let path = `M 0 150 Q 750 20 1500 150`;
let finalPath = `M 0 150 Q 750 150 1500 150`;
5;
document.querySelector("svg").addEventListener("mouseenter", () => {
  console.log("entered");
  document.querySelector("svg").addEventListener("mousemove", (details) => {
    (path = `M 0 150 Q ${details.x} ${details.y} 1500 150`),
      gsap.to("svg path", {
        attr: { d: path },
      });
  });
});
document.querySelector("svg").addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.3,
    ease: "elastic.out(1,0.1)",
  });
  console.log("leaved");
});
