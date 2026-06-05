// 9. URL: https://jsonplaceholder.typicode.com/users
// 
// მოიტანე ყველა მომხმარებელი და გამოიტანე:
// - სახელი
// - კომპანია

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const userList = document.createElement("ul");
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = `Name: ${user.name}, Company: ${user.company.name}`;
            userList.appendChild(listItem);
        });
        document.body.appendChild(userList);
    })