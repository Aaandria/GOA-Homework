/* 3) შექმენი Promise, სადაც fileSize = 8.
2 წამში:
თუ fileSize <= 10 → resolve "File uploaded".
თუ არა → reject "File is too large". */

console.log();
console.log();
console.log("Homework 3");
console.log();
console.log();

let fileSize = 8;

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if(fileSize <= 10){
            resolve("File uploaded");
        } else{
            reject("File is too large");
        }
    }, 2000)
})

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log();
    console.log();
})