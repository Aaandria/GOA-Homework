// 3) სამი რიცხვიდან გამოიტანე ყველაზე დიდი.

let num1 = Number(prompt("enter a number"));
let num2 = Number(prompt("enter a number"));
let num3 = Number(prompt("enter a number"));

if  (num1 > num2){
    if  (num1 >num3){
        alert(num1)
    }
} else if (num2 > num1){
    if  (num2 >num3){
        alert(num2)
    }
} else if (num3 > num1){
    if  (num3 > num2){
        alert(num3)
    }
}