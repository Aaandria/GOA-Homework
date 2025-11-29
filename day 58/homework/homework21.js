// 22. რიცხვი 1–4 → season: spring, summer, autumn, winter.

let num =prompt("enter a number from 1 to 4")

switch(num){
    case "1":
        console.log("spring")
        break
    case "2":
        console.log("summer")
        break
    case "3":
        console.log("autumn")
        break
    case "4":
        console.log("winter")
        break
    default:
        console.log("undefined season")
}