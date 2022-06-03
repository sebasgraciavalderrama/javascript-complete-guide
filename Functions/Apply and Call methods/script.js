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