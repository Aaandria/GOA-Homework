/* 4) შექმენი Promise, სადაც weather = "rainy".
1 წამში:
თუ weather === "sunny"→ resolve"Go outside". თუ არა → reject "Stay at home"`. */

console.log();
console.log();
console.log("Homework 4");
console.log();
console.log();

let weather = "rainy";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(weather === "sunny"){
            resolve("go outside");
        } else{
            reject("stay at home");
        }
    }, 1000)
})

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log();
    console.log();
})