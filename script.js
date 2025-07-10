let humanScore = 0;
let computerScore = 0;
const choice = document.querySelector("#choice");
choice.addEventListener("click", (event) => {
  playRound(event.target.id);
});
const showList = document.querySelector("#show");
function getComputerChoice() {
  let num = Math.random() * 3;
  if (num < 1) {
    return "石头";
  } else if (num < 2) {
    return "剪刀";
  } else {
    return "布";
  }
}

function getHumanChoice(id) {
  switch (id) {
    case "rock":
      return "石头";
    case "scissors":
      return "剪刀";
    case "paper":
      return "布";
  }
}

function playRound(id) {
  let human = getHumanChoice(id);
  let computer = getComputerChoice();
  show(human, computer);
}

function show(human, computer) {
  //对局结束后不再处理
  if (humanScore == 5 || computerScore == 5) return;
  let mes = document.createElement("li");
  if (human === computer) {
    mes.textContent = `平局`;
  } else if (
    (human === "石头" && computer === "剪刀") ||
    (human === "剪刀" && computer === "布") ||
    (human === "布" && computer === "石头")
  ) {
    mes.textContent = `你赢了！${human}战胜了${computer}`;
    humanScore++;
  } else {
    mes.textContent = `你输了！${human}输给了${computer}`;
    computerScore++;
  }
  showList.appendChild(mes);
  //对局结束后添加 p 和 button
  if (humanScore == 5 || computerScore == 5) {
    let hit = document.createElement("p");
    hit.textContent = `你总分：${humanScore}，电脑总分：${computerScore}，你${
      humanScore == 5 ? "赢" : "输"
    }了`;
    document.body.appendChild(hit);
    let restart = document.createElement("button");
    restart.textContent = "重开";
    document.body.appendChild(restart);
    restart.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
      showList.replaceChildren();
      document.body.removeChild(hit);
      document.body.removeChild(restart);
    });
  }
}
