// 1) შექმენი კლასი Car, რომელსაც ექნება properties: brand, model, year. დაამატე მეთოდი getInfo(), 
// რომელიც დააბრუნებს მანქანის სრულ ინფორმაციას ერთ სტრინგად.

console.log("Classwork 1");

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getInfo());

// 2) შექმენი კლასი User, რომელსაც ექნება name და email. დაამატე მეთოდი changeEmail(newEmail), რომელიც შეცვლის მომხმარებლის ემაილს.

console.log("Classwork 2");
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
 changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const user1 = new User("John Doe", "john.doe@example.com");
console.log(user1.email);
user1.changeEmail("new.email@example.com");
console.log(user1.email);

// 3) შექმენი კლასი NumberUtils, სადაც იქნება static მეთოდები: square(n) (კვადრატი) და cube(n) (კუბი).

console.log("Classwork 3");
class NumberUtils {
  static square(n) {
    return n * n;
  }
    static cube(n) {
    return n * n * n;
  }
}

console.log(NumberUtils.square(5));
console.log(NumberUtils.cube(3));

// 4) შექმენი კლასი StringHelper, სადაც static მეთოდები იქნება: toUpper(str) და toLower(str).

console.log("Classwork 4");

class StringHelper {
  static toUpper(str) {
    return str.toUpperCase();
  }
    static toLower(str) {
    return str.toLowerCase();
  }
}

console.log(StringHelper.toUpper("hello world"));
console.log(StringHelper.toLower("HELLO WORLD"));

// 5) შექმენი კლასი User, რომელსაც ექნება name. შექმენი კლასი Admin, რომელიც extends User-ს. დაამატე static
//  მეთოდი isAdmin(user), რომელიც ამოწმებს არის თუ არა გადაცემული ობიექტი Admin-ის instance.

console.log("Classwork 5");

class Usser {
  constructor(name) {
    this.name = name;
  }
}

class Admin extends Usser {
  static isAdmin(user) {
    return user instanceof Admin;
  }
}

const user2 = new Usser("Jane Doe");
const admin1 = new Admin("Admin User");

console.log(Admin.isAdmin(user2));
console.log(Admin.isAdmin(admin1));

// 6) შექმენი კლასი Animal, რომელსაც ექნება name. შექმენი კლასი Dog, რომელიც extends Animal-ს. დაამატე static მეთოდი isDog(obj).

console.log("Classwork 6");
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  static isDog(obj) {
    return obj instanceof Dog;
  }
}

const animal1 = new Animal("Generic Animal");
const dog1 = new Dog("Buddy");
console.log(Dog.isDog(animal1));
console.log(Dog.isDog(dog1));