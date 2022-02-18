let strip = document.querySelectorAll(`.strip`);
let group = document.querySelector(`#group`);
let rotation = 30;
let number;

// strip.forEach(changeColour);
document.addEventListener(`scroll`, animate);

function changeColour() {
    number=(Math.random() * 255);
    group.style.background = `rgb(${number+100}, ${number+100}, ${number})`;
}

function animate(){
    for (let i =0; i< strip.length; i++) {
        let bodyPos = document.body.getBoundingClientRect();
        let stripPos = strip[i].getBoundingClientRect();
        let offset = stripPos.top - bodyPos.top;

        strip[i].style.background = `rgb(${2*offset}, ${1*offset}, 0)`;
        strip[i].style.transform = `rotate(${offset/5+rotation*i}deg)`;
        
        group.style.left = `${offset}px`;
        group.style.transform = `rotate(${offset/2}deg)`;
    }
}



