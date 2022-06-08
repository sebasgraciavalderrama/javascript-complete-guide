'use strict';

const poll = {
    question: 'Waht is your favorite programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    consoleLoggedQuestion () {
        console.log('What is your favourite programming language?');
        for (let answer of this.options){
            console.log(answer);
        }
        console.log('(Write option number)')
    },
    answerPollQuestion () {
        const choice = Number(prompt('What is your favourite programming language?'));
        if (choice in [0, 1, 2, 3]) {
            console.log(this.answers[choice]);
            this.answers[choice] += 1;
        } else {
            console.log('Please input a valid option (0,1,2,3)');
        }

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.answerPollQuestion.bind(poll));
poll.consoleLoggedQuestion();
poll.displayResults.call({answers: [5,2,3]}, 'string');