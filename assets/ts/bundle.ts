// @ts-nocheck
// Modules
import * as helpers from '../js/modules/helpers'
import createDataLayer from '../js/modules/data-layer'
import nav from '../js/modules/nav'
//import accordion from './modules/accordion'
import testimonial from '../js/modules/testimonial'
import carousel from '../js/modules/carousel'
import form from '../js/modules/form'
import youtubeVideo from '../js/modules/youtubevideo'
import iamHeader from './components/header/header.component'
import iamAccordion from './components/accordion/accordion.component'
import iamTabs from './components/tabs/tabs.component'
import iamTable from './components/table/table.component'
import iamCard from './components/card/card.component'

// Attach classes to dom elements
document.addEventListener("DOMContentLoaded", function() {

  createDataLayer();
  // Global stuff
  helpers.addBodyClasses(document.body);
  helpers.addGlobalEvents(document.body);
  //helpers.checkElements(document.body);

  if (!window.customElements.get(`iam-header`))
    window.customElements.define(`iam-header`, iamHeader);

  if (!window.customElements.get(`iam-accordion`))
    window.customElements.define(`iam-accordion`, iamAccordion);

  if (!window.customElements.get(`iam-tabs`))
    window.customElements.define(`iam-tabs`, iamTabs);

  if (!window.customElements.get(`iam-table`))
    window.customElements.define(`iam-table`, iamTable);

  if (!window.customElements.get(`iam-card`))
    window.customElements.define(`iam-card`, iamCard);

  if (!window.customElements.get(`iam-pagination`))
    window.customElements.define(`iam-pagination`, iamPagination);

  // ANav
  Array.from(document.querySelectorAll('.nav')).forEach((arrayElement) => {
    nav(arrayElement);
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


  window.addEventListener('hashchange', function() {

    const hash = location.hash.replace('#','');
    const label = document.querySelector(`label[for="${hash}"]`);

    if (label instanceof HTMLElement)
      label.click();

  }, false);
});
