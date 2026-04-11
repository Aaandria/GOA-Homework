// მოცემული კოდისგან უნდა მივიღოთ შესაბამისი შედეგი: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

const result = [...arr1, ...arr2, 6, 7, 8, 9, 10];

console.log(result);