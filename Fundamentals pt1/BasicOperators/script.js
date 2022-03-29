// Math operators
const now = 2037;
const ageSebas = now - 1994;
const ageNani = now - 1991;
console.log(ageSebas);
console.log(ageNani);
console.log(ageSebas, ageNani);

console.log(ageSebas * 2, ageSebas/2, ageSebas ** 3, 5 ** 9);

// String concatenation
const firstName = 'Sebas';
const lastName = 'Gracia';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 65;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageSebas > ageNani); // <, >, <=, >=
console.log(ageNani >= 18);

const isFullAge = ageNani >= 18;

console.log(now - 1991 > now - 2018);

