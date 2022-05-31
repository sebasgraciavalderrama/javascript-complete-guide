'use strict';

const flight = 'LH234';
const sebas = {
    name: 'Sebas Gracia',
    passport: 123123123123
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 123123123123) {
        console.log('Check In');
    } else {
        console.log('Wrong passport!');
    }
};

//checkIn(flight, sebas);
//console.log(flight);
//console.log(sebas);


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(sebas);
checkIn(flight, sebas);