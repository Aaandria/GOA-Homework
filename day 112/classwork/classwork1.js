// level 112:
// I) სინქრონულია
// თუ ასინქრონული?

// 1.
console.log("Hello");
console.log("World");

// სინქრონული

// 2.
console.log("Start");
setTimeout(() => {
console.log("Timeout");
}, 1000);
console.log("End");

// ასინქრონული 

// 3.
function sayHi() {
console.log("Hi");
}
sayHi();
console.log("Bye");

//  სინქრონული

// 4.
console.log("A");
console.log("B");
function greet() {
    console.log("Hello");
}
greet();
console.log("C");

// სინქრონული

// 5.
for(let i = 0; i < 3; i++) {
console.log(i);
}
// სინქრონული

// 6.
console.log("A");
setTimeout(() => {
console.log("B");
}, 0);
console.log("C");
//  ასინქრონული

// 7.
function greet() {
    console.log("Hello");
}

console.log("A");
console.log("B");
greet();
console.log("C");

// ასინქრონული

// 8.
alert("Hello");
console.log("Done");

//  სინქრონული

// 9.
console.log("1");
Promise.resolve().then(() => {
console.log("2");
});
console.log("3");

// ასინქრონული

// 10.
const nums = [1, 2, 3];
nums.forEach(num => {
console.log(num);
});

// სინქრონული