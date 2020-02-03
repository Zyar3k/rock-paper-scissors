function playGame(playerInput){
  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  };

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let computerMove = getMoveName(randomNumber);
    printMessage('ruch komputera: ' + computerMove);

  let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

  function displayResult(computerMove, playerMove){
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
    if(computerMove === playerMove) {
      printMessage('Remis! Niesamowite!!');
    } else if (( computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
      printMessage('Ty wygrywasz!');
    } else {
      printMessage('Ty przegrywasz!');
    }
  };

  displayResult(computerMove, playerMove);
};

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1)
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2)
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3)
}); 