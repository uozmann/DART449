const p1 = 5;
const p2 = 7;
const calcBtn = document.querySelector('#calc');

// calcBtn.addEventListener('click', () => {
//   myFunction(p1, p2);
// });
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// An arrow function expression is a compact alternative to a traditional function expression,
// but is limited and can't be used in all situations.


// calcBtn.addEventListener('click', function() {
//   myFunction(p1, p2);
// });

calcBtn.addEventListener('click', () => {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  const result = a * b;
  document.getElementById('demo').textContent = result;
}
