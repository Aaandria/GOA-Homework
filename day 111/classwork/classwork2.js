/* 2) შექმენი Promise, სადაც age = 18.
setTimeout-ით 1 წამში:
თუ ასაკი >= 18 → resolve "Access granted".
სხვა შემთხვევაში → reject "Access denied".
ბოლოში .finally()-ში გამოიტანე "Check finished". */

console.log();
console.log();
console.log("classwork 2");
console.log();
console.log();

let age = 18;

const promise = new Promise((resolve, reject) => {
    if(age >= 18){
        resolve("Access granted");
    } else{
        reject("access denied");
    }
})

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("check finished")
})

console.log();
console.log();