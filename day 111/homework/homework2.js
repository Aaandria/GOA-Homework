/* 2) შექმენი Promise, სადაც isSubscribed = false.
1 წამში:
თუ true → resolve "Premium access granted".
თუ false → reject "You need subscription". */

console.log();
console.log();
console.log("Homework 2");
console.log();
console.log();

let isSubscribed = false;

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if(isSubscribed){
            resolve("Premium access granted");
        } else{
            reject("You need subscription");
        }
    }, 1000)
});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log();
    console.log();
})