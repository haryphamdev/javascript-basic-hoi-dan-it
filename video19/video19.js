console.log('Hello world from HTML')

let sum = (a, b) => {
    return a + b;
}

console.log('check sum: 9 + 6 = ', sum(9, 6))

let obj = {
    name: 'Eric',
    address: 'Ha noi',
    getName: function () {
        return this.name;
    }
}

console.log('>>> get Name obj: ', obj.getName(), obj.address)

//function vs method => reuse