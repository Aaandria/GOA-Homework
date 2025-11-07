// 3)  შექმენი 2 ცვლადი, სადაც მომხმარებელს შემოატანინებ რიცხვებს. შეამოწმე ეს რიცხვები ერთმანეთს უდრის თუ არა,
//  ასევე შეამოწმე რომელი რიცხვია მეტი და რომელი რიცხვია პატარა (გამოიტანეთ console.log()-ით) 

let a = Number(prompt("enter a number"))
let b = Number(prompt("enter second number"))

if (a > b) {
    console.log("a is nore than b")
} else if (a < b) {
    console.log("b is more than a")
} else {
    console.log("equal numbers")
}