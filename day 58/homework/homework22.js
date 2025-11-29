// 23. switch-ით შეამოწმე transport type: "car", "bus", "bike".

let transport = prmopt("enter your transport")

switch(transport){
    case "car":
        console.log("car")
        break
    case "bus":
        console.log("bus")
        break
    case "bike":
        console.log("bike")
        break
    default:
        console.log("undefined transport")
}