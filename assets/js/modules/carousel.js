function carousel(carouselElement) {

  var scrollTimeout;

  let carouselInner = carouselElement.querySelector('.carousel__inner');
  let itemCount = carouselElement.querySelectorAll('.carousel__item').length;

  carouselElement.querySelector('.carousel__controls a').classList.add('active');

  // On scroll we need to make sure the buttons get corrected and the next testimonial is shown
  carouselInner.addEventListener('scroll', function(e){
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function(){ 

      let scrollArea = carouselInner.clientWidth;
      let scrollWidth = carouselInner.scrollWidth;
      let scrollLeft = carouselInner.scrollLeft;
      let targetSlide = Math.round((scrollLeft / scrollWidth) * itemCount) + 1;
      let lastItemOffset = carouselElement.querySelector('.carousel__item:last-child').offsetLeft;

      Array.from(carouselElement.querySelectorAll('.carousel__controls a')).forEach((link, index) => {
        link.classList.remove('active');
      });

      carouselElement.querySelector('.control-'+targetSlide).classList.add('active');
      
      // Disable the previous button
      if(targetSlide == 1)
        carouselElement.querySelector('.btn-prev').setAttribute('disabled','disabled');
      else
        carouselElement.querySelector('.btn-prev').removeAttribute('disabled');

      // Disable the next button if the last item is in view
      if(carouselInner.scrollLeft + scrollArea > lastItemOffset)
        carouselElement.querySelector('.btn-next').setAttribute('disabled','disabled');
      else
        carouselElement.querySelector('.btn-next').removeAttribute('disabled');

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

  carouselElement.addEventListener('click', function(e){

    for (var target = e.target; target && target != this; target = target.parentNode) {
      if (target.matches('.btn-next, .btn-prev')) {
        
        e.preventDefault();
        let scrollTo = target.classList.contains('btn-prev') ? carouselInner.scrollLeft - carouselInner.clientWidth : carouselInner.scrollLeft + carouselInner.clientWidth;
        
        carouselInner.scroll({
          top: 0,
          left: scrollTo, 
          behavior: 'smooth'
        });
        break;
      }
    }
  }, false);
}

export default carousel