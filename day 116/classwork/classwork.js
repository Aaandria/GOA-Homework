// 1.გამოიყენე try...catch და სცადე დაბეჭდო არარსებული ცვლადი. დაიჭირე შეცდომა და გამოიტანე შეტყობინება.

try{
    console.log(undefinedVariable);
} catch(error) {
    console.log("An error occurred:", error.message);
}

// 2.დაწერე კოდი, სადაც შესრულდება გამოთვლა და შემდეგ განზრახ გამოიწვიო შეცდომა try...catch-ის გამოყენებით.

try {
    const result = 10 / "a";
    console.log("Result:", result);
} catch (error) {
    console.log("An error occurred:", error.message);
}

// 3.დაწერე კოდი, სადაც ჯერ დაბეჭდავ ტექსტს და შემდეგ try...catch-ის შიგნით გამოიწვევ შეცდომას.

try {
    console.log(number("fwugfbo"));
} catch (error) {
    console.log("An error occurred:", error.message);
}

// 4.შექმენი ფუნქცია და მასში გამოიყენე try...catch. ფუნქციის შიგნით გამოიწვიე შეცდომა და დაიჭირე ის.

try{
    function testFunction() {
        console.large("this is an eeror")
    }
} catch(error) {
    console.log("An error occurred:", error.message);
}

// 5.დაწერე async ფუნქცია, რომელიც fetch-ით იღებს მონაცემებს და გამოიყენე try...catch შეცდომების დასაჭერად.
//  API:"https://jsonplaceholder.typicode.com/users"

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("An error occurred:", error.message);
    }
}

fetchData();