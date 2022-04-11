const mark = {
    fullName: 'Mark Miller',
    mass: 79,
    height: 1.69,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    },
    toString: function () {
        return `${this.fullName} weights ${this.mass} and is ${this.height} tall.`
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    },
    toString: function () {
        return `${this.fullName} weights ${this.mass} and is ${this.height} tall.`
    }
}

console.log(mark.toString());
console.log(mark.calcBMI());

console.log(john.toString());
console.log(john.calcBMI());

