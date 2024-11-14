let boxes = document.querySelectorAll(".boxes");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.addEventListener("mousemove", (cordinates) => {
      box.childNodes[3].style.left = cordinates.x + "px";
    //   box.childNodes[3].style.top = cordinates.y + "px";
    });
    box.childNodes[3].style.opacity = 1;
    // console.log("entered");
});
box.addEventListener("mouseleave", () => {
    box.childNodes[3].style.opacity = 0;
    // console.log("leaved");
  });
});
