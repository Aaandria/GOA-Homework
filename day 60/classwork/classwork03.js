// 4) შექმენით კალკულატორი obj-თი (დაგჭირდებათ მეთოდები)
// უნდა ქონდეს მიმატების, გამოკლების, გაყოფის და გამრავლების მეთოდები

const calculator = {
    a: 5,
    b: 10,
    sum(){
        console.log(this.b + this.a)
    },
    minus(){
        console.log(this.b - this.a)
    },
    multiplication(){
        console.log(this.b * this.a)
    },
    division(){
        console.log(this.b / this.a)
    }
}

calculator.sum()
calculator.minus()
calculator.multiplication()
calculator.division()
