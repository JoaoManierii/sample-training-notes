
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

/*
let name = 'John'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let selectedColor = null; 
let firstName = undefined;

let person = {
    name: 'Ana',
    age: 21
};
// Dot Notation
person.name = 'Joao';

// Bracket Notation
let selection = 'name';
person[selection] = 'Maria';

console.log(person.name);


let insterestRate = 0.3;
insterestRate = 1;
console.log(insterestRate); 


let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);
*/

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Manieri');

// Calculating a value
function square(number) {
    return number * number;
}
console.log(square(2));