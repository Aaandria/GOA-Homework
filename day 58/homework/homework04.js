// 5. თუ პაროლი 8 სიმბოლოზე მეტია → "strong", ნაკლებია → "weak".

let password = prompt("enter your password")

if (password.length > 8){
    alert("strong")
} else{
    alert("weak")
}