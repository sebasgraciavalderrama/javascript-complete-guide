'use strict';

const runOnce = function () {
    console.log('This will never run again!');
};
runOnce();

// IIFS - Pattern
(function() {
    console.log('This will never run again!');
    const isPrivate = 23; // Encapsulated only to the function (Scope)
})();

// IIFS with arrow functions
(() => console.log('This will never run again!'))();

{ //  Data privacy
    const isPrivate = 23;
    var notPrivate = 46;
}

console.log(notPrivate);
//console.log(isPrivate);
