console.log('Hello world with HTML')

let day = '';
let a = 2;
switch (a) {
    case 0:
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log('check day: ', day, new Date().getDay())