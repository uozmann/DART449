const txt = document.querySelector('p');
const bg = document.querySelector('body');
const btn = document.querySelector('button');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  bg.classList.toggle('anim');

  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'the machine is playing';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'the machine is not playing';
  }

}
