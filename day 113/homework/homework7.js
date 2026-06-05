// 7. URL: https://jsonplaceholder.typicode.com/users
// 
// მოიტანე ყველა მომხმარებელი და კონსოლში დაბეჭდე მომხმარებლების რაოდენობა.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        console.log(`Number of users: ${users.length}`);
    })