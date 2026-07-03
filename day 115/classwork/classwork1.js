// 1) შექმენი ფუნქცია getUsers(), რომელიც async/await-ის გამოყენებით წამოიღებს მომხმარებლებს API-დან:
// https://jsonplaceholder.typicode.com/users
// 
// შემდეგ კონსოლში გამოიტანე ყველა მომხმარებლის სახელი.

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    users.forEach(user => console.log(user.name));
}

getUsers();