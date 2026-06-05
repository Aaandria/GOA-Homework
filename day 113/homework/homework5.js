// 5. URL: https://jsonplaceholder.typicode.com/users
// 
// მოიტანე ყველა მომხმარებელი და თითოეული div-ში გამოიტანე.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.textContent = `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`;
            document.body.appendChild(userDiv);
        });
    })
    