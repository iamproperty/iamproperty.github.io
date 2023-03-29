// @ts-nocheck
const template = document.createElement('template');
template.innerHTML = `
<style>
@import "/assets/css/core.min.css";
@import "/assets/css/components/header.css";
</style>
<div class="header-banner">
  <div class="container" part="container">
    <slot name="breadcrumb"></slot>
    <div class="header-banner__inner">
    <slot></slot>
    </div>
  </div>
  <picture>
    <!-- Actual image only loaded on desktops -->
    <source srcset="" media="(min-width: 62em)">
    <!-- Placeholder image -->
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
  </picture>
</div>
`;

class iamheader extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {
    
    const picture = this.shadowRoot.querySelector('picture');
    const source = this.shadowRoot.querySelector('picture source');

    if(this.hasAttribute('image'))
      source.setAttribute('srcset', this.getAttribute('image'));
    else
      picture.remove();
  }
}

customElements.define('iam-header', iamheader);

export default {};