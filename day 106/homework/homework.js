/* 1) რა არის კლასის მთავარი მიზანი OOP-ში?
ახსენე როგორ გვეხმარება მონაცემების ორგანიზებაში. */

// კლასის მთავარი მიზანი OOP-ში არის მონაცემების და ფუნქციონალის ორგანიზება ერთიან ერთეულში, 
// რომელიც წარმოადგენს ობიექტს. კლასები გვეხმარება მონაცემების ორგანიზებაში, 
// რადგან ისინი საშუალებას გვაძლევენ შევქმნათ ობიექტები, რომლებიც იზიარებენ საერთო თვისებებს და მეთოდებს, 
// რაც ამარტივებს კოდის წაკითხვას.

/* 2) შექმენი Animal კლასი:
name
sound
და მეთოდი makeSound(). */

console.log("homework 2");

class Animal {
    constructor(name, sound) {
        this.name = name;  // dog
        this.sound = sound;  // woof
    }
    makeSound() {
        return `${this.name} makes ${this.sound} sound`;
    }
}

const dog = new Animal("Dog", "Woof"); // {name: "Dog", sound: "Woof"}
console.log(dog.makeSound());

/* 3) ახსენი რას ნიშნავს:
“მონაცემებზე კონტროლი” */

// მონაცემებზე კონტროლი ნიშნავს, რომ ჩვენ ვაკონტროლებთ, თუ როგორ ხდება მონაცემების წვდომა და ცვლილება ობიექტში,
// რაც დაგვეხმარება დავიცვათ მონაცემები არასწორი გამოყენებისგან და შევინარჩუნოთ ობიექტის მთლიანობა.

/* 4) შექმენი Employee კლასი:
fullName
salary
და მეთოდი showInfo(). */

console.log("homework 4");

class Employee {
    constructor(fullName, salary) {
        this.fullName = fullName;
        this.salary = salary;
    }
    showInfo() {
        return `Employee: ${this.fullName}, Salary: ${this.salary}`;
    }
}

const employee1 = new Employee("Alice Smith", 50000);
console.log(employee1.showInfo());

/* 5) რა პრობლემა შეიძლება მოხდეს, თუ ყველა property public იქნება? */

// თუ ყველა property public იქნება, შეიძლება მოხდეს მონაცემების არასწორი გამოყენება ან შეცვლა,
// რამაც შეიძლება გამოიწვიოს ობიექტის მდგომარეობის არასწორი მართვა და შეცდომები პროგრამაში.

/* 6) შექმენი Laptop კლასი:
brand
price
და მეთოდი getPrice(). */

console.log("homework 6");

class Laptop {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    getPrice() {
        return `The price of ${this.brand} laptop is ${this.price}`;
    }
}

const laptop1 = new Laptop("Dell", 1200);
console.log(laptop1.getPrice());

/* 7) ახსენი რას აკეთებს this keyword. */

// this keyword - არის სპეციალური სიტყვა, რომელიც მიუთითებს ობიექტზე, რომლის კონტექსტშიც ის გამოიყენება.
// კლასის მეთოდებში, this მიუთითებს ობიექტზე, რომელიც ქმნის მეთოდის გამოძახებას, 
// რაც საშუალებას გვაძლევს მივწვდეთ და შევცვალოთ ობიექტის თვისებები და მეთოდები.

/* 8) შექმენი Account კლასი private field-ით:
#money */

console.log("homework 8");

class Account {
    #money;
    constructor(money) {
        this.#money = money;
    }
    getMoney() {
        return `The account balance is ${this.#money}`;
    }
    deposit(amount) {
        this.#money += amount;
        console.log(`Deposited ${amount}. New balance: ${this.#money}`);
    }
    withdraw(amount) {
        if (amount > this.#money) {
            console.log("Insufficient funds");
        }
        else {
            this.#money -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.#money}`);
        }
    }
}

const account1 = new Account(1000);
console.log(account1.getMoney());
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);