/* 1) შექმენი Product კლასი.
ქონდეს:
- title
- price

getter აბრუნებდეს ფასს.
setter არ უშვებდეს 0-ზე ნაკლებ რიცხვს. */

console.log();
console.log();
console.log("Homework 1");
console.log();
console.log();

class Product{
    constructor(title, price){
        this._title = title;
        this._price = price;
    }
    get price(){
        return this._price;
    }
    set price(value){
        if(value < 0){
            console.log("Price cannot be negative");
        } else {
            this._price = value;
        }
    }
}

let product1 = new Product("Laptop", 1000);
console.log(product1.price);
product1.price = -500;
console.log(product1.price);
product1.price = 1200
console.log(product1.price);

/* 2) შექმენი Animal კლასი.
ქონდეს:
- name
- weight

getter აბრუნებდეს ცხოველის სახელს.
setter ამოწმებდეს, რომ weight იყოს დადებითი რიცხვი. */

console.log();
console.log();
console.log("homeowrk 2");
console.log();
console.log();

class Animal{
    constructor(name, weight){
        this._name = name;
        this._weight = weight;
    }
    get name(){
        return this._name;
    }
    set weight(Nweight){
        if(Nweight < 0){
            console.log("Weight cant be negative");
        } else{
            this._weight = Nweight;
        }
    }
    get weight(){
        return this._weight;
    }
}

let animal1 = new Animal("max", 45);
console.log(animal1.name);
animal1.weight = -10;
console.log(animal1.weight);
animal1.weight = 50;
console.log(animal1.weight);

/* 3) შექმენი User კლასი.
ქონდეს:
- username
- password

getter აბრუნებდეს username-ს.
setter password-ზე არ უშვებდეს 4 სიმბოლოზე ნაკლებ ტექსტს. */

console.log();
console.log();
console.log("Homework 3");
console.log();
console.log();

class User{
    constructor(username, password){
        this._username = username;
        this._password = password;
    }
    get username(){
        return this._username;
    }
    set password(value){
        if(String(value).length < 4){
            console.log("Password must be at least 4 characters");
        } else {
            this._password = value;
        }
    }
    get password(){
        return this._password;
    }
}

let user1 = new User("andria", "12345678");
console.log(user1.username);
user1.password = 123;
console.log(user1.password);
user1.password = 1111111;
console.log(user1.password);

/* 4) შექმენი Movie კლასი.
ქონდეს:
- title
- rating

setter ამოწმებდეს, რომ rating იყოს 1-დან 10-მდე.
getter აბრუნებდეს ტექსტს:
"Rating: 8" */

console.log();
console.log();
console.log("homework 4");
console.log();
console.log();

class Movie{
    constructor(title, rating){
        this._title = title;
        this._rating = rating;
    }
    get rating(){
        return ` title: ${this._title} | Rating: ${this._rating}`;
    }
    set rating(value){
        if(value < 1 || value > 10){
            console.log("raiting must be between 1 and 10");
        } else{
            this._rating = value;
        }
    }
}

let movie1 = new Movie("Harry potter", 10);
console.log(movie1.rating);
movie1.rating = 20;
movie1.rating = 0;
movie1.rating = 9.5;
console.log(movie1.rating);

/* 5) შექმენი Phone კლასი.
ქონდეს:
- brand
- storage

setter storage-ზე არ უშვებდეს უარყოფით რიცხვს.
getter აბრუნებდეს:
"Storage: 256GB" */

console.log();
console.log();
console.log("homework 5");
console.log();
console.log();

class Phone{
    constructor(brand, storage){
        this._brand = brand;
        this._storage = storage;
    }
    get storage(){
        return `Brand: ${this._brand} | Storage: ${this._storage}GB`;
    }
    set storage(value){
        if(value < 0){
            console.log("Storage cant be negative");
        } else{
            this._storage = value;
        }
    }
}

let phone1 = new Phone("samsung", 256);
console.log(phone1.storage);
phone1.storage = -56;
phone1.storage = 512;
console.log(phone1.storage);

/* 6) შექმენი Worker კლასი.
ქონდეს:
- name
- salary

setter salary-ზე არ უშვებდეს უარყოფით რიცხვს.
getter აბრუნებდეს ტექსტს:
"Salary: 3000" */

console.log();
console.log();
console.log("Homework 6");
console.log();
console.log();

class Worker{
    constructor(name, salary){
        this._name = name;
        this._salary = salary;
    }
    get salary(){
        return `Name ${this._name} | Salary: ${this._salary}$`;
    }
    set salary(value){
        if(value < 0){
            console.log("salary cant be negative");
        } else{
            this._salary = value;
        }
    }
}

let worker1 = new Worker("John", 25000);
console.log(worker1.salary);
worker1.salary = -10000000000;
worker1.salary = 5000000000;
console.log("worker1.salary");

console.log();
console.log();asdasd