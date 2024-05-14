//////////////////////////Adding Elementes//////////////////////////////////////////////////////////////////////////////////////////
const numbers = [1, 2, 3];

numbers.push(4, 5);

numbers.unshift(0);

numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
//////////////////////////Finding Elements (Primitives)//////////////////////////////////////////////////////////////////////////////////////////
const numbers2 = [1, 2, 3, 1, 4];
console.log(numbers2.indexOf(2));
console.log(numbers2.lastIndexOf(2));
console.log(numbers2.indexOf(1) !== -1);
console.log(numbers2.includes(1));
//////////////////////////Finding Elements (Reference Types)//////////////////////////////////////////////////////////////////////////////////////////
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

const course = courses.find(function(course) {
    return course.name === 'a';
});
console.log(course);
//////////////////////////Arrow Functions//////////////////////////////////////////////////////////////////////////////////////////
const courses2 = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

const course2 = courses2.find(course2 => course2.name === 'a');
console.log(course2);
//////////////////////////Removing Elements//////////////////////////////////////////////////////////////////////////////////////////
const numbers3 = [1, 2, 3, 4];
const last = numbers3.pop(); //remove last element
console.log(last);
const first = numbers3.shift(); //remove first element
console.log(first);
numbers3.splice(1, 1); //remove elements starting at index 1
//////////////////////////Emptying an Array//////////////////////////////////////////////////////////////////////////////////////////
let numbers4 = [1, 2, 3, 4];
let another3 = numbers4;
//Solution 1
numbers4 = [];
console.log(numbers4);
console.log(another3);
//Solution 2
numbers4.length = 0;
console.log(numbers4);
console.log(another3);
//Solution 3
numbers4.splice(0, numbers4.length);
console.log(numbers4);
console.log(another3);
//Solution 4
while (numbers4.length > 0)
    numbers4.pop();
console.log(numbers4);
console.log(another3);
//////////////////////////Combining and Slicing Arrays//////////////////////////////////////////////////////////////////////////////////////////
const first2 = [1, 2, 3];
const second2 = [4, 5, 6];
const combined = first2.concat(second2);
console.log(combined);
const slice = combined.slice(2, 4);
console.log(slice);
//////////////////////////The Spread Operator//////////////////////////////////////////////////////////////////////////////////////////
const combined2 = [...first2, ...second2];

const copy = [...combined2];
console.log(copy);
//////////////////////////Iterating an Array//////////////////////////////////////////////////////////////////////////////////////////
const numbers5 = [1, 2, 3];
for (let number of numbers5)
    console.log(number);
numbers5.forEach((number, index) => console.log(index, number));
//////////////////////////Joining Arrays//////////////////////////////////////////////////////////////////////////////////////////
const numbers6 = [1, 2, 3];
const joined = numbers6.join(',');
console.log(joined);
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined3 = parts.join('-');
console.log(combined3);
//////////////////////////Sorting Arrays//////////////////////////////////////////////////////////////////////////////////////////
const numbers7 = [2, 3, 1];
numbers7.sort();
console.log(numbers7);
numbers7.reverse();
console.log(numbers7);

const courses3 = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javascript' }
];
courses3.sort(function(a, b) {
    //a < b => -1
    //a > b => 1
    //a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses3);
//////////////////////////Testing the Elements of an Array//////////////////////////////////////////////////////////////////////////////////////////
const numbers8 = [1, -1, 2, 3];
const allPositive = numbers8.every(function(value) {
    return value >= 0;
});
console.log(allPositive);
const atLeastOnePositive = numbers8.some(function(value) {
    return value >= 0;
});
console.log(atLeastOnePositive);
//////////////////////////Filtering an Array//////////////////////////////////////////////////////////////////////////////////////////
const filtered = numbers8.filter(n => n >= 0);
console.log(filtered);
//////////////////////////Mapping an Array//////////////////////////////////////////////////////////////////////////////////////////
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
//////////////////////////Reducing an Array//////////////////////////////////////////////////////////////////////////////////////////
const sum = numbers8.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);
//////////////////////////Exercises 1//////////////////////////////////////////////////////////////////////////////////////////
const numbers9 = arrayFromRange(1, 4);
console.log(numbers9);
function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}
//////////////////////////Exercises 2//////////////////////////////////////////////////////////////////////////////////////////
const numbers10 = [1, 2, 3, 4];
const output = includes(numbers10, 1);
console.log(output);
function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}
//////////////////////////Exercises 3//////////////////////////////////////////////////////////////////////////////////////////
const output2 = except(numbers10, [1, 2]);
console.log(output2);
function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}
//////////////////////////Exercises 4//////////////////////////////////////////////////////////////////////////////////////////
const output3 = move(numbers10, 1, 2);
console.log(output3);
function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}
//////////////////////////Exercises 5//////////////////////////////////////////////////////////////////////////////////////////
const numbers11 = [1, 2, 3, 4, 1];
const count = countOccurrences(numbers11, 1);
console.log(count);
function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}
//////////////////////////Exercises 6//////////////////////////////////////////////////////////////////////////////////////////
const numbers12 = [1, 2, 3, 4];
const max = getMax(numbers12);
console.log(max);
function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];
    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i];
    // return max;

    return array.reduce((a, b) => (a > b) ? a : b);
}
//////////////////////////Exercises 7//////////////////////////////////////////////////////////////////////////////////////////
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating) 
    .reverse()
    .map(m => m.title);

console.log(titles);