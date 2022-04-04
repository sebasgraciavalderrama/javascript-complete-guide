'use strict';
let language = 'español';
const country = 'Colombia';
const continent = 'South America';
let population = 50372424
const worldPopulation = 7900000000;

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city its ${capitalCity}`;
}

function percentageOfWorld1(population=1441000000) {
    return (population/worldPopulation)*100;
}

// Function expression
const percentageOfWorld2 = function (population=1441000000){ // Anonymous function
    return (population/worldPopulation)*100;
}

// Arrow functions
const percentageOfWorld3 = population => (population/worldPopulation)*100;

console.log(describeCountry(country, population, 'Bogota'));

console.log(describeCountry('Germany', 83190556, 'Berlin'));

console.log(describeCountry('Greece', 10678362, 'Athens'));

console.log(percentageOfWorld1(population)); // Colombia
console.log(percentageOfWorld1(83190556)); // Germany
console.log(percentageOfWorld1(10678362)); // Greece

console.log(percentageOfWorld2(population)); // Colombia
console.log(percentageOfWorld2(83190556)); // Germany
console.log(percentageOfWorld2(10678362)); // Greece


console.log(percentageOfWorld3(population)); // Colombia
console.log(percentageOfWorld3(83190556)); // Germany
console.log(percentageOfWorld3(10678362)); // Greece
