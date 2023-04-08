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


// var obj = {
//     a: 10,
//     b: 20,
//     c: 20,
//     d: 20,
//     e: 20,
// }

// console.log(Object.entries(obj))


// objArr = [
//     ['a', 10],
//     ['b', 20],
//     ['c', 30],
//     ['d', 40],
// ]

// console.log(Object.fromEntries(objArr))

// 152. Iterator With Symbol in Javascript

// let arr = [1, 2, 3, 4]

// let iterate = arr[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())


// let str = 'TEXT'
// let iterateText = str[Symbol.iterator]()

// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())

// for (let v of arr) {
//     console.log(v)    
// }

// for(let v of 'Monowar Hossain'){
//     console.log(v)
// }



// function* generate() {
//     yield 1,
//     yield 2,
//     yield 3,
//     yield 4
// }

// let iterate = generate()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())


// const myset =  new Set([2, 4, 3, 5])

// myset.add('Hello')
// myset.add('45')
// myset.add(4)
// myset.add(2)
// myset.add('Hello2')

// console.log(myset)
// console.log(myset.size)
// console.log(myset.has(6))


// 156. Map in Javascript


let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30],
    ['d', 40],
])


map.set('e', 50)


map.delete('c')
console.log(map.size)
console.log(map)

console.log(map.get('b'))

console.log(map.keys())
console.log(map.values())


map.forEach((v, k) => {
    console.log(k, v)
})