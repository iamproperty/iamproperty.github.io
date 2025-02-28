const navbar = (element): void => {
  Array.from(element.querySelectorAll('details')).forEach((detail) => {
    detail.addEventListener(
      'mouseenter',
      function () {
        if (window.matchMedia('(min-width: 62em)').matches) detail.setAttribute('open', 'true');
      },
      false
    );

    detail.addEventListener(
      'mouseleave',
      function () {
        if (window.matchMedia('(min-width: 62em)').matches) detail.removeAttribute('open');
      },
      false
    );
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([e]) => e.target.classList.toggle('is-stuck', e.intersectionRatio < 1), {
      threshold: [1],
    });

    observer.observe(element);
  }
};

export default navbar;
