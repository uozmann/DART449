//init vars
const maxCustomer = 10;
const displayC = document.querySelector('#displayCustomers');
const showBtn = document.querySelector('#customerBtn');

showBtn.addEventListener('click', customerFunction);
let i = 1;

function customerFunction() {
  displayC.innerHTML = '';
  // for (let i = 1; i <= maxCustomer; i++) {
  //   displayC.innerHTML += `Now serving customer ${i}. <br>`;
  // }
  displayC.innerHTML += `Now serving customer ${i}. <br>`;
  i++;
  if (i > 10) {
    displayC.innerHTML = 'sorry, we\'re closed';
  }
}
