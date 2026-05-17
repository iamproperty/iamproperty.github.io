// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'button',
});

class iamButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/button.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="wrapper">
      <slot></slot>
    </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    
    const button = this.querySelector('button');
    let originalHTML = '';
    
    if(!button)
      return false;

    button?.addEventListener('click', (event) => {

      if(this.hasAttribute('data-copy-text')){
        navigator.clipboard.writeText(this.getAttribute('data-copy-text'));

        originalHTML = button.innerHTML;
        button.innerHTML = originalHTML.toLowerCase().includes('copy') ? originalHTML.replace('Copy','Copied').replace('copy','copied') : 'Copied';
        button.classList.add('pressed');
        button.classList.add('active');
        button.blur();

        setTimeout(() => {
          button.innerHTML = originalHTML;
          originalHTML = '';
          button.classList.remove('pressed');
          button.classList.remove('active');
        }, 1500);
      }
    });
    
  }
}

export default iamButton;
