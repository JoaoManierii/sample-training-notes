///////////////////////////////////BASICS/////////////////////////////////////////////////////////////////////////////////////////////
let radius = 1;
let x = 1;
let y = 1;

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};
////////////////////////Factory Functions/////////////////////////////////////////////////////////////////////////////////////////////
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
/////////////////////Constructor Functions/////////////////////////////////////////////////////////////////////////////////////////////
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle3 = new Circle(1);
console.log(circle3);
//////////////////////////Dynamic Nature of Objects/////////////////////////////////////////////////////////////////////////////////////
const circle4 = {
    radius: 1
};

circle4.color = 'yellow';
circle4.draw = function() {}

delete circle4.color;
delete circle4.draw;

console.log(circle4);
//////////////////////////Constructor Properties////////////////////////////////////////////////////////////////////////////////////////
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...
///////////////////////Functions are Objects//////////////////////////////////////////////////////////////////////////////////////////
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);
console.log(another);
////////////////////////Value vs Reference Types//////////////////////////////////////////////////////////////////////////////////////
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);
//////////////////////////Enumerating Properties of an Object/////////////////////////////////////////////////////////////////////////
const circle5 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle5)
    console.log(key, circle5[key]);

for (let key of Object.keys(circle5))
    console.log(key);
//////////////////////////Cloning an Object /////////////////////////////////////////////////////////////////////////

const circle6 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another2 = Object.assign({}, circle6);
console.log(another2);

//////////////////////////Garbage Collection//////////////////////////////////////////////////////////////////////////////////////////

let circle7 = {
    radius: 1
};

//////////////////////////Math//////////////////////////////////////////////////////////////////////////////////////////
console.log(Math.random());
console.log(Math.round(1.9));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
//////////////////////////String//////////////////////////////////////////////////////////////////////////////////////////
const message = 'This is my first message';
console.log(message.startsWith('This'));
console.log(message.endsWith('ge'));
console.log(message.includes('my'));
console.log(message.indexOf('my'));
console.log(message.replace('first', 'second'));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.split(' '));
//////////////////////////Template Literals//////////////////////////////////////////////////////////////////////////////////////////
const name = 'Juliana';
const message2 = `Olá ${name} ${2 + 3},
Obrigado por se juntar a minha newsletter.
Abracos,
Joao`;
console.log(message2);
//////////////////////////Date//////////////////////////////////////////////////////////////////////////////////////////
const now = new Date();
const date1 = new Date('May 14 2024 09:10');
const date2 = new Date(2024, 5, 14, 9);
now.setFullYear(2023);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
//////////////////////////EXERCISES 1//////////////////////////////////////////////////////////////////////////////////////////
// street
// city
// zipCode
// showAddress(address)

let address = {
    street: 'Rua Antonio Rodrigues Serralha',
    city: 'Uberlandia',
    zipCode: '38408-036'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}
showAddress(address);
//////////////////////////EXERCISES 2//////////////////////////////////////////////////////////////////////////////////////////

let address2 = createAddress('Rua Antonio Rodrigues Serralha', 'Uberlandia', '38408-036');

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
function Address (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
//////////////////////////EXERCISES 3//////////////////////////////////////////////////////////////////////////////////////////
function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}
//////////////////////////EXERCISES 4//////////////////////////////////////////////////////////////////////////////////////////
// title
// body
// author
// views
// comments
//  (author, body)
// isLive

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' },
    ],     
    isLive: true
};
console.log(post);
//////////////////////////EXERCISES 5//////////////////////////////////////////////////////////////////////////////////////////
let post2 = new Post('a', 'b', 'c');

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
//////////////////////////EXERCISES 6//////////////////////////////////////////////////////////////////////////////////////////
let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

let restaurants = [
    { averagePerPerson: 5 }
];

console.log(priceRanges);
    
