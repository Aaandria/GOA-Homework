// 10. URL: https://jsonplaceholder.typicode.com/users
// 
// მოიტანე ყველა მომხმარებელი და თითოეულს დაუმატე რიგითი ნომერი.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const userList = document.createElement("ul");
        users.forEach((user, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${user.name}`;
            userList.appendChild(listItem);
        });
        document.body.appendChild(userList);
    })