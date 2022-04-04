'use strict';
let language = 'español';
const country = 'Colombia';
const continent = 'South America';
let population = 50372424

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city its ${capitalCity}`;
}

console.log(describeCountry(country, population, 'Bogota'));

console.log(describeCountry('Germany', 83190556, 'Berlin'));

console.log(describeCountry('Greece', 10678362, 'Athens'));