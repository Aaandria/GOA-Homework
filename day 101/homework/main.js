// 1) შექმენი კლასი User, რომელსაც კონსტრუქტორში გადაეცემა name და age, და ობიექტის შექმნისას შეინახე ეს მნიშვნელობები.
//  შემდეგ შექმენი ორი განსხვავებული მომხმარებელი და დაბეჭდე მათი მონაცემები კონსოლში.

console.log("homework 1");

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user1 = new User("andria", 25);
const user2 = new User("nika", 30);

console.log("User 1:");
console.log(user1.name);
console.log(user1.age);

console.log("User 2:");
console.log(user2.name);
console.log(user2.age);

// 2) შექმენი კლასი Car, რომელსაც კონსტრუქტორში გადაეცემა brand, model და year, და შექმენი მინიმუმ 3 მანქანის ობიექტი.

console.log("homework 2");

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const car1 = new Car("Toyota", "corolla", 2020);
const car2 = new Car("Honda", "civic", 2019);
const car3 = new Car("Ford", "mustang", 2021);

console.log("Car 1:");
console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);

console.log("Car 2:");
console.log(car2.brand);
console.log(car2.model);
console.log(car2.year);

console.log("Car 3:");
console.log(car3.brand);
console.log(car3.model);
console.log(car3.year);

// 3) შექმენი კლასი Book, სადაც კონსტრუქტორი მიიღებს title, author და pages, შემდეგ შექმენი ერთი წიგნი და დაბეჭდე მისი ყველა თვისება.

console.log("homework 3");

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);

console.log(book1.title);
console.log(book1.author);
console.log(book1.pages);

// 4) შექმენი კლასი Student, რომელსაც კონსტრუქტორში ექნება name, surname და grade, და შექმენი 5 სტუდენტი მასივში.

console.log("homework 4");

class Student {
    constructor(name, surname, grade) {
        this.name = name;
        this.surname = surname;
        this.grade = grade;
    }
}

const students = [
    new Student("andria", "gogoladze", 85),
    new Student("nika", "smith", 90),
    new Student("luka", "johnson", 78),
    new Student("saba", "brown", 92),
    new Student("mari", "davis", 88)
];

students.forEach((student, index) => {
    console.log(`Student ${index + 1}:`);
    console.log(student.name);
    console.log(student.surname);
    console.log(student.grade);
});

// 5) შექმენი კლასი Product, სადაც კონსტრუქტორი მიიღებს name და price, და შექმენი 3 პროდუქტი, შემდეგ კონსოლში გამოიტანე მხოლოდ მათი ფასები.

console.log("homework 5");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
const product3 = new Product("Headphones", 150);

console.log("Product Prices:");
console.log(product1.price);
console.log(product2.price);
console.log(product3.price);

// 6) https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

function combat(health, damage) {
  if(health < damage){
    return +0
  }
  return health - damage
}

// 7) https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

function dutyFree(normPrice, discount, hol){
  return Math.floor(hol / ((normPrice * discount) / 100))
}       

