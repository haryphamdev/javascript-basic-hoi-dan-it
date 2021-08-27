console.log('Hello world from HTML')

let arrTop4 = ['Live', 'Chelsea', 'Mu', 'Man city']

let i = 0;
while (i < arrTop4.length) {
    i++;
    if (arrTop4[i] === 'Chelsea') {
        console.log('Found it: ', arrTop4[i])
        continue;
    }

    console.log('>>> check i: ', i)

}