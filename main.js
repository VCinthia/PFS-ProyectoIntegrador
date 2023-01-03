let carousel = document.querySelector(".carousel-items");

let intervalo = null;
let step = 1;
let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
let start = () => {
    intervalo = setInterval(function () {
        carousel.scrollLeft = carousel.scrollLeft + step;
        if(carousel.scrollLeft == maxScrollLeft){
            step = step * -1;
        }else if(carousel.scrollLeft === 0){
            step = step * -1;
        }
    },10);
};

let stop = () => {
    clearInterval(intervalo);
};

carousel.addEventListener('mouseover', () =>{
    stop();
});

carousel.addEventListener('mouseout', () =>{
    start();
});

start();