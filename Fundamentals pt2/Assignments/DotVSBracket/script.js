const myCountry = {
    country: 'Colombia',
    capital: 'Bogota',
    language: 'Spanish',
    population: 54000000,
    neighbours: ['Venezuela', 'Ecuador', 'Panama'],

    toString: function () {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    }
};

console.log(myCountry.toString());

myCountry.population += 2000000;
console.log(myCountry.population);

myCountry['population'] -= 2000000;
console.log(myCountry['population']);