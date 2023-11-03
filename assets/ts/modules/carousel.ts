// @ts-nocheck
function carousel(carouselElement) {

  var scrollTimeout;

  let carouselInner = carouselElement.querySelector('.carousel__inner');
  let itemCount = carouselElement.querySelectorAll('.carousel__item').length;
  let cols = carouselElement.getAttribute('data-cols');
  let smCols = carouselElement.getAttribute('data-sm-cols');
  let mdCols = carouselElement.getAttribute('data-md-cols');

  carouselElement.querySelector('.carousel__controls a').setAttribute('aria-current', true);

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
        link.removeAttribute('aria-current');
      });

      carouselElement.querySelector('.control-'+targetSlide).setAttribute('aria-current', true);
      
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
          link.removeAttribute('aria-current');
        });
        target.setAttribute('aria-current', true);

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


  // Add responsive hide button classes
  if(itemCount == 1)
    carouselElement.classList.add('hide-btns');

  if(smCols >= itemCount)
    carouselElement.classList.add('hide-sm-btns');

  if(mdCols >= itemCount)
    carouselElement.classList.add('hide-md-btns');
}

export default carousel