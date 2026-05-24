/* 1) შექმენი კლასი User, რომელსაც ექნება:
- name
- age

შექმენი ობიექტი და გამოიტანე ორივე მნიშვნელობა კონსოლში. */

console.log();
console.log();
console.log("Homework 1");
console.log();
console.log();

class User{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
}

const user1 = new User("andra", 15);
console.log(user1.name);
console.log(user1.age);

/* 2) შექმენი კლასი Car, რომელსაც ექნება:
- brand
- model

დაამატე მეთოდი info(), რომელიც დააბრუნებს ტექსტს:
"This car is BMW M5" */

console.log();
console.log();
console.log("Homework 2");
console.log();
console.log();

class Car{
    constructor(brand, model){
        this._brand = brand;
        this._model = model;
    }
    info(){
        return `This car is ${this._brand} ${this._model}`;
    }
}

const car1 = new Car("BMV", "M5");
console.log(car1.info());

/* 3) შექმენი კლასი MathHelper, რომელსაც ექნება static მეთოდი sum(a, b).
მეთოდმა უნდა დააბრუნოს ორი რიცხვის ჯამი.

გამოიძახე კლასი ობიექტის შექმნის გარეშე. */

console.log();
console.log();
console.log("Homework 3");
console.log();
console.log();

class MathHelper{
    static sum(a,b){
        return a + b;
    }
}

console.log(MathHelper.sum(5, 10));

/* 4) შექმენი კლასი Game, რომელსაც ექნება static property:
company = "Rockstar Games"

გამოიტანე ეს მნიშვნელობა კონსოლში. */

console.log();
console.log();
console.log("Homework 4");
console.log();
console.log();

class Game{
    static company = "Rockstar Games";
}

console.log(Game.company)

/* 5) შექმენი მშობელი კლასი Animal.
დაამატე მეთოდი sound() რომელიც დააბრუნებს:
"Animal sound"

შემდეგ შექმენი შვილობილი კლასი Dog, რომელიც extends გამოიყენებს. */

console.log();
console.log();
console.log("Homework 5");
console.log();
console.log();

class Animal{
    sound(){
        return "Animal sound";
    }
}

class Dog extends Animal{
}

const dog1 = new Dog();
console.log(dog1.sound());

/* 6) შექმენი კლასი Person.
შემდეგ შექმენი კლასი Student, რომელიც მემკვიდრეობით მიიღებს Person კლასს.

Student კლასს დაამატე:
- grade

და მეთოდი showInfo().
 */

console.log();
console.log();
console.log("Homework 6");
console.log();
console.log();

class Person{}
class Student extends Person{
    constructor(grade){
        super()
        this.grade = grade;
    }
    showInfo(){
        return `students grade is: ${this.grade}`;
    }
}

const Student1 = new Student(10);
console.log(Student1.showInfo());

/* 7) შექმენი კლასი BankAccount, რომელსაც ექნება private field:
#balance

თავიდან იყოს 0. */

/* 8) BankAccount კლასში დაამატე setter:
set balance(value)

თუ value უარყოფითია, კონსოლში გამოიტანოს:
"Invalid balance" */

/* 9) BankAccount კლასში დაამატე getter:
get balance()

getter-მა დააბრუნოს private field-ის მნიშვნელობა.*/

console.log();
console.log();
console.log("Homework 7 & 8 & 9");
console.log();
console.log();

class BankAccount{
    #balance = 0;
    showBalance(){
        return this.#balance;
    }
    set balance(value){
        if (value < 0){
            console.log("Invalid balance");
        } else {
            this.#balance = value;
        }
    }
    get balance(){
        return this.#balance;
    }
}

const Account = new BankAccount();
console.log(Account.showBalance());
Account.balance = -50;
Account.balance = 100;
console.log(Account.balance);




/* 10) შექმენი კლასი Phone, რომელსაც ექნება:
- private field #password

და setter, რომელიც შეცვლის პაროლს მხოლოდ მაშინ, თუ სიგრძე 4-ზე მეტია. */

console.log();
console.log();
console.log("Homework 10");
console.log();
console.log();

class Phone{
    #password
    get password(){
        return this.#password;
    }
    set password(value){
        if(String(value).length > 4){
            this.#password = value;
        }
    }
}

const phone1 = new Phone();
phone1.password = 1234567878;
console.log(phone1.password);
phone1.password = 123;
console.log(phone1.password);

console.log();
console.log();