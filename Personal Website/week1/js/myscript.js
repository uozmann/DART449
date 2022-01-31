// alert('hello world!');
// document.querySelector('#display').textContent = 'howdy world!';
// console.log(document.querySelector('#display'));


// init variables
const myTextName = document.querySelector('#displayName');
const myTextGender = document.querySelector('#displayGender');
const myTextAge = document.querySelector('#displayAge');

const nameButton = document.querySelector('#changeName');
const genderButton = document.querySelector('#changeGender');
const ageButton = document.querySelector('#changeAge');

let myName = 'random';
let myAge = 33;
let myGender = 'random';
console.log(myTextName);

nameButton.onclick = function() {
  // window.prompt("Enter Your Name","ex: Man Zou");
  myName = window.prompt("Enter Your Name","ex: Man Zou");
  myTextName.textContent = `I am ${myName}.`;

  // myText.textContent = myAge + 3;
  // myName.textContent = 'just changed';
};

genderButton.onclick = function() {
  myGender = window.prompt("Enter Your Gender","ex: Female");
  myTextGender.textContent = `I am ${myGender}.`;

};

ageButton.onclick = function() {
  myAge = window.prompt("Enter Your Age","ex: 21");
  myTextAge.textContent = `I am ${myAge} years-old.`;
};
