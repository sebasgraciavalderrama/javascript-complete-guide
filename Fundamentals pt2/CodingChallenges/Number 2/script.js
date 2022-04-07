const bills = [125, 555, 44];

let finalTip = bills[0] >= 50 && bills[0] <=300 ? 0.15 : 0.20;
let totalWithTip = (bills[0] + (bills[0]*finalTip));
console.log(`Your total bill is: ${bills[0]} and the tip is ${finalTip}, you total with tip included is: ${totalWithTip}`)

finalTip = bills[1] >= 50 && bills[1] <=300 ? 0.15 : 0.20;
totalWithTip = (bills[1] + (bills[1]*finalTip));
console.log(`Your total bill is: ${bills[1]} and the tip is ${finalTip}, you total with tip included is: ${totalWithTip}`)

finalTip = bills[2] >= 50 && bills[2] <=300 ? 0.15 : 0.20;
totalWithTip = (bills[2] + (bills[2]*finalTip));
console.log(`Your total bill is: ${bills[2]} and the tip is ${finalTip}, you total with tip included is: ${totalWithTip}`)
