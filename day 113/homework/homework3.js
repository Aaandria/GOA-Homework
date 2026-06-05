// 3. URL: https://jsonplaceholder.typicode.com/users
// 
// მოიტანე ყველა მომხმარებელი და გამოიტანე:
// - სახელი
// - ელფოსტა

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const userList = document.createElement("ul");
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
            userList.appendChild(listItem);
        });
        document.body.appendChild(userList);
    })