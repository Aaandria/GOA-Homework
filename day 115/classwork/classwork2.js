// 2) შექმენი ფუნქცია getPosts(), რომელიც async/await-ით წამოიღებს პოსტებს:
// https://jsonplaceholder.typicode.com/posts
// 
// კონსოლში გამოიტანე მხოლოდ პირველი 5 პოსტის სათაური.

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    for (let i = 0; i < 5; i++) {
        console.log(posts[i].title);
    }
}

getPosts();