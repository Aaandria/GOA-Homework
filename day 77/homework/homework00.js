// 1)შექმენი რიცხვების მასივი 5, 7, 10, 8, 12, 4. map მეთოდით თითოეული რიცხვი გაამრავლე 3-ზე,
//  filter მეთოდით დატოვე მხოლოდ 20-ზე მეტი რიცხვები, reduce მეთოდით იპოვე მათი ჯამი და ბოლოს დაბეჭდე რამდენი რიცხვი დარჩა.

let numbers = [5,7,10,8,12,4]

let number = numbers.map(nums => nums*3)

let n = number.filter(num => num > 20)

let final = n.reduce((acc, curent) => acc+curent, 0)

console.log(final)

