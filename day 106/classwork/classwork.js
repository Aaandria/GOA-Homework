/* 1)რა არის Encapsulation JavaScript-ში?
მოკლედ ახსენი შენი სიტყვებით და დაწერე, რატომ გამოიყენება OOP-ში. */

// encapsulation - არის ობიექტის მონაცემების და მეთოდების დამალვა

/* 2) შექმენი User კლასი, რომელსაც ექნება:
name
age
და დაამატე მეთოდი getInfo(), რომელიც დააბრუნებს ტექსტს:
"My name is _ and I am _ years old" */

console.log("classwork 2");

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `My name is ${this.name} and I am ${this.age} years old`;
    }
}

const user1 = new User("John", 30);
console.log(user1.getInfo());


/* 3) ახსენი რას ნიშნავს, როცა ვამბობთ:
“ობიექტის მონაცემების დაცვა” */

// ობიექტის მონაცემების დაცვა ნიშნავს, რომ ჩვენ ვცდილობთ დავიცვათ ობიექტის მონაცემები არასწორი გამოყენებისგან ან შეცვლისგან.

/* 4) შექმენი BankAccount კლასი:
owner
balance
და დაამატე:
deposit(amount)
withdraw(amount)
მეთოდები. */

console.log("classwork 4");

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        }
        else {            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        }
    }
}

const account1 = new BankAccount("Alice", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);

/* 5)რა განსხვავებაა:
პირდაპირ property-ზე წვდომას
და method-ის გამოყენებას შორის? */

// პირდაპირ property-ზე წვდომა ნიშნავს, რომ ჩვენ პირდაპირ ვწვდებით ობიექტის მონაცემებს და ვცვლით მათ
// method-ის გამოყენება ნიშნავს, რომ ჩვენ ვიძახებთ ობიექტის მეთოდს, რომელიც თავის მხრივ მართავს მონაცემებს

/* 6) ექმენი Car კლასი:
brand
year
და მეთოდი carInfo().

შემდეგ შექმენი 2 ობიექტი. */

console.log("classwork 6");

class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    carInfo() {
        return `This car is a ${this.brand} from ${this.year}`;
    }
}
const car1 = new Car("Toyota", 2020);
const car2 = new Car("Honda", 2018);
console.log(car1.carInfo());
console.log(car2.carInfo());

// 7) ახსენი რას აკეთებს constructor.

// constructor არის სპეციალური მეთოდი, რომელიც გამოიყენება კლასის ობიექტების შექმნისას.

/* 8) რა არის Private Field JavaScript-ში?
ახსენე რატომ იწყება # სიმბოლოთი. */

// Private Field არის კლასის შიგნით არსებული მონაცემები, რომელიც არ არის ხელმისაწვდომი კლასის გარეთ.
//  # სიმბოლო გამოიყენება იმისთვის, რომ აღნიშნოს, რომ ეს არის private field და არ უნდა იყოს წვდომა მას კლასის გარეთ.