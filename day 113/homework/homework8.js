// 8. URL: https://jsonplaceholder.typicode.com/users
// 
// მოიტანე ყველა მომხმარებელი და გამოიტანე მათი ქალაქები.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const cityList = document.createElement("ul");
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = `City: ${user.address.city}`;
            cityList.appendChild(listItem);
        });
        document.body.appendChild(cityList);
    })