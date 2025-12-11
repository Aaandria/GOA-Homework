//6) შექმენი ობიექტი calculator:
// n (ნამბერი)
// sumToN მეთოდი, რომელიც for loop-ით ითვლის 1+2+...+n

let calculator = {
    n: 7,
    sumToN : function(){
        sum = 0
        for(i=1; i<=this.n; i++){
            sum+= i
        }
        console.log(sum)
    }
}