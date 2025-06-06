
class iamContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/content.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}

    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="content__container">
      <slot></slot>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const component = this;
    const url = this.getAttribute('data-url');

    const registerComponents = (contentComponent):void => {

      const components = ['card','marketing'];

      const assetLocation = document.body.hasAttribute('data-assets-location')
        ? document.body.getAttribute('data-assets-location')
        : '/assets';

      // Load components - Each component will load once the first of its type has been loaded
      components.forEach((component) => {

        if(contentComponent.getElementsByTagName(`iam-${component}`).length === 0)
          return;

        import(/* @vite-ignore */`${assetLocation}/js/components/${component}/${component}.component.js`).then(module => {
          
          if (!window.customElements.get(`iam-${component}`))
            window.customElements.define(`iam-${component}`, module.default);
        }).catch((err) => {
          console.log(err.message);
        });








      });
    }

    if(url){
        
      const newXHRRequest = new XMLHttpRequest();
      newXHRRequest.open(
        "GET",
        url,
        true
      );

      newXHRRequest.onload = function () {

        if (this.status === 200) {
          const response = JSON.parse(this.responseText);
          component.innerHTML = `${response.content.rendered}`;

          registerComponents(component);
        }


      };

      newXHRRequest.send();
    }
  }
}

export default iamContent;
