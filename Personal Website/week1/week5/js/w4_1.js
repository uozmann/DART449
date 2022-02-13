const myData = ['Montreal','Toronto','Ottawa','Calgary','Edmonton','Vancouver'];
// JavaScript arrays are used to store multiple values in a single variable.

// Spaces and line breaks are not important. A declaration can span multiple lines:
// const myData = [
//  'Montreal',
//  'Toronto',
//  'Ottawa',
//  'Calgary',
//  'Edmonton',
//  'Vancouver'
// ];

let firstPos = myData[0];
let secondPos = myData[1];
console.log(`I live in ${firstPos}, Canada.`);
console.log(`I live in ${myData[5]}, Canada.`);

// you can change the value of the first element in myData
myData[0] = 'Winnipeg';
firstPos = myData[0];
console.log(myData[0]);
myData[1] = 'Québec City';
console.log(myData[1]);
secondPos = myData[1];
console.log(`I live in ${firstPos}, Canada. ... not really.`);
console.log(`${secondPos} used to have a hockey team ... who are now in Colorado.`);

// the full array can be accessed by referring to the array name:
document.querySelector('#display').textContent = myData;
console.log(myData);

// it can be coverted to a string
document.querySelector('#display').textContent = myData.toString();
console.log(myData.toString());
//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator:
document.querySelector('#display1').textContent = myData.join(' * ');

//the  length() method indicates how many elements are in the array
document.querySelector('#display2').textContent = myData.length;
console.log(myData.length);

//lets loop through the array in 2 ways:
const myDLen = myData.length;
let text;

text = '<ul>';
for (let i = 0; i < myDLen; i++) {
  text += `<li>${myData[i]}</li>`;
}
text += '</ul>';

document.querySelector('#display3').innerHTML = text;

// forEach() can do this too;
let text2;
text = '<ul>';
myData.forEach(myFunction);
text += '</ul>';

function myFunction(value) {
  text += `<li>${value}</li>`;
}
document.querySelector('#display4').innerHTML = text;

// push() will add an element at the end
myData.push('Montréal');
document.querySelector('#display5').textContent = myData.join(', ');

// pop() will remove the last  element
myData.pop();
document.querySelector('#display6').textContent = myData.join(', ');

// shift() will remove the first  element
myData.shift();
document.querySelector('#display7').textContent = myData.join(', ');


// shift() will add an element at the begining
myData.unshift('Montréal');
document.querySelector('#display8').textContent = myData.join(', ');

//splice() method adds new elements to an array
document.querySelector('#display9').innerHTML = `Original Array:<br>${myData.join(', ')}`;

function mySplicer() {
  myData.splice(2, 0, 'Toronto', 'Winnipeg');
  document.querySelector('#display10').innerHTML = `New Array:<br>${myData.join(', ')}`;
}

const addBtn = document.querySelector('#spliceBtn');
addBtn.addEventListener('click', mySplicer);

//The slice() method slices out a piece of an array into a new array.
let slcCities = myData.slice(1);
document.querySelector('#display11').innerHTML = `${myData}<br>${slcCities}`;

slcCities = myData.slice(1,3);
document.querySelector('#display12').innerHTML = `${myData}<br>${slcCities}`;

// *** === The slice() method creates a new array. === ***
// *** === It does not remove any elements from the source array. === ***
document.querySelector('#display13').innerHTML = `the array is still: ${myData}`;
