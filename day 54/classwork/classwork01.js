// 2)დაწერე კოდი რომელიც იღებს ასო ქულას ("A", "B", "C", "D", "F")
// და დაბეჭდავს შეფასებას:
// 
// "A" → "Excellent!"
// 
// "B" → "Good"
// 
// "C" → "Average"
// 
// "D" → "Poor"
// 
// "F" → "Fail"
// 
// სხვა სიმბოლო → "Invalid grade"

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
        console.log("invalid grade")
}