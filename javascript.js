
Aa

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
        playerScore ++;
        return "Win!"; 
    }

    else if (playerSelection === 'rock' &&  computerSelection === 'scissors') {
        playerScore ++;
        return "Win!"; 
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++;
        return "Win!"; 
    }

    else {
        computerScore ++;
        return 'Loser!'
    }
    
}


function game () {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt ('Rock, Paper or Scissors?');
        console.log(playRound(playerSelection, computerSelection));
        console.log('player:', playerScore , 'computer:' , computerScore);
    }

        if (playerScore > computerScore) {
            console.log('You win!');
        }
    
        else if (playerScore < computerScore) {
            console.log('You lose!');
        }

        else if (playerScore == computerScore) {
            console.log('Issa tie!')
        }

}





const computerSelection = computerPlay();

let playerScore = 0
let computerScore = 0


game ();

