// Bootstrap modules
import Alert from '../../node_modules/bootstrap/js/src/alert'
import Button from '../../node_modules/bootstrap/js/src/button'
//import Carousel from '../../node_modules/bootstrap/js/src/carousel'
import Collapse from '../../node_modules/bootstrap/js/src/collapse'
//import Dropdown from '../../node_modules/bootstrap/js/src/dropdown'
import Modal from '../../node_modules/bootstrap/js/src/modal'
import Offcanvas from '../../node_modules/bootstrap/js/src/offcanvas'
//import Popover from '../../node_modules/bootstrap/js/src/popover'
import ScrollSpy from '../../node_modules/bootstrap/js/src/scrollspy'
import Tab from '../../node_modules/bootstrap/js/src/tab'
import Toast from '../../node_modules/bootstrap/js/src/toast'
//import Tooltip from '../../node_modules/bootstrap/js/src/tooltip'

// Modules
import * as helpers from './modules/helpers'
import navbar from './modules/navbar'
import table from './modules/table'
import accordion from './modules/accordion'
import testimonial from './modules/testimonial'


// Attach classes to dom elements
document.addEventListener("DOMContentLoaded", function() {

  helpers.addBodyClasses(document.body);
  helpers.checkElements(document.body);
	navbar();
  console.log('test.js');

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
});
