let btnResearch = document.getElementById(`btnResearch`);
let btnWireframe = document.getElementById(`btnWireframe`);
let btnMoodboard = document.getElementById(`btnMoodboard`);
let containerS2 = document.querySelector(`#s2`);

let articleResearch = document.getElementById(`research`);
let articleWireframe = document.getElementById(`wireframe`);
let articleMoodboard = document.getElementById(`moodboard`);

//Display None of the content at first
window.onload = (event) => {
    containerS2.style.display = 'none';
    articleResearch.style.display = 'none';
    articleMoodboard.style.display = 'none';
    articleWireframe.style.display = 'none';
}

//Display the content relative to the page
btnResearch.addEventListener(`click`, toggleResearch);
btnWireframe.addEventListener(`click`, toggleWireframe);
btnMoodboard.addEventListener(`click`, toggleMoodboard);



function toggleResearch() {
    containerS2.style.display = 'flex';
    articleResearch.style.display = 'block';
    articleMoodboard.style.display = 'none';
    articleWireframe.style.display = 'none';
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
}

function toggleWireframe() {
    containerS2.style.display = 'flex';
    articleResearch.style.display = 'none';
    articleMoodboard.style.display = 'none';
    articleWireframe.style.display = 'block';
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
}

function toggleMoodboard() {
    containerS2.style.display = 'flex';
    articleResearch.style.display = 'none';
    articleMoodboard.style.display = 'block';
    articleWireframe.style.display = 'none';
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
}
