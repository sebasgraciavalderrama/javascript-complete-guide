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
const plane = 'A320';

// They always return a new string!!!!
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r')); // 6
console.log(airLine.lastIndexOf('r')); // 10
console.log(airLine.indexOf('Portugal')); // 8
console.log(airLine.indexOf('portugal')); // -1

console.log(airLine.slice(4)); // Air Portugal
console.log(airLine.slice(4, 7)); // Air 7 - 4 = 3; this is the position

console.log(airLine.slice(0, airLine.indexOf(' '))); //TAP
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1)); //Portugal

console.log(airLine.slice(1, -1)); //AP Air Portuga

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('You got the middle seat!');
    } else {
        console.log('You got lucky!');
    }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('sebas'));
console.log(typeof new String('sebas'));
console.log(typeof new String('sebas').slice(1));