/* 1)  შექმენი Payment კლასი.
მონაცემები: თანხა (amount)
ლოგიკა:
თუ თანხა > 200 ->10% ფასდაკლება
შემდეგ დაემატოს 2% საკომისიო
თუ საბოლოო თანხა > 300 ->დამატებით 5 ლარი
დაბრუნდეს საბოლოო გადასახდელი თანხა */

console.log("Classwork 1");

class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {
        let total = this.amount;
        if (total > 200) {
            total -= total * 0.1;
        }
        total += total * 0.02;
        if (total > 300) {
            total += 5;
        }
        return total;
    }
}

const payment1 = new Payment(250);
console.log(payment1.calculateTotal());