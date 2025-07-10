let humanScore = 0;
let computerScore = 0;
playGame();
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

function getHumanChoice() {
  return prompt("请出拳");
}

function playRound() {
  let human = getHumanChoice();
  let computer = getComputerChoice();
  if (human === computer) {
    console.log(`平局`);
  } else if (
    (human === "石头" && computer === "剪刀") ||
    (human === "剪刀" && computer === "布") ||
    (human === "布" && computer === "石头")
  ) {
    console.log(`你赢了！${human}战胜了${computer}`);
    humanScore++;
  } else {
    console.log(`你输了！${human}输给了${computer}`);
    computerScore++;
  }
}

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  console.log(`computer:${computerScore}分，你:${humanScore}分`);
  if (computerScore > humanScore) {
    console.log("你输了");
  } else if (computerScore < humanScore) {
    console.log("你赢了");
  } else {
    console.log("平局");
  }
}
