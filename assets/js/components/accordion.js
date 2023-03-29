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
        /*
        const picture = this.shadowRoot.querySelector('picture');
        const source = this.shadowRoot.querySelector('picture source');
    
        if(this.hasAttribute('image'))
          source.setAttribute('srcset', this.getAttribute('image'));
        else
          picture.remove();
          */
        /*
            let slots = this.shadowRoot.querySelector("slot");
            let elements = slots.assignedElements({ flatten: false });
            let slotHTML = '';
            elements.forEach((element) => {
        
              console.log(element.outerHTML);
              slotHTML += element.outerHTML;
            });
        
        
            let html = template.innerHTML.replace('<slot></slot>',slotHTML);
        
            this.innerHTML = html;
        
        */
        accordion(this);
        template.innerHTML = '';
        this.insertAdjacentHTML("beforebegin", `<link rel="stylesheet" href="/assets/css/components/accordion.css">`);
    }
}
customElements.define('iam-accordion', iamAccordion);
export default {};
