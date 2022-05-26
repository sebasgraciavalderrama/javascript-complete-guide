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

console.log(airLine.toLowerCase());
console.log('airLine'.toUpperCase());

//Fix capitalization in name
const passenger = 'sEbAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing strings
const email = 'sebasgracia@email.com';
const loginEmail = 'SebasGracia@email.Com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(trimmedEmail === normalizedEmail);

// Replacing
const priceGB = '288,97&';
const priceUS = priceGB.replace(',', '.').replace('&', '$');
console.log(priceUS);

const announcement = 'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replace('barding', 'boarding').replaceAll('door', 'gate'));

// Regex
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'A320';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('A'));

if (plane.startsWith('A') && plane.endsWith('0')) {
    console.log('True');
}

//Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not allowed on the plane');
    } else {
        console.log('You are allowed on the plane');
    }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('I have some socks and a camera');
checkBaggage('Got some snacks and a gun for protection');




