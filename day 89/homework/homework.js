// 1. https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

console.log("homework 1")
const reverseSeq = n => {
  let final = []
  for(i=n; i>=1; i--){
    final.push(i)
  }
  return final
};

// 2. https://www.codewars.com/kata/5a4138acf28b82aa43000117

console.log("homework 2")
function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1]
  for (let i = 1; i < array.length - 1; i++) {
    const currentProduct = array[i] * array[i + 1]
    maxProduct = Math.max(maxProduct, currentProduct)
  }
  return maxProduct
}

// 3. მოცემულია ფუნქცია, აქიდან დაწერეთ კოდი, რომელიც მიღებული არგუმენტებით მიგვაღებინებს მსგავს შედეგს (უნდა დააბრუნოს ფუნქციამ):
// {
//     username: 'vashli123',
//     password: '12345678',
//     more: 'mwvane vashlis moyvaruli'
// };

console.log("homework 3")
function signup(email, password, more) {
    const user = {
        username: email,
        password: password,
        more: more
    };
    return user;
}

console.log(signup('emaili', '12345678', 'mwvane_vashlis_moyvaruli'));

// 4. მუშაობს თუ არა მოცემული კოდი? ახსენით რატომ და გამოასწორეთ შეცდომა, რომ შესაბამისი შედეგი მივიღოთ

console.log("homework 4")
const numbers = [1, 2, 3, 4, 5];
// const [first, ...middle, last] = numbers;
const [first, middle, ...rest] = numbers;

console.log(middle)
// rest ოპერატორი არ შეიძლება გამოყენებული იყოს შუაში

// 5. 