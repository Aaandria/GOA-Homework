// 7) შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებ რიცხვს,
//  შენ უნდა შეამოწმო რიცხვი 0 თუ 0-ზე მეტი, თუ არცერთი პირობა არ არის( ანუ სხვა შემთხვევაში)
//  გამოიტანეთ "რიცხვი არის უარყოფითი".

let num = Number(prompt("enter a number"))

if (num = 0){
    console.log("your number is zero")
} else if (num > 0){
    console.log("your number is positive")
} else{
    console.log("your number is negative")
}
