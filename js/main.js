const rock = 'kamień';
const paper = 'papier';
const scissors = 'nożyce';
let player = 0;
let computer = 0;

function computerChoice() {
  const number = Math.floor(Math.random() * 3);
  const permittedMove = [rock, paper, scissors];
  let comOpt;
  if(permittedMove[number] === rock){
    comOpt = document.getElementById('comp-rock');
    comOpt.classList.add('active');
  } else if (permittedMove[number] === paper){
    comOpt = document.getElementById('comp-paper');
    comOpt.classList.add('active');
  } else if(permittedMove[number] === scissors){
    comOpt = document.getElementById('comp-scissors');
    comOpt.classList.add('active');
  }
  return permittedMove[number];
};

function displayResult(computerMove, playerMove) {

  if(computerMove === playerMove) {
    printMessage('Remis :O');
  } else if (
    (computerMove === paper && playerMove === scissors) ||
    (computerMove === scissors && playerMove === rock) ||
    (computerMove === rock && playerMove === paper)
  ) {      
    printMessage('Gratulacje! Wygrałeś!!!');
    addPoint('Player point');
  } else {
    printMessage('Przykro mi, przegrałeś :(');
    addPoint('Computer point');
  }
};

function addPoint(score) {
  if (score === 'Player point') {
    let playerScore = document.getElementById('player-score');
    player = player + 1;
    playerScore.innerHTML = player;
  } else if (score === 'Computer point') {
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
  const div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearClass() {
  const compOpts = document.querySelectorAll('.compOpt');
  for(let compOpt of compOpts){
    compOpt.classList.remove('active');
  }
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

document.getElementById('play-rock').addEventListener('click', function () {
  clearClass();
  playGame(rock);
});
document.getElementById('play-paper').addEventListener('click', function () {
  clearClass();
  playGame(paper);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  clearClass();
  playGame(scissors);
});