/* 4) შექმენი Payment კლასი.
მონაცემები: amount
ლოგიკა:
შექმენი შიდა მეთოდი _applyDiscount() → თუ amount > 200, დააკლებს 10%
მთავარი მეთოდი calculate():
გამოიძახოს _applyDiscount()
დაამატოს 2% საკომისიო
დააბრუნოს შედეგი toFixed(2)
ბოლოს console.log-ში გამოიტანე შედეგი */

console.log("Classwork 4");

class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    _applyDiscount() {
        if (this.amount > 200) {
            this.amount -= this.amount * 0.1;  //  this.amount = this.amount - this.amount * 0.1 
        }
    }
    calculate() {
        this._applyDiscount();
        this.amount += this.amount * 0.02;
        return this.amount.toFixed(2);
    }
}

const payment2 = new Payment(250);
console.log(payment2.calculate());