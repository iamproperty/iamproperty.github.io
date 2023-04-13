// @ts-nocheck
import accordion from "../modules/accordion";

const template = document.createElement('template');
template.innerHTML = `
<style>
@import "/assets/css/core.min.css";
@import "/assets/css/components/accordion.css";
</style>
<div class="accordion">
  <slot></slot>
</div>
`;

class iamAccordion extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {
 
    let details = this.querySelectorAll('details');
    let summaries = this.querySelectorAll('summary');
    
    details.forEach((detail) => {
      detail.classList.add('accordion-item');
    });

    summaries.forEach((summary) => {
      summary.classList.add('accordion-header');
      summary.classList.add('accordion-button');
      summary.classList.add('h4');
    });

    accordion(this);

    // Load in the component CSS into the root so we can style the content of the component
    this.insertAdjacentHTML("beforebegin", `<link rel="stylesheet" href="/assets/css/components/accordion.css">`)
  }
}

/*
if (!window.customElements.get('iam-accordion'))
    window.customElements.define('iam-accordion', iamAccordion);
*/
export default iamAccordion;