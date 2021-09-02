function testimonial(testimonialElement) {

  var scrollTimeout;
  let imagesCarousel = testimonialElement.querySelector('.testimonial__images');
  let itemCount = imagesCarousel.querySelectorAll('img').length;

  let nextButton = testimonialElement.querySelector('.testimonial__next');
  let prevButton = testimonialElement.querySelector('.testimonial__prev');

  const setButtons = function(scrollTo){

    nextButton.setAttribute('data-go',scrollTo+1);
    prevButton.setAttribute('data-go',scrollTo-1);
    nextButton.removeAttribute('disabled')
    prevButton.removeAttribute('disabled')

    if(scrollTo == 1)
      prevButton.setAttribute('disabled',true);
    else if(scrollTo == itemCount)
      nextButton.setAttribute('disabled',true);
  }


  imagesCarousel.addEventListener('scroll', function(e){
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function(){ 
        
      let scrollWidth = imagesCarousel.scrollWidth;
      let scrollHeight = imagesCarousel.scrollHeight;
      let scrollLeft = imagesCarousel.scrollLeft;
      let scrollDown = imagesCarousel.scrollTop;
      let scrollTo = Math.round((scrollLeft / scrollWidth) * itemCount) + 1;

      if(scrollLeft == 0 && scrollDown != 0){

        scrollTo = Math.round((scrollDown / scrollHeight) * itemCount) + 1;
      }

      testimonialElement.setAttribute('data-show',scrollTo)
      setButtons(scrollTo);
    }, 300); 

  }, false);


  testimonialElement.addEventListener('click', function(e){
    // loop parent nodes from the target to the delegation node
    for (var target = e.target; target && target != this; target = target.parentNode) {

      if (target.matches('[data-go]')) {
        
        let scrollTo = parseInt(target.getAttribute('data-go'));
        let scrollDown = 0;
        let scrollLeft = 0
        let scrollWidth = imagesCarousel.scrollWidth;
        let scrollHeight = imagesCarousel.scrollHeight;
        
        if(scrollWidth > scrollHeight){

          scrollLeft = Math.floor(scrollWidth * ((scrollTo-1) / itemCount))
        }
        else {

          scrollDown = Math.floor(scrollHeight * ((scrollTo-1) / itemCount))
        }

        imagesCarousel.scroll({
          top: scrollDown,
          left: scrollLeft, 
          behavior: 'smooth'
        });

        break;
      }
    }
  }, false);



}

export default testimonial