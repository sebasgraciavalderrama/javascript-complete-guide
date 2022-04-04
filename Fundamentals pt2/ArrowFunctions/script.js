'use strict';
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear
}

// Function expression
const calcAge2 = function (birthYear){ // Anonymous function
    return 2037 - birthYear
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    return `${firstName} retires in ${ 65 - age} years`;
}


console.log(calcAge3(1994));
console.log(calcAge2(1994));
console.log(calcAge1(1994));
console.log(yearsUntilRetirement(1994, 'Sebas'));
console.log(yearsUntilRetirement(1949, 'John'));