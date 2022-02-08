const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
let info = 'The planets are: ';
const para = document.querySelector('#displayPlanets');
// console.log(planets.length);

// for (let i = 0; i < planets.length; i++) {
//   info += `${planets[i]}, `;
// }

for (let i = 0; i < planets.length; i++) {
  if (i === planets.length - 1) {
    info += `and ${planets[i]}.`;
  } else {
    info += `${planets[i]}, `;
  }
}

para.textContent = info;

// for (let i = 0; i <= 1000; i++) {
//   console.log(`i is equal to ${i}`);
// }
