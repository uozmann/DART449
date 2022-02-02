//  init our vars
const message = document.querySelector('#displayPass');
const checker = document.querySelector('#checkBtn');
const messageInviteListConfirmation = document.querySelector('#displayInviteListConfirmation');
const confirmer = document.querySelector('#confirmBtn');
const unlocker = document.querySelector('#unlockBtn');
const messageInviteList = document.querySelector('#inviteList');
let nameInvited;
let goldenFinger = false;
let code;


// checker.onclick = function() {
//   myPassFunction();
// }

checker.addEventListener('click', myPassFunction);
confirmer.addEventListener('click', myCodeFunction);
unlocker.addEventListener('click', openInviteList);

function myPassFunction() {
nameInvited = document.querySelector('#myText').value;

  if (nameInvited === 'Man') {
    message.textContent = `Welcome ${nameInvited}, proceed to the next step. Your access code is 4399.`;
  } 
  else if (nameInvited === 'Santo') {
    message.textContent = `Welcome ${nameInvited}, you have been granted a golden finger that can open any button unconditionally`;
    goldenFinger = true;
  }
    else if (nameInvited === 'Little L') {
    message.textContent = `Welcome ${nameInvited}, looks like you have found your name.`;
   }
    else {
    message.textContent = `Hello ${nameInvited}, you have not been invited.`;
  }
}

function myCodeFunction() {
  code = document.querySelector('#accessCode').value;

  if (code === 4399) {
    goldenFinger = true;
    messageInviteListConfirmation.textContent = `You have been granted access to the invite list. Proceed to next step`;
  }
  else {
    messageInviteListConfirmation.textContent = `Access Code not found`;
  }

  if (goldenFinger === true) {
    messageInviteListConfirmation.textContent = `You have been granted access to the invite list. Proceed to next step`;
  }
  console.log(code);
}

function openInviteList() {
  if (goldenFinger === true) {
    messageInviteList.textContent = `Guests: Man, Santo, Little L. Re-enter your name on the first question to get your ticket`;
  }
}