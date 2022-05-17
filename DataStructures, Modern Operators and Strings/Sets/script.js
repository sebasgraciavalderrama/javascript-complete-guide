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
const ordersSet = new Set ([
    'Pasta',
    'Risotto',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
    'Pasta',
    'Risotto',
    'Pizza',
    'Risotto',
]);

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.add('Garlic Bread'));
console.log(ordersSet.add('Garlic Bread'));
console.log(ordersSet.delete('Garlic Bread'));
console.log(ordersSet.delete('Gnocchi'));
console.log(new Set());
console.log(new Set('Jonas'));

console.log(ordersSet.values());
for (const order of ordersSet) {
    console.log(order);
}
ordersSet.clear();
console.log(ordersSet.values());

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];

//Transform a Set to an Array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//Get the size
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef']).size);
