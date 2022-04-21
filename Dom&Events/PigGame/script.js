'use strict';

//Starting elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')

let activePlayer, playing, scores, currentScore;
let scorePlayer1 = document.querySelector('.player--0 #score--0');
let scorePlayer2 = document.querySelector('.player--1 #score--1');
let diceEl = document.querySelector('.dice');

const newGame = function () {
    scores = [0, 0];
    playing = true;
    activePlayer = 0;
    currentScore = 0;
    current0El.textContent = String(0);
    current1El.textContent = String(0);
    scorePlayer1.textContent = String(0);
    scorePlayer2.textContent = String(0);

    diceEl.classList.add('hidden');
    // When there is a winner.
    let player0Winner = player0El.classList.contains('player--winner');
    let player1Winner = player1El.classList.contains('player--winner');
    if (player1Winner || player0Winner) {
        player0El.classList.remove('player--winner');
        player1El.classList.remove('player--winner');
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');
    } else {
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');
    }
};

newGame();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = String(0);
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const rollDice = function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch to next player
            switchPlayer();
        }
    }
};
const holdScore = function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = String(scores[activePlayer]);
        if (scores[activePlayer] >= 80) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', newGame);