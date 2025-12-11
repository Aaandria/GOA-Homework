// 5) შექმენი ობიექტი multiplier:
// number (ნამბერი)
// times (რამდენჯერ გავამრავლოთ)
// multiply მეთოდი, რომელიც while loop-ით აყვანს რიცხვს ნამრავლზე

let multiplier = {
    number : 4,
    times:5,
    multiply: function(){
        count = 1
        mult = 1
        while(count <= this.times){
            mult *= this.number
            count++
        }
        console.log(mult)
    }
}

multiplier.multiply()