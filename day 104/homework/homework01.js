/* 2) შექმენი კლასი Product, რომელსაც ექნება name და price. შექმენი კლასი DiscountedProduct, რომელიც extends Product-ს.
 გამოიყენე super და დაამატე discount. შექმენი მეთოდი getFinalPrice(). */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class DiscountedProduct extends Product {
    constructor(name, price, discount) {
        super(name, price);
        this.discount = discount;
    }

    getFinalPrice() {
        return this.price - (this.price * this.discount);
    }
}

const product1 = new DiscountedProduct("Laptop", 1000, 0.2);
console.log(product1.getFinalPrice()); 

