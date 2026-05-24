/* 1) შექმენი კლასი User, რომელსაც ექნება name. დაამატე static property count. კონსტრუქტორში გაზარდე count. 
შექმენი კლასი Admin, რომელიც extends User-ს და გამოიყენე super. შეამოწმე რამდენი ობიექტი შეიქმნა.
შექმენი კლასი Vehicle, რომელსაც ექნება brand. დაამატე static მეთოდი compare(v1, v2) (შეადაროს ბრენდები). 
შექმენი კლასი Car, რომელიც extends Vehicle-ს და გამოიყენე super. */

class User {
    static count = 0;
    constructor(name) {
        this.name = name;
        User.count++;
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
    }
}

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

const user1 = new User("Alice");
const user2 = new User("Bob");
const admin1 = new Admin("Charlie");

console.log(User.count); 

const car1 = new Car("Toyota");
const car2 = new Car("Honda");
const car3 = new Car("Toyota");
console.log(Vehicle.compare(car1, car2)); 
console.log(Vehicle.compare(car1, car3));

