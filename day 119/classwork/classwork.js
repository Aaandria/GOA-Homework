/* დაწერეთ, რა მოხდება კოდის გაშვებისას (რა დაიბეჭდება ან რა შეცდომა გამოვა).
დეტალურად ახსენით, რატომ მოხდა ეს (რომელი კონცეფციის ბრალია: Hoisting-ის 
თუ TDZ-ის და კონკრეტულად რამ გამოიწვია შეცდომა). */

// 1) 

function checkUser() {
    console.log(role);
    let role = "Admin";
}
checkUser();

// reference error
// ეს გამოიწვია TDZ-მ  რადგან ცვლადი let-ით არის შექმნილი და სანამ შეიქმნება იქამდე გამოგვაქ კონსოლში 

// 2) 

function calculate() {
console.log(points);
var points = 100;
}
calculate();

// undefined
// ეს გამოიწვია hoisting-მა რადგან ცვლადი var-ით არის შექმნილი და სანამ შეიქმნება იქამდე გამოგვაქ კონსოლში 

// 3) 

function process() {
console.log(status);
const status = "active";
}
process();

// reference error
// ეს გამოიწვია TDZ-მ  რადგან ცვლადი const-ით არის შექმნილი და სანამ შეიქმნება იქამდე გამოგვაქ კონსოლში 

// 4) 

let city = "Tbilisi";

function showCity() {
    console.log(city);
    let city = "Batumi";
}
showCity();

// reference error
// ეს გამოიწვია TDZ-მ  რადგან ცვლადი let-ით არის შექმნილი და სანამ შეიქმნება იქამდე გამოგვაქ კონსოლში

// 5)

function getDiscount() {
    if (true) {
        console.log(percent);
        let percent = 20;
    }
}
getDiscount();

// reference error
// ეს გამოიწვია TDZ-მ  რადგან ცვლადი let-ით არის შექმნილი და სანამ შეიქმნება იქამდე გამოგვაქ კონსოლში 

