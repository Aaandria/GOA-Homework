/* 1) შექმენი Person კლასი, რომელსაც ექნება:
- name
- age

გამოიყენე getter სახელისთვის.
გამოიყენე setter ასაკისთვის, რომელიც არ დაუშვებს უარყოფით რიცხვს. */

console.log("Classwork 1");

class Person{
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        }
    }
}

let person1 = new Person("Andria", 15);
console.log(person1.name);
person1.age = -5;
console.log(person1._age);
person1.age = 20;
console.log(person1._age);

/* 2) შექმენი Car კლასი.
ქონდეს:
- brand

getter აბრუნებდეს ბრენდს.
setter ცვლიდეს ბრენდს მხოლოდ მაშინ, თუ ცარიელი ტექსტი არ არის. */

console.log("Classwork 2");

class Car {
    constructor(brand) {
        this._brand = brand;
    }
    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        if (newBrand !== "") {
            this._brand = newBrand;
        }
    }
}

let car1 = new Car("Toyota");
console.log(car1.brand);
car1.brand = "";
console.log(car1._brand);
car1.brand = "Honda";
console.log(car1._brand);

/* 3) შექმენი Student კლასი.
ქონდეს:
- score

setter ამოწმებდეს, რომ ქულა იყოს 0-დან 100-მდე.
getter აბრუნებდეს:
- "Failed" თუ ქულა < 50
- "Passed" თუ ქულა >= 50 */

console.log("Classwork 3");

class Student{
    constructor(score){
        this._score = score;
    }
    get score(){
        if(this._score < 50){
            return "Failed";
        } else {
            return "Passed";
        }
    }
    set score(newScore){
        this._score = newScore;
    }
}

let student1 = new Student(45);
console.log(student1.score);
student1.score = 75;
console.log(student1.score);

/* 4) შექმენი BankAccount კლასი.
ქონდეს:
- balance

getter აბრუნებდეს ბალანსს.
setter არ აძლევდეს უფლებას ბალანსი გახდეს უარყოფითი. */

console.log("Classwork 4");

class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance >= 0) {
            this._balance = newBalance;
        } else{
            console.log("Balance cannot be negative.");
        }
    }
}

let account1 = new BankAccount(1000);
console.log(account1.balance);
account1.balance = -500;
console.log(account1.balance);
account1.balance = 1500;
console.log(account1.balance);

/* 5) შექმენი Rectangle კლასი.
ქონდეს:
- width
- height

ორივეზე გამოიყენე setter, რომელიც არ მიიღებს უარყოფით რიცხვებს.
შექმენი getter სახელად area, რომელიც დააბრუნებს ფართობს. */

console.log("Classwork 5");

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    set width(newWidth) {
        if (newWidth >= 0) {
            this._width = newWidth;
        }
    }
    set height(newHeight) {
        if (newHeight >= 0) {
            this._height = newHeight;
        }
    }
    get area() {
        return this._width * this._height;
    }
}

let rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.area);
rectangle1.width = -3;
console.log(rectangle1.area);
rectangle1.height = -4;
console.log(rectangle1.area);
rectangle1.width = 7;
rectangle1.height = 14;
console.log(rectangle1.area);