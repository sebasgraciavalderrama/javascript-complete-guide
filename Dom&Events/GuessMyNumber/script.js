'use-strict';
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber =  function (number) {
    document.querySelector('.number').textContent = String(number);
}

const displayScore =  function (score) {
    document.querySelector('.score').textContent = String(score);
}

const displayHighScore =  function (highScore) {
    document.querySelector('.highscore').textContent = String(highScore);
}

const changeStyles = function (option){
    if (option) { // Won the game
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else { // Play again
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
}

const displayGuess = function (guess) {
    document.querySelector('.guess').value = guess;
}

const secretNumberFunc = function () {
    return Math.trunc((Math.random() * 20)) + 1;
}

let secretNumber = secretNumberFunc();
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('No number!');
    } else if (secretNumber === guess){
        changeStyles(true);
        displayMessage('Correct number!');
        displayNumber(secretNumber);
        displayScore(score);
        if (score > highScore) {
            highScore = score;
            displayHighScore(highScore);
        }
    } else if (guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
            score--;
            displayScore(score);
        } else {
            displayMessage('You lost the game!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    displayScore(score);
    secretNumber = secretNumberFunc();
    console.log(secretNumber);
    displayMessage('Start guessing...');
    displayScore(0);
    changeStyles(false);
    displayNumber('?');
    displayGuess('');
});