// 2. URL: https://jsonplaceholder.typicode.com/users
// 
// მოიტანე ყველა მომხმარებელი და გვერდზე გამოიტანე მათი სახელები.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const userList = document.createElement("ul");
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        document.body.appendChild(userList);
    })