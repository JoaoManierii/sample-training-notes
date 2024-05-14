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
