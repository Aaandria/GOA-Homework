/* 5) შექმენი Promise, სადაც temperature = 35.
2 წამში:
თუ temperature > 30 → resolve "Hot weather".
თუ არა → reject "Cold weather". */

console.log();
console.log();
console.log("classwork 5");
console.log();
console.log();

let temperature = 35;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (temperature > 30){
            resolve("Hot weather");
        } else {
            reject("Cold weather")
        }
    }, 2000);
})

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}
).finally(() => {
    console.log("Weather check finished")
})

console.log();
console.log();