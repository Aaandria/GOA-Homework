// II) კონსოლის შედეგის მიხედვით დაწერე შესაბამისი კოდი
// 1.
// კონსოლში უნდა გამოვიდეს:
// Hello
// World
// დაწერე მარტივი სინქრონული კოდი.

console.log("Hello");
console.log("World");

// 2.
// კონსოლში უნდა გამოვიდეს:
// Start
// End
// Timeout
// გამოიყენე setTimeout.

setTimeout(()=>{
    console.log("Timeout")
}, 100)
console.log("start")
console.log("end")
// 3.
// კონსოლში უნდა გამოვიდეს:
// 1
// 2
// 3
// გამოიყენე for ციკლი.

for(let i = 1; i < 4; i++){
    console.log(i)
}

// 4.
// კონსოლში უნდა გამოვიდეს:
// Loading...
// Data received
// მეორე ტექსტი გამოვიდეს 2 წამის შემდეგ.

setTimeout(()=>{
    console.log("data recieved")
}, 2000)
console.log("loading...")

// 5.
// კონსოლში უნდა გამოვიდეს:
// A
// C
// B
// გამოიყენე setTimeout.

console.log("A")
setTimeout(()=>{
    console.log("B")
}, 200)
console.log("C")