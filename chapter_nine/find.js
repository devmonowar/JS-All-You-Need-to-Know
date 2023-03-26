 var arr = [2, 5, 6, 3, 9, 6, 7, 78, 45]

// var result = arr.find(function(value){
//     return value == 9
// })

// console.log(result)

// var result = arr.findIndex(function(value){
//     return value == 9
// })

// console.log(result)

function myFind(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
       
        if (cb(arr[i])) {
             return arr[i]
           //  return i
        }        
    }    
}
var result = myFind(arr, function (value) {
    return value == 9
})

console.log(result)