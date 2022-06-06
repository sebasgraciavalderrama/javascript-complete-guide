'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push(({flight: `${this.iataCode}${flightNum}`, name}));
    },
};

lufthansa.book(239, 'Sebas Gracia');
lufthansa.book(635, 'Max Mustermann');
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
//book(23, 'Sara Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Line',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 239, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // Is not used in modern JS
console.log(swiss);

book.call(swiss, ...flightData); // Same as .apply()

// Bind method
//book.call(swiss, 239, 'Mary Cooper');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams'); // No need to specify the THIS keyword

const bookEW23 = book.bind(eurowings, 23); // Pattern: Partial application
bookEW23('Sebas Gracia123');
bookEW23('Cooper Carbine');
console.log(eurowings);

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Other example of Partial application (pre-set parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(200));
console.log(addVAT(23));
console.log(addVAT(123965));

// Challenge
console.log('----------------Challenge----------------');
const addTaxChallenge = function (rate = 0.23) {
    return function (value) {
        return value + value * rate;
    };
}

const myNewReturnedFunc = addTaxChallenge();
console.log(myNewReturnedFunc(100));

