// 21. switch-ით შეამოწმე "sunny", "rainy", "cloudy" — და დაბეჭდე ამინდი.

let weather = prompt("etner a weather")

switch(weather){
    case "sunny":
        console.log("sunny")
        break
    case "rainy":
        console.log("rainy")
        break
    case "cloudy":
        console.log("cloudy")
        break
    default:
        console.log("undefined weather")
}