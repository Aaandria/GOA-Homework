// 20. while-ით ჩათვალე რამდენჯერ მოდის 3-ის ჯერადი 1–დან 40-მდე.

let i = 1
let num = 0

while(i < 40){
    if(i%3 == 0){
        num++
    }
    i++
}
console.log(num)