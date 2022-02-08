const myData = ['Montreal','Toronto','Ottawa','Calgary','Edmonton','Vancouver'];
const firstPos = myData[0];
console.log(`I live in ${firstPos}`);
const secondPos = myData[1];
console.log(`I've been to  ${secondPos}`);
console.log(`the number of cities in the array is ${myData.length}`);

document.querySelector('#display').textContent = myData;

document.querySelector('#display1').textContent = myData.join(', ');

document.querySelector('#display2').textContent = myData.length;

myData.push('Montréal');
document.querySelector('#display5').textContent = myData.join(', ');

myData.pop();
document.querySelector('#display6').textContent = myData.join(', ');

myData.shift();
document.querySelector('#display7').textContent = myData.join(', ');

myData.unshift('Montreal');
document.querySelector('#display8').textContent = myData.join(', ');

document.querySelector('#display9').innerHTML = `Original Array:<br>${myData.join(', ')}`;
const addBtn = document.querySelector('#spliceBtn');
addBtn.addEventListener('click', mySplicer);


function mySplicer() {
  myData.splice(2, 0, 'Quebec City', 'Winnipeg');
  document.querySelector('#display10').innerHTML = `The new Array:<br>${myData.join(', ')}`;
}

//The slice() method slices out a piece of an array into a new array.
let slcCities = myData.slice(1);
document.querySelector('#display11').innerHTML = `${myData.join(', ')}<br>${slcCities}`;

slcCities = myData.slice(1,3);
document.querySelector('#display12').innerHTML = `${myData}<br>${slcCities}`;

document.querySelector('#display13').innerHTML = myData.join(', ');
