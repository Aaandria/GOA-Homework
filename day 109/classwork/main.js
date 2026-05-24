/* 1) შექმენი კლასი WashingMachine, რომელსაც ექნება public მეთოდი startWash(). ამ მეთოდის გამოძახებისას 
უნდა გაეშვას private მეთოდები: #addWater(), #addSoap() და #spinClothes(). საბოლოოდ კონსოლში 
უნდა გამოიტანოს ტექსტი: "Washing finished". */

console.log();
console.log();
console.log("Classwork 1");
console.log();
console.log();

class WashingMachine {
    startWash() {
        this.#addWater();
        this.#addSoap();
        this.#spinClothes();
        console.log("Washing finished");
    }
    #addWater() {
        console.log("Adding water...");
    }
    #addSoap() {
        console.log("Adding soap...");
    }
    #spinClothes() {
        console.log("Spinning clothes...");
    }
}

const machine = new WashingMachine();
machine.startWash();

/* 2) შექმენი კლასი Computer, რომელსაც ექნება public მეთოდი startComputer(). ამ მეთოდის გამოძახებისას 
უნდა გაეშვას private მეთოდები სისტემის ჩატვირთვისთვის, RAM-ის შესამოწმებლად და პროცესორის შესამოწმებლად. 
საბოლოოდ კონსოლში უნდა გამოიტანოს ტექსტი: "Computer started". */

console.log();
console.log();
console.log("Classwork 2");
console.log();
console.log();

class Computer {
    startComputer() {
        this.#bootSystem();
        this.#checkRAM();
        this.#checkCPU();
        console.log("Computer started");
    }
    #bootSystem() {
        console.log("Booting system...");
    }
    #checkRAM() {
        console.log("Checking RAM...");
    }
    #checkCPU() {
        console.log("Checking CPU...");
    }
}

const myComputer = new Computer();
myComputer.startComputer();

/* 3) შექმენი კლასები Appliance, TV და Fridge, სადაც TV და Fridge მემკვიდრეობენ Appliance-ს.
შექმენი tv და fridge object-ები და instanceof-ის გამოყენებით შეამოწმე:
არის თუ არა tv → TV-ის instance
არის თუ არა tv → Appliance-ის instance
არის თუ არა fridge → TV-ის instance. */

console.log();
console.log();
console.log("Classwork 3");
console.log();
console.log();

class Appliance {}

class TV extends Appliance {}

class Fridge extends Appliance {}

const tv = new TV();
const fridge = new Fridge();

console.log(tv instanceof TV);
console.log(tv instanceof Appliance);
console.log(fridge instanceof TV);
console.log(fridge instanceof TV);
console.log(fridge instanceof Fridge);
console.log(fridge instanceof Appliance);

/* 4) შექმენი კლასი InstagramAccount, რომელსაც ექნება public მეთოდი createPost().
ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
#checkInternet()
#uploadPhoto()
#writeCaption()

საბოლოოდ კონსოლში უნდა გამოიტანოს:
"Post uploaded successfully" */

console.log();
console.log();
console.log("Classwork 4");
console.log();
console.log();

class InstagramAccount {
    createPost() {
        this.#checkInternet();
        this.#uploadPhoto();
        this.#writeCaption();
        console.log("Post uploaded successfully");
    }
    #checkInternet() {
        console.log("Checking internet connection...");
    }
    #uploadPhoto() {
        console.log("Uploading photo...");
    }
    #writeCaption() {
        console.log("Writing caption...");
    }
}

const myAccount = new InstagramAccount();
myAccount.createPost();

/* 5) შექმენი კლასები Employee და Manager, სადაც Manager მემკვიდრეობს Employee-ს. 
შექმენი manager object და instanceof-ის გამოყენებით if statement-ში შეამოწმე არის თუ არა object Manager-ის instance.
თუ true იქნება, კონსოლში გამოიტანე: "Manager panel opened"  ეს დაწერე ინეტრსეზვე იყოს */

console.log();
console.log();
console.log("Classwork 5");
console.log();
console.log();

class Employee {}

class Manager extends Employee {}

const manager = new Manager();

if (manager instanceof Manager) {
    console.log("Manager panel opened");
}
console.log();
console.log();