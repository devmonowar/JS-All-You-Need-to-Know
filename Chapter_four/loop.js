// for (let i = 0; i < 100; i++) {
//     console.log((i+1) + ' Monowar Hossain')
// }



// for (let index = 1; index <= 100; index++) {
//     console.log(index)
// }




// var sum = 0;

// for (var i = 1; i <= 10; i++) {
    
//     console.log(sum + '+' + i + '=' + (sum + i ));

//     sum += i
    
// }

// console.log('result =' + sum)


    var isRunning = true


    while (isRunning) {
        var rand = Math.floor(Math.random() * 10 + 1)
        if (rand == 9 ) {
            console.log('Winner Winner Chicken Dinner')
            isRunning = false
        } else {
            console.log('You have got ' + rand)
        }
    }
    