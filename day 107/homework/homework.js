/* 1) რა არის Private Field JavaScript-ში?
მოკლედ ახსენი შენი სიტყვებით. */

// Private Field JavaScript-ში არის კლასის თვისება, რომელიც არ არის ხელმისაწვდომი კლასის გარედან.

// 2) რატომ ვიყენებთ # სიმბოლოს private field-ის წინ?

// # სიმბოლოს ვიყენებთ private field-ის წინ, რომ გავხადოთ ელეემენტი private-ი.

/* 3) ექმენი User კლასი private field-ით:
#password */

console.log("homework 3");
// 
// class User {
//     #password;
//     constructor(password) {
//         this.#password = password;
//     }
// }
// 
// const a = new User("myPassword");
// console.log(a)
/* 4) შექმენი Phone კლასი:
private field #pin
მეთოდი checkPin(pin) */

console.log("homework 4");

class Phone {
    #pin;
    constructor(pin){
        this.#pin = pin;
    }
    checkPin(){
        return this.#pin
    }
}

const b = new Phone(`1234`);
console.log(b.checkPin());
// 5) რატომ ვერ მივწვდებით private field-ს კლასის გარედან?

// ვერ მივწვდებით private field-ს კლასის გარედან, რადგან ის არის private-ი და არ არის ხელმისაწვდომი კლასის გარედან.

/* 6) რას დაბეჭდავს ეს კოდი?
class Test {
#age = 25;
}
const t = new Test();
console.log(t.age); */

console.log("homework 6");

class Test {
    #age = 25;
}
const t = new Test();
console.log(t.age); 
// undefined რადგან #age არის private field და არ არის ხელმისაწვდომი t ობიექტის გარედან.

/* 7) რატომ იწვევს შეცდომას ეს კოდი?
class User {
#email = "test@gmail.com";
}
const u = new User();
console.log(u.#email); */
// 
console.log("homework 7");

class User {
    #email = "test@gmail.com";
}
const u = new User();
console.log(u.#email); 
// შეცდომა: ვერ მივწვდებით private field-ს კლასის გარედან. 
// #email არის private field და არ არის ხელმისაწვდომი u ობიექტის გარედან.