/* 7) შექმენი კლასი Vehicle, რომელსაც ექნება brand. დაამატე static მეთოდი compare(v1, v2) (შეადაროს ბრენდები). 
შექმენი კლასი Car, რომელიც extends Vehicle-ს და გამოიყენე super.*/

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    static compare(v1, v2) {
        return v1.brand === v2.brand;
    }
}

class Car extends Vehicle {
    constructor(brand) {
        super(brand);
    }
}

const car1 = new Car("Toyota");
const car2 = new Car("Honda");
const car3 = new Car("Toyota");
console.log(Vehicle.compare(car1, car2));
console.log(Vehicle.compare(car1, car3));