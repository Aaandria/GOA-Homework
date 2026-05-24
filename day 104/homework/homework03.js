/* 4) შექმენი კლასი User, რომელსაც ექნება name და email. შექმენი კლასი Admin, რომელიც extends User-ს.
 გამოიყენე super და დაამატე role. შექმენი მეთოდი getRoleInfo().*/

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }

    getRoleInfo() {
        return `${this.name} has the role of ${this.role}.`;
    }
}

const admin1 = new Admin("Alice", "alice@example.com", "Administrator");
console.log(admin1.getRoleInfo());