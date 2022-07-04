


function computerPlay () {
    let myArray = ['rock', 'paper', 'scissors'];
    let computerSelection = myArray [Math.floor(Math.random() * myArray.length)];

    return computerSelection;

}


computerPlay();


let playerSelection = prompt ('Rock, Paper or Scissors?')

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        /* return "Tie!"; */
        alert ("Tie!");
     }

     else if (playerSelection === 'paper' && computerSelection === 'rock') {
       /* return "Win!"; */
        alert ("Win!");
    }

    else if (playerSelection === 'rock' &&  computerSelection === 'scissors') {
      /*  return "Win!"  */
        alert ("Win!");
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        /*  return "Win!"  */
        alert ("Win!");
    }

    else {
        alert ('Loser! ${computerSelection} beats ${playerSelection}');
        /* return '"Loser! ${computerSelection} beats ${playerSelection}"' */
    }

    
}

playRound();

