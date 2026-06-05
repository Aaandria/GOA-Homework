// დაწერე, რა შედეგი გამოვა მოცემული კოდის გაშვებისას, თუ გამოყენებულია setTimeout(..., 0) 
// და ახსენი, რატომ არ გამოდის შედეგები იმავე რიგით, როგორც წერია კოდში.

console.log("First");
setTimeout(() => console.log("Second"), 0);
console.log("Third");

// First
// Third
// Second
//  რადაგან setTimeout() წერია ის ცოტა ხნით მაინც დაპაუზდება რის გამოც second ბოლოს გამოვა 