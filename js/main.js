/*

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.Carousel');
    var instances = M.Carousel.init(elems, {
        duration: 150
    });
  });
  
  */
  document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.Carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 300,
        dist: -100,
        shift: 5,
        padding: 0,
        numVisible: 3

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuTabs = document.querySelectorAll('.tabs');
    M.Tabs.init(menuTabs);

});
