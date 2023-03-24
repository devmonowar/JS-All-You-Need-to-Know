var arr1 = [23, 34, 45, 45]
var arr2 = [83, 34, 45, 45]
var arr3 = [23, 64, 45, 95]


function SomeOfArray(arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}


SomeOfArray(arr1)
SomeOfArray(arr2)
SomeOfArray(arr3)