let markHeight, markMass;
let johnHeight, johnMass;
let markHigherBMI;

//Test data 1
markMass = 78;
markHeight = 1.69;
markBMI = markMass / markHeight ** 2;

johnMass = 92
johnHeight = 1.95
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher thant John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher thant Mark's (${markBMI})!`)
}


//Test data 2
markMass = 95;
markHeight = 1.88;
markBMI = markMass / markHeight ** 2;

johnMass = 85
johnHeight = 1.76
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher thant John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher thant Mark's (${markBMI})!`)
}


