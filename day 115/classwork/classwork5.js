// 5) შექმენი Promise, რომელიც 3 წამში დააბრუნებს რიცხვს 100.
// 
// async ფუნქციაში დაელოდე შედეგს და დაბეჭდე მისი გაორმაგებული მნიშვნელობა.

async function loadNumber() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(100);
        }, 3000);
    });
    const number = await promise;
    console.log(number * 2);
}

loadNumber();
