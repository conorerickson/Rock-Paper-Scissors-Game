let comptuerChoice = document.getElementById("comp-choice-display");
let playerChoice = document.getElementById("player-choice-display");
let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scissorsBtn = document.getElementById("scissors-btn");
let title = document.getElementById("title");

function gameLoop(){
  let result = Math.floor(Math.random() * 3);
  if(result === 0){
  comptuerChoice.innerHTML = "Rock";
  }
  else if(result === 1) {
    comptuerChoice.innerHTML = "Paper";
  }
  else{
    comptuerChoice.innerHTML = "Scissors";
  }

    if(playerChoice.innerHTML === comptuerChoice.innerHTML){
      title.innerHTML = "Draw!";
    }
    else if((playerChoice.innerHTML === "Rock" && comptuerChoice.innerHTML === "Scissors") || (playerChoice.innerHTML === "Paper" && comptuerChoice.innerHTML === "Rock") || (playerChoice.innerHTML === "Scissors" && comptuerChoice.innerHTML === "Paper")) {
      title.innerHTML = "You Win!";
    }
    else if((playerChoice.innerHTML === "Rock" && comptuerChoice.innerHTML === "Paper") || (playerChoice.innerHTML === "Paper" && comptuerChoice.innerHTML === "Scissors") || (playerChoice.innerHTML === "Scissors" && comptuerChoice.innerHTML === "Rock")) {
      title.innerHTML = "You Lose!";
    }
  }

function playerResult(){
  rockBtn.addEventListener("click", function(){
   playerChoice.innerHTML = "Rock";
   gameLoop();

  })
  paperBtn.addEventListener("click", function(){
    playerChoice.innerHTML = "Paper";
    gameLoop();

   })
   scissorsBtn.addEventListener("click", function(){
    playerChoice.innerHTML = "Scissors";
    gameLoop(); 
   })
}
playerResult();
