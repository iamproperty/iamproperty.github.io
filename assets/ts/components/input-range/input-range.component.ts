import { trackComponent, trackComponentRegistered } from '../_global';

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
        
      const setMinMax = ():void => {

        const min = inputs[0].value;
        let max = inputs[1].value;
      
        // Make sure the second input/select is always higher than the first input/select
        if(parseInt(inputs[1].value) < parseInt(inputs[0].value)){
          max = min;
          inputs[1].value = min;
        }

        // First input/select
        if(inputs[0].matches('input'))
          inputs[0].setAttribute('max',max);

        if(inputs[0].matches('select')){
          Array.from(inputs[0].querySelectorAll('option')).forEach((option) => {

            if (parseInt(option.getAttribute('value')) > max) option.classList.add('d-none');
            else option.classList.remove('d-none');
          });
        }

        // Second input/select
        if(inputs[1].matches('input'))
          inputs[1].setAttribute('min',min);

        Array.from(inputs[1].querySelectorAll('option')).forEach((option) => {

          if (parseInt(option.getAttribute('value')) < min) option.classList.add('d-none');
          else option.classList.remove('d-none');
        });
      }
      setMinMax();

      this.addEventListener('change', () => {

        setMinMax();
      });
    }
    
  }
}

export default iamDaterange;
