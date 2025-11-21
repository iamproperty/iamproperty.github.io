// Modules
import * as helpers from './modules/helpers';
import extendDialogs from './modules/dialogs';
import createDataLayer from './modules/data-layer';
import extendInputs from './modules/inputs';
import createDynamicEvents from './modules/dynamicEvents';
import videoSupport from './modules/videos';

const components = [
  'accordion',
  'header',
  'table',
  'table-basic',
  'table-no-submit',
  'tabs',
  'card',
  'calendar',
  'content',
  'filter-card',
  'video-card',
  'record-card',
  'filterlist',
  'applied-filters',
  'pagination',
  'notification',
  'actionbar',
  'nav',
  'collapsible-side',
  'address-lookup',
  'fileupload',
  'search',
  'inline-edit',
  'multiselect',
  'multi-step',
  'menu',
  'slider',
  'carousel',
  'marketing',
  'barchart',
  'doughnutchart',
  'bento-grid',
  'milestone-group',
  'milestone',
  'darkmode',
  'password-indicator'

];

// Attach classes to dom elements
document.addEventListener('DOMContentLoaded', async (): void => {
  createDataLayer();
  createDynamicEvents();

  // Global stuff
  helpers.addBodyClasses(document.body);
  helpers.addGlobalEvents(document.body);

  extendDialogs(document.body);
  extendInputs(document.body);

  videoSupport(document.body);

  /*
  const prefix = 'iam';
  const options = {
    rootMargin: '50px',
    threshold: 0.1,
  };
  const componentExt = '.component.min.js';

  // Load components - Each component will load once the first of its type has been loaded
  components.forEach((component) => {
    if (document.getElementsByTagName(`${prefix}-${component}`).length === 0) return;

    const callback = (entries: any): void => {
      entries.forEach((entry: any) => {
        if (entry.intersectionRatio > 0) {

          import(`../js/components/${component}/${component}${componentExt}`)
            .then((module) => {
              if (!window.customElements.get(`${prefix}-${component}`))
                window.customElements.define(`${prefix}-${component}`, module.default);
            })
            .catch((err) => {
              console.log(err.message);
            });

          intObserver.unobserve(entry.target);
        }
      });
    };

    const intObserver = new IntersectionObserver(callback, options);
    intObserver.observe(document.getElementsByTagName(`${prefix}-${component}`)[0]);
  });
  */
});
