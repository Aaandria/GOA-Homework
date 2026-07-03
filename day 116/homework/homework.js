// 1.დაწერე async ფუნქცია, რომელიც fetch-ის გამოყენებით წამოიღებს პოსტებს https://jsonplaceholder.typicode.com/posts მისამართიდან. 
// გამოიყენე try...catch და კონსოლში გამოიტანე პირველი 5 პოსტის სათაური.

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        for (let i = 0; i < 5; i++) {
            console.log(posts[i].title);
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

fetchPosts();


// 2.დაწერე async ფუნქცია, რომელიც fetch-ის გამოყენებით წამოიღებს კომენტარებს https://jsonplaceholder.typicode.com/comments მისამართიდან. 
// გამოიყენე try...catch და გამოიტანე პირველი 10 კომენტარის ავტორის email.

async function fetchComments() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const comments = await response.json();
        for (let i = 0; i < 10; i++) {
            console.log(comments[i].email);
        }
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
}

fetchComments();


// 3.დაწერე async ფუნქცია, რომელიც fetch-ის გამოყენებით წამოიღებს ალბომებს https://jsonplaceholder.typicode.com/albums მისამართიდან. 
// გამოიყენე try...catch და კონსოლში გამოიტანე ყველა ალბომის title.

async function fetchAlbums() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const albums = await response.json();
        albums.forEach(album => console.log(album.title));
    } catch (error) {
        console.error("Error fetching albums:", error);
    }
}

fetchAlbums();

// 4.დაწერე async ფუნქცია, რომელიც fetch-ის გამოყენებით წამოიღებს Todo-ებს https://jsonplaceholder.typicode.com/todos მისამართიდან. 
// გამოიყენე try...catch და გამოიტანე მხოლოდ პირველი 10 Todo.

async function fetchTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();
        for (let i = 0; i < 10; i++) {
            console.log(todos[i]);
        }
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

fetchTodos();

// 5.დაწერე async ფუნქცია, რომელიც fetch-ის გამოყენებით წამოიღებს მომხმარებელს https://jsonplaceholder.typicode.com/users/1 მისამართიდან. 
// გამოიყენე try...catch და კონსოლში გამოიტანე მისი name, username და email.

async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        console.log("Name:", user.name);
        console.log("Username:", user.username);
        console.log("Email:", user.email);
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

fetchUser();


// 6.დაწერე async ფუნქცია, რომელიც fetch-ის გამოყენებით წამოიღებს პოსტს https://jsonplaceholder.typicode.com/posts/1 მისამართიდან. 
// გამოიყენე try...catch და გამოიტანე პოსტის title და body.

async function fetchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const post = await response.json();
        console.log("Title:", post.title);
        console.log("Body", post.body);
    } catch (error) {
        console.error("Error fetching post:", error);
    }
}

fetchPost()

// 7.დაწერე async ფუნქცია, რომელიც fetch-ის გამოყენებით წამოიღებს ფოტოებს https://jsonplaceholder.typicode.com/photos მისამართიდან. 
// გამოიყენე try...catch და კონსოლში გამოიტანე პირველი 5 ფოტოს title.

async function fetchPhotos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const photos = await response.json();
        for (let i = 0; i < 5; i++) {
            console.log(photos[i].title);
        }
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
}

fetchPhotos();

// 8.დაწერე async ფუნქცია, რომელიც fetch-ის გამოყენებით წამოიღებს მომხმარებლებს https://jsonplaceholder.typicode.com/users მისამართიდან. 
// გამოიყენე try...catch და კონსოლში გამოიტანე თითოეული მომხმარებლის name და city.

async function fetchUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        users.forEach(user => {
            console.log("Name:", user.name);
            console.log("City:", user.address.city);
        });
    } catch(error){
        console.error("Error fetching users:", error);
    }
}
fetchUsers();