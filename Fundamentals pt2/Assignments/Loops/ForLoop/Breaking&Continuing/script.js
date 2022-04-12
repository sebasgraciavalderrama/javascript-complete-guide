'use strict';
const worldPopulation = 7900000000;
const populations = [83190556, 10678362, 50372424];
let percentages2 = [];

function percentageOfWorld1(population=1441000000) {
    return (population/worldPopulation)*100;
}

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);