function accordion(accordionElement: Element) {

  // Fetch all the details element.
  if(!accordionElement.classList.contains('accordion--keep-open')){

    const details: NodeListOf<HTMLElement> = accordionElement.querySelectorAll(":scope > details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }

  if(window.location.hash && document.querySelector(window.location.hash+':not([open]) summary')) {

    const detail = document.querySelector(window.location.hash+' summary');

    if (detail instanceof HTMLElement) {
      detail.click();
    }
  }

  window.addEventListener('hashchange', function(){
    if(window.location.hash && document.querySelector(window.location.hash+' summary')) {

      const detail = document.querySelector(window.location.hash+' summary');

      if (detail instanceof HTMLElement) {
        detail.click();
      }
    }
  });
}

export default accordion
