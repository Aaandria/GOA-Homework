/* 3) შექმენი Salary კლასი.
მონაცემები: ხელფასი (amount)
ლოგიკა:
20% გადასახადი
თუ დარჩენილი > 2000 ->დამატებით 5%
თუ < 500 ->არ აკლდება გადასახადი
დააბრუნე სუფთა ხელფასი */

console.log("Classwork 3");

class Salary {
    constructor(amount) {
        this.amount = amount;
    }
    calculateNetSalary() {
        let tax = this.amount * 0.2;
        let netSalary = this.amount - tax;
        if (netSalary > 2000) {
            netSalary += netSalary * 0.05;
        } else if (netSalary < 500) {
            netSalary += tax; // არ აკლდება გადასახადი
        }
        return netSalary;
    }
}

const salary1 = new Salary(3000);
console.log(salary1.calculateNetSalary());