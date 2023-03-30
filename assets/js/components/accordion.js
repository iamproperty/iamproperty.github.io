// @ts-nocheck
import accordion from "../modules/accordion";
const template = document.createElement('template');
template.innerHTML = `
<style>
@import "/assets/css/core.min.css";
@import "/assets/css/components/accordion.css";
</style>
<div class="container accordion">
  <slot></slot>
</div>
`;
class iamAccordion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        let elements = this.querySelectorAll('details');
        elements.forEach((element) => {
            element.classList.add('accordion-item');
        });
        accordion(this);
        // Load in the component CSS into the root so we can style the content of the component
        this.insertAdjacentHTML("beforebegin", `<link rel="stylesheet" href="/assets/css/components/accordion.css">`);
    }
}
customElements.define('iam-accordion', iamAccordion);
export default {};
