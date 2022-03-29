let age = 30;
age = 31; //Mutate variable

const birthYear = 1991;
//birthYear = 2005; Not possible, since it is an immutable variable

// Always initialize const with values.
//const job;

var job = 'programmer';
job = 'teacher';


/*
* This is bad: not using let/var/const to create variables
* prevents the scope to access it. (Property on a global object)*/
lastName = 'Gracia';
console.log(lastName);