


function computerPlay () {
    let myArray = ['rock', 'paper', 'scissors'];
    let selection = myArray [Math.floor(Math.random() * myArray.length)];

    return selection;

}



function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Tie!";
     }

     else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "Win!"; 
    }

    else if (playerSelection === 'rock' &&  computerSelection === 'scissors') {
        return "Win!"; 
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "Win!"; 
    }

    else {
        return 'Loser!'
    }

    
}


const computerSelection = computerPlay();
const playerSelection = prompt ('Rock, Paper or Scissors?')
console.log(playRound(playerSelection, computerSelection));

