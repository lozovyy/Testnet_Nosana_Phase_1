const simpleArray = [3, 5, 7, 15];
const objectArray = [{ name: 'John' }, { name: 'Emma' }]

console.log( simpleArray.find(e => e === 7) )
// expected output 7

console.log( simpleArray.find(e => e === 10) )
// expected output undefined

console.log( objectArray.find(e => e.name === 'John') )
// expected output { name: 'John' }
