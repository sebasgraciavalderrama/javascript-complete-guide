'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 12 + 12,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({starterIndex = 1, mainIndex= 0, time ='14:50' , address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address} `);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(`Here is your delicious pizza with ${mainIngredient}`);
        if (otherIngredients.length > 0) {
            console.log(`Additional ingredients: ${otherIngredients.length}`);
            console.log(...otherIngredients);
        }
    }
};

const airLine = 'TAP Air Portugal';

// Split
console.log('a+very+nice+string'.split('+').join(' '));
const [firstName, lastName] = 'Sebas Gracia'.split(' ');
console.log(firstName, lastName);

// Join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names  = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('sebastian gracia valderrama');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Sebas'.padStart(23, '+'));

// Example
const maskCreditCard = function (card) {
    const str = card + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(5218556552755777));
console.log(maskCreditCard('4485833126822725'));

// Repeat
const message2 = 'Bad weather... All departures delayed!';
console.log(message2.repeat(5));

const planesInLine  = function (n) {
    console.log(`There are ${n} planes in line`.repeat(n))
};

planesInLine(10);
planesInLine(4);
planesInLine(7);