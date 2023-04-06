// import '../styles/index.scss'

// import { sum, sub  } from './math'

// console.log('Hello Webpack 4')

// console.log(sum(10, 20))
// console.log(sub(10, 20))

// alert('Hello Catians')

// var age = 16
// var fname = 'Monowar Hossain'

// console.log(`My name is ${fname} and I am ${age} years old. I am ${age < 18 ? 'not ' : ''}adult`)

// console.log(fname.padStart(25, '*'))
// console.log(fname.padEnd(25, 'a'))
// console.log('S'.repeat(10))


// function add(a, b) {
//     return a+b
// }

// let add = x => {
//     return a + b
// }

// console.log(add(4, 5))

// let add = x => x*x;
// console.log(add(5))
// console.log('test')



// let obj = {
//     fname: 'Monowar Hossain',
//     print: function(){
//         setTimeout(() => {
//             console.log(this)
//             console.log(`Hello, ${this.fname}`)
//         }, 1000)
//     }
// }
// obj.print()



// 148. Object From Entries in Javascript


var obj = {
    a: 10,
    b: 20,
    c: 20,
    d: 20,
    e: 20,
}

console.log(Object.entries(obj))


objArr = [
    ['a', 10],
    ['b', 20],
    ['c', 30],
    ['d', 40],
]

console.log(Object.fromEntries(objArr))