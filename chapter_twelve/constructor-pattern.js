var createRect = function (width, height) {
    this.width = width;
    this.height = height;
  
    this.draw = function () {
      return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
    };
  };
  
  var rect1 = new createRect(57, 105).draw();
  console.log(rect1);
  
  var rect2 = new createRect(550, 1500).draw();
  console.log(rect2);