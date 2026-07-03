/* დაწერეთ, რა მოხდება კოდის გაშვებისას (რა დაიბეჭდება ან რა შეცდომა გამოვა).
 დეტალურად ახსენით, რატომ მოხდა ეს (რომელი კონცეფციის ბრალია: Hoisting-ის 
 თუ TDZ-ის და კონკრეტულად რამ გამოიწვია შეცდომა).v*/

/* 1) 

greetUser();

function greetUser() {
  console.log("Welcome back!");
} 

გამოიტანს: Welcome Back!
რადგან ფუნქციაა hoisting-ის მეშვეობით მნიშვნელობა არ აქვს ფუნქციის შექმნის მდებარეოობას  

*/

/* 2) 

let count = 5;

function startCounter() {
  if (true) {
    console.log(count);
    let count = 10;
  }
}
startCounter();

გამოიტანს: ReferenceError-ს
მიზეზი: TDZ მიუხედავად იმისა, რომ count უკვე შექმნილია ფუნქციის გარეთ, მას წვდომა არ აქვს ფუნქციასთან function scope-ის გამო.
       ხოლო ცვლადი ფუნქციის შიგნით შექმნილია გამოტანის შემდეგ და let-ით.

*/

/* 3) function checkValue() {
  if (true) {
    var isReady = true;
  }
  console.log(isReady);
}
checkValue();

გამოიტანს: true
მიზეზი: hoisting

*/

/* 4) 

function mixedHosting() {
  console.log(a);
  console.log(b);
  var a = 1;
  let b = 2;
}
mixedHosting();

გამოიტანს: undefined, referenceError
მიზეზი: a არის var-ით შექმნილი და მას აქვს hoisting, ხოლო b არის let-ით შექმნილი და მას აქვს TDZ. შესაბამისად, 
  a-ს მნიშვნელობა არის undefined, ხოლო b-ს წვდომა არ აქვს ფუნქციის შიგნით.

*/

/* 5) 

function testShadowing() {
  var x = 10;
  if (true) {
    console.log(x);
    let x = 20;
  }
}
testShadowing();

გამოიტანს: ReferenceError-ს
მიზეზი: x არის let-ით შექმნილი და მას აქვს TDZ. შესაბამისად, x-ს წვდომა არ აქვს ფუნქციის შიგნით.

*/