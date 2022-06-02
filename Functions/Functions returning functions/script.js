'use strict';

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    };
};

const greeterHey = greet('Hey');

greeterHey('Sebas');
greeterHey('Maria');

greet('Hello')('Sebas');

const greetArrow = heyArrow => greeterHeyArrow => console.log(`${heyArrow} ${greeterHeyArrow}`);

greetArrow('Hello')('Sebas');