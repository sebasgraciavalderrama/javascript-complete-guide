'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
    //hasDriverLicense = true; Since 'use strict' is activated this line will trigger an error.
}
if (hasDriversLicense) {
    console.log('I can drive');
}