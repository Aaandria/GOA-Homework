// function fn(st, nd, o) {
//  // ...
// }
// 
// fn('Gio', 'Luka', 'Andria', 'Ioane', 'Nodi')
// აქიდან, გამოიტანეთ შემდეგი ფორმატით: 
// 1. Gio 2. Luka 3.Andria other Ioane, Nodi

function fn(...args) {
  const [st, nd, o, ...other] = args;
  console.log(`1. ${st} 2. ${nd} 3. ${o} other ${other.join(', ')}`);
}

fn('Gio', 'Luka', 'Andria', 'Ioane', 'Nodi');