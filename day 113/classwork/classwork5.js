// 5. URL: https://jsonplaceholder.typicode.com/comments
// დათვალე რამდენი კომენტარია სულ.

fetch("https://jsonplaceholder.typicode.com/comments")
.then((a)=>{
    return a.json()
}).then((b)=>{
    console.log(b.length)
})