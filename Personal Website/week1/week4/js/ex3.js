const txt = document.querySelector('p');
const bg = document.querySelector('body');
const btn = document.querySelector('button');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  bg.classList.toggle('anim');
  // toggle is like an on/off switch;
  // if it has the class remove it, otherwise add it.
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}
