
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arr[10] = 23

// console.log(arr)

// console.log(arr.length)


var arr = [
    [45, 43, 23, 56, 67, 78],
    [47, 43, 23, 56, 67, 78],
    [48, 43, 23, 56, 67, 78],
    [55, 67, 43, 23, 56, 78],
    [85, 43, 23, 56, 67, 78]
]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log( 'Element ' + i +' '+ arr[i][j]) 
    }
}