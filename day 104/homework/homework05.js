/* 6) შექმენი კლასი User, რომელსაც ექნება name. დაამატე static property count. კონსტრუქტორში გაზარდე count. 
შექმენი კლასი Admin, რომელიც extends User-ს და გამოიყენე super. შეამოწმე რამდენი ობიექტი შეიქმნა.*/

class User {
    static count = 0;
    constructor(name) {
        this.name = name;
        User.count++;
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
    }
}
const user1 = new User("Alice");
const user2 = new User("Bob");
const admin1 = new Admin("Charlie");

console.log(User.count);