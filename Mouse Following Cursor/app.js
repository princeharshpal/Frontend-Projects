let main = document.querySelector(".main");

main.addEventListener("mousemove", (details) => {
  document.querySelector(".cursor").style.left = details.clientX+"px";
  document.querySelector(".cursor").style.top = details.clientY+"px";
});
