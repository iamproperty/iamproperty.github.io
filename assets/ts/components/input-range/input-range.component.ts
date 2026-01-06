import { trackComponent, trackComponentRegistered } from '../_global';
import { setMinMax } from '../../modules/input';

trackComponentRegistered('iam-iamPrefix');
class iamDaterange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/input-range.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
      ${loadCSS}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous">
    <div class="wrapper" part="wrapper">
      <slot></slot>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    
    const inputs = this.querySelectorAll('input,select');

    if(inputs.length > 1){
        
      setMinMax(inputs);

      this.addEventListener('change', () => {

        setMinMax(inputs);
      });
    }
    
  }
}

export default iamDaterange;
