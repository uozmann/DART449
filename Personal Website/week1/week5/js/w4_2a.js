// lets serve up some customers
const customers = 100;
const displayC = document.querySelector('#displayCustomers');
const showCustBtn = document.querySelector('#customerBtn');

showCustBtn.addEventListener('click', customerFunction);

function customerFunction(){
  displayC.innerHTML = '';
  //cleared the display field so we don't get the same message repeated
  for (let i = 1; i <= customers; i++) {
    // console.log(`Now serving number: ${i + 1}`);
    displayC.innerHTML += `Now serving customer: ${i} <br>`;

  }
}
