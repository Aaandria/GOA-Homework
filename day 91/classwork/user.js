const user = {
  name: "Nika",
  age: 25,
  profession: "Developer"
};


export function greetUser(user) {
  return `Hello, ${user.name}!`;
}


export function showAge(user) {
  return `Age: ${user.age}`;
}


export default user;