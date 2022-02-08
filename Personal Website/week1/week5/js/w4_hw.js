const cities = ['Montreal', 'Toronto'];
const show = document.querySelector('#display');
show.textContent = cities.join(', ');

const addCity = document.querySelectorAll('.btn');

addCity.forEach((btn) => {
  btn.addEventListener('click', function(){
    const myTxt = this.textContent;
    console.log(myTxt);
    cities.push(myTxt);
    show.textContent = cities.join(', ');
    this.disabled = true;
  });
});
