const navbar = (element) => {


  Array.from(element.querySelectorAll('details')).forEach((detail, index) => {
    
    detail.addEventListener('mouseenter', function(e){

      if(window.matchMedia('(min-width: 62em)').matches)
        detail.setAttribute('open','true')
    }, false);

    detail.addEventListener('mouseleave', function(e){

      if(window.matchMedia('(min-width: 62em)').matches)
        detail.removeAttribute('open')
    }, false);
  });


}

export default navbar