const displaymsg = document.querySelector('#display');
const convert = document.querySelector('#converter');

convert.onclick = function() {
  const numberF = document.querySelector('#temp').value;
  displaymsg.textContent = `The temperature is ${toCelsius(numberF)} Celsius`;
  console.log(numberF);
};

function toCelsius(fahrenheit) {
  // return (5 / 9) * (fahrenheit - 32);
  return Math.round((5 / 9) * (fahrenheit - 32));
}
