/* 4) შექმენი Promise, სადაც password = "12345".
1 წამში:
თუ პაროლი ტოლია "admin123" → resolve "Welcome admin".
თუ არა → reject "Wrong password". */

console.log();
console.log();
console.log("classwork 4");
console.log();
console.log();

password = "12345";

const promise = new Promise((reserve, reject) => {
    setTimeout(() => {
        if (password === "admin123"){
            resolve("Welcome admin");
        } else {
            reject("Wrong password")
        }
    }, 1000)
})

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Login attempt finished")
})

console.log();
console.log();