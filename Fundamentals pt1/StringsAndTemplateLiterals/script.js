const firstName = 'Sebas'
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

//Type coercion
const sebas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(sebas);

//Template literals
const sebasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(sebasNew);

console.log(`String
with
multiple
lines`);


