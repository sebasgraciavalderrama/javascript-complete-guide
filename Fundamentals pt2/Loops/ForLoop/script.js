const jonas = [
    'Jonas',
    'Schmedtmann',
    1994,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
    0
];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);
}
console.log('------------------------');
// Continue and break
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') {
        console.log('string');
        continue;
    }
    console.log('not string');
}

console.log('------------------------');

for (let i = 0; i < jonas.length; i++) {
    console.log(i)
    if (typeof jonas[i] === 'number') {
        console.log('A number!');
        break;
    }
}