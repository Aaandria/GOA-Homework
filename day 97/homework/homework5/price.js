// import { cart } from ‘./cart.js’;
// export function getTotal() {
// return cart.reduce((a, b) => a + b, 0);
// }

// price.js-ში cart.js-ის დაიმპორტებით წრიული დამოკიდებულება იქმნება.

export function getTotal(cart) {
    return cart.reduce((a, b) => a + b, 0);
}