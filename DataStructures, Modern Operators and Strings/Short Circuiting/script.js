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
console.log('----------------OR----------------');
// Use ANY data type, return ANY data type,
// and short-circuiting evaluation
console.log(3 || 'Sebas');
// If the first element is a truthy value, the second operand
// won't even be evaluated. This is short-circuiting

console.log(3 || 'Sebas'); // 3 - truthy
console.log('' || 'Sebas'); // Sebas - truthy
console.log(true || 0); // true - truthy
console.log(undefined || null); // null - falsy (undefined is falsy, don't forget!)
console.log(null || undefined); // undefined; see line above.

console.log(undefined || 0 || '' || 'hello' || 23 || null);// hello, because it is the first truthy value in the chain of operators!

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //Ternary operator
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----------------AND----------------');
console.log(0 && 'Sebas');
console.log(7 && 'Sebas');
console.log('Sebas' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('pineapple', 'pepperoni');


//----------------- Nullish Coalescing Operator ?? -----------------
/*
* The nullish coalescing operator works with the idea of
* nullish operators instead of falsy values
* Nullish: null and undefined (NOT 0 or '')
* */
restaurant.numGuests = 0;
const guests11 = restaurant.numGuests ? restaurant.numGuests : 10; //Ternary operator
console.log(guests11);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
