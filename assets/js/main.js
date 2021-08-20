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


// Attach classes to dom elements
document.addEventListener("DOMContentLoaded", function() {

  helpers.addBodyClasses(document.body);
  helpers.checkElements(document.body);
	navbar();
  console.log('test.js');
});
