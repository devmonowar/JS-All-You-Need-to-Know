function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name + '!'
    }

    return greetings
}
var gm = greet('Good Morning')
// console.log(typeof gm)

var msg = gm('Monowar Hossain')

console.log(msg)

