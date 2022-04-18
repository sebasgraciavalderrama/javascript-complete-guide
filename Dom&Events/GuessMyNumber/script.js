'use-strict';
const secretNumber = Math.trunc((Math.random() * 20)) + 1;
let score = 20;
let highScore = 0;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (secretNumber === guess){
        document.querySelector('.message').textContent = 'Correct number!';
        score++;
        document.querySelector('.score').textContent = String(score);
        highScore++;
        document.querySelector('.highscore').textContent = String(highScore);
    } else if (guess > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = String(score);
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = String(0);
        }
    } else if (guess < secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = String(score);
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = String(0);
        }
    } else if (guess !== secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = 'Try again!';
            score--;
            document.querySelector('.score').textContent = String(score);
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = String(0);
        }
    }
});
