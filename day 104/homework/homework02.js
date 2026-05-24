/* 3) შექმენი კლასი Animal, რომელსაც ექნება name. დაამატე მეთოდი speak(). შექმენი კლასი Dog, რომელიც extends Animal-ს. 
გამოიყენე super და override გააკეთე speak() (გამოიძახე super.speak() + დაამატე თავისი ტექსტი).*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        return `${super.speak()} ${this.name} barks.`;
    }
}

const dog1 = new Dog("Buddy");
console.log(dog1.speak());
