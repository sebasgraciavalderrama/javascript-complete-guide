const averageScore = (score1, score2, score3) => (score1 + score2 + score3)/3;

function checkWinner (score1, score2) {
    if (score1 > score2) console.log(`Dolphins won with an average score of ${score1}`);
    else if (score2 > score1) console.log(`Koalas won with an average score of ${score2}`);
    else if (score1 === score2) console.log(`Koalas and Doplhins tied with an average score of ${score2}`);
}

let dolphinsAvgScore = averageScore(44, 23, 71);
let koalasAvgScore = averageScore(65, 54, 49);
console.log(dolphinsAvgScore);
console.log(koalasAvgScore);
checkWinner(dolphinsAvgScore, koalasAvgScore);

dolphinsAvgScore = averageScore(85, 54, 41);
koalasAvgScore = averageScore(23, 34, 27);
console.log(dolphinsAvgScore);
console.log(koalasAvgScore);
checkWinner(dolphinsAvgScore, koalasAvgScore);
