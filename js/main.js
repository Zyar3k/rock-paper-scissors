const rock = 'kamień';
const paper = 'papier';
const scissors = 'nożyce';
let player = 0;
let computer = 0;

function computerChoice() {
  const number = Math.floor(Math.random() * 3);
  const permittedMove = [rock, paper, scissors];
  return permittedMove[number];
};

function displayResult(computerMove, playerMove) {
  printMessage("Zagrałem " + computerMove + ", a Ty " + playerMove);

  if(computerMove === playerMove) {
    printMessage('Remis! Niesamowite!!');
  } else if (
    (computerMove === paper && playerMove === scissors) ||
    (computerMove === scissors && playerMove === rock) ||
    (computerMove === rock && playerMove === paper)
  ) {      
    printMessage("Ty wygrywasz!");
    addPoint("Player point");
  } else {
    printMessage('Ty przegrywasz!');
    addPoint("Computer point");
  }
};

function addPoint(score) {

  if (score === "Player point") {
    let playerScore = document.getElementById('player-score');
    player = player + 1;
    playerScore.innerHTML = player;
  } else if (score === "Computer point") {
    let compScore = document.getElementById('computer-score');
    computer = computer + 1;
    compScore.innerHTML = computer;
  }
};

function playGame(playerMove) {
  clearMessages();
  const computerMove = computerChoice();
  displayResult(computerMove, playerMove);
};

function printMessage(msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

document.getElementById('play-rock').addEventListener("click", function () {
  playGame(rock);
});
document.getElementById('play-paper').addEventListener("click", function () {
  playGame(paper);
});
document.getElementById('play-scissors').addEventListener("click", function () {
  playGame(scissors);
});