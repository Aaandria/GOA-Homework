// 7. URL: https://jsonplaceholder.typicode.com/albums
// გამოიტანე ყველა ალბომის სათაური.

fetch("https://jsonplaceholder.typicode.com/albums")
.then((a)=>{
    return a.json()
}).then((b)=>{
    b.forEach((a)=>{
        console.log(a.title)
    })
})