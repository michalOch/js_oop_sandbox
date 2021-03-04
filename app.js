// Strings

const name1 = 'Jeff';
const name2 = new String('Jeff');
// name2.foo = 'bar';

// console.log(name1);
// console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

if (name2 === 'Jeff') {
  console.log('yes');
} else {
  console.log('no');
}

// Numbers
const num1 = 5;
const num2 = new Number(5);
console.log(num2);
console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool2);
console.log(typeof bool2);

// Functions
const getSum1 = function (x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 2');


console.log(getSum1(1, 2));
console.log(typeof getSum1(1, 2));

console.log(getSum2());
console.log(typeof getSum2());

// Objects
const john1 = {
  name: 'john'
};

const john2 = new Object({
  name: 'John2'
});

console.log(john1);
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2);


// Regular expressions constractor
const reg1 = /\w+/;
const reg2 = new RegExp('\\w+');

console.log(reg1);
console.log(reg2);