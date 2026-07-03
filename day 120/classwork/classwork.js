/* 1) 

const person = {
    name: "Gio"
};

function sayHello(city) {

}
call() გამოიყენე ისე, რომ შედეგი იყოს:
Hello, my name is Gio and I live in Tbilisi */

console.log();
console.log();
console.log("classwork 1");
console.log();
console.log();

const person = {
    name: "Gio"
};

function sayHello(city){
    console.log(`Hello, my name is ${this.name} and I live in ${city}`)
}

sayHello.call(person, "Tbilisi")

/* 2)
const student = {
    name: "Nika",
    age: 18
};
function info() {

}
call()-ის გამოყენებით დაბეჭდე:
Nika is 18 years old.*/

console.log();
console.log();
console.log("classwork 2");
console.log();
console.log();

const student = {
    name: "Nika",
    age: 18
};

function info(){
    console.log(`${this.name} is ${this.age} years old.`)
}

info.call(student)

/* 3) 
const person2 = {
    name: "Ana"
};
function introduce(city, country) {

}
apply()-ის გამოყენებით დაბეჭდე:
Ana lives in Tbilisi, Georgia */

console.log();
console.log();
console.log("classwork 3");
console.log();
console.log();

const person2 = {
    name: "Ana"
};

function introduce(city, country){
    console.log(`${this.name} lives in ${city}, ${country}`)
}

introduce.apply(person2, ["Tbilisi", "Georgia"])

/* 4)
const car = {
    brand: "BMW"
};
function carInfo(model, year) {

}
apply()-ის გამოყენებით დაბეჭდე:
BMW X5 2022 */

console.log();
console.log();
console.log("classwork 4");
console.log();
console.log();

const car = {
    brand: "BMW"
}

function carInfo(model, year){
    console.log(`${this.brand} ${model} ${year}`)
}

carInfo.apply(car, ["x5", 2022])

/* 5) 
const user = {
    name: "Saba"
};
function welcome(language) {

}
bind()-ით წინასწარ გადასცი "Georgian".
შემდეგ გამოიძახე ახალი ფუნქცია.
შედეგი
Welcome Saba. Language: Georgian */

console.log();
console.log();
console.log("classwork 5");
console.log();
console.log();

const user = {
    name: "Saba"
}

function welcome(language){
    console.log(`Welcome ${this.name}. Language: ${language}`)
}

const greet = welcome.bind(user, "Georgian")
greet()

console.log();
console.log();