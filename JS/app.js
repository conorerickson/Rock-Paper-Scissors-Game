const comptuerChoice = document.getElementById("comp-choice-display");
const playerChoice = document.getElementById("player-choice-display");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const title = document.getElementById("title");
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function gameLoop(){
  let result = Math.floor(Math.random() * 3);
  if(result === 0){
  comptuerChoice.innerHTML = rock;
  }
  else if(result === 1) {
    comptuerChoice.innerHTML = paper;
  }
  else{
    comptuerChoice.innerHTML = scissors;
  }

    if(playerChoice.innerHTML === comptuerChoice.innerHTML){
      title.innerHTML = "Draw!";
    }
    else if((playerChoice.innerHTML === rock && comptuerChoice.innerHTML === scissors) || (playerChoice.innerHTML === paper && comptuerChoice.innerHTML === rock) || (playerChoice.innerHTML === scissors && comptuerChoice.innerHTML === paper)) {
      title.innerHTML = "You Win!";
    }
    else if((playerChoice.innerHTML === rock && comptuerChoice.innerHTML === paper) || (playerChoice.innerHTML === paper && comptuerChoice.innerHTML === scissors) || (playerChoice.innerHTML === scissors && comptuerChoice.innerHTML === rock)) {
      title.innerHTML = "You Lose!";
    }
  }

function playerResult(){
  rockBtn.addEventListener("click", function(){
   playerChoice.innerHTML = rock;
   gameLoop();

  })
  paperBtn.addEventListener("click", function(){
    playerChoice.innerHTML = paper;
    gameLoop();

   })
   scissorsBtn.addEventListener("click", function(){
    playerChoice.innerHTML = scissors;
    gameLoop(); 
   })
}
playerResult();
