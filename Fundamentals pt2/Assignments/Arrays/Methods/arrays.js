'use strict';
const worldPopulation = 7900000000;
const neighbours = ['ecuador', 'panama', 'venezuela'];
neighbours.push('utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('germany')) {
    console.log('Probably not a central European country :D');
}

let panamaIndex = neighbours.indexOf('panama');
neighbours[panamaIndex] = 'country of panama';

console.log(neighbours);