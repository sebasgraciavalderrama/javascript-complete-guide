const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
let finalTip = 0;

function totalWithTip (totalBill, finalTip) {
    return (totalBill + (totalBill*finalTip));
}

const calcAverage = function (myArray) {
    let average = 0;
    for (let i = 0; i < myArray.length; i++) {
        average += myArray[i];
    }
    return average / myArray.length;
}

for (let i = 0; i < bills.length; i++) {
    finalTip = bills[i] >= 50 && bills[i] <=300 ? 0.15 : 0.20;
    tips.push(finalTip);
    totals.push(totalWithTip(bills[i], finalTip));
}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));