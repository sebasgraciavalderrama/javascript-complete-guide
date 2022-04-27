'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}! You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;

            // Creating new variable with same name as outer scope's variable
            const firstName = 'Steven';
            // Reassigning outer scope's variable
            output = 'NEW OUTPUT';

            const str = `Oh, and you are a millennial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a+b;
            }
        }
        console.log(output);
        console.log(millennial); // var variables are function scoped.
        //add(2, 3); // for 'use strict' mode functions are block scoped.
    }
    printAge();
    return age;
}

const firstName = 'Sebas';
calcAge(1991);
