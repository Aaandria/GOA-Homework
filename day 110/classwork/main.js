/* 1) შექმენი მშობელი კლასი User, რომელსაც ექნება:
- name

და მეთოდი:
info()

შემდეგ შექმენი კლასი Admin, რომელიც extends გამოიყენებს.

Admin კლასში:
- დაამატე private field #password
- გამოიყენე super
- override გაუკეთე info() მეთოდს

ასევე დაამატე getter და setter `password`-ისთვის. */

console.log();
console.log();
console.log();
console.log("classwork 1");
console.log();
console.log();
console.log();

class User {
    constructor(name) {
        this.name = name;
    }
    info() {
        console.log(`User: ${this.name}`);
    }
}
class Admin extends User {
    #password
    constructor(name, password) {
        super(name);
        this.#password = password;
    }
    info() {
        console.log(`Admin: ${this.name}`);
    }
    get password() {
        return this.#password;
    }
    set password(newPassword) {
        this.#password = newPassword;
    }
}

const user = new User("John");
const admin = new Admin("Jane", "secret");

user.info();
console.log();
admin.info();
console.log();
console.log(admin.password);
console.log();
admin.password = "newpassword";
console.log(admin.password);

/* 2) შექმენი კლასი BankAccount, რომელსაც ექნება:
- private field #balance

დაამატე:
- getter balance
- setter balance

შემდეგ შექმენი კლასი PremiumAccount, რომელიც extends გამოიყენებს.

PremiumAccount კლასში override გაუკეთე მეთოდს:
showBalance()

და გამოიყენე super. */

console.log();
console.log();
console.log();
console.log("classwork 2");
console.log();
console.log();
console.log();

class BankAccount {
    #balance
    constructor(Balance) {
        this.#balance = Balance;
    }
    get balance() {
        return this.#balance;
    }
    set balance(newBalance) {
        this.#balance = newBalance;
    }
}
class PremiumAccount extends BankAccount {
    constructor(Balance) {
        super(Balance);
    }
    showBalance() {
        console.log(`Premium Account Balance: ${this.balance}`);
    }
}

const account = new BankAccount(1000);
const premiumAccount = new PremiumAccount(5000);
console.log(account.balance);
console.log();
account.balance = 1500;
console.log(account.balance);
console.log();
premiumAccount.showBalance();

/* 3) შექმენი კლასი Animal.
დაამატე:
- static property type = "Animal"
- მეთოდი sound()

შემდეგ შექმენი კლასი Dog, რომელმაც:
- extends გამოიყენოს
- override გაუკეთოს sound() მეთოდს
- constructor-ში გამოიყენოს super */

console.log();
console.log();
console.log();
console.log("classwork 3");
console.log();
console.log();
console.log();

class Animal {
    static type = "Animal"
    sound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    constructor() {
        super();
    }
    sound() {
        console.log("Dog barks");
    }
}
const animal = new Animal();
const dog = new Dog();
console.log(Animal.type);
console.log();
animal.sound();
console.log();
dog.sound();

/* 4) შექმენი კლასი Phone, რომელსაც ექნება:
- private field #pin
- private method #checkPin()

დაამატე:
- getter
- setter

შემდეგ შექმენი public method:
unlock()

რომელმაც უნდა გამოიძახოს private method. */

console.log();
console.log();
console.log();
console.log("classwork 4");
console.log();
console.log();
console.log();

class Phone {
    #pin
    constructor(pin) {
        this.#pin = pin;
    }
    get pin() {
        return this.#pin;
    }
    set pin(newPin) {
        this.#pin = newPin;
    }
    #checkPin(inputPin) {
        return inputPin === this.#pin;
    }
    unlock(inputPin) {
        if (this.#checkPin(inputPin)) {
            console.log("Phone unlocked");
        } else {
            console.log("Incorrect PIN");
        }
    }
}

const phone = new Phone("1234");
phone.unlock("1234");
console.log();
phone.unlock("0000");

/* 5) შექმენი კლასი Employee.
დაამატე:
- name
- მეთოდი work()

შემდეგ შექმენი კლასი Programmer, რომელიც:
- extends გამოიყენებს
- constructor-ში გამოიყენებს super
- override გაუკეთებს work() მეთოდს

ასევე დაამატე static method:
company()

რომელმაც უნდა დააბრუნოს:
"Google" */

console.log();
console.log();
console.log();
console.log("classwork 5");
console.log();
console.log();
console.log();

class Employee {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
class Programmer extends Employee {
    constructor(name) {
        super(name);
    }
    work() {
        console.log(`${this.name} is coding`);
    }
    static company() {
        return "Google";
    }
}
const employee = new Employee("Alice");
const programmer = new Programmer("Bob");
employee.work();
console.log();
programmer.work();
console.log();
console.log(Programmer.company());

console.log();
console.log();
console.log();