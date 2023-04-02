// alert('Hello I am js file')

// var rect = {
//     width: 100,
//     height: 50,

//     draw: function() {
//         console.log('I am a rectangle')
//         console.log('My width is ' + this.width)
//         console.log('My Height is ' + this.height)
//     }
// }

// rect.draw()

// rect.height = 200
// rect.draw()

// function myFunc(){
//     console.log(this)
// }
// new myFunc()

var rect = {
    width: 100,
    height: 50,
  
    thisIs: function () {
      console.log(this);
    },
  
    draw: function () {
      console.log(
        'Width is ' + this.width + ' And ' + 'Height is ' + this.height
      );
    },
  };
  
  rect.thisIs();
  rect.draw();
  
  // Another
  var another = {
    width: 10,
    height: 10,
    print: rect.draw,
  };
  
  another.print();
  