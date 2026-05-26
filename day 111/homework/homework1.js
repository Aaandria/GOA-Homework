/* 1) შექმენი Promise, სადაც serverStatus = 500.
2 წამში:
თუ serverStatus === 200 → resolve "Server works correctly".
თუ არა → reject "Server error". */

console.log();
console.log();
console.log("Homework 1");
console.log();
console.log();

let serverStatus = 500;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(serverStatus === 200){
            resolve("server works correctly");
        } else{
            reject("server error");
        }
    }, 2000)
})

promise.then((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() =>{
    console.log();
    console.log();
})