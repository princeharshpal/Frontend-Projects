const menuIcon = document.querySelector(".navbar i");
const closeIcon = document.querySelector(".close");

const tl = gsap.timeline();
tl.to(".sidebar", {
  right: "0%",
  opacity: 1,
});

tl.to("h1", {
  x: -20,
  opacity: 1,
  duration: 0.5,
  stagger: 0.2,
});

gsap.to(".sidebar", {
  right: "-30%",
});

tl.pause();
menuIcon.addEventListener("click", () => {
  tl.play();
});

closeIcon.addEventListener("click", () => {
  tl.reverse();
});
