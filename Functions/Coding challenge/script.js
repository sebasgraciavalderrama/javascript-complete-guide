'use strict';

const poll = {
    question: 'Waht is your favorite programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer () {
        console.log('What is your favourite programming language?');
        for (let answer of this.options){
            console.log(answer);
        }
        console.log('(Write option number)')
    },
    increasePollAnswer (answer = 2) {
        if (answer) {

            console.log(this.answers[answer]);
            this.answers[answer] = 1;
            console.log(this.answers);
        } else {
            console.log('Please input a valid option (0,1,2,3)');
        }
    },
};
poll.registerNewAnswer();

const choice = Number(prompt('What is your favourite programming language?'));
document.querySelector('.poll').addEventListener('click', poll.increasePollAnswer(choice).bind(poll)); //TODO


