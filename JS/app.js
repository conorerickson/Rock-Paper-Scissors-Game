let comptuerChoice = document.getElementById("comp-choice-display");
let playerChoice = document.getElementById("player-choice-display");
let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scissorsBtn = document.getElementById("scissors-btn");
let title = document.getElementById("title");

function computerResult(){
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
    else if(playerChoice.innerHTML === "Rock" && comptuerChoice.innerHTML === "Scissors") {
      title.innerHTML = "You Win!";
    }
    else if(playerChoice.innerHTML === "Rock" && comptuerChoice.innerHTML === "Paper") {
      title.innerHTML = "You Lose!";
    }
    else if(playerChoice.innerHTML === "Paper" && comptuerChoice.innerHTML === "Scissors") {
      title.innerHTML = "You Lose!";
    }
    else if(playerChoice.innerHTML === "Paper" && comptuerChoice.innerHTML === "Rock") {
      title.innerHTML = "You Win!";
    }
    else if(playerChoice.innerHTML === "Scissors" && comptuerChoice.innerHTML === "Rock") {
      title.innerHTML = "You Lose!";
    }
    else{
      title.innerHTML = "You win!"
    }
  }

function playerResult(){
  rockBtn.addEventListener("click", function(){
   playerChoice.innerHTML = "Rock";
   computerResult();

  })
  paperBtn.addEventListener("click", function(){
    playerChoice.innerHTML = "Paper";
    computerResult();

   })
   scissorsBtn.addEventListener("click", function(){
    playerChoice.innerHTML = "Scissors";
    computerResult(); 
   })
}
playerResult();
