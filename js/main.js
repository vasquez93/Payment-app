
  document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.Carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 300,
        dist: -100,
        shift: 5,
        padding: 5,
        numVisible: 3

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuTabs = document.querySelectorAll('.tabs');
    M.Tabs.init(menuTabs);

});

document.addEventListener('DOMContentLoaded', () => {
    const buttonFooter = document.querySelectorAll('.btn_footer');
    
});


/*
carrusel propio
*/
const cuerpo = document.querySelectorAll('.cards')
const carrusel = document.querySelectorAll('<img>')

carrusel.forEach((cadaimagen, i) => {
    carrusel[i].addEventListener('click', ()=>{
        let posicion = i
        let move = posicion * -50

        cuerpo.style.trasform = 'traslateX(${move}%)'


    })    
});


/*
initiation settings tratando de hacer algo colapcible 
*/

document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.Collapsible');
    const header = document.querySelectorAll('.Collapsible-header');
    const acttion =document.querySelectorAll('.title')
    const body = document.querySelectorAll('.Collapsible-body');
    elems.forEach((_HeadersCollap, i )=> {
        header[i].addEventListener('click', ()=> {
            body.forEach((cuerpo, i)=>{
                acttion[i].classList.remove('active')   
            });
            acttion[i].classList.add('active')
        });
    })
})


/*
segundo carrusel
*/

