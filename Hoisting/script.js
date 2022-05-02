// Variables
//console.log(me);
//console.log(job);
//console.log(year);

var me = 'Sebas';
let job = 'Engineer';
const year = 1994;

// Functions
console.log(addDecl(2,3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a+b;
}

const addExpr = function (a,b) {
    return a+b;
} // This function is a TDZ

const addArrow = (a, b) => a+b; // This function is a TDZ