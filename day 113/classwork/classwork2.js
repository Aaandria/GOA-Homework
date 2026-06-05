/* 2. URL: https://jsonplaceholder.typicode.com/users
გამოიტანე თითოეული მომხმარებლის:
- სახელი
- ელფოსტა
- ტელეფონის ნომერი
 */

fetch("https://jsonplaceholder.typicode.com/users")
.then((url)=>{
    return url.json()
}).then((url2)=>{
    url2.forEach(a => {
        console.log(a.name + " " + " " + a.email + " " + a.phone)
    });
})