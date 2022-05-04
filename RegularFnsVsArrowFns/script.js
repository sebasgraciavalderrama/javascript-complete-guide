'use strict'

var firstName = 'Matilda';

const sebas = {
    firstName: 'Sebas',
    year: 1994,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
        /*
        SOLUTION 1
        const self = this; // self or that
        const isMillennial = function () {
            console.log(self.year >= 1981 && self.year <= 1996);
        };*/
        // SOLUTION 2
        const isMillennial = () => {
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillennial();
    },

    greet: function () {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    }
};

console.log(this.firstName);
sebas.greet();
sebas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments)
    console.log(arguments[arguments.length-1]);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 9);

var addArrow = (a, b) => {
    console.log(arguments); // Arguments do not exits for arrow functions!
    return a + b;
};

addArrow(2, 4, 5);