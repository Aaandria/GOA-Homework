// 6) შექმენი ობიექტი calculator და დაამატე თვისება n. შექმენი მეთოდი, რომელიც for loop-ით ითვლის 1–დან n-მდე ჯამს.

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