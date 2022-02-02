const myBtn1 = document.querySelector('#btn1');
const myBtn2 = document.querySelector('#btn2');
const txt = document.querySelector('#display');
console.log(txt);

myBtn.onclick = function(){
  txt.textContent = this.textContent;
};
myBtn2.onclick = function(){
  txt.textContent = this.textContent;
};
// myBtn.addEventListener('click', helloWorld);
// myBtn2.addEventListener('click', helloWorld);
//
// function helloWorld(){
//   txt.textContent = this.textContent;
// }
