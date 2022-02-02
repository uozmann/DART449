const myBtn1 = document.querySelector('#btn1');
const myBtn2 = document.querySelector('#btn2');
const txt = document.querySelector('#display');

myBtn1.addEventListener('click', helloWorld);
myBtn2.addEventListener('click', helloWorld);

function helloWorld(){
  const name = this.textContent;
  txt.textContent = `Welcome ${name}, nice to see you.`;
}
