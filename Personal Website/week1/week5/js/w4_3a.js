const closer = document.querySelectorAll('.remove');
let numItems = closer.length;
console.log(numItems);

closer.forEach((btn) => {
  console.log(btn.textContent);
  btn.addEventListener('click', function() {
    console.log(this);
    btn.style.display = 'none';
    document.querySelector('#message').textContent = btn.textContent;
    numItems--;
    if (numItems === 0) {
      document.querySelector('#message').textContent = 'all gone!!!';
    }
  });
});
