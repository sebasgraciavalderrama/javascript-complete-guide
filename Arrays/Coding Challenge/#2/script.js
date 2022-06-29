data1 = [5, 2, 4, 2, 15, 8, 3];
data2 = [16, 6, 10, 5, 6, 1, 4];


const calcAverageHumanAge = function (dataArray) {
    console.log(dataArray);
    //1 Calculate dog age in human years
    const dogHumanYears = dataArray.map(function (age) {
        if (age <=2)
            return age*2
        else if (age >2)
            return 16 + age * 4
    });
    console.log(dogHumanYears);
    //2 Filter adult dogs
    const smallDogs = dogHumanYears.filter(function (age) {
        if (age > 18)
            return age
    });
    console.log(smallDogs);
    //3 Calculate average age of adult dogs
    const averageAge = smallDogs.reduce(function (avg, value, i, arr) {
        return avg + (value/arr.length);
    }, smallDogs[0])
    console.log(averageAge);
};


calcAverageHumanAge(data1);
console.log('------------');
calcAverageHumanAge(data2);