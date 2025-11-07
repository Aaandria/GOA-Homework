// 8) შექმენი 3 ცვლადი, ერთი იყოს რო მომხმარებელს უნდა შემოატანინო მათემატიკური სიმბოლო (+, -, *, /, %),
//  დანარჩენი ორი ცვლადი უნდა იყოს რიცხვები. სიმბოლოს მიხედვით შეასრულე ამ ორ ცვლადში სადაც რიცხვები,
//  არის შესრულდეს მოქმედება. (შედეგი გამოიტანეთ console.log-ით)

let a = prompt(" + - * / %")
let b = Number(prompt("enter a num"))
let c = Number(prompt("enter a num"))

if (a == "+") {
    console.log(b + c)
} else if ( a == "-") {
    console.log(a - b)
} else if ( a == "*") {
    console.log(a * b)
} else if ( a == "/") {
    console.log(a / b)
} else if (a == "%") {
    console.log(a % b)
} else {
    console.log("not a simbol")
}