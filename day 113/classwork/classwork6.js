// 6. URL: https://jsonplaceholder.typicode.com/photos
// გამოიტანე პირველი 20 ფოტო img თეგების გამოყენებით.

fetch("https://jsonplaceholder.typicode.com/photos")
.then((a)=>{
    return a.json()
}).then((b)=>{
    for(let i = 0; i<20; i++){
        console.log(`<img src="${b[i].url}">`)
    }
})