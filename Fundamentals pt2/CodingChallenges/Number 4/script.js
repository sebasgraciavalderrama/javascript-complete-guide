let totalBill = Number(prompt('How much was the total bill?: '));

let finalTip = totalBill >= 50 && totalBill <=300 ? 0.15 : 0.20;
let totalWithTip = (totalBill + (totalBill*finalTip));
console.log(`Your total bill is: ${totalBill} and the tip is ${finalTip}, you total with tip included is: ${totalWithTip}`)
