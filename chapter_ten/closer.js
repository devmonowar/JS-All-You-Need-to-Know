function test() {
    var msg = 'I am Learning Lexical Scope and Closure'
    function sayMsg() {
        console.log(msg)
    }
    sayMsg()
}

test()