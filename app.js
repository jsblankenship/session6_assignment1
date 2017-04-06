// JavaScript Document

var PI = Math.PI;

function Circle(radius){
    this.radius = radius;
}
Circle.prototype.circumference = function(){
    return this.radius * 2 * PI;
};
Circle.prototype.area = function(){
    return this.radius * this.radius * PI;
};

var circle5 = new Circle(25);
console.log(circle5.area());  