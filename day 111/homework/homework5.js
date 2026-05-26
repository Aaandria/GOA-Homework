/* 5) შექმენი Promise, სადაც coins = 250.
2 წამში:
თუ coins >= 200 → resolve "You can buy the item".
თუ არა → reject "Not enough coins". */

console.log();
console.log();
console.log("homework 5");
console.log();
console.log();

let coins = 250;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(coins >= 200){
            resolve("you can buy the item");
        } else{
            reject("not enough coins");
        }
    }, 2000)
})

promise.then((result) => {
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(() => {
    console.log();
    console.log();
})