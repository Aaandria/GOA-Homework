// import ‘./cart.js’;

// ახლა ყველაფერი app.js-ში დავაიმპორტოთ და გამოვიტანოთ

import { cart } from './cart.js';
import { getTotal } from './price.js';
console.log("Cart:", cart);
console.log("Total:", getTotal(cart));