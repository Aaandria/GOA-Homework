// 8) შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებთ  რიცხვს (რიცხვები 1-დან 7-ის ჩათვლით)
//  და ეს იქნება ასე: 1 == ორშაბათი; 2 == სამთაბათი და ასე შემდეგ, თქვენი დავალებაა რიცხვის მიხედვით გამოიტანოთ კვირის დღე.
//  თუ რიცხვი არის 7-ზე მეტი (ანუ სხვა შემთხვევაში) გამოიტანეთ "არასწორი რიცხვი".

let day = prompt("enter a number from 1 to 7")

switch (day){
    case "1":
        console.log("monday")
        break
    case "2":
        console.log("tuesday")
        break
    case "3":
        console.log("wednesday")
        break
    case "4":
        console.log("thursday")
        break
    case "5":
        console.log("friday")
        break
    case "6":
        console.log("saturday")
        break
    case "7":
        console.log("sunday")
        break
    default:
        console.log("number is more than 7")
}