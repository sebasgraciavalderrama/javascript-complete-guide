'use strict';

const secureBooking =  function() {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passangers`);
    }
};

const booker = secureBooking();

// Closure: Remembers all the variables created at the time of birth (birthplace)
booker(); // Passenger 1
booker(); // Passenger 2
booker(); // Passenger 3

console.dir(booker);