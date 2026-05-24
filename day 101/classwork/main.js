// 1) შექმენი class Person, რომლის constructor იღებს name და age მნიშვნელობებს და ინახავს ობიექტში.

console.log("classwork 1");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("Nika", 25);
console.log(person1.name);
console.log(person1.age);

// 2) შექმენი class Car, რომლის constructor იღებს brand და model და ავტომატურად ამატებს year = 2020 (default მნიშვნელობა).

console.log("classwork 2");

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.year = 2020;
    }
}
const car1 = new Car("Toyota", "corolla");
console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);

// 3) შექმენი class Student, რომლის constructor იღებს name, ხოლო grade-ს აყენებს default-ად 0.

console.log("classwork 3");

class Student {
    constructor(name) {
        this.name = name;
        this.grade = 0;
    }
}
const student1 = new Student("andria");
console.log(student1.name);
console.log(student1.grade);

// 4) შექმენი class Rectangle, რომლის constructor იღებს width და height.

console.log("classwork 4");

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.width);
console.log(rectangle1.height);

// 5) შექმენი class User, რომლის constructor იღებს username და password.

console.log("classwork 5");

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const user1 = new User("andria123", "12345678");
console.log(user1.username);
console.log(user1.password);