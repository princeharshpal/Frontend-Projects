let score = 0;

function addBoxes() {
  for (let i = 1; i <= 102; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerText = Math.floor(Math.random() * 10);
    document.querySelector(".bottem").appendChild(box);
  }
}

function printScore() {
  let bottem = document.querySelector(".bottem");
  bottem.innerHTML = `<div class="score">
                <h2>Game over!</h2>
                <h3>Your Score is ${score}</h3>
                <div class="restart">
                    <h1>Restart</h1>
                </div>
            </div>`;
  document.querySelector(".restart").addEventListener("click", () => {
    location.reload();
  });
}

function runTimer() {
  let time = 60;
  let timer = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector(".timerBox").textContent = time;
    } else {
      clearInterval(timer);
      document.querySelector(".bottem").innerHTML = "";
      printScore();
    }
  }, 1000);
}

function getNewHit() {
  let rand = Math.floor(Math.random() * 10);
  document.querySelector(".hitBox").innerText = rand;
}

function updateScore() {
  score += 10;
  document.querySelector(".scoreBox").textContent = score;
}

addBoxes();
getNewHit();
runTimer();

document.querySelector(".bottem").addEventListener("click", (e) => {
  let hit = Number(document.querySelector(".hitBox").textContent);
  let clicked = Number(e.target.textContent);

  if (clicked === hit) {
    updateScore();
    document.querySelector(".bottem").innerHTML = "";
    addBoxes();
    getNewHit();
  }
});
