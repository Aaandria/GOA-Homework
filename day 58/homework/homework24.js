// 25. switch-ით შეამოწმე score (A/B/C/D/F) და გამოიტანე შეფასება.

let abc = prompt("enter A, B, C, D, F")

switch (abc) {
    case "A":
        console.log("Excellent!")
        break
    case "B":
        console.log("good")
        break
    case "C":
        console.log("average")
        break
    case "D":
        console.log("poor")
        break
    case "F":
        console.log("fail")
        break
    default:
        console.log("undefined grade")
}