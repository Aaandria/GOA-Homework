// 1.შექმენი ფუნქცია outer, შიგნით შექმენი ცვლადი და დააბრუნე შიდა ფუნქცია, რომელიც ამ ცვლადს დაბეჭდავს. გამოიძახე დაბრუნებული ფუნქცია.

console.log();
console.log();
console.log("classwork 1");
console.log();
console.log();

function outer(){
    let name = "andria"
    function inner(){
        console.log(name)
    }

    return inner;
}

const innerFunction = outer()

innerFunction()

// 2.შექმენი ფუნქცია, სადაც იქნება ცვლადი name, და შიდა ფუნქცია დაბეჭდავს ამ name-ს. დააბრუნე შიდა ფუნქცია და რამდენჯერმე გამოიძახე.

console.log();
console.log();
console.log("classwork 2");
console.log();
console.log();

function printer(){
    let name = "andria"
    return function(){
        console.log(name)
    }
}

const namePrinter = printer()
namePrinter()
namePrinter()
namePrinter()

// 3.შექმენი ფუნქცია counter, სადაც იქნება ცვლადი count = 0. დააბრუნე შიდა ფუნქცია, რომელიც ყოველ გამოძახებაზე count-ს 1-ით გაზრდის და დაბეჭდავს.

console.log();
console.log();
console.log("classwork 3");
console.log();
console.log();

function counter(){
    let count = 0
    return function(){
        count++
        console.log(count)
    }
}

const counterFunction = counter()

counterFunction()
counterFunction()
counterFunction()

// 4.შექმენი ფუნქცია, რომელიც დააბრუნებს სხვა ფუნქციას. შიდა ფუნქციამ უნდა გამოიყენოს გარეთ შექმნილი ცვლადი x = 10 და დაბეჭდოს მისი მნიშვნელობა.

console.log();
console.log();
console.log("classwork 4");
console.log();
console.log();

function createFunction(){
    let x = 10
    return function(){
        console.log(x)
    }
}

const func = createFunction()

func()

// 5.შექმენი ფუნქცია makeMessage, რომელიც მიიღებს ერთ პარამეტრს (message). დააბრუნე შიდა ფუნქცია, რომელიც დაბეჭდავს ამ message-ს. გამოიძახე დაბრუნებული ფუნქცია.

console.log();
console.log();
console.log("classwork 5");
console.log();
console.log();

function makeMessage(message){
    return function(){
        console.log(message)
    }
}

const makeFunction = makeMessage("hello world")

makeFunction()

console.log();
console.log();