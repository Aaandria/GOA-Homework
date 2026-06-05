// 3. URL: https://jsonplaceholder.typicode.com/posts
// გამოიტანე ყველა პოსტის სათაური.

fetch("https://jsonplaceholder.typicode.com/posts")
.then((url)=>{
    return url.json()
}).then((url2)=>{
    url2.forEach(element => {
        console.log(element.title)
    });
})