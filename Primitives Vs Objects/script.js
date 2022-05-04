'use strict'
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName); // Davis Williams

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 28,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//marriedJessica = {}; this does not work since the variable has been declared as CONST, let solves the issue

// Copying objects
const jessica2 = {
    firstName: 'Jessica Copy',
    lastName: 'Williams',
    age: 28,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2); // Shallow copy and not a deep clone (everything)
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary New');
jessicaCopy.family.push('John New');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);