// @ts-nocheck

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "Slider"
});


class iamSlider extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets'
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/slider.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    </style>
    <div class="row">
      <div class="col min"></div>
      <div class="col slider">
        <slot></slot>
      </div>
      <div class="col max"></div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    let slider = this;
    const minElement = this.shadowRoot.querySelector('.min');
    const maxElement = this.shadowRoot.querySelector('.max');

    const inputs = this.querySelectorAll('input');
    
    
    let stepperInterval, stepperEvent = "mouseup", stepperStart = "mousedown";
    
    if("ontouchstart" in document.documentElement) {
      stepperEvent = "touchend";
      stepperStart = "touchstart";
    }



    let stepperFunction = function(input, eventType) {

/*
      if(eventType == 'click') {

        if(input.classList.contains('is-last') && !input.classList.contains('is-first')){


          if(input.value < slider.querySelector('.is-first').value){

          console.log('below')
            slider.querySelector('.is-first').value = input.value;
          }

        }
      }
*/
      let value = input.value;

      let min = slider.querySelector('.is-first').getAttribute('min');
      let max = slider.querySelector('.is-last').getAttribute('max');

      if (input.classList.contains('is-last') && !input.classList.contains('is-first')){

        let percent = ((value/100) * (max-min)).toFixed(2);
        slider.style.setProperty('--percent', percent + "%");

        if(input.value <= slider.querySelector('.is-first').value){

          //slider.querySelector('.is-first').value = input.value;
          slider.style.setProperty('--start-percent', percent + "%");
        }
      }
      else if(input.classList.contains('is-first') && !input.classList.contains('is-last')){

        let percent = ((value/100) * (max-min)).toFixed(2);
        slider.style.setProperty('--start-percent', percent + "%");

        if(input.value >= slider.querySelector('.is-last').value){

          //slider.querySelector('.is-last').value = input.value;
          slider.style.setProperty('--percent', percent + "%");
        }
      }
      else {
        

        let percent = ((value/100) * (max-min)).toFixed(2);
        slider.style.setProperty('--percent', percent + "%");
      }
    };


    Array.from(inputs).forEach((input,index) => {

      if(index == 0)
        input.classList.add('is-first');

      if(index == inputs.length-1)
        input.classList.add('is-last');

    });

    Array.from(inputs).forEach((input,index) => {

      stepperFunction(input,'start');

      input.addEventListener(stepperStart,function(event){
        
        clearInterval(stepperInterval);
        stepperInterval = setInterval(function() {
          stepperFunction(input,'drag');
        }, 10)
      });

      input.addEventListener(stepperEvent,function(event){
        clearInterval(stepperInterval);
      });

      input.addEventListener('change',function(event){
        clearInterval(stepperInterval);
        stepperFunction(input,'click');
      });
    });
  }
}

export default iamSlider;