/* 5) შექმენი BankAccount კლასი.
მონაცემები: balance
ლოგიკა:
შექმენი შიდა მეთოდი _getFee(amount) →
თუ amount > 500 → 2%
სხვა შემთხვევაში → 1%
withdraw(amount):
დაითვალოს საკომისიო _getFee-ით
განახლდეს ბალანსი
დააბრუნოს ახალი ბალანსი toFixed(2)
დაბეჭდე console.log */

console.log("Classwork 5");

class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    _getFee(amount) {
        return amount > 500 ? amount * 0.02 : amount * 0.01;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            return "არასაკმარისი თანხა";
        }
        const fee = this._getFee(amount);
        this.balance -= (amount + fee);
        return this.balance.toFixed(2);
    }
}

const account2 = new BankAccount(1000);
console.log(account2.withdraw(600));
console.log(account2.withdraw(300));
console.log(account2.withdraw(200));