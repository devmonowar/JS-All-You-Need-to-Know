var date = new Date()

var today = date.getDate()

switch (today) {
    case 0:
        console.log("today is Sunday")
        break;
    case 1:
        console.log("today is Monday")
        break;
    case 2:
        console.log("today is Thusday")
        break;
    case 3:
        console.log("today is Webnesday")
        break;
    case 4:
        console.log("today is Thersday")
        break;
    case 5:
        console.log("today is Friday")
        break;
    case 6:
        console.log("today is Saterday")
        break;
    default:
        console.log('Not a valid number');
        console.log(today);
        break;
}