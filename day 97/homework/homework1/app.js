// import ‘./a.js’;

// მინიშნება: ფაილები ერთმანეთს არ უნდა import-ავდეს წრეში.

// საბოლოოდ კი a.js და b.js დავაიმპორტოთ app.js-ში და იქიდან გამოიტანოთ console.log-ით a და b-ს მნიშვნელობები,
//  რომ თავიდან ავიცილოთ წრიული დამოკიდებულება.

import { a } from './a.js';
import { b } from './b.js';

console.log("a:", a);
console.log("b:", b);