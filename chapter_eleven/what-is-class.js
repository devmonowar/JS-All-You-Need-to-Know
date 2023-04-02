Class Rect{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    calculateArea (){
        return this.width * this.height
    },
    calculateRange (){
        return 2 * (this.width + this.height)
    }
}

var rect = new Rect(10, 20)
var rect2 = new Rect(70, 46)
var rect = new Rect(7, 6)