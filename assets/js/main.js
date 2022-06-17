// Bootstrap modules
//import Alert from '../../node_modules/bootstrap/js/src/alert'
//import Button from '../../node_modules/bootstrap/js/src/button'
//import Carousel from '../../node_modules/bootstrap/js/src/carousel'
//import Collapse from '../../node_modules/bootstrap/js/src/collapse'
//import Dropdown from '../../node_modules/bootstrap/js/src/dropdown'
//import Modal from '../../node_modules/bootstrap/js/src/modal'
//import Offcanvas from '../../node_modules/bootstrap/js/src/offcanvas'
//import Popover from '../../node_modules/bootstrap/js/src/popover'
//import ScrollSpy from '../../node_modules/bootstrap/js/src/scrollspy'
//import Tab from '../../node_modules/bootstrap/js/src/tab'
//import Toast from '../../node_modules/bootstrap/js/src/toast'
//import Tooltip from '../../node_modules/bootstrap/js/src/tooltip'

// Modules
import * as helpers from './modules/helpers'
import nav from './modules/nav'
import table from './modules/table'
import accordion from './modules/accordion'
import testimonial from './modules/testimonial'
import carousel from './modules/carousel'
import form from './modules/form'
import youtubeVideo from './modules/youtubevideo'

// Attach classes to dom elements
document.addEventListener("DOMContentLoaded", function() {

  helpers.addBodyClasses(document.body);
  helpers.addGlobalEvents(document.body);
  helpers.checkElements(document.body);
  console.log('test.js');

  // ANav
  Array.from(document.querySelectorAll('.nav')).forEach((arrayElement, index) => {
    nav(arrayElement);
  });

  // Advanced tables
  Array.from(document.querySelectorAll('.table__wrapper')).forEach((arrayElement, index) => {
    table(arrayElement);
  });

  // Accordions
  Array.from(document.querySelectorAll('.accordion')).forEach((arrayElement, index) => {
    accordion(arrayElement);
  });
  
  // Testimonial
  Array.from(document.querySelectorAll('.testimonial')).forEach((arrayElement, index) => {
    testimonial(arrayElement);
  });
  // Carousel
  Array.from(document.querySelectorAll('.carousel')).forEach((arrayElement, index) => {
    carousel(arrayElement);
  });
  // Form
  Array.from(document.querySelectorAll('form')).forEach((arrayElement, index) => {
    form(arrayElement);
  });
  // Modal
  Array.from(document.querySelectorAll('.modal')).forEach((arrayElement, index) => {
    modal(arrayElement);
  });
  // YouTube videos
  Array.from(document.querySelectorAll('.youtube-embed')).forEach((arrayElement, index) => {
    new youtubeVideo(arrayElement);
  });


  window.addEventListener('hashchange', function() {

    const hash = location.hash.replace('#','');
    const label = document.querySelector(`label[for="${hash}"]`);
  
    if(label)
      label.click();
  }, false);
});
