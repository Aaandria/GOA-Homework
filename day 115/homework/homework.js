// 1) შექმენი ფუნქცია getProducts(), რომელიც async/await-ის გამოყენებით წამოიღებს მონაცემებს:
// 
// https://fakestoreapi.com/products
// 
// კონსოლში გამოიტანე ყველა პროდუქტის title.

async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    products.forEach(product => console.log(product.title));
}

getProducts()


// 2) შექმენი Promise, რომელიც 2 წამში აბრუნებს რიცხვს 25.
// 
// await-ის გამოყენებით მიიღე შედეგი და დაბეჭდე მისი კვადრატი.

async function getNumber() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(25);
        }, 2000);
    });
    const number = await promise;
    console.log(number ** 2);
}

getNumber();


// 3) შექმენი ფუნქცია getUsers(), რომელიც წამოიღებს მომხმარებლებს:
// 
// https://jsonplaceholder.typicode.com/users
// 
// კონსოლში გამოიტანე მხოლოდ ის მომხმარებლები, რომელთა username იწყება ასო "C"-ით.

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const filteredUsers = users.filter(user => user.username.startsWith("C"));
    filteredUsers.forEach(user => console.log(user.username));
}

getUsers();



// 4) შექმენი Promise, რომელიც აბრუნებს მასივს:
// 
// [1, 2, 3, 4, 5]
// 
// await-ის შემდეგ დაბეჭდე ყველა ელემენტის ჯამი.

async function getArray() {
    const promise = new Promise((resolve) => {
        resolve([1, 2, 3, 4, 5]);
    });
    const array = await promise;
    console.log(array.reduce((sum, num) => sum + num, 0));
}

getArray();


// 5) შექმენი ფუნქცია getTodos(), რომელიც წამოიღებს todos-ს:
// 
// https://jsonplaceholder.typicode.com/todos
// 
// გამოიტანე მხოლოდ პირველი 10 completed task.

async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    const completedTodos = todos.filter(todo => todo.completed).slice(0, 10);
    completedTodos.forEach(todo => console.log(todo.title));
}

getTodos()



// 6) შექმენი Promise, რომელიც 1 წამში აბრუნებს ტექსტს:
// 
// "JavaScript"
// 
// await-ის შემდეგ დაბეჭდე ტექსტის სიგრძე.

async function getText() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("JavaScript");
        }, 1000);
    });
    const text = await promise;
    console.log(text.length);
}

getText();


// 7) შექმენი ფუნქცია getPosts(), რომელიც წამოიღებს პოსტებს:
// 
// https://jsonplaceholder.typicode.com/posts
// 
// დაბეჭდე მხოლოდ ის პოსტები, რომელთა id ლუწია.

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const evenIdPosts = posts.filter(post => post.id % 2 === 0);
    evenIdPosts.forEach(post => console.log(post.title));
}

getPosts();


// 8) შექმენი Promise, რომელიც აბრუნებს რიცხვს 80.
// 
// await-ის შემდეგ if/else-ით შეამოწმე:
// 
// თუ 50-ზე მეტია → "Passed"
// 
// წინააღმდეგ შემთხვევაში → "Failed"

async function checkNumber() {
    const promise = new Promise((resolve) => {
        resolve(80);
    });
    const number = await promise;
    if (number > 50) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

checkNumber();


// 9) შექმენი ფუნქცია getComments(), რომელიც წამოიღებს კომენტარებს:
// 
// https://jsonplaceholder.typicode.com/comments
// 
// გამოიტანე პირველი 15 კომენტარის name.

async function getComments() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await response.json();
    for (let i = 0; i < 15; i++) {
        console.log(comments[i].name);
    }
}

getComments();


// 10) შექმენი ორი Promise:
// 
// პირველი აბრუნებს 10-ს
// 
// მეორე აბრუნებს 20-ს
// 
// await-ის გამოყენებით მიიღე ორივე და დაბეჭდე მათი ჯამი. 


async function sumPromises() {
    const promise1 = new Promise((resolve) => {
        resolve(10);
    });
    const promise2 = new Promise((resolve) => {
        resolve(20);
    });
    const number1 = await promise1;
    const number2 = await promise2;
    console.log(number1 + number2);
}

sumPromises();