// 11) გააკეთეთ calculator.  შექმენით მიმატების, გამოკლების, გაყოფის, გამრავლები, ნაშთიანი გაყოფის, ასაევე შეადარებს ორი რიცხვიდან რომელია მეტი.

let cal = {
    a: Number(prompt("enter a number")),
    b: Number(prompt("enter a number")),
    sum(){
        console.log(this.a + this.b)
    },
    substraction(){
        console.log(this.a - this.b)
    },
    multiplication(){
        console.log(this.a * this.b)
    },
    division(){
        console.log(this.a / this.b)
    },
    divisionNo2(){
        console.log(this.a % this.b)
    },
    moreThan(){
        if(this.a>this.b){
            console.log(this.a)
        } else{
            console.log(this.b)
        }
    }
}