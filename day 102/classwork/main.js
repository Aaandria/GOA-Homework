// 1) დაამატე BankAccount კლასში მეთოდი, რომელიც თანხის გამოტანისას აკლებს 2% საკომისიოს.

console.log("classwork 1");

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

    withdraw(amount) {
    const Tax = amount * 0.02;
    const totalAmount = amount + Tax;
    if (totalAmount > this.balance) {
        console.log("არ არის საკმარისი თანხა ანგარიშზე.");
        return;
    }
    this.balance -= totalAmount;
    console.log(`თქვენ ამოიღეთ ${amount} ლარი. საკომისიო: ${Tax} ლარი. დარჩენილი ბალანსი: ${this.balance} ლარი.`);
  }
}

const myAccount = new BankAccount(1000);
myAccount.withdraw(200);

// 2) შექმენი Product კლასი, რომელსაც ექნება ფასი (price) და მეთოდი getFinalPrice(), რომელიც დააბრუნებს ფასს 18% დღგ-ს დამატებით.

console.log("classwork 2");

class Product {
    constructor(price) {
        this.price = price;
    }

    getFinalPrice() {
        const VAT = this.price * 0.18;
        return this.price + VAT;
    }
}

const product1 = new Product(100);
console.log(`პროდუქტის საბოლოო ფასი დღგ-ს დამატებით: ${product1.getFinalPrice()} ლარი.`);

// 3) შექმენი Shop კლასი, სადაც იქნება პროდუქტის ყიდვის მეთოდი. ყიდვისას დაემატოს 5% საკომისიო მთლიან თანხაზე.

console.log("classwork 3");

class Shop {
    buyProduct(price) {
        const Tax = price * 0.05;
        const totalPrice = price + Tax;
        console.log(`პროდუქტის ფასი: ${price} ლარი. საკომისიო: ${Tax} ლარი. საბოლოო ფასი: ${totalPrice} ლარი.`);
    }
}

const myShop = new Shop();
myShop.buyProduct(200);

// 4) შექმენი Employee კლასი, რომელსაც ექნება ხელფასი (salary) და მეთოდი, რომელიც დააკლებს 20% გადასახადს და დააბრუნებს სუფთა ხელფასს.

console.log("classwork 4");

class Employee {
    constructor(salary) {
        this.salary = salary;
    }
    getNetSalary() {
        const tax = this.salary * 0.2;
        return this.salary - tax;
    }
}

const employee1 = new Employee(3000);
console.log(`სუფთა ხელფასი გადასახადის შემდეგ: ${employee1.getNetSalary()} ლარი.`);

// 5) შექმენი Loan კლასი, სადაც იქნება სესხის თანხა (amount) და პროცენტი (interest). დაწერე მეთოდი, რომელიც გამოთვლის საბოლოო გადასახდელ თანხას.

console.log("classwork 5");

class Loan {
    constructor(amount, interest) {
        this.amount = amount;
        this.interest = interest;
    }
    
    getTotalAmount() {
        const interestAmount = this.amount * (this.interest / 100);
        return this.amount + interestAmount;
    }
}

const loan1 = new Loan(5000, 10);
console.log(`სესხის საბოლოო გადასახდელი თანხა: ${loan1.getTotalAmount()} ლარი.`);