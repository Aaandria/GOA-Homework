// 24. თვეების ნომრები 1–12 → switch-ით დაბეჭდე სეზონი (winter/spring/summer/autumn).

let month = prompt("enter a num from 1 to 12")

switch (month) {
    case "1": 
        console.log("winter"); 
        break
    case "2":
        console.log("winter")
        break
    case "3":
        console.log("spring")
        break
    case "4":
        console.log("spring")
        break
    case "5":
        console.log("spring")
        break
    case "6":
        console.log("summer")
        break
    case "7":
        console.log("summer")
        break
    case "8":
        console.log("summer")
        break
    case "9":
        console.log("autumn")
        break
    case "10":
        console.log("autumn")
        break
    case "11":
        console.log("autumn")
        break
    case "12":
        console.log("winter")
        break
    default:
        console.log("undefined month")
}