
let myArray = ['rock', 'paper', 'scissors'];

function computerPlay () {

    let computerAnswer = myArray [Math.floor(Math.random() * myArray.length)];

    console.log (computerAnswer);

}

computerPlay();