// 4) შექმენი ობიექტი calculator, რომელსაც აქვს:
// n (ნამბერი)
// sumToN მეთოდი, რომელიც while loop-ით ითვლის 1+2+...+n

let calculator = {
    n: 10,
    sumToN: function(){
        count = 1
        sum = 0
        while(count<=this.n){
            sum+=count
            count++
        }
        counsole.log(count)
    }
}