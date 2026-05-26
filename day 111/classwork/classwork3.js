/* 3) შექმენი Promise, სადაც balance = 120.
2 წამში:
თუ balance >= 100 → resolve "Payment completed".
თუ არა → reject "Not enough money".
გამოიყენე სამივე: .then(), .catch(), .finally(). */

console.log();
console.log();
console.log("classwork 3");
console.log();
console.log();

let balance = 100;

const promise = new Promise((resolve, reject) => {
    if (balance >= 100){
        resolve("Payment complited");
    } else {
        reject("Not Enough money")
    }
})

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("ordered from smth.com")
})

console.log();
console.log();