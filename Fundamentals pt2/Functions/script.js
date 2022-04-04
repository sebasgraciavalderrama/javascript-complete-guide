'use strict';
function logger(){
    console.log('Hello from function!');
}

// Calling / Running / invoking function
logger();
logger();
logger()

function fruitProcessor (apples, oranges) {
    console.log(apples, oranges)
    return `Juice with ${apples} apples and ${oranges} oranges.`;
}

let myJuice = fruitProcessor(5, 4);
console.log(myJuice);
console.log(fruitProcessor(846219, 85));

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear
}

// Function expression
const calcAge2 = function (birthYear){ // Anonymous function
    return 2037 - birthYear
}

console.log(calcAge2(1994));
console.log(calcAge1(1994));