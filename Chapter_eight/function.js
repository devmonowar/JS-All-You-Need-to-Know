// var arr1 = [23, 34, 45, 45]
// var arr2 = [83, 34, 45, 45]
// var arr3 = [23, 64, 45, 95]


// function SomeOfArray(arr) {
//     var sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }


// SomeOfArray(arr1)
// SomeOfArray(arr2)
// SomeOfArray(arr3)



// var addition = function (a, b) {
//     return a+b
// }

// setTimeout( function() {
//     console.log('this is normal text')
// } ,5000)


// var another = addition

// // addition(10, 20)

// console.log(another(30, 20))



// function Something(greet, name) {

//     function SayHi() {
//         console.log(greet, name)        
//     }
//     SayHi()
    
// }

// console.log(Something('Hello', 'Monowar Hossain'))

function Something(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    var message = greet + ' ' + getFirstName()
    console.log(message)
}
Something('Good Night', 'Monowar Hossain')