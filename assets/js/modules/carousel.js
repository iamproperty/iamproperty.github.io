function carousel(carouselElement) {

  var scrollTimeout;

  let carouselInner = carouselElement.querySelector('.carousel__inner');
  let itemCount = carouselElement.querySelectorAll('.carousel__item').length;

  carouselElement.querySelector('.carousel__controls a').classList.add('active');

  // On scroll we need to make sure the buttons get corrected and the next testimonial is shown
  carouselInner.addEventListener('scroll', function(e){
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function(){ 

      let scrollWidth = carouselInner.scrollWidth;
      let scrollLeft = carouselInner.scrollLeft;
      let targetSlide = Math.round((scrollLeft / scrollWidth) * itemCount) + 1;

      Array.from(carouselElement.querySelectorAll('.carousel__controls a')).forEach((link, index) => {
        link.classList.remove('active');
      });

      carouselElement.querySelector('.control-'+targetSlide).classList.add('active');

    }, 100); 

  }, false);

  // when the buttons are used we need to make sure the carousel scrolls to the correct place
  carouselElement.addEventListener('click', function(e){

    for (var target = e.target; target && target != this; target = target.parentNode) {
      if (target.matches('.carousel__controls a')) {
        
        e.preventDefault();

        Array.from(carouselElement.querySelectorAll('.carousel__controls a')).forEach((link, index) => {
          link.classList.remove('active');
        });
        target.classList.add('active');

        const el = document.querySelector(target.getAttribute('href'));

        carouselInner.scroll({
          top: 0,
          left: el.offsetLeft, 
          behavior: 'smooth'
        });

        break;
      }
    }
  }, false);
}

export default carousel