//////////////////////////FUnction Declarations vs Expressions//////////////////////////////////////////////////////////////////////////////////////////
function walk () { // Function Declaration
    console.log('walk');
}

let run = function() { // Anonymous Function Expression
    console.log('run');
};
let move = run; 
move();
run();
//////////////////////////Hoisting//////////////////////////////////////////////////////////////////////////////////////////

walk(); // Function Declaration
function walk() {
    console.log('walk');
}

// Hoisting é o comportamento do JavaScript de mover declarações de variáveis e funções para o topo do escopo atual antes da execução do código.
// Isso significa que você pode chamar uma função ou usar uma variável antes de declará-la explicitamente no código.
// No entanto, apenas a declaração é movida para o topo, não a inicialização ou atribuição de valor.
// Portanto, é uma boa prática sempre declarar suas variáveis e funções antes de usá-las para evitar comportamentos inesperados.
//////////////////////////Arguments//////////////////////////////////////////////////////////////////////////////////////////
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}
console.log(sum(1, 2, 3, 4, 5));
//////////////////////////The Rest Operator//////////////////////////////////////////////////////////////////////////////////////////
function sum2(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum2(0.1, 20, 30));
//////////////////////////Default Parameters//////////////////////////////////////////////////////////////////////////////////////////
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(interest(10000));
//////////////////////////Getters and Setters//////////////////////////////////////////////////////////////////////////////////////////
const person = {
    firstName: 'Joao',
    lastName: 'Manieri',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Smith';
console.log(person);
//////////////////////////Try and Catch//////////////////////////////////////////////////////////////////////////////////////////
const person2 = {
    firstName: 'Joao',
    lastName: 'Manieri',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
    person2.fullName = 'Joao Carlos';
}
catch (e) {
    alert(e);
}
console.log(person2);
//////////////////////////Local vs Global Scope//////////////////////////////////////////////////////////////////////////////////////////
function start() {
    const message = 'hi'; // Local Scope
    console.log(message);
}
function stop() {
    const message = 'bye'; // Local Scope
    console.log(message);
}
start();
stop();
//////////////////////////Let vs Var//////////////////////////////////////////////////////////////////////////////////////////
var color = 'red'; // Var
let age = 30; // Let
function sayHi() {
    console.log(color);
    console.log(age);
}
//////////////////////////The this keyword//////////////////////////////////////////////////////////////////////////////////////////
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
//////////////////////////Changing this//////////////////////////////////////////////////////////////////////////////////////////
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag =>{
            console.log(this.title, tag);
        });
    }
};

video2.showTags();
//////////////////////////Exercise 1 - Sum of Arguments//////////////////////////////////////////////////////////////////////////////////////////
function sum3(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}
console.log(sum3([1, 2, 3, 4]));
//////////////////////////Exercise 2 - Area of Circle//////////////////////////////////////////////////////////////////////////////////////////
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area);
//////////////////////////Exercise 3 - Error Handling//////////////////////////////////////////////////////////////////////////////////////////
try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}
function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}