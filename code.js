/* Testnet_Nosana_Phase_1 (!) */

const simpleArray = [3, 5, 7, 15];
const objectArray = [{ name: 'John' }, { name: 'Emma' }]

console.log( simpleArray.find(e => e === 7) )
// expected output 7

console.log( simpleArray.find(e => e === 10) )
// expected output undefined

console.log( objectArray.find(e => e.name === 'John') )
// expected output { name: 'John' }

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries)); // { name: 'cherries', quantity: 5 }

/* find মেথড অলওয়েজ অ্যারের সরাসরি ভ্যালু রিটার্ণ করে। 
অর্থাৎ কন্ডিশনের সাথে মিলে যাওয়ার পরে যে কারণে মিলসে সেই লজিক অনুযায়ী 
ঐ অ্যারে থেকে প্রথম ভ্যালুটা রিটার্ণ করে। সে কারণে এখানে অ্যারের পুরো ভ্যালুটা আউটপুট হিসেবে দেখাচ্ছে। */

// Same Code Using Arrow function & destructuring technique

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) => name === 'cherries' );   // ({name})==> destructuring technique

console.log(result); // { name: 'cherries', quantity: 5 }
