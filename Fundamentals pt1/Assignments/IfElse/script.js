const isIsland = false;
let language = 'español';
const country = 'Colombia';
const continent = 'South America';
let population = 50372424
const averagePop = 33000000

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
let populationInHalf = population/2;
let morePopulationThanFinland = population > 6000000;
let averagePopulationCountry = population < averagePop;

console.log(description)
console.log(population++);

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

if (population > averagePop) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${averagePop - population} below average.`);
}