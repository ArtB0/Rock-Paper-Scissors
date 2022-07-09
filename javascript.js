


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


function game () {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt ('Rock, Paper or Scissors?');
        console.log(playRound(playerSelection, computerSelection));
    }
}


const computerSelection = computerPlay();


game ();


