'use strict';
/*
* underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click',function () {
    const text = document.querySelector('textarea').value;
    const textWithOutLineBreaks = text.replace(/(\r\n|\n|\r)/gm, ',');
    const initialWords = textWithOutLineBreaks.split(',');
    let count = 0;
    for (let myWord of initialWords) {
        let words = [];
        // Remove spaces
        let trimmedString = myWord.trim();
        // Split by '_'
        words = trimmedString.split('_');
        // Everything to lowercase
        words = [words[0].toLowerCase(), words[1].toLowerCase()];
        // UpperCase first letter of the second word and replace it
        words[1] = words[1][0].toUpperCase() + words[1].slice(1);
        console.log(words.join(''));
        count++;
        // TODO - Add padding for ✅
    }
    console.log(count);
});