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

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenzy Italy');
rest.set(2, 'Lisbon, Portugal');

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
console.log(rest);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arr));

