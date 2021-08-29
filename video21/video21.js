console.log('Hello world from HTML')

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [
    { name: 'Eric', age: 25 },
    { name: 'ABC', age: 29 },
    { name: 'Monica', age: 25 },
    { name: 'Ross', age: 24 },
    { name: 'Hoi Dan IT', age: 35 },
]
//filter, find

let filter = arr.find((item, index) => {
    return item && item.age === 55;
});

console.log(filter)
