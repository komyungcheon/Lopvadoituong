class Shape {
    constructor(color,filled) {
        this.color = color;
        this.filled = filled;
    }
}
class Circle {
    constructor(color,filled,radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    getArea(){
        return this.radius * this.radius* Math.PI
    }
    getPerimeter(){
        return 2*this.radius*Math.PI
    }
}
class Square {
    constructor(color,filled,side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}
class Rectangle {
    constructor(color,filled,width,height) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.height = height;
    }
}
let shape = new Shape('red',true);
let circle = new Circle('yellow',true,4)
let square = new Square('blue',true,1)
let rectangle = new Rectangle('black',true,10,20)