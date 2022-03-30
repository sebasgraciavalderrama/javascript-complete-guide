const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sara can start driving lessons!');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara can not start driving lessons!. She must wait another ${yearsLeft} year(s)`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);