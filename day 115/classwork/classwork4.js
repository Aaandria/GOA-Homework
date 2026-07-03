// 4) შექმენი Promise, რომელიც 2 წამში დააბრუნებს ტექსტს "Data Loaded".

// async ფუნქციაში await-ის გამოყენებით მიიღე შედეგი და გამოიტანე კონსოლში.

async function loadData() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
    const data = await promise;
    console.log(data);
}

loadData();