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

    if( computerMove == 'kamień' && playerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if (computerMove == 'kamień' && playerMove == 'nożyce'){
      printMessage('Ty przegrywasz!');
    } else if (computerMove == 'papier' && playerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if (computerMove == 'papier' && playerMove == 'kamień'){
      printMessage('Ty przegrywasz!');
    } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if (computerMove == 'nożyce' && playerMove == 'papier'){
      printMessage('Ty przegrywasz!');
    } else if (computerMove === playerMove) {
      printMessage('Remis! Niesamowite!!');
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