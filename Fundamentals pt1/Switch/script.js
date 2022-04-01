const day = 'monday';

switch (day) {
    case "monday": // day === 'monday'
        console.log('Plan course structure!');
        console.log('Go to coding meetup');
        break;
    case "tuesday":
        console.log('Prepare theory videos.');
        break;
    case "wednesday":
        console.log('Write code examples');
        break;
    case "thursday":
        console.log('Record videos');
        break;
    case "friday":
        console.log('Have beer');
        break;
    default:
        console.log('Not a valid day.');
        break;
}