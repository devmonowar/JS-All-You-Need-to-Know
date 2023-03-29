function add(a, b) {
    return a+b
}

var sum = add
console.log(sum(2,4))

var arr = []
arr.push(sum)
console.log(arr[0](2, 5))


var obj = {
    sum: add
}
console.log(obj.sum(5, 6))

setTimeout(function() {
    console.log(sum(2,8))
}, 100);

console.log('This is comment')