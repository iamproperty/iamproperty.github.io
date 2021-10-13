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


  const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-stuck", e.intersectionRatio < 1),
    { threshold: [1] }
  );

  observer.observe(element);
}

export default navbar