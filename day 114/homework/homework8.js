// 8. https://jsonplaceholder.typicode.com/users/1
// 
// წაშალე მომხმარებელი.
// 
// წარმატების შემთხვევაში გამოიტანე:
// "User deleted"
// 
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "Delete",
}).then(url => {
    if (url.status === 200) {
        console.log("User deleted")
    }
    else {
        console.error("Failed to delete user")
    }
})