
let playerScore = 0
let computerScore = 0

const computerSelection = computerPlay();

function computerPlay () {
    let myArray = ['rock', 'paper', 'scissors'];
    let selection = myArray [Math.floor(Math.random() * myArray.length)];
    return selection;

}



function playRound () {

    if (playerSelection === computerSelection) {
        /*return "Tie!"; */
        console.log('tie');
     }

     else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++;
        /*return "Win!"; */
        console.log('win');
    }

    else if (playerSelection === 'rock' &&  computerSelection === 'scissors') {
        playerScore ++;
        /*return "Win!"; */
        console.log('win');
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++;
        /*return "Win!"; */
        console.log('win');
    }

    else {
        computerScore ++;
        /*return "Loser!"; */
        console.log('lose');
    }
    
}


function game () {

    /*
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt ('Rock, Paper or Scissors?');
        console.log(playRound(playerSelection, computerSelection));
        console.log('player:', playerScore , 'computer:' , computerScore);
    }
    */

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

const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    playerSelection='rock';
    playRound();
});


const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    playerSelection='paper';
    playRound();
});


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    playerSelection='scissors';
    playRound();
});






/*
function rockSelection() {
    let playerSelection = 'rock';
}

const button = document.querySelectorAll('button');
button.forEach(button => 
button.addEventListener('click', playRound() => {
    game();
});
*/














