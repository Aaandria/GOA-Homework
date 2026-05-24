/* 2) შექმენი BankAccount კლასი.
მონაცემები: ბალანსი (balance)
ლოგიკა (withdraw მეთოდში):
თუ თანხა > ბალანსი ->"არასაკმარისი თანხა"
თუ თანხა > 500 ->2% საკომისიო
სხვა შემთხვევაში ->1%
ბოლოს განაახლე ბალანსი და დააბრუნე შედეგი */

class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            return "არასაკმარისი თანხა";
        }
        let commission = amount > 500 ? amount * 0.02 : amount * 0.01;
        this.balance -= (amount + commission);
        return this.balance;
    }
}

const account1 = new BankAccount(1000);
console.log(account1.withdraw(600));
console.log(account1.withdraw(300));
console.log(account1.withdraw(200));
