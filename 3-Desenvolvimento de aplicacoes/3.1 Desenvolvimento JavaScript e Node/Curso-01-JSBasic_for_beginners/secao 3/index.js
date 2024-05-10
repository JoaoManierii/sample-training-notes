/*
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);


// Increment (++)
console.log(x++);
console.log(x);

// Decrement (--)
console.log(--x);


let x = 1;
// Relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// Equality
console.log(x === 1);
console.log(x !== 1);

// Strict Equality (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality
console.log(1 == 1);


// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);


// AND (&&)
// OR (||)
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);
// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused: ' + applicationRefused);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN
// Anything that is not falsy -> Truthy


let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

const readPermisson = 4;
const writePermisson = 2;
const executePermisson = 1;

let myPermission = 0;
myPermission = myPermission | readPermisson | writePermisson;

let message = (myPermission & readPermisson) ? 'yes' : 'no';
console.log(message);


let x = 2 + 3 * 4;
console.log(x);
*/

// FINAL EXERCISE
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);