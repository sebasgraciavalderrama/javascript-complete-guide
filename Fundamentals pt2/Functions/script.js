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
console.log(fruitProcessor(858548, 85));