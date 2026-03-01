// 4) მოცემულია თანამშრომლების სია სამუშაო საათებით. დაწერეთ პროგრამა, რომელიც დაადგენს რამდენმა 
// თანამშრომელმა იმუშავა 40 ან მეტი საათი, რამდენმა ნაკლები, ასევე გამოითვლის ყველა თანამშრომლის
//  ნამუშევარი საათების ჯამსა და საშუალოს. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const hours = [38, 42, 40, 35, 50, 45]

const result = hours.reduce(
  (acc, h) => {
    h >= 40 ? acc.fullTime++ : acc.partTime++
    acc.total += h
    return acc
  },
  { fullTime: 0, partTime: 0, total: 0 }
)

result.average = result.total / hours.length

console.log(result)