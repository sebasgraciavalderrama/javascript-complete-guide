const language = prompt('Please input a language: (mandarin, spanish, english, hindi, arabic)')

switch (language) {
    case "mandarin": // day === 'monday'
        console.log('MOST number of native speakers!');
        break;
    case "spanish":
        console.log('2nd place in number of native speakers');
        break;
    case "english":
        console.log('3rd place');
        break;
    case "hindi":
        console.log('Number 4');
        break;
    case "arabic":
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}