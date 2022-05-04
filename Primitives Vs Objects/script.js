'use strict'

let age = 30;
let oldAge = age;
age = 31;

const me = {
    name: 'Sebas',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);