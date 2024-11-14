let userSeq = [];
let gameSeq = [];
let highestScore = 0;
const btn = ["red", "green", "blue", "yellow"];

let level = 0;
let started = false;

let boxContainer = document.querySelector(".boxContainer");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btnBox");

function checkSeq(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 500);
    document.createElement("h1");
    h2.innerHTML = `Game Over! you loose <br> Your Score is <b> ${level} </b> <br> Press any Key to Start the Game`;
    h1.innerHTML = `<b>The Highest Score is ${highestScore}</b>`;
    boxContainer.appendChild(h1);
    resetGame();
  }
}

function btnPressed() {
  let btn = this;
  btnFlash(btn);
  let userColor = this.id;
  userSeq.push(userColor);
  checkSeq(userSeq.length - 1);
}

for (btnBox of allBtns) {
  btnBox.addEventListener("click", btnPressed);
}

function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  if (level > highestScore) {
    highestScore = level;
  }
  h2.innerText = `Level ${level}`;

  let randInx = Math.floor(Math.random() * 4);
  let randColor = btn[randInx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
}

document.addEventListener("keypress", () => {
  if (!started) {
    started = true;
    console.log("game started");
    levelUp();
  }
});

function resetGame() {
  userSeq = [];
  gameSeq = [];
  started = false;
  level = 0;
}
