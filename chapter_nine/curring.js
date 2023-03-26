// function add(a, b, c) {
//     return a+ b+ c   
// }

// console.log(add(5, 10, 15))


function curring(a){
    return  function (b) {
        return  function (c) {
            return a+ b+ c
        }
    }
}

var result = curring(5)(10)(15)
console.log(result)