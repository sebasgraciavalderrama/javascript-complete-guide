'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ]
    ],
    score: '4.0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1.
for (const item of game.scored.entries()) {
    console.log(`Goal ${item[0] + 1}: ${item[1]}`);
}
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}
//2.
const odds = Object.values(game.odds); // We use Object.values because we only want the values.!!
let average = 0;
for (const odd of odds) {
    average += odd;
}
console.log(average /= odds.length);

//3.

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`)
}
const victoryBM = `Odd of victory ${game.team1}: ${game.odds.team1}`;
const draw = `Odd of draw: ${game.odds.x}`;
const victoryBD = `Odd of victory ${game.team2}: ${game.odds.team2}`;

console.log(victoryBM);
console.log(draw);
console.log(victoryBD);


// Bonus
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}