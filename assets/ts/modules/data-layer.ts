type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

function createDataLayer () {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "event": "Pageview",
    "pageTitle": document.title
  });
  

  // Global events to track
  document.addEventListener('click', (event) => {

    if (event && event.target instanceof HTMLElement && event.target.closest('[open] summary'))
      window.dataLayer.push({
        "event": "closeDetails",
        // @ts-ignore: Object is possibly 'null'.
        "detailsTitle": event.target.closest('summary').textContent
      });
    else if (event && event.target instanceof HTMLElement && event.target.closest('summary'))
      window.dataLayer.push({
        "event": "openDetails",
        // @ts-ignore: Object is possibly 'null'.
        "detailsTitle": event.target.closest('summary').textContent
      });
    
    if (event && event.target instanceof HTMLElement && event.target.closest('a')){
      window.dataLayer.push({
        "event": "linkClicked",
        // @ts-ignore: Object is possibly 'null'.
        "linkText": event.target.closest('a').hasAttribute('title') ? event.target.closest('a').getAttribute('title') : event.target.closest('a').textContent,
        // @ts-ignore: Object is possibly 'null'.
        "class": event.target.closest('a').getAttribute('class'),
        // @ts-ignore: Object is possibly 'null'.
        "href": event.target.closest('a').getAttribute('href')
      });
    }
  });
}

export default createDataLayer;