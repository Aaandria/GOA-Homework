/* 1) შექმენი Promise, რომელიც 2 წამში დააბრუნებს ტექსტს "Login successful".
თუ isLoggedIn = true არის → resolve.
თუ false → reject "Login failed".
გამოიყენე .then(), .catch() და .finally(). */

console.log();
console.log();
console.log("classwork 1");
console.log();
console.log();

const promise = new Promise((resolve, reject) => {
  const isLoggedIn = true; // ან false
  setTimeout(() => {
    if (isLoggedIn) {
      resolve("Login successful");
    } else {
      reject("Login failed");
    }
  }, 2000);
});

promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("Check finished");
});

console.log();
console.log();