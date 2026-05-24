/* 5) შექმენი კლასი Shape, რომელსაც ექნება color. შექმენი კლასი Rectangle, რომელიც extends Shape-ს. 
გამოიყენე super და დაამატე width და height. შექმენი მეთოდი getArea().*/

class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rectangle1 = new Rectangle("red", 5, 10);
console.log(rectangle1.getArea());