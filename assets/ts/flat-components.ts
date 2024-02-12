// @ts-nocheck
// Modules
import * as helpers from '../js/modules/helpers'
import extendDialogs from '../js/modules/dialogs'
import createDataLayer from '../js/modules/data-layer'
import extendInputs from '../js/modules/inputs';
import nav from '../js/modules/nav'
import * as tableModule from './modules/table'
import testimonial from '../js/modules/testimonial'
import carousel from '../js/modules/carousel'
import form from '../js/modules/form'
import youtubeVideo from '../js/modules/youtubevideo'
import tabs from '../js/modules/tabs'
import filterlist from '../js/modules/filterlist'
import createPaginationButttons from '../js/modules/pagination'
import setupNotification from '../js/modules/notification'

// Attach classes to dom elements
document.addEventListener("DOMContentLoaded", function() {

  createDataLayer();

  // Global stuff
  helpers.addBodyClasses(document.body);
  helpers.addGlobalEvents(document.body);
  //helpers.checkElements(document.body);
  extendDialogs(document.body);
  extendInputs(document.body);

  // ANav
  Array.from(document.querySelectorAll('.nav')).forEach((arrayElement) => {
    nav(arrayElement);
  });

  // Advanced tables
  Array.from(document.querySelectorAll('table')).forEach((arrayElement) => {

    tableModule.addTableEventListeners(arrayElement);
    tableModule.createMobileButton(arrayElement);
    tableModule.addDataAttributes(arrayElement);


    if(arrayElement.closest('.table--cta')){

      const largestWidth = tableModule.getLargestLastColWidth(arrayElement);
      arrayElement.closest('.table--cta').style.setProperty("--cta-width", `${largestWidth}rem`);
    }
  });

  // Testimonial
  Array.from(document.querySelectorAll('.testimonial')).forEach((arrayElement) => {
    testimonial(arrayElement);
  });
  // Carousel
  Array.from(document.querySelectorAll('.carousel')).forEach((arrayElement) => {
    carousel(arrayElement);
  });
  // Form
  Array.from(document.querySelectorAll('form')).forEach((arrayElement) => {
    form(arrayElement);
  });
  // YouTube videos
  Array.from(document.querySelectorAll('.youtube-embed')).forEach((arrayElement) => {
    new youtubeVideo(arrayElement);
  });
  // Tabs
  Array.from(document.querySelectorAll('.tabs')).forEach((arrayElement) => {
    tabs(arrayElement);
  });

  // filterlist
  Array.from(document.querySelectorAll('.iam-filterlist')).forEach((arrayElement) => {
    if(arrayElement.hasAttribute('data-input') && document.querySelector(arrayElement.getAttribute('data-input')))
      filterlist(arrayElement.querySelector('ul'),document.querySelector(arrayElement.getAttribute('data-input')));
  });
  

  // notification
  Array.from(document.querySelectorAll('.iam-notification')).forEach((arrayElement) => {
    if(arrayElement.hasAttribute('data-type'))
      setupNotification(arrayElement);
  });
  
  Array.from(document.querySelectorAll('.pagination__wrapper')).forEach((arrayElement) => {


    const params = new URLSearchParams(window.location.search);
    arrayElement.setAttribute('data-page', (params.has('page') ? params.get('page') : 1));
    arrayElement.setAttribute('data-show', (params.has('show') ? params.get('show') : 15));
    arrayElement.setAttribute('data-increment', 15);
    arrayElement.setAttribute('data-pages', Math.ceil(arrayElement.getAttribute('data-total') / arrayElement.getAttribute('data-show')));

    createPaginationButttons(arrayElement,arrayElement);
  });


  window.addEventListener('hashchange', function() {

    const hash = location.hash.replace('#','');
    const label = document.querySelector(`label[for="${hash}"]`);

    if (label instanceof HTMLElement)
      label.click();

  }, false);
});
