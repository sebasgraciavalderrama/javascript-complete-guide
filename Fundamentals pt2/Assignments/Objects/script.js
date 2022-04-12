const myCountry = {
    country: 'Colombia',
    capital: 'Bogota',
    language: 'Spanish',
    population: 54000000,
    neighbours: ['Venezuela', 'Ecuador', 'Panama'],
    checkIsland: function (){
        //this.isIsland = this.neighbours.length > 0 ? true : false;
        this.isIsland = this.neighbours.length > 0;
    },
    toString: function () {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    }
};

console.log(myCountry.isIsland);
myCountry.checkIsland();
console.log(myCountry.isIsland);