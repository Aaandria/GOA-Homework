/* 1. URL: https://jsonplaceholder.typicode.com/users
მოიტანე ყველა მომხმარებელი და კონსოლში დაბეჭდე მათი სახელები. */

fetch("https://jsonplaceholder.typicode.com/users")
.then((url)=>{
    return url.json();
}).then((url2)=>{
    console.log(url2); // ყველა მომხმარებელი
    url2.forEach((a)=>{
        console.log(a.name) // სახელები
    })
})