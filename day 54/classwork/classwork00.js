// 1) დაწერე კოდი რომელიც იღებს რიცხვს 1–დან 12-მდე და აბრუნებს შესაბამისი თვის სახელს.
// თუ სხვა რიცხვია, დაბეჭდოს "Invalid month". (გამოიყენე switch)

let month = prompt("enter a num from 1 to 12")

switch (month) {
    case "1": 
        console.log("january"); 
        break
    case "2":
        console.log("fabruary")
        break
    case "3":
        console.log("march")
        break
    case "4":
        console.log("april")
        break
    case "5":
        console.log("may")
        break
    case "6":
        console.log("juny")
        break
    case "7":
        console.log("july")
        break
    case "8":
        console.log("august")
        break
    case "9":
        console.log("sectember")
        break
    case "10":
        console.log("october")
        break
    case "11":
        console.log("november")
        break
    case "12":
        console.log("december")
        break
    default:
        console.log("invalid month")
}