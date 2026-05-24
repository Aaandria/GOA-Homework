/* 1)შექმენი Phone კლასი, რომელსაც ექნება private field #pinCode.
დაამატე:
checkPin(pin) მეთოდი
თუ pin სწორია "Access granted"
თუ არა "Wrong pin" */

console.log("classwork 1")

class Phone {
    #pinCode
    constructor(pinCode) {
        this.#pinCode = pinCode
    }
    checkPin(pin) {
        if (pin === this.#pinCode) {
            return "Access granted"
        } else {
            return "Wrong pin"
        }
    }
}

const myPhone = new Phone("1234")
console.log(myPhone.checkPin("1234"))
console.log(myPhone.checkPin("0000"))

/* 2) შექმენი User კლასი private field-ით #password.
დაამატე:
changePassword(oldPass, newPass) მეთოდი
თუ ძველი პაროლი სწორია, შეცვალოს პაროლი. */

console.log("classwork 2")

class User {
    #password
    constructor(password) {
        this.#password = password
    }
    changePassword(oldPass, newPass) {
        if (oldPass === this.#password) {
            this.#password = newPass
            return "Password changed"
        } else {
            return "Wrong password"
        }
    }
}

const user = new User("mySecret")
console.log(user.changePassword("mySecret", "newSecret"))
console.log(user.changePassword("wrongPass", "newSecret"))

/* 3) შექმენი BankCard კლასი:
owner
private field #balance
დაამატე:
deposit(amount)
getBalance() */

console.log("classwork 3")

class BankCard {
    owner
    #balance
    constructor(owner, balance) {
        this.owner = owner
        this.#balance = balance
    }
    deposit(amount) {
        this.#balance += amount
    }
    getBalance() {
        return this.#balance
    }
}

const myCard = new BankCard("John Doe", 1000)
myCard.deposit(500)
console.log(myCard.getBalance())

/* 4) შექმენი GameAccount კლასი private field-ით #level.
დაამატე:
levelUp()
showLevel() */

console.log("classwork 4")

class GameAccount {
    #level
    constructor(level) {
        this.#level = level
    }
    levelUp() {
        this.#level++
    }
    showLevel() {
        return this.#level
    }
}

const player = new GameAccount(1)
player.levelUp()
console.log(player.showLevel())

/* 5) შექმენი EmailAccount კლასი private field-ით #email.
დაამატე:
getEmail()
changeEmail(newEmail) */

console.log("classwork 5")

class EmailAccount {
    #email
    constructor(email) {
        this.#email = email
    }
    getEmail() {
        return this.#email
    }
    changeEmail(newEmail) {
        this.#email = newEmail
    }
}

const emailAcc = new EmailAccount("john@example.com")
console.log(emailAcc.getEmail())
emailAcc.changeEmail("jane@example.com")
console.log(emailAcc.getEmail())