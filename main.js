const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);
//clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

//to save data not just on the webpage until it is closed you need to connect to a database










/* _____________________notes below - ignore______________________________ */
/*
console.log(window);

alert(1);

// Single element
const form = document.getElementById('my-form');

console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1')); //only first h1 element

// Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

//looping through
const items = document.querySelectorAll('.item');

items.forEach(item) => console.log(item);

// Editing
const ul = document.querySelector('.items');

ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


//styles
const btn = document.querySelector('.btn');
btn.style.background = 'red';


//Events
const btn = document.querySelector('.btn');
// click, mouseover, mouseout
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
*/



/* multiline comment*/
// single line comment
/* This is my Javascript file for a website with forms 
alert('hello world');
console.log('hello console viewer');
console.error('this is an error');
console.warn('this is a warning');*/

/* variables = var, let, const
var , don't use anymore (globally scoped), like more narrow
let (added with equiscript 2015 or "ES6") can reassign values, can start with no value
let age = 30;
age = 31;

console.log(age);
const canNOT reassign valuesm, must start with a value, use most of the time unless you know you need reassign like score in a game
*/
/* data types
primitive = strings, numbers, boolean, null, undefined, symbol

const name = 'John'; (don't have to have semicolon in javascript, but convention)
const age = 30;
const rating = 4.5; (just a number, no float)
const isCool = true;
const x = null;
const y = undefined; (must explicitly define as undefined)
let z; (will be undefined)
console.log(typeof x);
*/

/* more on strings
concantenation
const name = 'John';
const age = 30;

concantenation
console.log ('My name is ' + name + ' and I am ' + age); OLD WAY
now template strings or literals using backticks and dollar signs and curly brackets
const hello = `My name is ${name} and I am ${age};

console.log(hello);
*/

/* string properties and methods
const s = 'Hello World!';

consle.log(s.length);
console.log(s.toUPperCase());
.toLowerCase()
.substring(0, 5).toUpperCase()
.split('') split by letter
.split(', ') splits by words and comma separator
*/

/* arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears'];
can have multiple data types in arrays
arrays are always zero based
add values
fruits[3] = 'grapes'; must know position you want, lame
fruits.push('mangos'); better way, adds to end
fruits.pop(); drops last item
console.log(Array.isArray(fruits)); checks if it is an array
console.log(fruits.indexOf('oranges')); give index of oranges

console.log(numbers);
*/
/* Object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName)
console.log(person.hobbies[1]); gives movies
console.log(person.address.city); gives boston

const { firstName, lastName, address: { city}} = person;

console.log(firstName);
console.log(city); gives boston

person.email = 'john@gmail.com';
console.log(person); now email has been added

*/

/* arrays
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
        {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];


console.log(todos); gives array
console.log(todos[1].text);

*/
/* json format usually when sending data to servers 

const todoJSON = JSON.stringify(todos); can get ready to send to server
console.log(todoJSON);

*/

/* LOOPS
simple for loops (variable, condition, change) then output
for(let i = 0; i < 10; i++) {
    console.log(i);
}
for(let i = 0; i <= 0; i++) {
    console.log(`For loop Number: ${i}`);
}
while loops (set variable outside loop)
let i = 0;
while(i < 10) {
    console.log(`while loop number: ${i});
    i++;
}

loop through arrays
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}  OLD WAY

for(let todo of todos) {
    console.log(todo.text);
} Kind of ok way

high order array methods (best way for arrays)
// forEach, map, filter
todos.forEach(function() {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

*/

/* Conditionals   (FYI double == does not match data types, so 10 and '10' are same.  Triple === does match data types)
if statements
const x = 10;

if(x === 10) {
    console.log('x is 10;);
} else if( x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

const x = 4;
const y = 10;

if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
}) 

if(x > 5 && y > 10) {
    console.log('x is more than 5 AND y is more than 10');
})

Turnary opperators (? (true then) and : (false then))

const x = 10;

const color = x > 10 ? 'red' : 'blue';
console.log(color);

const color = 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue);
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
*/

/* Functions
function addNums(num1, num2) {
    console.log(num1 + num2)
}
addNums(5, 3); gives 8
if no values gives NaN (not a number)

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5,5)); will overwrite the 1 and 1 default values we defined

arrow functions

const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5, 5));

const addNums = num1 => num1 + 5;

console.log(addNums(5));

todos.forEach((todo) => console.log(todo));

'this' keyword is cool
*/

/* Constructor functions (should start with capital letter)
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person1 = new Person('Mary', 'Smith', '3-6-1970');

console.log(Person1);
console.log(person2.firstName);

console.log(person2.dob.getFullYear());

can add methods to this person object
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `$({}.firstName} ${this.lastName}`;
    }
}

console.log(person1.getBirthYear());
console.log(person1.getFullName());
*/

/* prototypes (does same as above, but better)

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

person.prototype.getFullName = function() {
    return `$({}.firstName} ${this.lastName}`;
}

console.log(person2.getfullname());

*/

/* Class
class Person {
    constructor(firstName, lastName, dob) {
   this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

*/

