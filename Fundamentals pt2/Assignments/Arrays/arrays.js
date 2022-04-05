'use strict';
const worldPopulation = 7900000000;

function percentageOfWorld1(population=1441000000) {
    return (population/worldPopulation)*100;
}

const populations = [83190556, 10678362, 50372424]

console.log(populations.length >= 4);

const percentages = [percentageOfWorld1([populations[0]]), percentageOfWorld1([populations[1]]), percentageOfWorld1(populations[2])];
console.log(percentages)