// @ts-nocheck
// Modules
import * as helpers from '../js/modules/helpers'
import extendDialogs from '../js/modules/dialogs'
import createDataLayer from '../js/modules/data-layer'
import extendInputs from '../js/modules/inputs';
import createDynamicEvents from '../js/modules/dynamicEvents'

// Attach classes to dom elements
document.addEventListener("DOMContentLoaded", function() {

  createDataLayer();
  createDynamicEvents();
  
  // Global stuff
  helpers.addBodyClasses(document.body);
  helpers.addGlobalEvents(document.body);
  
  extendDialogs(document.body);
  extendInputs(document.body);

});
