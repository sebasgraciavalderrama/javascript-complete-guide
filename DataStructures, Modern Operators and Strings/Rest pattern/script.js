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

// 1) Destructuring
// SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// REST, because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions - REST parameters
const add = function (...numbers) {
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
}

add(2, 3);
add(5, 3, 6, 2);
add(5, 3, 6, 2, 8, 4 , 3, 45, 3, 4);

const x = [23, 5, 7];
add(...x);
add(1); // Also works! single value o arrays

restaurant.orderPizza('Pepperoni', 'Pinapple', 'Mushrooms', 'Pear');