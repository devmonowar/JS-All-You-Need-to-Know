var Rectangle = function(width, height){

    this.width = width
    this.height = height
    var position = {
        x: 56,
        y: -100
    }

    var printProperties = function() {
        console.log('My width is ' + this.width)
        console.log('My Height is ' + this.height)
    }.bind(this)

    this.draw = function(){
        console.log('I am a rectangle')
        printProperties()
        console.log('Position: X=' + position.x + 'Y=' + position.y)
    }
}
var rect7 = new Rectangle(45, 30)
rect7.draw(40,50)