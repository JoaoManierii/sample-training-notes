// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!
/*
let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log('Good morning!');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon!');
    }
else { 
    console.log('Good evening!');
}


let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');
*/

// For
for (let i = 1; i < 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

// While
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// Do-While
let j = 9;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);

// Loop Infinite
//let k = 0;
//while (k < 5) {
// console.log(k);
// k++;
//}
// for in
const person = {
  name: 'Mosh',
  age: 30
};

for (let key in person) {
  console.log(key, person[key]);
}

//for (let index in colors) {
//  console.log(index, colors[index]);
//}

// for of
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}

// Break and Continue
let l = 0;
while (l <= 10) {
  // if (l === 5) break;
  if (l % 2 === 0) {
    l++;
    continue;
  }
  console.log(l);
  l++;
}

// Exercise
// Max of two numbers
let number = max(5, 10);
console.log(number);

function max(a, b) {
  return a > b ? a : b;
}

// Landscape or Portrait
console.log(isLandscape(300, 600));

function isLandscape(width, height) {
  return (width > height);
}

// FizzBuzz
const output = fizzBuzz(15);

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return 'Nao é um número';

  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

  if (input % 3 === 0)
    return 'Fizz';

  if (input % 5 === 0)
    return 'Buzz';
  return input;
}

// Demerit Poin
// Speed Limit = 70
// 5 -> 1 point
checkSpeed(50);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12)
    console.log('License suspended');
  else
    console.log('Points', points);
}

// Even and Odd
showNumbers(10);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
   if (i % 2 === 0) console.log(i, 'EVEN');
   else console.log(i, 'ODD');
  }
}

// Count Truthy
const array = [0, null, undefined, '', 2, 3];
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value)
      count++;
  return count;
}

// String Properties
const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};
showProperties(movie);
function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === 'string')
      console.log(key, obj[key]);
}

// Sum of Multiples of 3 and 5
console.log(sum(10));
function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  return sum;
}

// Grade
const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}
function calculateAverage(array) {
  let sum = 0;
  for (let value of array)
    sum += value;
  return sum / array.length;
}

// Show Stars
showStars(10);

function showStars(rows) {
  for (let row = 1 ; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++)
      pattern += '*';
    console.log(pattern);
  }
}

// Prime Numbers
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
      return false;
  return true;
}