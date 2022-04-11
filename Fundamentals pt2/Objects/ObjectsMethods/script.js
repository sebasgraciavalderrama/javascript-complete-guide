const jonas = { // Object literal syntax
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1994,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,
    age: 0,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        if (this.hasDriverLicense){
            return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has a drivers license.`;
        } else {
            return `${this.firstName} is a ${this.age}-year old ${this.job}, and he does not have a drivers license.`;
        }
    }
};

//console.log(jonas.calcAge(1991));
//console.log(jonas['calcAge'](1991));

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());


