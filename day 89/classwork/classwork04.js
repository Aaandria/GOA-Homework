// მოცემული კოდით მიიღეთ შესაბამისი შედეგი: 
// {a: 5, b: {c: 7, d: 9} }
// const arr1 = {a: 5}
// const arr2 = { b: {c: 7, d: 9} };

const arr1 = {a: 5};
const arr2 = { b: {c: 7, d: 9} };
const result = { ...arr1, ...arr2 };

console.log(result);