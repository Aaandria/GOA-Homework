// 7) შექმენი ობიექტი multiplier:
// number (ნამბერი)
// times (რამდენჯერ გავამრავლოთ)
// multiply მეთოდი, რომელიც for loop-ით აყვანს რიცხვს ნამრავლზე

let multiplier = {
    number: 5,
    times: 2,
    multiply: function(){
        sum = 1
        for (i = 1; i<=this.times; i++){
            sum*=this.number
        }
        console.log(sum)
    }
}

multiplier.multiply()