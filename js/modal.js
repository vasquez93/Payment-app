/*
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.Carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 300,
        dist: -100,
        shift: 5,
        padding: 5,
        numVisible:5

    });
});
*/


const modal = document.getElementById('winModal');
const boton = document.getElementById('openModal');
const close = document.getElementsByClassName('close')[0];

boton.addEventListener('click', ()=> {
    modal.style.display= 'block';
});

close.addEventListener('click', ()=> {
    modal.style.display= 'none';
});

window.addEventListener('click',(e)=> {
    if (e.target== modal){
        modal.style.display='none';
    }
})