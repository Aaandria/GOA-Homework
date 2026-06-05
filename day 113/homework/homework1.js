// 1. URL: https://jsonplaceholder.typicode.com/users
// 
// მოიტანე ყველა მომხმარებელი და კონსოლში დაბეჭდე მათი სახელები.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => console.log(user.name));
    })