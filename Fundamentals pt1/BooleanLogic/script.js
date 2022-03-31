const age = 18;
if (age === 18) console.log('You just became an adult! (strict)');

if (age == 18) console.log('You just became an adult! (loose)');

const favorite = Number(prompt('What is your favorite number?:'));
console.log(typeof favorite);

if (favorite == 23) { // '23' == 23 -> TRUE
    console.log("Cool! 23 is an amazing number!");
}

if (favorite === 23) { // '23' === 23 -> FALSE
    console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
    console.log("Cool! 7 is also an amazing number!");
} else if (favorite === 9) {
    console.log("Cool! 7 is also an amazing number!");
} else {
    console.log("Number is not 7 or 23!");
}

if (favorite !== 23) {
    console.log("Why not 23?");
}