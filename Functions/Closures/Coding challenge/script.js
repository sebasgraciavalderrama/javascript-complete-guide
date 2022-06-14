'use strict';
const header = document.querySelector('h1');
(function () {
    header.style.color = 'red';
})();

document.body.addEventListener('click', function () {
    header.style.color = 'blue';
});

// Expected solution
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();