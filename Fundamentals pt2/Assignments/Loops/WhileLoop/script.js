'use strict';

const worldPopulation = 7900000000;
const populations = [83190556, 10678362, 50372424];
let percentages3 = [];

function percentageOfWorld1(population=1441000000) {
    return (population/worldPopulation)*100;
}

let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages3);