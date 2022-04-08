const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1994,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = { // Object literal syntax
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1994,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['firstName']);
console.log(jonas['lastName']);

const nameKey = 'Name';

// We use bracket notation for operations
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// Other use-case for bracket notation
//const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
let interestedIn = 'job';
console.log(interestedIn);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Property ${interestedIn} does not exist.`);
}

// Add new properties
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';

console.log(jonas);

// Challenge
console.log(`Jonas has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`)