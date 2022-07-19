
let playerScore = 0
let computerScore = 0



function computerPlay () {
    let myArray = ['rock', 'paper', 'scissors'];
    let selection = myArray [Math.floor(Math.random() * myArray.length)];
    return selection;

}



function playRound () {

    let computerSelection = computerPlay();
    let result =''

    if (playerSelection === computerSelection) {
        result = ('Its a tie! You both chose ' + playerSelection)
     }

     else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection)
    }

    else if (playerSelection === 'rock' &&  computerSelection === 'scissors') {
        playerScore ++;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection)
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection)
    }

    else {
        computerScore ++;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection)
    }

    game();

    document.getElementById('result').innerHTML = result
    return

    
}

function updateScore () {

}


function game () {

        let endScore = ''

        if (playerScore >= 5) {
            endScore = ('You win!');
        }
    
        else if (computerScore >= 5) {
            endScore = ('You lose!');
        }

        else if (playerScore == 5 && computerScore == 5) {
            endScore = ('Issa tie!')
        }

        document.getElementById('endScore').innerHTML = endScore
        return

}

const rock = document.querySelector('#rock-btn');
rock.addEventListener('click', function() {
    playerSelection='rock';
    playRound();
});


const paper = document.querySelector('#paper-btn');
paper.addEventListener('click', function() {
    playerSelection='paper';
    playRound();
});


const scissors = document.querySelector('#scissors-btn');
scissors.addEventListener('click', function() {
    playerSelection='scissors';
    playRound();
});















