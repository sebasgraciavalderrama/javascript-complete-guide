'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({starterIndex = 1, mainIndex= 0, time ='14:50' , address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address} `);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(`Here is your delicious pizza with ${mainIngredient}`);
        if (otherIngredients.length > 0) {
            console.log(`Additional ingredients: ${otherIngredients.length}`);
            console.log(...otherIngredients);
        }
    }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log('Printing menu....');
for (const item of menu) {
    console.log(item);
}
console.log('Printing menu For-of loop....');
for (const item of menu.entries()) {
    console.log(`${item[0] + 1}: ${item[1]}`);
}
/*
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}*/
console.log([...menu.entries()]);

