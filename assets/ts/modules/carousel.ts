// @ts-nocheck
function carousel(carouselElement, row) {

  var scrollTimeout;

  let carouselInner = carouselElement.querySelector('.carousel__inner');
  let carouselControls = carouselElement.querySelector('.carousel__controls');
  let itemCount = row.querySelectorAll(':scope > .col').length;
  
  // On scroll we need to make sure the buttons get corrected and the next testimonial is shown
  carouselInner.addEventListener('scroll', function(e){
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function(){

      let scrollArea = carouselInner.clientWidth;
      let scrollWidth = carouselInner.scrollWidth;
      let scrollLeft = carouselInner.scrollLeft;
      let targetSlide = Math.round((scrollLeft / scrollWidth) * itemCount) + 1;
     
      let itemWidth = row.querySelector(':scope > .col').scrollWidth;
      let lastItemOffset = row.querySelector(':scope > .col:last-child').offsetLeft;
      //+60px here is to account for when the next offscreen slide is visible beneath the next arrow
      let lastItemInView = carouselInner.scrollLeft + scrollArea + carouselInner.getBoundingClientRect().left >= (lastItemOffset + 60);

      let visibleItems = Math.round(scrollArea / itemWidth);

      //Check if theres room for more slides than we have
      let leftOverSpace = (Math.ceil(itemCount / visibleItems) * visibleItems) - itemCount;

      if(leftOverSpace > 0 && lastItemInView){
        targetSlide = (Math.floor(itemCount / visibleItems) * visibleItems) + 1;
      } 
      
      Array.from(carouselElement.querySelectorAll('.carousel__controls button')).forEach((button, index) => {
        button.removeAttribute('aria-current');
      });

      carouselElement.querySelector('.control-'+targetSlide).setAttribute('aria-current', true);

      // Disable the previous button
      if(targetSlide == 1)
        carouselElement.querySelector('.btn-prev').setAttribute('disabled','disabled');
      else
        carouselElement.querySelector('.btn-prev').removeAttribute('disabled');

      // Disable the next button if the last item is in view
      if(targetSlide > (itemCount - visibleItems))
        carouselElement.querySelector('.btn-next').setAttribute('disabled','disabled');
      else
        carouselElement.querySelector('.btn-next').removeAttribute('disabled');
      
    }, 100); 

  }, false);

  // when the buttons are used we need to make sure the carousel scrolls to the correct place
  carouselControls.addEventListener('click', function(e){

    for (var target = e.target; target && target != this; target = target.parentNode) {
      if (typeof target.matches == "function" && target.matches('button')) {
        
        e.preventDefault();

        Array.from(carouselControls.querySelectorAll('button')).forEach((button, index) => {
          button.removeAttribute('aria-current');
        });
        target.setAttribute('aria-current', true);
        
        const el = row.querySelector(`:scope > *:nth-child(${target.getAttribute('data-slide')})`);

        carouselInner.scroll({
          top: 0,
          left: el.offsetLeft - carouselInner.getBoundingClientRect().left, 
          behavior: 'smooth'
        });

        break;
      }
    }
  }, false);
  
  carouselElement.addEventListener('click', function(e){

    let scrollArea = carouselInner.clientWidth;
    let scrollWidth = carouselInner.scrollWidth;
    let itemWidth = row.querySelector(':scope > .col').scrollWidth;

    let visibleItems = Math.round(scrollArea / itemWidth);

    let lastItemOffset = row.querySelector(':scope > .col:last-child').offsetLeft;
    let lastItemInView = carouselInner.scrollLeft + scrollArea + carouselInner.getBoundingClientRect().left >= (lastItemOffset + 60);

    //Check if theres room for more slides than we have
    let leftOverSpace = (Math.ceil(itemCount / visibleItems) * visibleItems) - itemCount;

    /* 
      When the last slide isn't filled with items, we only want to move back the number of items on the slide, 
      rather than the total number of possible visible items
    */
    let spacesToMove = visibleItems - leftOverSpace;

    //Only want to change the amount of movement if the last item is visible
    let movement = lastItemInView && leftOverSpace > 0 ? spacesToMove * itemWidth : carouselInner.clientWidth;

    for (var target = e.target; target && target != this; target = target.parentNode) {
      if (typeof target.matches == "function" && target.matches('.btn-next, .btn-prev')) {
        
        e.preventDefault();
        let scrollTo = target.classList.contains('btn-prev') ? carouselInner.scrollLeft - movement : carouselInner.scrollLeft + carouselInner.clientWidth;
        
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