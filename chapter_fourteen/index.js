function extend(Parent, Child) {
    Child.prototype = Object.create(Shape.prototype)
    Child.prototype.constructor = Child
}

function Shape(color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('I am Common Method')
}


function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function () {
    console.log('Drawing')
}



// var shap = new Shape()

var sqr = new Square(45, 'green')


function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}
extend(Shape, Circle)