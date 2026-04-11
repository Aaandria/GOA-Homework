// import { getUser } from ‘./user.js’;
// import { log } from ‘./logger.js’;
// 
// export function init() {
// const user = getUser();
// log(user.name);
// }

// service.js-ში user.js-ის და logger.js-ის დაიმპორტებით ციკლური დამოკიდდებულება იქმნება.

export function init(user) {
    console.log(user.name);
}
