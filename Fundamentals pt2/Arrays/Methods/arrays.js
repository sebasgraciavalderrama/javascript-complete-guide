'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = [friend1, friend2, friend3];

// Push
let newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// Unshift
newLength = friends.unshift('Peter');
console.log(friends);
console.log(newLength);

// Pop - Remove elements
let popped = friends.pop(); // Last element
console.log(friends);
console.log(popped);

friends.shift(); // First element
console.log(friends);

// Index Of
console.log(friends.indexOf('Steven')); // 1 if the item exists
console.log(friends.indexOf('Bob')); // -1 if the item does not exist

// Includes - strict equality
console.log(friends.includes('Steven')); // true if the item exists
console.log(friends.includes('Bob')); // false if the item does not exist
friends.push(23);
console.log(friends.includes('23')); // false if the item does not exist

if (friends.includes('Peter')) {
    console.log('Hi Peter!');
}