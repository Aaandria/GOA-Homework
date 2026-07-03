// 1) async await ფუნქციის დახმარებით გააგზავნეთ მოთხოვნა ამ API - ზე 
// "https://fakestoreapi.com/users", აუცილებლად გამოიყენეთ ფუნქციის შიგნით try catch 
// ბლოკი რათა ერორის შემთხვევაში აპლიკაცია არ დაგექრაშოთ, როდესაც ინფორმაციას გადათარგმნით 
// .json მეთოდის დახმარებით კონსოლში გამოიტანეთ თითოეული მომხმარებლის 
// (რომელიც დაგიბრუნდათ პასუხში) email კუთვნილება.


async function getUsers() {
  try {
    const response = await fetch("https://fakestoreapi.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    users.forEach((user) => {
      console.log(user.email);
    });
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}