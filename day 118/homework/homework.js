// 1.შექმენი ფუნქცია createCounter, რომელიც დააბრუნებს ფუნქციას. ეს შიდა ფუნქცია უნდა ზრდიდეს 
// count ცვლადს სხვადასხვა ნაბიჯით (მაგ: +1, +2, +3) ყოველ გამოძახებაზე.

console.log();
console.log();
console.log("homework 1");
console.log();
console.log();

function createCounter(){
    let count = 0
    let addCount = 0
    return function(){
        addCount++
        count += addCount
        console.log(count)
    }
}

const counter = createCounter()

counter()
counter()
counter()

// 2.შექმენი ფუნქცია createUser, რომელსაც გადაეცემა name. დააბრუნე ფუნქცია, რომელიც დაბეჭდავს 
// მომხმარებლის სახელს და ასევე რამდენჯერ გამოიძახეს ეს ფუნქცია.

console.log();
console.log();
console.log("homework 2");
console.log();
console.log();

function createUser(name){
    let count = 0
    return function(){
        count++
        console.log(`name: ${name} count: ${count}`)
    }
}

let userFunction = createUser("andria")

userFunction()
userFunction()

// 3.შექმენი ფუნქცია secretBox, სადაც იქნება ცვლადი secret. დააბრუნე ორი ფუნქცია: ერთი რომელიც გამოიტანს secret-ს და მეორე რომელიც შეცვლის secret-ს.

console.log();
console.log();
console.log("homework 3");
console.log();
console.log();

function secretBox(){
    let secret = "shh!"
    return {
        logSecret: function(){
            console.log(secret)
        },
        changeSecret: function(newSecret){
            secret = newSecret
        }
    }
}

const functionBox = secretBox()
functionBox.logSecret()
functionBox.changeSecret("new")
functionBox.logSecret()

// 4.შექმენი ფუნქცია multiplyBy, რომელსაც გადაეცემა რიცხვი x. დააბრუნე ფუნქცია, რომელიც მიიღებს y-ს და დააბრუნებს x * y.

console.log();
console.log();
console.log("homework 4");
console.log();
console.log();

function multiplyBy(x){
    return function(y){
        return x * y
    }
}

const multiplyFunc = multiplyBy(10)
console.log(multiplyFunc(5))

// 5.შექმენი ფუნქცია bankAccount, სადაც იქნება balance. დააბრუნე ფუნქცია, რომელიც მიიღებს თანხას და ან დაამატებს ბალანსს ან გამოაკლებს მას.

console.log();
console.log();
console.log("homework 5");
console.log();
console.log();

function bankAccount() {
    let balance = 0; 

    return function(amount, operation) {
        if (operation === "deposit") {
            balance += amount;
            return `ბალანსი შეივსო. მიმდინარე ბალანსი: ${balance} GEL`;
        } else if (operation === "withdraw") {
            if (amount > balance) {
                return "არასაკმარისი თანხა ანგარიშზე!";
            }
            balance -= amount;
            return `თანხა გატანილია. მიმდინარე ბალანსი: ${balance} GEL`;
        } else {
            return "არასწორი ოპერაცია! გამოიყენეთ 'deposit' ან 'withdraw'.";
        }
    };
}

const myAccount = bankAccount();

console.log(myAccount(100, "deposit"));
console.log(myAccount(30, "withdraw"));
console.log(myAccount(150, "withdraw"));

// 6.შექმენი ფუნქცია limitCounter, რომელიც დაითვლის 5-მდე. როცა 5-ს გადააჭარბებს, უნდა დაბეჭდოს "Limit reached" და აღარ გაზარდოს.

console.log();
console.log();
console.log("homework 6");
console.log();
console.log();

function limitCounter() {
    let count = 0; 
    
    return function() {
        if (count < 5) {
            count++;
            return count;
        } else {
            return "Limit reached";
        }
    };
}

const counterB = limitCounter();

console.log(counterB());
console.log(counterB());
console.log(counterB());
console.log(counterB());
console.log(counterB());
console.log(counterB());

// 7.შექმენი ფუნქცია makeLogger, რომელსაც გადაეცემა prefix (მაგ: "INFO", "ERROR"). დააბრუნე ფუნქცია, რომელიც დაბეჭდავს შეტყობინებას ამ prefix-ით.

console.log();
console.log();
console.log("homework 7");
console.log();
console.log();

function makeLogger(prefix) {
    return function(message) {
        return `[${prefix}]: ${message}`;
    };
}

const infoLogger = makeLogger("INFO");
const errorLogger = makeLogger("ERROR");
const warnLogger = makeLogger("WARN");

console.log(infoLogger("სისტემა წარმატებით ჩაიტვირთა.")); 

console.log(errorLogger("ბაზასთან კავშირი გაწყდა!")); 

console.log(warnLogger("მეხსიერება ივსება.")); 

console.log();
console.log();
