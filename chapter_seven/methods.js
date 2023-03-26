var obj = {
    x: 40,
    y: 60,
    z: 75
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// var obj2 = obj
// obj2.x = 50
// console.log(obj2)

// console.log('x' in obj)
// console.log('p' in obj)

var obj2 = Object.assign({}, obj)
obj2.x = 100


console.log(obj)
console.log(obj2)