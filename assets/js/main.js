// @ts-nocheck
// Modules
import * as helpers from '../js/modules/helpers';
import nav from '../js/modules/nav';
import table from '../js/modules/table';
import accordion from '../js/modules/accordion';
import testimonial from '../js/modules/testimonial';
import carousel from '../js/modules/carousel';
import form from '../js/modules/form';
import youtubeVideo from '../js/modules/youtubevideo';
import modal from '../js/modules/modal';
// Attach classes to dom elements
document.addEventListener("DOMContentLoaded", function () {
    helpers.addBodyClasses(document.body);
    helpers.addGlobalEvents(document.body);
    helpers.checkElements(document.body);
    console.log('test.js');
    // ANav
    Array.from(document.querySelectorAll('.nav')).forEach((arrayElement) => {
        nav(arrayElement);
    });
    // Advanced tables
    Array.from(document.querySelectorAll('.table__wrapper')).forEach((arrayElement) => {
        table(arrayElement);
    });
    // Accordions
    Array.from(document.querySelectorAll('.accordion')).forEach((arrayElement) => {
        accordion(arrayElement);
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
    // Modal
    Array.from(document.querySelectorAll('.modal')).forEach((arrayElement) => {
        modal(arrayElement);
    });
    // YouTube videos
    Array.from(document.querySelectorAll('.youtube-embed')).forEach((arrayElement) => {
        new youtubeVideo(arrayElement);
    });
    window.addEventListener('hashchange', function () {
        const hash = location.hash.replace('#', '');
        const label = document.querySelector(`label[for="${hash}"]`);
        if (label instanceof HTMLElement) {
            label.click();
        }
    }, false);
});
