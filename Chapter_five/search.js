var arr = [34, 45, 56, 23, 67, 56]

var find = 23
var isFound = false

for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] == find) {
        console.log('Found data and index number is: ' + i )
        isFound = true
        break;
    }   
}

if (!isFound) {
    console.log('Data not found')
}