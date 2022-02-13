const BUTTON = document.querySelector(`#btnPlus`);
const BUTTON1 = document.querySelector(`#btnMinus`);
const PARENT = document.querySelector('.parent');
const PARENT1 = document.querySelector('.parent1');
const PARENT2 = document.querySelector('.parent2');
const PARENT3 = document.querySelector('#parent3');
const PARENT4 = document.querySelector('#parent4');
const PARENT5 = document.querySelector('#parent5');
const PARENT6 = document.querySelector('#parent6');
const PARENT7 = document.querySelector('#parent7');
const PARENT8 = document.querySelector('#parent8');
const PARENT9 = document.querySelector('#parent9');
const MESSAGE = document.querySelector('#displayMessage');
const MESSAGEPOINT = document.querySelector('#displayMessage1');

let gridRow = 0;
let points = 0;
let div;
let currentParent = PARENT;
BUTTON.addEventListener(`click`, addGrid);

function addGrid() {
  createGrid();
  MESSAGE.textContent = `Current Row: ${gridRow}`;
  gridRow+= 1;
  if(gridRow===0) {
    currentParent = PARENT;
  }
  else if (gridRow === 1) {
    currentParent = PARENT1;
  }
  else if (gridRow === 2) {
    currentParent = PARENT2;
  }
  else if (gridRow === 3) {
    currentParent = PARENT3;
  }
  else if (gridRow === 4) {
    currentParent = PARENT4;
  }
  else if (gridRow === 5) {
    currentParent = PARENT5;
  }
  else if (gridRow === 6) {
    currentParent = PARENT6;
  }
  else if (gridRow === 7) {
    currentParent = PARENT7;
  }
  else if (gridRow === 8) {
    currentParent = PARENT8;
  }
  else if (gridRow === 9) {
    currentParent = PARENT9;
    gridRow = -1;
  }
  
  console.log(currentParent);

}

function createGrid() {
  
  
for (let i=0; i< 255; i+=100){
  for (let j=0; j< 255; j+=100){
    div = document.createElement(`div`);
    currentParent.appendChild(div);
    div.style.background = `rgba(${i},${j},${i},0.5)`;
    div.style.width = `2vw`;
    div.style.height = `2vw`;
    const BR = document.createElement(`br`);
    currentParent.appendChild(BR);
    div.addEventListener("click", 
      function changeBackground(){
        this.style.background = `rgba(255,255,${i},0.5)`;
        points++;
        MESSAGEPOINT.textContent = `Points: ${points}`;
        if (points >= 20) {
          MESSAGEPOINT.textContent = `Points: ${points}, mission accomplished!`;
        }
      }
    );
    
  }
}

  
}


// addCity.forEach((btn) => {
//   btn.addEventListener('click', function(){
//     const myTxt = this.textContent;
//     console.log(myTxt);
//     cities.push(myTxt);
//     show.textContent = cities.join(', ');
//     this.disabled = true;
//   });
// });
