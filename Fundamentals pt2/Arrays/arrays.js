'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = [friend1, friend2, friend3];
console.log(friends);

//const years = new Array(1991, 1984, 1961, 2022, 1949, 1980, 1994);
const years = [1991, 1984, 1961, 2022, 1949, 1980, 1994];
console.log(years);

console.log(friends[0]);
console.log(years[5]);

//Number of elements
console.log(friends.length);
console.log(years.length);

// Last element of the array
console.log(years[years.length-1]); // -1 because length does not start at 0
console.log(friends[friends.length-1]); // -1 because length does not start at 0

// Change elements of the array
friends[2] = 'Sebas';
console.log(friends)

years[2] = 9999;
console.log(years);

// Different types of values in an array
const jonas = ['Jonas', 'Schmedtmann', 2037-1991, friends];
console.log(jonas);